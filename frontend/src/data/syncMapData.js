// Sync Map Data - Website ↔ Book Mapping
// Version: v2026-02-17r3

export const syncData = {
  'systems-book': [
    { sb: 'SB-INTRO-01', wp: 'WP-INTRO-01', title: 'OnPoint Authority Systems — Systems Book (Master)', slug: '/systems-book/sb-intro-01', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-INTRO-02', wp: 'WP-INTRO-02', title: 'How to Use This Book', slug: '/systems-book/sb-intro-02', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-INTRO-03', wp: 'WP-INTRO-03', title: 'Canonical Coding Standard', slug: '/systems-book/sb-intro-03', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-INTRO-04', wp: 'WP-INTRO-04', title: 'Table of Contents', slug: '/systems-book/sb-intro-04', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
  ],
  'master-control': [
    { sb: 'SB-00', wp: 'WP-00', title: 'Master Control & Registry System', slug: '/governance/master-control', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-00-01', wp: 'WP-00-01', title: 'Purpose & Non-Negotiables', slug: '/governance/master-control/purpose', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-00-02', wp: 'WP-00-02', title: 'Canonical File Naming Standard', slug: '/governance/master-control/naming', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-00-03', wp: 'WP-00-03', title: 'Registry Fields', slug: '/governance/master-control/registry', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
  ],
  'authority-os': [
    { sb: 'SB-01', wp: 'WP-01', title: 'Authority OS Overview & Architecture', slug: '/authority-os', db: 'Systems Book', sync: '1-way (Book→Website)', status: 'Active' },
    { sb: 'SB-01-01', wp: 'WP-01-01', title: 'Authority OS Definition', slug: '/authority-os/definition', db: 'Systems Book', sync: '1-way (Book→Website)', status: 'Active' },
    { sb: 'SB-01-02', wp: 'WP-01-02', title: 'Layer Model', slug: '/authority-os/layers', db: 'Systems Book', sync: '1-way (Book→Website)', status: 'Active' },
  ],
  'data-room': [
    { sb: 'SB-02', wp: 'WP-02', title: 'Data Room, File System & Access Control', slug: '/investor/deal-room', db: 'Deal Room', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-02-01', wp: 'WP-02-01', title: 'Folder Taxonomy (Canonical)', slug: '/investor/deal-room/taxonomy', db: 'Deal Room', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-02-02', wp: 'WP-02-02', title: 'Access Control Standard', slug: '/investor/deal-room/access', db: 'Deal Room', sync: '1-way (Book→Notion)', status: 'Active' },
  ],
  'cim-program': [
    { sb: 'SB-03', wp: 'WP-03', title: 'CIM Program: Teaser → NDA → CIM → Buyer Deck', slug: '/investor/cim', db: 'CIM Program', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-03-01', wp: 'WP-03-01', title: 'Canonical Deliverable Chain', slug: '/investor/cim/deliverables', db: 'CIM Program', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-03-02', wp: 'WP-03-02', title: 'Lock Rules', slug: '/investor/cim/lock-rules', db: 'CIM Program', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-03-03', wp: 'WP-03-03', title: 'Master vs. External Formats', slug: '/investor/cim/formats', db: 'CIM Program', sync: '1-way (Book→Notion)', status: 'Active' },
  ],
  'website-architecture': [
    { sb: 'SB-04', wp: 'WP-04', title: 'Investor Readiness + Website Architecture Spec', slug: '/website-architecture', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-01', wp: 'WP-04-01', title: 'Investor Readiness: Core Proof Pack', slug: '/website-architecture/proof-pack', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02', wp: 'WP-04-02', title: 'Website Architecture Spec (Canonical)', slug: '/website-architecture/spec', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-01', wp: 'WP-04-02-01', title: 'Information Architecture & Sitemap', slug: '/website-architecture/sitemap', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-02', wp: 'WP-04-02-02', title: 'Page Templates & Component Rules', slug: '/website-architecture/templates', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-03', wp: 'WP-04-02-03', title: 'Content Types, Metadata & CMS Fields', slug: '/website-architecture/content-model', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-04', wp: 'WP-04-02-04', title: 'Navigation Rules & UX Standards', slug: '/website-architecture/navigation', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-05', wp: 'WP-04-02-05', title: 'SEO, Analytics & Tracking Plan', slug: '/website-architecture/seo-analytics', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-06', wp: 'WP-04-02-06', title: 'Publishing Workflow & Governance', slug: '/website-architecture/workflow', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-07', wp: 'WP-04-02-07', title: 'Version Tagging, Release Notes & Locking', slug: '/website-architecture/versioning', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-02-08', wp: 'WP-04-02-08', title: 'QA, Accessibility, Security, Performance', slug: '/website-architecture/qa', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
    { sb: 'SB-04-03', wp: 'WP-04-03', title: 'Website ↔ CIM Mapping Table (Starter)', slug: '/website-architecture/cim-mapping', db: 'Website Architecture', sync: '2-way (Website↔Book)', status: 'Active' },
  ],
  'buyer-pipeline': [
    { sb: 'SB-05', wp: 'WP-05', title: 'Buyer Pipeline & Communications', slug: '/investor/pipeline', db: 'Buyer Pipeline', sync: '1-way (Book→Notion)', status: 'Scaffold' },
    { sb: 'SB-05-01', wp: 'WP-05-01', title: 'Pipeline Stages', slug: '/investor/pipeline/stages', db: 'Buyer Pipeline', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-05-02', wp: 'WP-05-02', title: 'Standard Comms Library', slug: '/investor/pipeline/comms', db: 'Buyer Pipeline', sync: '1-way (Book→Notion)', status: 'Active' },
  ],
  'kpi-reporting': [
    { sb: 'SB-06', wp: 'WP-06', title: 'KPI / Metrics / Reporting', slug: '/governance/metrics', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Scaffold' },
  ],
  'change-control': [
    { sb: 'SB-13', wp: 'WP-13', title: 'Continuous Improvement & Change Control', slug: '/governance/change-control', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Scaffold' },
    { sb: 'SB-13-01', wp: 'WP-13-01', title: 'Change Control', slug: '/governance/change-control/process', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
    { sb: 'SB-13-02', wp: 'WP-13-02', title: 'Retirements', slug: '/governance/change-control/retirements', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Active' },
  ],
  'copy-blocks': [
    { sb: 'Appendix_A', wp: 'APPX-A', title: 'Quick Copy Blocks', slug: '/resources/copy-blocks', db: 'Copy Blocks', sync: '1-way (Book→Website)', status: 'Active' },
    { sb: 'A-01', wp: 'A-01', title: 'System Code Tag (copy/paste)', slug: '/resources/copy-blocks/system-code', db: 'Copy Blocks', sync: '1-way (Book→Website)', status: 'Active' },
    { sb: 'A-02', wp: 'A-02', title: 'Gated Download Page Banner', slug: '/resources/copy-blocks/gated-banner', db: 'Copy Blocks', sync: '1-way (Book→Website)', status: 'Active' },
  ],
  'planned-chapters': [
    { sb: 'SB-07', wp: 'WP-07', title: 'Sales Control System', slug: '/governance/sb-07-sales-control', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Planned' },
    { sb: 'SB-08', wp: 'WP-08', title: 'Marketing Control System', slug: '/governance/sb-08-marketing-control', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Planned' },
    { sb: 'SB-09', wp: 'WP-09', title: 'Customer Success Control System', slug: '/governance/sb-09-customer-success', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Planned' },
    { sb: 'SB-10', wp: 'WP-10', title: 'Finance & Controls System', slug: '/governance/sb-10-finance-controls', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Planned' },
    { sb: 'SB-11', wp: 'WP-11', title: 'HR & People Ops System', slug: '/governance/sb-11-hr-people-ops', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Planned' },
    { sb: 'SB-12', wp: 'WP-12', title: 'Tech & Product Control System', slug: '/governance/sb-12-tech-product', db: 'Systems Book', sync: '1-way (Book→Notion)', status: 'Planned' },
  ],
  'data-room-journey': [
    { sb: 'WP-DR-01', wp: 'WP-DR-01', title: 'Data Room Landing', slug: '/investor/data-room', db: 'CIM Program', sync: '1-way (CIM→Web)', status: 'Active' },
    { sb: 'WP-DR-02', wp: 'WP-DR-02', title: 'Teaser Gate Page', slug: '/investor/teaser', db: 'CIM Program', sync: '1-way (CIM→Web)', status: 'Active' },
    { sb: 'WP-DR-03', wp: 'WP-DR-03', title: 'NDA Request Page', slug: '/investor/nda-request', db: 'CIM Program', sync: '1-way (CIM→Web)', status: 'Active' },
    { sb: 'WP-DR-04', wp: 'WP-DR-04', title: 'CIM Download Page', slug: '/investor/cim-download', db: 'CIM Program', sync: '1-way (CIM→Web)', status: 'Active' },
    { sb: 'WP-DR-05', wp: 'WP-DR-05', title: 'Appendix Pack Index', slug: '/investor/appendix', db: 'CIM Program', sync: '1-way (CIM→Web)', status: 'Active' },
  ],
  'public-site': [
    { sb: 'WP-PUB-01', wp: 'WP-PUB-01', title: 'Home / Hero', slug: '/', db: 'Website', sync: '2-way (Web↔Notion)', status: 'Active' },
    { sb: 'WP-PUB-02', wp: 'WP-PUB-02', title: 'About OnPoint', slug: '/about', db: 'Website', sync: '2-way (Web↔Notion)', status: 'Active' },
    { sb: 'WP-PUB-03', wp: 'WP-PUB-03', title: 'Platform / Solutions', slug: '/platform', db: 'Website', sync: '2-way (Web↔Notion)', status: 'Active' },
    { sb: 'WP-PUB-04', wp: 'WP-PUB-04', title: 'Leadership', slug: '/leadership', db: 'Website', sync: '2-way (Web↔Notion)', status: 'Active' },
    { sb: 'WP-PUB-05', wp: 'WP-PUB-05', title: 'Outcomes / Case Studies', slug: '/outcomes', db: 'Website', sync: '2-way (Web↔Notion)', status: 'Active' },
    { sb: 'WP-PUB-06', wp: 'WP-PUB-06', title: 'Contact', slug: '/contact', db: 'Website', sync: '2-way (Web↔Notion)', status: 'Active' },
  ],
};

export const areas = [
  { id: 'all', label: 'All Areas', count: Object.values(syncData).flat().length },
  { id: 'systems-book', label: 'Systems Book', count: syncData['systems-book'].length },
  { id: 'master-control', label: 'Master Control', count: syncData['master-control'].length },
  { id: 'authority-os', label: 'Authority OS', count: syncData['authority-os'].length },
  { id: 'data-room', label: 'Data Room', count: syncData['data-room'].length },
  { id: 'cim-program', label: 'CIM Program', count: syncData['cim-program'].length },
  { id: 'website-architecture', label: 'Website Architecture', count: syncData['website-architecture'].length },
  { id: 'buyer-pipeline', label: 'Buyer Pipeline', count: syncData['buyer-pipeline'].length },
  { id: 'kpi-reporting', label: 'KPI & Reporting', count: syncData['kpi-reporting'].length },
  { id: 'change-control', label: 'Change Control', count: syncData['change-control'].length },
  { id: 'copy-blocks', label: 'Copy Blocks', count: syncData['copy-blocks'].length },
  { id: 'planned-chapters', label: 'Planned (SB-07–12)', count: syncData['planned-chapters'].length },
  { id: 'data-room-journey', label: 'Data Room Journey', count: syncData['data-room-journey'].length },
  { id: 'public-site', label: 'Public Site', count: syncData['public-site'].length },
];

export default syncData;
