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
### 2026-02-17
- [x] Landing page with hero section and public downloads
- [x] Admin authentication and dashboard
- [x] Buyer invite system with temporary passwords
- [x] Document upload with category support
- [x] Public document section (Teaser, CIM Times, CIM Modern)
- [x] Protected buyer portal with document access
- [x] Download logging and activity tracking
- [x] User management (activate/deactivate/delete)
- [x] Document management with checksum verification
- [x] Premium UI following design guidelines

### 2026-02-17 (Systems Book Integration)
- [x] Systems Book page at /systems-book
- [x] Full content from OnPoint Systems Book Master v2026-02-17r2
- [x] Interactive sidebar navigation (SB-00 to SB-04)
- [x] Section switching with visual hierarchy
- [x] Systems Book PDF/DOCX uploaded to Data Room
- [x] Navigation link in header

## Systems Book Sections
- **SB-00**: Master Control (folder architecture, naming, registries)
- **SB-01**: CEO Control Layer (dashboards, financial models)
- **SB-02**: Deal Room (CIM workflow, gating, release checklist)
- **SB-03**: Authority OS (operating rhythm, governance)
- **SB-04**: Website & Content Ops (source of truth, publishing)

## Document Categories
- **Public**: teaser, cim_times, cim_modern
- **Protected**: buyer_deck, appendix, data_room

## Routes
- `/` - Landing page with public documents
- `/systems-book` - Interactive Systems Book
- `/login` - Buyer login
- `/admin/login` - Admin login
- `/portal` - Buyer deal room portal
- `/admin/dashboard` - Admin management dashboard

## API Endpoints
### Public
- GET `/api/documents/public` - List public documents
- GET `/api/downloads/public/{doc_id}` - Download public document

### Authentication
- POST `/api/auth/login` - User login
- GET `/api/auth/me` - Get current user

### Admin
- POST `/api/admin/invite` - Invite buyer (returns temp password)
- GET `/api/admin/users` - List all buyers
- PUT `/api/admin/users/{id}/toggle-active` - Activate/deactivate user
- DELETE `/api/admin/users/{id}` - Delete user
- POST `/api/documents/upload` - Upload document
- GET `/api/documents/all` - List all documents
- DELETE `/api/documents/{id}` - Delete document
- GET `/api/stats` - Portal statistics

### Protected (Buyer)
- GET `/api/documents/protected` - List protected documents
- GET `/api/downloads/protected/{doc_id}` - Download protected document

## Default Credentials
- **Admin**: admin@tessaauthority.com / admin123
- **Test Buyer**: buyer@example.com / 6oefDCfsjt_aussu

## Prioritized Backlog
### P0 (Critical) - COMPLETE
- ✅ Core document portal functionality
- ✅ Authentication system
- ✅ Systems Book integration

### P1 (High)
- [ ] Email notification for buyer invites
- [ ] Password reset functionality
- [ ] OneDrive integration for document sync
- [ ] Expand SB-01 into CEO playbook (dashboards, templates)
- [ ] Expand SB-02 into deal room SOP (email scripts, Q&A workflow)

### P2 (Medium)
- [ ] Document versioning history
- [ ] Bulk document upload
- [ ] Export download reports
- [ ] Expand SB-04 into website architecture spec

## File Structure
```
/app
├── backend/
│   ├── server.py
│   ├── uploads/
│   │   ├── public/
│   │   └── protected/
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── context/AuthContext.js
│   │   ├── services/api.js
│   │   ├── pages/
│   │   │   ├── LandingPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── BuyerPortal.js
│   │   │   ├── AdminDashboard.js
│   │   │   └── SystemsBookPage.js
│   │   └── App.js
│   └── .env
└── memory/PRD.md
```

## Next Tasks
1. Add email notifications for buyer invites
2. Implement OneDrive sync for document uploads
3. Expand SB-01 CEO Control Layer into interactive dashboard templates
4. Add password reset flow for buyers
