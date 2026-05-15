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

### 2026-05-14 Session (Heritage Page, Trust Teaser, Quantum Video Showcase & Componentization)
- [x] **Institutional Briefing Deck for Tina Wilkinson** at `/briefing/tina-wilkinson` (Ref: AIS-BLR-0091Q)
  - Diamond Tier aesthetic: dark navy `#0a192f` + slate `#8892b0` + emerald-cyan `#64ffda`
  - Animated SVG circuit-pattern + scan-line backdrop
  - 6 slides: (1) Title, (2) Problem · $7.8B Technical Debt rising area chart through 2028, (3) Pilot · Sarah Emerson/Aladdin anchor, (4) Friction · GCP 11% target vs Azure 24% absorption bar chart, (5) Solution · 4-layer Authority OS™ substrate (Sovereign Identity / Agentic Governance / Quantum Bridge / React 19 + Next.js 16), (6) Roadmap · 4.5-month Alpha Bridge timeline
  - Charts via Recharts (Area + Bar) styled to Diamond Tier palette
  - Deck chrome: progress bar, slide counter, footer dot navigation w/ slide labels, Prev/Next buttons, fade-up slide transitions
  - Keyboard nav: Arrows / PageUp-Down / Space advance / number keys 1-6 jump
  - "Execute Engagement" CTA on roadmap slide → `mailto:ops@onpointauthoritysystems.com` with pre-filled subject
  - QR code on landing page repointed from `portal.onpointauthoritysystems.com` → absolute URL of `/briefing/tina-wilkinson` (scans straight into deck)
  - Seeding Gateway CTA repointed + relabeled "Enter Briefing Substrate"
  - Per-slide analytics tracking via new `briefing_view` event (whitelisted in backend)
- [x] **Legacy Architect / Executive Profile section** (`LegacyArchitect.js`) inserted between Seeding Gateway and Priority CTA
  - Pull quote: "The bridge between legacy debt and agentic scaling isn't built by generalists; it's forged by those who speak the original code." (Libre Baskerville italic, gold quotation marks)
  - Brush-script Tessa Shepard signature in gold
  - 3-paragraph bio with weighted typography: gold tokens for value props ("multi-billion dollar anchor of technical debt", "BlackRock"), neon green for "Zero-Blast-Radius", white for credential anchors ("1991 MCSE/COBOL era", "React 19", "Non-Custodial Substrates", "Google Cloud Partner Case #71129532")
  - 4 signal pills: 1991 · MCSE/COBOL · Zero-Blast-Radius · GCP Case #71129532 · Architect of Record BlackRock
  - Schema.org `Person` microdata wrapper for SEO
  - CTA: "Read the Full Architectural Pedigree →" routes to `/heritage`
- [x] **Institutional Seeding Gateway™ section** (`InstitutionalSeedingGateway.js`) inserted between Legacy-to-Quantum and Priority CTA
  - Converted from Next.js spec → React/CRA (replaced `next/image` with native `<img>`, dropped `priority` prop)
  - Heading "The Institutional Seeding Gateway™" with gold TM mark + Libre Baskerville serif
  - Subtitle: "Bridging the $7.8B technical debt gap with non-custodial sovereignty. Validated under GCP Case #71129532." with gold + white emphasis tokens
  - Architectural Map infographic in neon-green glassmorphism container (1px `#39FF14` @ 30% border + radial shadow glow)
  - **Live SVG QR Code** via `react-qr-code` library (yarn-installed) encoding `https://portal.onpointauthoritysystems.com/` — scannable, rendered client-side
  - CTA card (slate-800 glass): "Scan for Priority Access" (neon green) · "Diamond Tier" briefing reference (gold) · "Auth ID: AIS-BLR-0091Q" (white)
  - "Enter Admin Portal →" external link with target="_blank" + `track('priority_access_open', { source: 'seeding_gateway' })` analytics event
- [x] **Services & Solutions section** (`ServicesAndSolutions.js`) inserted between Quantum Pillars and Legacy-to-Quantum
  - Three-card grid w/ transparent glassmorphism over dark slate + grid (1px neon `#39FF14` @ 30% border, `backdrop-blur(18px)`)
  - Minimalist Lucide line icons (Server / Cloud / Brain, strokeWidth 1.25) in neon green w/ subtle glow ring
  - Card 1: Legacy Core Modernization (COBOL · MAINFRAME)
  - Card 2: Multi-Cloud Authority Architecture (MCSE · DIAMOND TIER)
  - Card 3: Agentic Orchestration (JULES · QUANTUM SHIFT)
  - Each "Learn More" link routes to `/heritage#timeline` (Founder's Heritage timeline anchor added) — reinforces architect credentials
- [x] **Resend transactional email integration** (backend)
  - `email_service.py` with branded dark-theme HTML templates (Priority Access ack/internal, NDA ack/internal, Contact ack/internal) — institutional dark background, gold accents, IP marks in footer
  - Wired into `POST /api/authority-review`, `POST /api/investor/nda-request`, `POST /api/contact` — each endpoint now fires both an auto-acknowledgement to the submitter AND an internal notification to `ops@onpointauthoritysystems.com` (with `reply_to` set to the submitter for one-click reply)
  - Gracefully no-ops when `RESEND_API_KEY` env var is unset — submissions still succeed, log says "Resend not configured — skipping email"
  - Non-blocking: uses `asyncio.to_thread(resend.Emails.send, ...)` so FastAPI event loop stays responsive
  - Env placeholders in `/app/backend/.env`: `RESEND_API_KEY=""`, `RESEND_FROM_EMAIL="ops@onpointauthoritysystems.com"`, `RESEND_MONITORING_EMAIL="ops@onpointauthoritysystems.com"`
  - **User Action Required**: Add the actual Resend API key via Emergent Secret Manager → restart backend → emails go live
- [x] **Buyer Portal polish**
  - Personalized "Welcome back, {first_name}" heading
  - 3-stat banner: Documents Available · Downloaded · New for You — each with distinct icon + accent color (gold / neon green / blue)
  - Per-document "NEW" badge on cards the buyer hasn't accessed yet
  - Per-document "Downloaded {date}" caption after first access
  - Recent Activity widget at bottom showing last 8 downloads with document name, category, version, date
  - Auto-refresh of activity after a fresh download
  - New backend endpoint `GET /api/buyer/my-downloads` (auth-protected) returns hydrated download history scoped to the logged-in buyer
- [x] **Investor flow cleanup**
  - Removed hardcoded `tessaauthority.com` external link in Data Room nav (replaced with internal `/heritage` link)
- [x] **Engagement Analytics (full stack)**
  - Backend: `POST /api/analytics/event` (whitelist of 7 events: `landing_view`, `video_showcase_impression`, `architectural_map_zoom`, `priority_access_open`, `priority_access_submit`, `heritage_view`, `trust_teaser_click`)
  - Backend: `GET /api/admin/analytics` (admin-only — returns aggregated counts, recent 50 events, unique sessions in last 7 days)
  - Frontend: `/app/frontend/src/services/analytics.js` fire-and-forget tracker using `navigator.sendBeacon` (survives page unloads), auto-generated `opas_session_id` stored in sessionStorage
  - Frontend: wired into LandingPage, HeritagePage, VideoShowcase (impression on 35% viewport intersection), TrustTeaser, PriorityAccessModal (open + submit)
  - Admin Dashboard: new **Engagement** tab with 4 stat cards (Total Events, Unique Sessions 7d, Map Zoom Clicks, Priority Access Submits), event-breakdown progress bars, recent events table
- [x] **Click-to-zoom lightbox** on the Architectural Map
  - `ImageLightbox` component, ESC-to-close, click-backdrop-to-close, body scroll locked while open
  - Hover hint pill ("Click to Zoom") on the showcase, cursor-zoom-in, keyboard-accessible (Enter/Space)
  - Lightbox open also fires `architectural_map_zoom` analytics event
- [x] **Per-page SEO + OG/Twitter cards**
  - New `useSEO` hook at `/app/frontend/src/hooks/useSEO.js` — injects title, description, OG image, OG URL, Twitter card, canonical link; restores previous values on unmount
  - LandingPage: full OG/Twitter card pointing at the Architectural Map image
  - HeritagePage: unique title + description + OG image (replaces previous ad-hoc useEffect)
  - **Fixed critical SEO bug**: removed duplicate `<title>Emergent | Fullstack App</title>` in `index.html` that was clobbering the SEO title at line 9
- [x] **sitemap.xml + robots.txt** at `/app/frontend/public/`
  - 11-URL sitemap with priority weights (/ at 1.0, /heritage and /authority-review at 0.9)
  - robots.txt disallows /admin/, /portal/, and investor private routes
  - NOTE: Preview proxy injects Cloudflare's bot-management robots.txt over the file; on actual production domains, your CF page rules determine this
- [x] **Quantum Financial Deployment showcase** — final iteration uses high-fidelity static architectural map
  - Asset swapped from animated video → high-res `1920×1080` architectural map (`eblm5ag9_image.png`) per user "1:1 pixel fidelity" directive
  - Image streamed directly from secure customer-assets storage — zero local transcoding/compression
  - All callouts sharp & legible: Legacy Cores (JPMC PHOENIX, MSFT O, IBM Z), SHA-256 Agent Identity Signatures, OPAS Authority OS JPMC Pilot, 5.4× Operational Multiplier, Verified Project Metrics, Agent Identity Registry
  - **Badge collision fix**: section padding `pt-28 pb-40` + caption strip `md:pr-48` so the "Made with Emergent" platform badge never overlaps the "ZKP-Verified · State 0 Protocol · Onyx Bridge" caption
  - Contrast filter removed — source image already calibrated between neon-green bars and gold 5.4× text
  - Orphaned local `.mp4`/`.webm` files deleted
  - **Preserved outer chrome** (does not touch image pixels): glassmorphism neon-green border, dark slate `#121212` backdrop, fixed 40×40 CSS grid parallax overlay, soft radial neon glow @ 8%
  - Full visual treatment per spec:
    1. Glassmorphism wrapper — 1px `#39FF14` @ 30% border, 135° glass refraction accent, inner edge vignette
    2. Dark slate `#121212` section backdrop
    3. Fixed 40×40px CSS grid pattern overlay (white @ 4%) — parallax (`position: fixed`)
    4. Soft radial neon glow `#39FF14` @ 8% behind the video
  - Video plays autoplay/muted/loop/playsInline; verified `readyState: 4`, `videoWidth: 1280`
- [x] **`LandingPage.js` componentized** (762 lines → 42 lines) under `/app/frontend/src/components/landing/`:
  - `LandingNav.js`, `PriorityAccessModal.js`, `Hero.js`, `VideoShowcase.js`, `TrustTeaser.js`, `QuantumPillars.js`, `LegacyToQuantum.js`, `PriorityCTA.js`, `SiteFooter.js`
  - Self-contained data tables (pillars, legacy-to-quantum rows) moved into their respective components
  - Modal owns its own form state (no prop drilling)
  - Footer adds new `/heritage` link in nav row
  - Visual & behavioral parity verified via 4 post-refactor screenshots (hero, video playing, pillars/trust, modal open)
- [x] **New `/heritage` (alias `/our-authority`) standalone page** — academic/executive dark-slate aesthetic
  - Prominent digital signature ("Tessa Shepard") at the top with structured Person microdata (`itemprop="author"`, `itemprop="name"`, `itemprop="jobTitle"`)
  - Expanded 4-era Timeline of Innovation: 1991 Devry COBOL → 1995 MCSE/MCP → 2000s-2010s Enterprise Modernization → 2026 OPAS Authority OS™
  - Each timeline era rendered with iconic node (Server / Network / Award / Cpu), per-era accent color, and full narrative paragraph
  - Founder's Letter section in Libre Baskerville serif with 1.85 leading for an academic read
  - USPTO S/N 99653409 + OPAS Authority OS™ S/N 99748939 IP callout
  - Unique meta-title (`The Architectural Pedigree of OnPoint Authority Systems | Heritage`) + meta description + meta keywords injected via useEffect; restored on unmount
- [x] **Landing page restored to GOLD conversion flow**
  - Removed the full Founder's Note section (~130 lines) from `/`
  - Inserted compact "Trust Teaser" band right after the Hero metrics: *"Built on 35 Years of Architectural Integrity."* with `[Read the Founder's Note →]` CTA linking to `/heritage`
  - 3-Layer Governance OS pillars and 5.4x multiplier metrics now re-prioritized above the fold
- [x] **Navigation**: Added "Our Path" link in main nav (LandingPage) → `/heritage`
- [x] Both `/heritage` and `/our-authority` registered as routes in `App.js`

### 2026-02-23 Session (Systems Page Image Refresh)
- [x] **New Chapter Icons** - Generated 4 clean professional gold-on-black icons:
  - Institutional Authority (Greek columns)
  - Certification Gap (gold certificate)
  - Enforce or Erode (shield & gavel)
  - Governance Beyond (crown & org chart)
- [x] **New Hero Book Cover** - 3D book mockup "OnPoint Authority" by Tessa Shepard
- [x] **System Architecture Layers section** added to `/systems` page with new images
- [x] All images: No borders, no outlines, clean black backgrounds

### 2026-02-22 Session (Book Content & Reader Page)
- [x] **Book Reader Page** (`/read-book`) - Dedicated reading experience for the OnPoint Authority book
  - Clean sidebar navigation with all 10 chapters + Introduction + About Author
  - Full chapter content for chapters 3-10 (placeholder for chapters 1-2)
  - Key diagrams displayed at bottom of relevant chapters
  - Previous/Next chapter navigation
  - Professional book-style typography (Georgia, Libre Baskerville)
  - Links to Systems Book documentation
- [x] **"Read the Book" button** added to Systems Book header
- [x] **18 diagrams** integrated with chapter references

### 2026-02-22 Session (Key Diagrams Integration)
- [x] **Key Diagrams Section** added to Systems Book page (`/systems-book`)
  - 8 diagrams integrated with full metadata (title, chapter, description)
  - Interactive diagram grid with hover effects
  - Lightbox modal for full-size viewing
  - Responsive 2-column layout
- [x] **Diagrams Stored**:
  - `01_Founder_Dependency_Loop.png` - Chapter 2, Diagram 3
  - `02_Transferability_Gap_Chart.png` - Chapter 3, Diagram 5
  - `03_Authority_Governance_Stack.png` - Chapter 4, Diagram 7
  - `04_Charter_Certification_License_Flow.png` - Chapter 5, Diagram 8
  - `09_License_Scope_Hierarchy.png` - Chapter 6, Diagram 9
  - `10_Recurring_Enforcement_Cycle.png` - Chapter 5, Diagram 10
  - `11_Transfer_Survival_Map.png` - Chapter 10, Diagram 18
  - `12_Board_Oversight_Model.png` - Chapter 7, Diagram 14
- [x] **UI Components**: DiagramLightbox component with close button

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
- [ ] Fix tessaauthority.com deployment - new images ready in code but production not updating
  - Check Emergent Home tab for deployment status
  - May need to re-link domain via Entri in GoDaddy DNS
- [ ] Complete deployment of `OnPointAuthoritySystems.com` - Cloudflare active (gray cloud), needs Emergent deploy setup

### P1 - High
- [ ] Build Admin Panel for NDA/Review/Contact submissions
- [ ] Add cross-link from tessaauthority.com once deployment is live
- [ ] Wire up actual PDF downloads (Teaser, CIM, Appendix files)

### P2 - Medium
- [ ] Populate skeleton pages with content
- [ ] Email notifications on form submissions
- [ ] Build remaining governance chapters (SB-07 through SB-12)
- [ ] Add analytics tracking
- [ ] Buyer activity logging

### P3 - Refactoring
- [ ] Consolidate navigation components into reusable `<Navbar />`
- [ ] Define global CSS variables for black/gold theme consistency

## Test Credentials
- **Admin**: `admin@test.com` / `password` (if created)
- **Buyer**: `buyer@test.com` / `password` (if created)

## Files Reference
- `/app/frontend/src/data/systemsBookRegistry.js` - Complete registry
- `/app/frontend/src/data/syncMapData.js` - Website↔Book mapping
- `/app/frontend/src/pages/SkeletonPage.js` - Dynamic skeleton renderer
- `/app/backend/server.py` - All API routes
