# TessaAuthority CIM Document Portal - PRD

## Project Overview
A Confidential Information Memorandum (CIM) Document Portal for TessaAuthority.com / OnPoint Authority Systems, Inc. - designed for M&A deal room document management.

## Architecture
- **Frontend**: React 18 + TailwindCSS + Lucide Icons
- **Backend**: FastAPI + Motor (MongoDB async driver)
- **Database**: MongoDB
- **Auth**: JWT-based authentication with role-based access control

## User Personas
1. **Admin** - TessaAuthority team managing documents and buyer access
2. **Buyer** - Qualified investors accessing deal materials after NDA signing

## Core Requirements (Static)
1. Public document downloads (Teaser, CIM Times, CIM Modern)
2. Invite-only buyer authentication (admin creates accounts)
3. Protected document portal (Buyer Deck, Appendix Pack, Data Room)
4. Admin dashboard for user/document management
5. Download tracking and activity logs

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
- [x] Premium UI following design guidelines (Libre Baskerville + Inter fonts, Midnight Blue/Gold palette)

## Document Categories
- **Public**: teaser, cim_times, cim_modern
- **Protected**: buyer_deck, appendix, data_room

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

## Prioritized Backlog
### P0 (Critical)
- ✅ Core document portal functionality
- ✅ Authentication system

### P1 (High)
- [ ] Email notification for buyer invites
- [ ] Password reset functionality
- [ ] OneDrive integration for document sync

### P2 (Medium)
- [ ] Document versioning history
- [ ] Bulk document upload
- [ ] Export download reports

## File Structure
```
/app
├── backend/
│   ├── server.py (FastAPI app with all routes)
│   ├── uploads/
│   │   ├── public/ (public document files)
│   │   └── protected/ (protected document files)
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── context/AuthContext.js
│   │   ├── services/api.js
│   │   ├── pages/
│   │   │   ├── LandingPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── BuyerPortal.js
│   │   │   └── AdminDashboard.js
│   │   └── App.js
│   └── .env
└── memory/PRD.md
```

## Next Tasks
1. Add email notifications for buyer invites
2. Implement OneDrive sync for document uploads
3. Add password reset flow for buyers
