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
    name: str,
    category: str,
    is_public: bool = False,
    description: Optional[str] = None,
    version: str = "v2026-02-16r1",
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

# ============== HEALTH CHECK ==============

@api_router.get("/")
async def root():
    return {"message": "TessaAuthority CIM Portal API", "version": "1.0.0"}

@api_router.get("/health")
async def health():
    return {"status": "healthy"}

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
