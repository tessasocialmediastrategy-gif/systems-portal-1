# TessaAuthority CIM Document Portal - PRD

## Project Overview
A Confidential Information Memorandum (CIM) Document Portal for TessaAuthority.com / OnPoint Authority Systems, Inc. - designed for M&A deal room document management with integrated Systems Book.

## Architecture
- **Frontend**: React 18 + TailwindCSS + Lucide Icons
- **Backend**: FastAPI + Motor (MongoDB async driver)
- **Database**: MongoDB
- **Auth**: JWT-based authentication with role-based access control

## User Personas
1. **Admin** - TessaAuthority team managing documents and buyer access
2. **Buyer** - Qualified investors accessing deal materials after NDA signing
3. **Public Visitor** - Viewing public documents and Systems Book

## Core Requirements (Static)
1. Public document downloads (Teaser, CIM Times, CIM Modern)
2. Invite-only buyer authentication (admin creates accounts)
3. Protected document portal (Buyer Deck, Appendix Pack, Data Room)
4. Admin dashboard for user/document management
5. Download tracking and activity logs
6. Systems Book web integration

## What's Been Implemented

### 2026-02-18 Session 2 (Backend Integration & Skeleton Pages)
- [x] **NDA Request API** (`POST /api/investor/nda-request`)
  - Stores buyer qualification data in MongoDB
  - Duplicate detection by email
  - Status tracking (pending, sent, signed, rejected)
- [x] **Authority Review API** (`POST /api/authority-review`)
  - Lead capture for governance assessments
  - Status workflow (new, contacted, scheduled, completed)
- [x] **Contact Form API** (`POST /api/contact`)
  - General inquiries storage
- [x] **NDA Status Check** (`GET /api/investor/nda-status?email=`)
  - Public endpoint to verify NDA status
- [x] **Admin Endpoints**:
  - `GET /api/admin/nda-requests` - List all NDA requests
  - `PUT /api/admin/nda-requests/{id}/status` - Update NDA status
  - `GET /api/admin/authority-reviews` - List all reviews
  - `GET /api/admin/contacts` - List all contact submissions
  - `GET /api/admin/investor-stats` - Pipeline metrics
- [x] **Skeleton Page Component** (`SkeletonPage.js`)
  - Auto-renders pages from SyncMap data
  - Displays registry code, status, sync direction
  - Breadcrumb navigation
  - "Content Pending" placeholder with quick links
- [x] **Frontend Forms Connected**:
  - NDARequestPage → `/api/investor/nda-request`
  - AuthorityReviewPage → `/api/authority-review`
  - ContactPage → `/api/contact`
  - All have loading states and error handling

### 2026-02-18 Session 1 (Full Website Build & Data Room Journey)
- [x] **Systems Page** (`/systems`): Black/gold theme with clean book images
- [x] **Governance Page** (`/governance`): Framework overview
- [x] **Certification Page** (`/certification`): Three-level pathway
- [x] **Authority Review Page** (`/authority-review`): Lead capture form
- [x] **Public Marketing Pages**: About, Platform, Leadership, Outcomes, Contact
- [x] **Data Room Journey**: Teaser → NDA Request → CIM Download → Appendix
- [x] **Refactored**: Created `/app/frontend/src/data/syncMapData.js`

### Previous Sessions
- [x] Systems Book Registry (217 assets, 4-tier hierarchy)
- [x] SB Control Panel dashboard
- [x] Sync Map page
- [x] User authentication (JWT)
- [x] Document upload/download

## Active Routes
| Route | Page | Status |
|-------|------|--------|
| `/` | Landing Page | Active |
| `/systems` | Systems Overview | Active |
| `/systems-book` | Systems Book | Active |
| `/governance` | Governance Framework | Active |
| `/certification` | Certification Pathway | Active |
| `/authority-review` | Lead Capture Form | Active |
| `/about` | About OnPoint | Active |
| `/platform` | Platform/Solutions | Active |
| `/leadership` | Leadership Team | Active |
| `/outcomes` | Case Studies | Active |
| `/contact` | Contact Form | Active |
| `/investor/data-room` | Data Room Landing | Active |
| `/investor/teaser` | Teaser Download | Active |
| `/investor/nda-request` | NDA Request Form | Active |
| `/investor/cim-download` | CIM Download (NDA-gated) | Active |
| `/investor/appendix` | Appendix Pack (NDA-gated) | Active |
| `/governance/*` | Skeleton Pages | Active |
| `/systems-book/*` | Skeleton Pages | Active |
| `/website-architecture/*` | Skeleton Pages | Active |

## API Endpoints
### Public
- `POST /api/investor/nda-request` - Submit NDA request
- `POST /api/authority-review` - Submit authority review request
- `POST /api/contact` - Submit contact form
- `GET /api/investor/nda-status?email=` - Check NDA status
- `GET /api/documents/public` - List public documents

### Protected (Buyer)
- `GET /api/documents` - List all accessible documents
- `GET /api/documents/{id}/download` - Download document

### Admin
- `GET /api/admin/nda-requests` - List NDA requests
- `PUT /api/admin/nda-requests/{id}/status` - Update NDA status
- `GET /api/admin/authority-reviews` - List reviews
- `GET /api/admin/contacts` - List contacts
- `GET /api/admin/investor-stats` - Pipeline stats
- `POST /api/admin/users` - Create buyer account
- `POST /api/documents/upload` - Upload document

## Data Models (MongoDB)
- **users**: `{id, email, hashed_password, name, role, is_active}`
- **documents**: `{id, filename, file_path, category, access, upload_date}`
- **nda_requests**: `{id, name, email, company, title, buyer_type, status, created_at}`
- **authority_reviews**: `{id, name, email, company, company_size, interest, status}`
- **contacts**: `{id, name, email, subject, message, status, created_at}`

## Prioritized Backlog
### P0 - Critical
- [ ] Wire up actual PDF downloads (Teaser, CIM, Appendix files)
- [ ] Admin panel view for NDA/Review submissions

### P1 - High
- [ ] Email notifications on form submissions
- [ ] Deploy to tessaauthority.com production

### P2 - Medium
- [ ] Build remaining governance chapters (SB-07 through SB-12)
- [ ] Add analytics tracking
- [ ] Buyer activity logging

## Test Credentials
- **Admin**: `admin@test.com` / `password` (if created)
- **Buyer**: `buyer@test.com` / `password` (if created)

## Files Reference
- `/app/frontend/src/data/systemsBookRegistry.js` - Complete registry
- `/app/frontend/src/data/syncMapData.js` - Website↔Book mapping
- `/app/frontend/src/pages/SkeletonPage.js` - Dynamic skeleton renderer
- `/app/backend/server.py` - All API routes
