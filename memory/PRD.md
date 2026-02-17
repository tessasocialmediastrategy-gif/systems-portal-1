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
### 2026-02-17 (Systems Book v2026-02-17r3 - 6 New Chapters)
- [x] Added 6 full chapters to Systems Book:
  - **SB-07**: Finance and Modeling System (close calendar, forecasting, buyer-ready package)
  - **SB-08**: Legal and Compliance System (signature authority, compliance calendar, privacy/security)
  - **SB-09**: Operations and Delivery System (delivery phases, QA, escalation, runbooks)
  - **SB-10**: Product and IP System (roadmap governance, IP register, release standards)
  - **SB-11**: Technology Stack and Integrations (stack layers, access/security, change management)
  - **SB-12**: HR and Org Design System (role scorecards, hiring/onboarding, performance cadence)
- [x] Each chapter includes:
  - Version lock block (v2026-02-17r3)
  - Artifact codes (SB-XX-A01 through A05)
  - Workflow codes (SB-XX-W01 through W04)
  - Template codes (SB-XX-T01 through T04)
  - Website ↔ Notion ↔ Word sync table
  - RACI matrix + metrics + control log requirements
  - Implementation checklist + change control
- [x] **Expanded Registry** for each chapter (SB-01 to SB-12):
  - **Web Copy (W01-W03)** for SB-01 to SB-06: Landing Page Copy, Section Blocks, Downloads Hub
  - **Appendix Pack (A01-A05)**: System Diagram, SOP Template, Scorecard, Example Pack, Standards & Definitions
  - **Toolkit (T01-T06)**: Checklist, SOP Template, Tracker, Scripts Pack, Notion Template, Prompt Pack
  - Each item has: Code, Name, Format (PDF/DOCX/XLSX/MD), Status, Output File, Notion Path, Notes
  - Collapsible tables for better navigation
- [x] Created `/app/frontend/src/data/systemsBookRegistry.js` data file for registry
- [x] Updated version display to v2026-02-17r3 in header and footer

### 2026-02-17 (Website Book Sync Map v3 - One System Build)
- [x] Updated to v2026-02-17r3 with 57 mappings
- [x] New tabs: Coding Standard, Source of Truth, Cadence, Notion Tracker
- [x] Added planned chapters SB-07 through SB-12
- [x] Added Data Room Journey (5 CIM flow pages)
- [x] Added Public Site mappings (6 marketing pages)
- [x] Publishing cadence: Weekly/Monthly/Quarterly
- [x] Notion "OPS — Sync Tracker" database schema
- [x] Source-of-Truth rules documentation
- [x] Uploaded 6 files to Data Room:
  - MD, DOCX, CSV, ZIP (complete kit)
  - Notion Sync Tracker Setup
  - OneDrive Folder Builder (PowerShell)

### 2026-02-17 (Landing Page & Core Portal)
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
- [x] Full content from OnPoint Systems Book Master v2026-02-17r3
- [x] Interactive sidebar navigation (SB-00 to SB-12)
- [x] Section switching with visual hierarchy
- [x] Systems Book PDF/DOCX uploaded to Data Room
- [x] Navigation link in header

## Systems Book Sections (Complete - 13 Chapters)
- **SB-00**: Master Control & Registry (folder architecture, naming, registries)
- **SB-01**: Authority OS Overview (operating system architecture and layer model)
- **SB-02**: Data Room & Access Control (file system taxonomy, permissions, security)
- **SB-03**: CIM Program (Teaser → NDA → CIM → Buyer Deck → Appendix)
- **SB-04**: Investor Readiness + Website Spec (complete website architecture)
- **SB-05**: Buyer Pipeline (pipeline stages and communications library)
- **SB-06**: KPI / Metrics (scorecards and reporting framework)
- **SB-07**: Finance and Modeling System (close calendar, forecasting, buyer-ready package)
- **SB-08**: Legal and Compliance System (signature authority, compliance calendar, privacy/security)
- **SB-09**: Operations and Delivery System (delivery phases, QA, escalation, runbooks)
- **SB-10**: Product and IP System (roadmap governance, IP register, release standards)
- **SB-11**: Technology Stack and Integrations (stack layers, access/security, change management)
- **SB-12**: HR and Org Design System (role scorecards, hiring/onboarding, performance cadence)

## Document Categories
- **Public**: teaser, cim_times, cim_modern
- **Protected**: buyer_deck, appendix, data_room

## Routes
- `/` - Landing page with public documents
- `/systems-book` - Interactive Systems Book (13 chapters)
- `/sync-map` - Website ↔ Book Sync Map v3
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
- **Admin**: admin@test.com / password
- **Test Buyer**: buyer@test.com / password

## Prioritized Backlog
### P0 (Critical) - COMPLETE
- ✅ Core document portal functionality
- ✅ Authentication system
- ✅ Systems Book integration (13 chapters)
- ✅ Sync Map v3 integration

### P1 (High) - Upcoming
- [ ] Build skeleton pages for WP slugs from Sync Map v3
- [ ] Build public marketing site for onpointsystemsauthority.com
- [ ] Build Data Room Journey (Teaser gate → NDA form → CIM download)
- [ ] Email notification for buyer invites
- [ ] Password reset functionality

### P2 (Medium) - Future
- [ ] Document versioning history
- [ ] Bulk document upload
- [ ] Export download reports
- [ ] OneDrive integration for document sync
- [ ] Integrate Copy Blocks from Appendix A

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
│   │   │   ├── SystemsBookPage.js
│   │   │   └── SyncMapPage.js
│   │   └── App.js
│   └── .env
└── memory/PRD.md
```

## Next Tasks
1. Build skeleton pages for all WP slugs from Sync Map v3
2. Build public marketing site for onpointsystemsauthority.com
3. Build Data Room Journey flow
4. Add email notifications for buyer invites
