from fastapi import FastAPI, APIRouter, HTTPException, Depends, UploadFile, File, status, Form
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import hashlib
import secrets
import jwt
import shutil

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# JWT Configuration
JWT_SECRET = os.environ.get('JWT_SECRET', secrets.token_hex(32))
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_HOURS = 24

# File storage
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)
PUBLIC_DIR = UPLOAD_DIR / "public"
PUBLIC_DIR.mkdir(exist_ok=True)
PROTECTED_DIR = UPLOAD_DIR / "protected"
PROTECTED_DIR.mkdir(exist_ok=True)

# Create the main app
app = FastAPI()
api_router = APIRouter(prefix="/api")
security = HTTPBearer()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ============== MODELS ==============

class UserBase(BaseModel):
    model_config = ConfigDict(extra="ignore")
    email: EmailStr
    name: str
    company: Optional[str] = None
    role: str = "buyer"  # admin or buyer

class UserCreate(BaseModel):
    email: EmailStr
    name: str
    company: Optional[str] = None
    password: str
    role: str = "buyer"

class UserInDB(UserBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    password_hash: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    is_active: bool = True
    created_by: Optional[str] = None

class UserResponse(UserBase):
    id: str
    created_at: str
    is_active: bool

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

class DocumentBase(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    description: Optional[str] = None
    category: str  # teaser, cim_times, cim_modern, buyer_deck, appendix, data_room
    is_public: bool = False
    version: str = "v2026-02-16r1"

class DocumentCreate(DocumentBase):
    pass

class DocumentInDB(DocumentBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    filename: str
    original_filename: str
    file_size: int
    file_type: str
    checksum: str
    uploaded_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    uploaded_by: str

class DocumentResponse(DocumentBase):
    id: str
    filename: str
    original_filename: str
    file_size: int
    file_type: str
    checksum: str
    uploaded_at: str

class DownloadLog(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    document_id: str
    user_id: Optional[str] = None
    user_email: Optional[str] = None
    downloaded_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    ip_address: Optional[str] = None

class InviteCreate(BaseModel):
    email: EmailStr
    name: str
    company: Optional[str] = None

class InviteResponse(BaseModel):
    id: str
    email: str
    name: str
    company: Optional[str]
    temp_password: str
    created_at: str
    status: str

# ============== UTILITIES ==============

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(password: str, password_hash: str) -> bool:
    return hash_password(password) == password_hash

def create_token(user_id: str, email: str, role: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "role": role,
        "exp": datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRATION_HOURS)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def decode_token(token: str) -> dict:
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    payload = decode_token(credentials.credentials)
    user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0})
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    if not user.get("is_active", True):
        raise HTTPException(status_code=401, detail="User is deactivated")
    return user

async def get_admin_user(current_user: dict = Depends(get_current_user)):
    if current_user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return current_user

def calculate_checksum(file_path: Path) -> str:
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()

def generate_temp_password() -> str:
    return secrets.token_urlsafe(12)

# ============== AUTH ROUTES ==============

@api_router.post("/auth/login", response_model=TokenResponse)
async def login(request: LoginRequest):
    user = await db.users.find_one({"email": request.email}, {"_id": 0})
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not verify_password(request.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not user.get("is_active", True):
        raise HTTPException(status_code=401, detail="Account is deactivated")
    
    token = create_token(user["id"], user["email"], user["role"])
    user_response = UserResponse(**user)
    return TokenResponse(access_token=token, user=user_response)

@api_router.get("/auth/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    return UserResponse(**current_user)

@api_router.post("/auth/change-password")
async def change_password(
    old_password: str,
    new_password: str,
    current_user: dict = Depends(get_current_user)
):
    if not verify_password(old_password, current_user["password_hash"]):
        raise HTTPException(status_code=400, detail="Current password is incorrect")
    
    new_hash = hash_password(new_password)
    await db.users.update_one(
        {"id": current_user["id"]},
        {"$set": {"password_hash": new_hash}}
    )
    return {"message": "Password updated successfully"}

# ============== ADMIN ROUTES ==============

@api_router.post("/admin/invite", response_model=InviteResponse)
async def invite_buyer(invite: InviteCreate, admin: dict = Depends(get_admin_user)):
    # Check if user already exists
    existing = await db.users.find_one({"email": invite.email})
    if existing:
        raise HTTPException(status_code=400, detail="User with this email already exists")
    
    # Generate temporary password
    temp_password = generate_temp_password()
    
    # Create user
    user = UserInDB(
        email=invite.email,
        name=invite.name,
        company=invite.company,
        password_hash=hash_password(temp_password),
        role="buyer",
        created_by=admin["id"]
    )
    
    user_dict = user.model_dump()
    await db.users.insert_one(user_dict)
    
    # Log invite
    invite_log = {
        "id": str(uuid.uuid4()),
        "user_id": user.id,
        "email": invite.email,
        "name": invite.name,
        "company": invite.company,
        "temp_password": temp_password,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "created_by": admin["id"],
        "status": "pending"
    }
    await db.invites.insert_one(invite_log)
    
    return InviteResponse(**invite_log)

@api_router.get("/admin/users", response_model=List[UserResponse])
async def list_users(admin: dict = Depends(get_admin_user)):
    users = await db.users.find({"role": "buyer"}, {"_id": 0, "password_hash": 0}).to_list(1000)
    return [UserResponse(**u) for u in users]

@api_router.put("/admin/users/{user_id}/toggle-active")
async def toggle_user_active(user_id: str, admin: dict = Depends(get_admin_user)):
    user = await db.users.find_one({"id": user_id}, {"_id": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    new_status = not user.get("is_active", True)
    await db.users.update_one({"id": user_id}, {"$set": {"is_active": new_status}})
    return {"message": f"User {'activated' if new_status else 'deactivated'}"}

@api_router.delete("/admin/users/{user_id}")
async def delete_user(user_id: str, admin: dict = Depends(get_admin_user)):
    result = await db.users.delete_one({"id": user_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted"}

@api_router.get("/admin/invites", response_model=List[InviteResponse])
async def list_invites(admin: dict = Depends(get_admin_user)):
    invites = await db.invites.find({}, {"_id": 0}).to_list(1000)
    return [InviteResponse(**i) for i in invites]

@api_router.get("/admin/downloads")
async def get_download_logs(admin: dict = Depends(get_admin_user)):
    logs = await db.download_logs.find({}, {"_id": 0}).sort("downloaded_at", -1).to_list(1000)
    return logs

# ============== DOCUMENT ROUTES ==============

@api_router.post("/documents/upload", response_model=DocumentResponse)
async def upload_document(
    name: str = Form(...),
    category: str = Form(...),
    is_public: bool = Form(False),
    description: Optional[str] = Form(None),
    version: str = Form("v2026-02-16r1"),
    file: UploadFile = File(...),
    admin: dict = Depends(get_admin_user)
):
    # Generate unique filename
    file_ext = Path(file.filename).suffix
    unique_filename = f"{uuid.uuid4()}{file_ext}"
    
    # Determine storage path
    storage_dir = PUBLIC_DIR if is_public else PROTECTED_DIR
    file_path = storage_dir / unique_filename
    
    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Calculate checksum
    checksum = calculate_checksum(file_path)
    
    # Get file size
    file_size = file_path.stat().st_size
    
    # Create document record
    doc = DocumentInDB(
        name=name,
        description=description,
        category=category,
        is_public=is_public,
        version=version,
        filename=unique_filename,
        original_filename=file.filename,
        file_size=file_size,
        file_type=file.content_type or "application/octet-stream",
        checksum=checksum,
        uploaded_by=admin["id"]
    )
    
    doc_dict = doc.model_dump()
    await db.documents.insert_one(doc_dict)
    
    return DocumentResponse(**doc_dict)

@api_router.get("/documents/public", response_model=List[DocumentResponse])
async def list_public_documents():
    docs = await db.documents.find({"is_public": True}, {"_id": 0}).to_list(100)
    return [DocumentResponse(**d) for d in docs]

@api_router.get("/documents/protected", response_model=List[DocumentResponse])
async def list_protected_documents(current_user: dict = Depends(get_current_user)):
    docs = await db.documents.find({"is_public": False}, {"_id": 0}).to_list(100)
    return [DocumentResponse(**d) for d in docs]

@api_router.get("/documents/all", response_model=List[DocumentResponse])
async def list_all_documents(admin: dict = Depends(get_admin_user)):
    docs = await db.documents.find({}, {"_id": 0}).to_list(100)
    return [DocumentResponse(**d) for d in docs]

@api_router.get("/documents/{doc_id}")
async def get_document(doc_id: str):
    doc = await db.documents.find_one({"id": doc_id}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    return doc

@api_router.delete("/documents/{doc_id}")
async def delete_document(doc_id: str, admin: dict = Depends(get_admin_user)):
    doc = await db.documents.find_one({"id": doc_id}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    
    # Delete file
    storage_dir = PUBLIC_DIR if doc["is_public"] else PROTECTED_DIR
    file_path = storage_dir / doc["filename"]
    if file_path.exists():
        file_path.unlink()
    
    await db.documents.delete_one({"id": doc_id})
    return {"message": "Document deleted"}

# ============== DOWNLOAD ROUTES ==============

@api_router.get("/downloads/public/{doc_id}")
async def download_public_document(doc_id: str):
    doc = await db.documents.find_one({"id": doc_id, "is_public": True}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    
    file_path = PUBLIC_DIR / doc["filename"]
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    # Log download
    log = DownloadLog(document_id=doc_id)
    await db.download_logs.insert_one(log.model_dump())
    
    return FileResponse(
        path=file_path,
        filename=doc["original_filename"],
        media_type=doc["file_type"]
    )

@api_router.get("/downloads/protected/{doc_id}")
async def download_protected_document(
    doc_id: str,
    current_user: dict = Depends(get_current_user)
):
    doc = await db.documents.find_one({"id": doc_id, "is_public": False}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    
    file_path = PROTECTED_DIR / doc["filename"]
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found")
    
    # Log download
    log = DownloadLog(
        document_id=doc_id,
        user_id=current_user["id"],
        user_email=current_user["email"]
    )
    await db.download_logs.insert_one(log.model_dump())
    
    return FileResponse(
        path=file_path,
        filename=doc["original_filename"],
        media_type=doc["file_type"]
    )

# ============== STATS ROUTES ==============

@api_router.get("/stats")
async def get_stats(admin: dict = Depends(get_admin_user)):
    total_users = await db.users.count_documents({"role": "buyer"})
    active_users = await db.users.count_documents({"role": "buyer", "is_active": True})
    total_docs = await db.documents.count_documents({})
    public_docs = await db.documents.count_documents({"is_public": True})
    total_downloads = await db.download_logs.count_documents({})
    
    return {
        "total_buyers": total_users,
        "active_buyers": active_users,
        "total_documents": total_docs,
        "public_documents": public_docs,
        "protected_documents": total_docs - public_docs,
        "total_downloads": total_downloads
    }

# ============== SEED ADMIN ==============

@api_router.post("/seed-admin")
async def seed_admin():
    # Check if admin exists
    existing = await db.users.find_one({"role": "admin"})
    if existing:
        return {"message": "Admin already exists", "email": existing["email"]}
    
    # Create default admin
    admin = UserInDB(
        email="admin@tessaauthority.com",
        name="Admin",
        company="TessaAuthority",
        password_hash=hash_password("admin123"),
        role="admin"
    )
    
    admin_dict = admin.model_dump()
    await db.users.insert_one(admin_dict)
    
    return {"message": "Admin created", "email": admin.email, "password": "admin123"}

# ============== NDA & INVESTOR TRACKING ROUTES ==============

class NDARequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    email: EmailStr
    company: str
    title: str
    phone: Optional[str] = None
    buyer_type: str  # strategic, pe, family-office, individual, other
    interest: str
    timeline: Optional[str] = None

class NDARequestInDB(NDARequest):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "pending"  # pending, sent, signed, rejected
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    nda_sent_at: Optional[str] = None
    nda_signed_at: Optional[str] = None
    notes: Optional[str] = None

class NDARequestResponse(BaseModel):
    id: str
    name: str
    email: str
    company: str
    title: str
    buyer_type: str
    status: str
    created_at: str

class AuthorityReviewRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    email: EmailStr
    company: str
    phone: Optional[str] = None
    company_size: str
    interest: str
    message: Optional[str] = None

class AuthorityReviewInDB(AuthorityReviewRequest):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "new"  # new, contacted, scheduled, completed
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    notes: Optional[str] = None

class ContactRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactInDB(ContactRequest):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "new"  # new, read, replied
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

# NDA Request Submission (Public)
@api_router.post("/investor/nda-request")
async def submit_nda_request(request: NDARequest):
    # Check for existing request
    existing = await db.nda_requests.find_one({"email": request.email, "status": {"$ne": "rejected"}})
    if existing:
        return {"message": "NDA request already submitted", "status": existing.get("status", "pending")}
    
    nda_req = NDARequestInDB(**request.model_dump())
    await db.nda_requests.insert_one(nda_req.model_dump())
    
    logger.info(f"New NDA request from {request.email} ({request.company})")
    
    return {"message": "NDA request submitted successfully", "id": nda_req.id}

# Get NDA Requests (Admin)
@api_router.get("/admin/nda-requests", response_model=List[NDARequestResponse])
async def list_nda_requests(admin: dict = Depends(get_admin_user)):
    requests = await db.nda_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return [NDARequestResponse(**r) for r in requests]

# Update NDA Request Status (Admin)
@api_router.put("/admin/nda-requests/{request_id}/status")
async def update_nda_status(
    request_id: str,
    status: str,
    notes: Optional[str] = None,
    admin: dict = Depends(get_admin_user)
):
    nda_req = await db.nda_requests.find_one({"id": request_id})
    if not nda_req:
        raise HTTPException(status_code=404, detail="NDA request not found")
    
    update_data = {"status": status}
    if notes:
        update_data["notes"] = notes
    if status == "sent":
        update_data["nda_sent_at"] = datetime.now(timezone.utc).isoformat()
    elif status == "signed":
        update_data["nda_signed_at"] = datetime.now(timezone.utc).isoformat()
    
    await db.nda_requests.update_one({"id": request_id}, {"$set": update_data})
    return {"message": f"NDA request status updated to {status}"}

# Check NDA Status (Public - by email)
@api_router.get("/investor/nda-status")
async def check_nda_status(email: str):
    nda_req = await db.nda_requests.find_one({"email": email}, {"_id": 0, "interest": 0, "notes": 0})
    if not nda_req:
        return {"has_nda": False, "status": None}
    return {"has_nda": True, "status": nda_req.get("status", "pending")}

# Authority Review Submission (Public)
@api_router.post("/authority-review")
async def submit_authority_review(request: AuthorityReviewRequest):
    review = AuthorityReviewInDB(**request.model_dump())
    await db.authority_reviews.insert_one(review.model_dump())
    
    logger.info(f"New Authority Review request from {request.email} ({request.company})")
    
    return {"message": "Authority Review request submitted", "id": review.id}

# Get Authority Reviews (Admin)
@api_router.get("/admin/authority-reviews")
async def list_authority_reviews(admin: dict = Depends(get_admin_user)):
    reviews = await db.authority_reviews.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return reviews

# Update Authority Review Status (Admin)
@api_router.put("/admin/authority-reviews/{review_id}/status")
async def update_review_status(
    review_id: str,
    status: str,
    notes: Optional[str] = None,
    admin: dict = Depends(get_admin_user)
):
    review = await db.authority_reviews.find_one({"id": review_id})
    if not review:
        raise HTTPException(status_code=404, detail="Review not found")
    
    update_data = {"status": status}
    if notes:
        update_data["notes"] = notes
    
    await db.authority_reviews.update_one({"id": review_id}, {"$set": update_data})
    return {"message": f"Review status updated to {status}"}

# Contact Form Submission (Public)
@api_router.post("/contact")
async def submit_contact(request: ContactRequest):
    contact = ContactInDB(**request.model_dump())
    await db.contacts.insert_one(contact.model_dump())
    
    logger.info(f"New contact submission from {request.email}")
    
    return {"message": "Message sent successfully", "id": contact.id}

# Get Contact Submissions (Admin)
@api_router.get("/admin/contacts")
async def list_contacts(admin: dict = Depends(get_admin_user)):
    contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return contacts

# Investor Pipeline Stats (Admin)
@api_router.get("/admin/investor-stats")
async def get_investor_stats(admin: dict = Depends(get_admin_user)):
    total_nda_requests = await db.nda_requests.count_documents({})
    pending_nda = await db.nda_requests.count_documents({"status": "pending"})
    sent_nda = await db.nda_requests.count_documents({"status": "sent"})
    signed_nda = await db.nda_requests.count_documents({"status": "signed"})
    
    total_reviews = await db.authority_reviews.count_documents({})
    new_reviews = await db.authority_reviews.count_documents({"status": "new"})
    
    total_contacts = await db.contacts.count_documents({})
    
    return {
        "nda_requests": {
            "total": total_nda_requests,
            "pending": pending_nda,
            "sent": sent_nda,
            "signed": signed_nda
        },
        "authority_reviews": {
            "total": total_reviews,
            "new": new_reviews
        },
        "contacts": {
            "total": total_contacts
        }
    }

# ============== HEALTH CHECK ==============

@api_router.get("/")
async def root():
    return {"message": "TessaAuthority CIM Portal API", "version": "1.0.0"}

@api_router.get("/health")
async def health():
    return {"status": "healthy"}

# ============== ENGAGEMENT ANALYTICS ==============

ALLOWED_ANALYTICS_EVENTS = {
    "landing_view",
    "video_showcase_impression",
    "architectural_map_zoom",
    "priority_access_open",
    "priority_access_submit",
    "heritage_view",
    "trust_teaser_click",
}

class AnalyticsEventRequest(BaseModel):
    event: str
    path: Optional[str] = None
    referrer: Optional[str] = None
    session_id: Optional[str] = None
    metadata: Optional[dict] = None

@api_router.post("/analytics/event")
async def record_analytics_event(request: AnalyticsEventRequest):
    if request.event not in ALLOWED_ANALYTICS_EVENTS:
        raise HTTPException(status_code=400, detail="Unsupported event")
    doc = {
        "id": str(uuid.uuid4()),
        "event": request.event,
        "path": request.path,
        "referrer": request.referrer,
        "session_id": request.session_id,
        "metadata": request.metadata or {},
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.analytics_events.insert_one(doc)
    return {"ok": True}

@api_router.get("/admin/analytics")
async def get_admin_analytics(admin: dict = Depends(get_admin_user)):
    # Aggregate counts per event
    pipeline = [
        {"$group": {"_id": "$event", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]
    agg = await db.analytics_events.aggregate(pipeline).to_list(100)
    counts = {row["_id"]: row["count"] for row in agg}

    # Recent 50 events
    recent_cursor = db.analytics_events.find({}, {"_id": 0}).sort("created_at", -1)
    recent = await recent_cursor.to_list(50)

    # Unique sessions in last 7 days
    seven_days_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
    distinct_sessions = await db.analytics_events.distinct(
        "session_id", {"created_at": {"$gte": seven_days_ago}}
    )
    unique_sessions_7d = len([s for s in distinct_sessions if s])

    return {
        "counts": counts,
        "recent": recent,
        "unique_sessions_7d": unique_sessions_7d,
        "total_events": sum(counts.values()),
    }

# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
