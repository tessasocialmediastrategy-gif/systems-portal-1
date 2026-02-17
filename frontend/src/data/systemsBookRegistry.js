// Systems Book Expanded Registry Data - v2026-02-17r3
// Contains Book Master, Chapter Rollups, Pack Rollups (Axx/Wxx/Txx), and Child Items

export const registryVersion = 'v2026-02-17r3';

// ============================================================
// BOOK MASTER ROLLUP
// ============================================================
export const BookMaster = {
  code: 'SB-00',
  name: 'OnPoint Systems Book — Master Rollup',
  format: 'Book Rollup (Master)',
  status: 'ACTIVE',
  file: 'OnPoint_Systems_Book_Master_v2026-02-17r3.zip',
  notion: '/Systems Book (Master)',
  notes: 'PARENT BOOK: contains SB-01…SB-12 chapter rollups.'
};

// ============================================================
// CHAPTER ROLLUPS
// ============================================================
export const ChapterRollups = {
  'SB-01': { code: 'SB-01', name: 'SB-01 Chapter Rollup — Foundation & Positioning', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-01_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-01 Foundation & Positioning', notes: 'PARENT CHAPTER: contains SB-01-Axx, SB-01-Wxx, SB-01-Txx.' },
  'SB-02': { code: 'SB-02', name: 'SB-02 Chapter Rollup — Offer, Pricing & Packaging', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-02_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-02 Offer Pricing Packaging', notes: 'PARENT CHAPTER: contains SB-02-Axx, SB-02-Wxx, SB-02-Txx.' },
  'SB-03': { code: 'SB-03', name: 'SB-03 Chapter Rollup — Lead Gen & Marketing Engine', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-03_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-03 Lead Gen Marketing Engine', notes: 'PARENT CHAPTER: contains SB-03-Axx, SB-03-Wxx, SB-03-Txx.' },
  'SB-04': { code: 'SB-04', name: 'SB-04 Chapter Rollup — Client Experience & Delivery Standards', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-04_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-04 Client Experience Delivery Standards', notes: 'PARENT CHAPTER: contains SB-04-Axx, SB-04-Wxx, SB-04-Txx.' },
  'SB-05': { code: 'SB-05', name: 'SB-05 Chapter Rollup — Systems, Tools & Automation', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-05_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-05 Systems Tools Automation', notes: 'PARENT CHAPTER: contains SB-05-Axx, SB-05-Wxx, SB-05-Txx.' },
  'SB-06': { code: 'SB-06', name: 'SB-06 Chapter Rollup — Performance Management & KPI Cadence', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-06_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-06 Performance Management KPI Cadence', notes: 'PARENT CHAPTER: contains SB-06-Axx, SB-06-Wxx, SB-06-Txx.' },
  'SB-07': { code: 'SB-07', name: 'SB-07 Chapter Rollup — Delivery & Operations', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-07_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-07 Delivery & Operations', notes: 'PARENT CHAPTER: contains SB-07-Axx, SB-07-Wxx, SB-07-Txx.' },
  'SB-08': { code: 'SB-08', name: 'SB-08 Chapter Rollup — Sales Pipeline & Growth', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-08_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-08 Sales Pipeline & Growth', notes: 'PARENT CHAPTER: contains SB-08-Axx, SB-08-Wxx, SB-08-Txx.' },
  'SB-09': { code: 'SB-09', name: 'SB-09 Chapter Rollup — Finance & Reporting', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-09_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-09 Finance & Reporting', notes: 'PARENT CHAPTER: contains SB-09-Axx, SB-09-Wxx, SB-09-Txx.' },
  'SB-10': { code: 'SB-10', name: 'SB-10 Chapter Rollup — People & Org Design', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-10_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-10 People & Org Design', notes: 'PARENT CHAPTER: contains SB-10-Axx, SB-10-Wxx, SB-10-Txx.' },
  'SB-11': { code: 'SB-11', name: 'SB-11 Chapter Rollup — Legal, Risk & Compliance', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-11_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-11 Legal Risk Compliance', notes: 'PARENT CHAPTER: contains SB-11-Axx, SB-11-Wxx, SB-11-Txx.' },
  'SB-12': { code: 'SB-12', name: 'SB-12 Chapter Rollup — Exit Readiness & M&A Package', format: 'Chapter Rollup', status: 'ACTIVE', file: 'OnPoint_SB-12_Chapter_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-12 Exit Readiness M&A', notes: 'PARENT CHAPTER: contains SB-12-Axx, SB-12-Wxx, SB-12-Txx.' },
};

// ============================================================
// PACK REGISTRIES (per chapter)
// ============================================================

// SB-01 Foundation & Positioning Registry
export const SB01Registry = {
  packParents: [
    { code: 'SB-01-Axx', name: 'SB-01 Appendix Assets Pack Rollup', format: 'Pack Rollup (Appendix Assets)', status: 'ACTIVE', file: 'OnPoint_SB-01_Appendix_Assets_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-01 Foundation & Positioning/Appendix Assets Pack', notes: 'PARENT PACK: contains SB-01-A01…A05.' },
    { code: 'SB-01-Wxx', name: 'SB-01 Web Copy Pack Rollup', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-01_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-01 Foundation & Positioning/Web Copy Pack', notes: 'PARENT PACK: contains SB-01-W01…W03.' },
    { code: 'SB-01-Txx', name: 'SB-01 Templates Pack Rollup', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-01_Templates_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-01 Foundation & Positioning/Templates Pack', notes: 'PARENT PACK: contains SB-01-T01…T06.' },
  ],
  web: [
    { code: 'SB-01-W01', name: 'Chapter Landing Page Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-01_W01_Landing_Copy_v2026-02-17r3.md', notion: '/Systems Book/SB-01 Foundation & Positioning/Web Copy Pack/W01 Landing Copy', notes: 'Website canonical copy' },
    { code: 'SB-01-W02', name: 'Section Blocks & Component Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-01_W02_Blocks_Components_v2026-02-17r3.md', notion: '/Systems Book/SB-01 Foundation & Positioning/Web Copy Pack/W02 Blocks & Components', notes: 'Modular page sections' },
    { code: 'SB-01-W03', name: 'Downloads Hub Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-01_W03_Downloads_Hub_v2026-02-17r3.md', notion: '/Systems Book/SB-01 Foundation & Positioning/Web Copy Pack/W03 Downloads Hub', notes: 'Download descriptions for A/T assets' },
  ],
  appendix: [
    { code: 'SB-01-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-01_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-01 Foundation & Governance/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-01-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-01_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-01 Foundation & Governance/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-01-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-01_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-01 Foundation & Governance/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-01-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-01_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-01 Foundation & Governance/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-01-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-01_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-01 Foundation & Governance/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-01-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-01_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-01 Foundation & Governance/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-01-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-01_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-01 Foundation & Governance/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-01-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-01_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-01 Foundation & Governance/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-01-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-01_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-01 Foundation & Governance/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-01-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-01_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-01 Foundation & Governance/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-01-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-01_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-01 Foundation & Governance/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-02 Offer, Pricing & Packaging Registry
export const SB02Registry = {
  packParents: [
    { code: 'SB-02-Axx', name: 'SB-02 Appendix Assets Pack Rollup', format: 'Pack Rollup (Appendix Assets)', status: 'ACTIVE', file: 'OnPoint_SB-02_Appendix_Assets_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-02 Offer Pricing Packaging/Appendix Assets Pack', notes: 'PARENT PACK: contains SB-02-A01…A05.' },
    { code: 'SB-02-Wxx', name: 'SB-02 Web Copy Pack Rollup', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-02_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-02 Offer Pricing Packaging/Web Copy Pack', notes: 'PARENT PACK: contains SB-02-W01…W03.' },
    { code: 'SB-02-Txx', name: 'SB-02 Templates Pack Rollup', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-02_Templates_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-02 Offer Pricing Packaging/Templates Pack', notes: 'PARENT PACK: contains SB-02-T01…T06.' },
  ],
  web: [
    { code: 'SB-02-W01', name: 'Chapter Landing Page Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-02_W01_Landing_Copy_v2026-02-17r3.md', notion: '/Systems Book/SB-02 Offer Pricing Packaging/Web Copy Pack/W01 Landing Copy', notes: 'Website canonical copy' },
    { code: 'SB-02-W02', name: 'Section Blocks & Component Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-02_W02_Blocks_Components_v2026-02-17r3.md', notion: '/Systems Book/SB-02 Offer Pricing Packaging/Web Copy Pack/W02 Blocks & Components', notes: 'Modular page sections' },
    { code: 'SB-02-W03', name: 'Downloads Hub Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-02_W03_Downloads_Hub_v2026-02-17r3.md', notion: '/Systems Book/SB-02 Offer Pricing Packaging/Web Copy Pack/W03 Downloads Hub', notes: 'Download descriptions for A/T assets' },
  ],
  appendix: [
    { code: 'SB-02-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-02_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-02 Strategy & Positioning/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-02-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-02_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-02 Strategy & Positioning/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-02-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-02_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-02 Strategy & Positioning/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-02-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-02_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-02 Strategy & Positioning/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-02-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-02_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-02 Strategy & Positioning/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-02-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-02_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-02 Strategy & Positioning/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-02-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-02_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-02 Strategy & Positioning/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-02-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-02_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-02 Strategy & Positioning/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-02-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-02_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-02 Strategy & Positioning/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-02-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-02_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-02 Strategy & Positioning/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-02-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-02_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-02 Strategy & Positioning/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-03 Brand & Marketing Registry
export const SB03Registry = {
  packParents: [
    { code: 'SB-03-Wxx', name: 'Website Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-03_Web_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-03 Brand & Marketing/Web', notes: 'PACK PARENT: contains SB-03-W01…W99' },
    { code: 'SB-03-Axx', name: 'Appendix Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-03_Appendix_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-03 Brand & Marketing/Appendix', notes: 'PACK PARENT: contains SB-03-A01…A99' },
    { code: 'SB-03-Txx', name: 'Toolkit Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-03_Toolkit_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-03 Brand & Marketing/Toolkit', notes: 'PACK PARENT: contains SB-03-T01…T99' },
  ],
  web: [
    { code: 'SB-03-W01', name: 'Chapter Landing Page Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-03_W01_Landing_Copy_v2026-02-17r3.md', notion: '/Systems Book/SB-03 Brand & Marketing/Web/W01 Landing Copy', notes: 'Website canonical copy' },
    { code: 'SB-03-W02', name: 'Section Blocks & Component Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-03_W02_Blocks_Components_v2026-02-17r3.md', notion: '/Systems Book/SB-03 Brand & Marketing/Web/W02 Blocks & Components', notes: 'Modular page sections' },
    { code: 'SB-03-W03', name: 'Downloads Hub Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-03_W03_Downloads_Hub_v2026-02-17r3.md', notion: '/Systems Book/SB-03 Brand & Marketing/Web/W03 Downloads Hub', notes: 'Download descriptions for A/T assets' },
  ],
  appendix: [
    { code: 'SB-03-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-03_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-03 Brand & Marketing/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-03-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-03_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-03 Brand & Marketing/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-03-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-03_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-03 Brand & Marketing/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-03-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-03_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-03 Brand & Marketing/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-03-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-03_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-03 Brand & Marketing/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-03-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-03_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-03 Brand & Marketing/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-03-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-03_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-03 Brand & Marketing/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-03-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-03_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-03 Brand & Marketing/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-03-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-03_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-03 Brand & Marketing/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-03-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-03_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-03 Brand & Marketing/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-03-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-03_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-03 Brand & Marketing/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-04 Offer & Product Systems Registry
export const SB04Registry = {
  packParents: [
    { code: 'SB-04-Wxx', name: 'Website Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-04_Web_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-04 Offer & Product/Web', notes: 'PACK PARENT: contains SB-04-W01…W99' },
    { code: 'SB-04-Axx', name: 'Appendix Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-04_Appendix_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-04 Offer & Product/Appendix', notes: 'PACK PARENT: contains SB-04-A01…A99' },
    { code: 'SB-04-Txx', name: 'Toolkit Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-04_Toolkit_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-04 Offer & Product/Toolkit', notes: 'PACK PARENT: contains SB-04-T01…T99' },
  ],
  web: [
    { code: 'SB-04-W01', name: 'Chapter Landing Page Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-04_W01_Landing_Copy_v2026-02-17r3.md', notion: '/Systems Book/SB-04 Offer & Product Systems/Web/W01 Landing Copy', notes: 'Website canonical copy' },
    { code: 'SB-04-W02', name: 'Section Blocks & Component Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-04_W02_Blocks_Components_v2026-02-17r3.md', notion: '/Systems Book/SB-04 Offer & Product Systems/Web/W02 Blocks & Components', notes: 'Modular page sections' },
    { code: 'SB-04-W03', name: 'Downloads Hub Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-04_W03_Downloads_Hub_v2026-02-17r3.md', notion: '/Systems Book/SB-04 Offer & Product Systems/Web/W03 Downloads Hub', notes: 'Download descriptions for A/T assets' },
  ],
  appendix: [
    { code: 'SB-04-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-04_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-04 Offer & Product/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-04-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-04_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-04 Offer & Product/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-04-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-04_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-04 Offer & Product/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-04-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-04_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-04 Offer & Product/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-04-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-04_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-04 Offer & Product/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-04-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-04_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-04 Offer & Product/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-04-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-04_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-04 Offer & Product/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-04-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-04_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-04 Offer & Product/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-04-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-04_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-04 Offer & Product/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-04-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-04_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-04 Offer & Product/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-04-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-04_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-04 Offer & Product/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-05 Client Success Registry
export const SB05Registry = {
  packParents: [
    { code: 'SB-05-Wxx', name: 'Website Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-05_Web_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-05 Client Success/Web', notes: 'PACK PARENT: contains SB-05-W01…W99' },
    { code: 'SB-05-Axx', name: 'Appendix Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-05_Appendix_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-05 Client Success/Appendix', notes: 'PACK PARENT: contains SB-05-A01…A99' },
    { code: 'SB-05-Txx', name: 'Toolkit Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-05_Toolkit_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-05 Client Success/Toolkit', notes: 'PACK PARENT: contains SB-05-T01…T99' },
  ],
  web: [
    { code: 'SB-05-W01', name: 'Chapter Landing Page Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-05_W01_Landing_Copy_v2026-02-17r3.md', notion: '/Systems Book/SB-05 Client Success/Web/W01 Landing Copy', notes: 'Website canonical copy' },
    { code: 'SB-05-W02', name: 'Section Blocks & Component Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-05_W02_Blocks_Components_v2026-02-17r3.md', notion: '/Systems Book/SB-05 Client Success/Web/W02 Blocks & Components', notes: 'Modular page sections' },
    { code: 'SB-05-W03', name: 'Downloads Hub Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-05_W03_Downloads_Hub_v2026-02-17r3.md', notion: '/Systems Book/SB-05 Client Success/Web/W03 Downloads Hub', notes: 'Download descriptions for A/T assets' },
  ],
  appendix: [
    { code: 'SB-05-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-05_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-05 Client Success/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-05-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-05_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-05 Client Success/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-05-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-05_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-05 Client Success/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-05-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-05_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-05 Client Success/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-05-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-05_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-05 Client Success/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-05-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-05_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-05 Client Success/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-05-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-05_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-05 Client Success/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-05-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-05_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-05 Client Success/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-05-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-05_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-05 Client Success/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-05-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-05_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-05 Client Success/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-05-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-05_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-05 Client Success/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-06 Technology & Data Registry
export const SB06Registry = {
  packParents: [
    { code: 'SB-06-Wxx', name: 'Website Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-06_Web_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-06 Technology & Data/Web', notes: 'PACK PARENT: contains SB-06-W01…W99' },
    { code: 'SB-06-Axx', name: 'Appendix Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-06_Appendix_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-06 Technology & Data/Appendix', notes: 'PACK PARENT: contains SB-06-A01…A99' },
    { code: 'SB-06-Txx', name: 'Toolkit Pack (Rollup)', format: 'ZIP', status: 'PLANNED', file: 'OnPoint_SB-06_Toolkit_Pack_v2026-02-17r3.zip', notion: '/Systems Book/SB-06 Technology & Data/Toolkit', notes: 'PACK PARENT: contains SB-06-T01…T99' },
  ],
  web: [
    { code: 'SB-06-W01', name: 'Chapter Landing Page Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-06_W01_Landing_Copy_v2026-02-17r3.md', notion: '/Systems Book/SB-06 Technology & Data/Web/W01 Landing Copy', notes: 'Website canonical copy' },
    { code: 'SB-06-W02', name: 'Section Blocks & Component Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-06_W02_Blocks_Components_v2026-02-17r3.md', notion: '/Systems Book/SB-06 Technology & Data/Web/W02 Blocks & Components', notes: 'Modular page sections' },
    { code: 'SB-06-W03', name: 'Downloads Hub Copy', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-06_W03_Downloads_Hub_v2026-02-17r3.md', notion: '/Systems Book/SB-06 Technology & Data/Web/W03 Downloads Hub', notes: 'Download descriptions for A/T assets' },
  ],
  appendix: [
    { code: 'SB-06-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-06_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-06 Technology & Data/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-06-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-06_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-06 Technology & Data/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-06-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-06_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-06 Technology & Data/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-06-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-06_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-06 Technology & Data/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-06-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-06_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-06 Technology & Data/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-06-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-06_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-06 Technology & Data/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-06-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-06_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-06 Technology & Data/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-06-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-06_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-06 Technology & Data/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-06-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-06_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-06 Technology & Data/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-06-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-06_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-06 Technology & Data/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-06-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-06_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-06 Technology & Data/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-07 Finance & Modeling System Registry (Delivery & Operations per CSV)
export const SB07Registry = {
  packParents: [
    { code: 'SB-07-Axx', name: 'SB-07 Appendix Pack Rollup — Delivery & Operations', format: 'Pack Rollup (Appendix)', status: 'ACTIVE', file: 'OnPoint_SB-07_Appendix_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-07 Delivery & Operations/Appendix Pack', notes: 'PARENT PACK: contains SB-07-A01… (appendices, references, diagrams, artifacts).' },
    { code: 'SB-07-Wxx', name: 'SB-07 Web Copy Pack Rollup — Delivery & Operations', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-07_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-07 Delivery & Operations/Web Copy Pack', notes: 'PARENT PACK: contains SB-07-W01…W03 (landing, blocks/components, downloads hub).' },
    { code: 'SB-07-Txx', name: 'SB-07 Template Pack Rollup — Delivery & Operations', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-07_Template_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-07 Delivery & Operations/Template Pack', notes: 'PARENT PACK: contains SB-07-T01… (SOPs, scripts, email templates, policies, reusable assets).' },
  ],
  web: [
    { code: 'SB-07-W01', name: 'Chapter Landing Page Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-07_W01_Landing_Page_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Delivery & Operations/Web Copy Pack/W01 Landing Page Copy', notes: 'SB-07 main page hero/intro, outcomes, navigation, CTA' },
    { code: 'SB-07-W02', name: 'Section Blocks & Component Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-07_W02_Section_Blocks_Component_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Delivery & Operations/Web Copy Pack/W02 Blocks & Components', notes: 'Reusable section blocks (problem/solution, steps, proof, FAQ, CTAs)' },
    { code: 'SB-07-W03', name: 'Downloads Hub Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-07_W03_Downloads_Hub_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Delivery & Operations/Web Copy Pack/W03 Downloads Hub', notes: 'Downloads index text, access notes, disclaimers, what\'s included' },
  ],
  appendix: [
    { code: 'SB-07-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-07_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-07 Finance & Modeling/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-07-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-07_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Finance & Modeling/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-07-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-07_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-07 Finance & Modeling/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-07-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-07_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-07 Finance & Modeling/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-07-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-07_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Finance & Modeling/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-07-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-07_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-07 Finance & Modeling/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-07-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-07_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Finance & Modeling/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-07-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-07_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-07 Finance & Modeling/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-07-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-07_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Finance & Modeling/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-07-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-07_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-07 Finance & Modeling/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-07-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-07_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-07 Finance & Modeling/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-08 Operations & Delivery System Registry (Sales Pipeline & Growth per CSV)
export const SB08Registry = {
  packParents: [
    { code: 'SB-08-Axx', name: 'SB-08 Appendix Pack Rollup — Sales Pipeline & Growth', format: 'Pack Rollup (Appendix)', status: 'ACTIVE', file: 'OnPoint_SB-08_Appendix_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-08 Sales Pipeline & Growth/Appendix Pack', notes: 'PARENT PACK: contains SB-08-A01… (appendices, references, diagrams, artifacts).' },
    { code: 'SB-08-Wxx', name: 'SB-08 Web Copy Pack Rollup — Sales Pipeline & Growth', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-08_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-08 Sales Pipeline & Growth/Web Copy Pack', notes: 'PARENT PACK: contains SB-08-W01…W03 (landing, blocks/components, downloads hub).' },
    { code: 'SB-08-Txx', name: 'SB-08 Template Pack Rollup — Sales Pipeline & Growth', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-08_Template_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-08 Sales Pipeline & Growth/Template Pack', notes: 'PARENT PACK: contains SB-08-T01… (SOPs, scripts, email templates, policies, reusable assets).' },
  ],
  web: [
    { code: 'SB-08-W01', name: 'Chapter Landing Page Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-08_W01_Landing_Page_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Sales Pipeline & Growth/Web Copy Pack/W01 Landing Page Copy', notes: 'SB-08 main page hero/intro, outcomes, navigation, CTA' },
    { code: 'SB-08-W02', name: 'Section Blocks & Component Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-08_W02_Section_Blocks_Component_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Sales Pipeline & Growth/Web Copy Pack/W02 Blocks & Components', notes: 'Reusable section blocks (problem/solution, steps, proof, FAQ, CTAs)' },
    { code: 'SB-08-W03', name: 'Downloads Hub Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-08_W03_Downloads_Hub_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Sales Pipeline & Growth/Web Copy Pack/W03 Downloads Hub', notes: 'Downloads index text, access notes, disclaimers, what\'s included' },
  ],
  appendix: [
    { code: 'SB-08-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-08_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-08 Operations & Delivery/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-08-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-08_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Operations & Delivery/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-08-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-08_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-08 Operations & Delivery/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-08-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-08_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-08 Operations & Delivery/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-08-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-08_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Operations & Delivery/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-08-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-08_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-08 Operations & Delivery/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-08-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-08_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Operations & Delivery/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-08-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-08_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-08 Operations & Delivery/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-08-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-08_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Operations & Delivery/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-08-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-08_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-08 Operations & Delivery/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-08-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-08_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-08 Operations & Delivery/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-09 Sales & Pipeline System Registry (Finance & Reporting per CSV)
export const SB09Registry = {
  packParents: [
    { code: 'SB-09-Axx', name: 'SB-09 Appendix Pack Rollup — Finance & Reporting', format: 'Pack Rollup (Appendix)', status: 'ACTIVE', file: 'OnPoint_SB-09_Appendix_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-09 Finance & Reporting/Appendix Pack', notes: 'PARENT PACK: contains SB-09-A01… (appendices, references, diagrams, artifacts).' },
    { code: 'SB-09-Wxx', name: 'SB-09 Web Copy Pack Rollup — Finance & Reporting', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-09_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-09 Finance & Reporting/Web Copy Pack', notes: 'PARENT PACK: contains SB-09-W01…W03 (landing, blocks/components, downloads hub).' },
    { code: 'SB-09-Txx', name: 'SB-09 Template Pack Rollup — Finance & Reporting', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-09_Template_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-09 Finance & Reporting/Template Pack', notes: 'PARENT PACK: contains SB-09-T01… (SOPs, scripts, email templates, policies, reusable assets).' },
  ],
  web: [
    { code: 'SB-09-W01', name: 'Chapter Landing Page Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-09_W01_Landing_Page_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Finance & Reporting/Web Copy Pack/W01 Landing Page Copy', notes: 'SB-09 main page hero/intro, outcomes, navigation, CTA' },
    { code: 'SB-09-W02', name: 'Section Blocks & Component Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-09_W02_Section_Blocks_Component_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Finance & Reporting/Web Copy Pack/W02 Blocks & Components', notes: 'Reusable section blocks (problem/solution, steps, proof, FAQ, CTAs)' },
    { code: 'SB-09-W03', name: 'Downloads Hub Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-09_W03_Downloads_Hub_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Finance & Reporting/Web Copy Pack/W03 Downloads Hub', notes: 'Downloads index text, access notes, disclaimers, what\'s included' },
  ],
  appendix: [
    { code: 'SB-09-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-09_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-09 Sales & Pipeline/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-09-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-09_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Sales & Pipeline/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-09-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-09_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-09 Sales & Pipeline/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-09-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-09_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-09 Sales & Pipeline/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-09-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-09_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Sales & Pipeline/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-09-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-09_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-09 Sales & Pipeline/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-09-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-09_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Sales & Pipeline/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-09-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-09_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-09 Sales & Pipeline/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-09-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-09_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Sales & Pipeline/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-09-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-09_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-09 Sales & Pipeline/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-09-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-09_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-09 Sales & Pipeline/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-10 Legal & Compliance System Registry (People & Org Design per CSV)
export const SB10Registry = {
  packParents: [
    { code: 'SB-10-Axx', name: 'SB-10 Appendix Pack Rollup — People & Org Design', format: 'Pack Rollup (Appendix)', status: 'ACTIVE', file: 'OnPoint_SB-10_Appendix_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-10 People & Org Design/Appendix Pack', notes: 'PARENT PACK: contains SB-10-A01… (appendices, references, diagrams, artifacts).' },
    { code: 'SB-10-Wxx', name: 'SB-10 Web Copy Pack Rollup — People & Org Design', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-10_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-10 People & Org Design/Web Copy Pack', notes: 'PARENT PACK: contains SB-10-W01…W03 (landing, blocks/components, downloads hub).' },
    { code: 'SB-10-Txx', name: 'SB-10 Template Pack Rollup — People & Org Design', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-10_Template_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-10 People & Org Design/Template Pack', notes: 'PARENT PACK: contains SB-10-T01… (SOPs, scripts, email templates, policies, reusable assets).' },
  ],
  web: [
    { code: 'SB-10-W01', name: 'Chapter Landing Page Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-10_W01_Landing_Page_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 People & Org Design/Web Copy Pack/W01 Landing Page Copy', notes: 'SB-10 main page hero/intro, outcomes, navigation, CTA' },
    { code: 'SB-10-W02', name: 'Section Blocks & Component Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-10_W02_Section_Blocks_Component_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 People & Org Design/Web Copy Pack/W02 Blocks & Components', notes: 'Reusable section blocks (problem/solution, steps, proof, FAQ, CTAs)' },
    { code: 'SB-10-W03', name: 'Downloads Hub Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-10_W03_Downloads_Hub_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 People & Org Design/Web Copy Pack/W03 Downloads Hub', notes: 'Downloads index text, access notes, disclaimers, what\'s included' },
  ],
  appendix: [
    { code: 'SB-10-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-10_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-10 Legal & Compliance/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-10-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-10_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 Legal & Compliance/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-10-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-10_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-10 Legal & Compliance/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-10-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-10_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-10 Legal & Compliance/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-10-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-10_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 Legal & Compliance/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-10-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-10_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-10 Legal & Compliance/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-10-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-10_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 Legal & Compliance/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-10-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-10_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-10 Legal & Compliance/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-10-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-10_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 Legal & Compliance/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-10-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-10_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-10 Legal & Compliance/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-10-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-10_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-10 Legal & Compliance/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-11 People & Culture System Registry (Legal, Risk & Compliance per CSV)
export const SB11Registry = {
  packParents: [
    { code: 'SB-11-Axx', name: 'SB-11 Appendix Pack Rollup — Legal, Risk & Compliance', format: 'Pack Rollup (Appendix)', status: 'ACTIVE', file: 'OnPoint_SB-11_Appendix_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-11 Legal Risk Compliance/Appendix Pack', notes: 'PARENT PACK: contains SB-11-A01… (appendices, references, diagrams, artifacts).' },
    { code: 'SB-11-Wxx', name: 'SB-11 Web Copy Pack Rollup — Legal, Risk & Compliance', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-11_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-11 Legal Risk Compliance/Web Copy Pack', notes: 'PARENT PACK: contains SB-11-W01…W03 (landing, blocks/components, downloads hub).' },
    { code: 'SB-11-Txx', name: 'SB-11 Template Pack Rollup — Legal, Risk & Compliance', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-11_Template_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-11 Legal Risk Compliance/Template Pack', notes: 'PARENT PACK: contains SB-11-T01… (SOPs, scripts, email templates, policies, reusable assets).' },
  ],
  web: [
    { code: 'SB-11-W01', name: 'Chapter Landing Page Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-11_W01_Landing_Page_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 Legal Risk Compliance/Web Copy Pack/W01 Landing Page Copy', notes: 'SB-11 main page hero/intro, outcomes, navigation, CTA' },
    { code: 'SB-11-W02', name: 'Section Blocks & Component Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-11_W02_Section_Blocks_Component_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 Legal Risk Compliance/Web Copy Pack/W02 Blocks & Components', notes: 'Reusable section blocks (problem/solution, steps, proof, FAQ, CTAs)' },
    { code: 'SB-11-W03', name: 'Downloads Hub Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-11_W03_Downloads_Hub_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 Legal Risk Compliance/Web Copy Pack/W03 Downloads Hub', notes: 'Downloads index text, access notes, disclaimers, what\'s included' },
  ],
  appendix: [
    { code: 'SB-11-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-11_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-11 People & Culture/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-11-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-11_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 People & Culture/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-11-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-11_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-11 People & Culture/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-11-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-11_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-11 People & Culture/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-11-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-11_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 People & Culture/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-11-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-11_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-11 People & Culture/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-11-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-11_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 People & Culture/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-11-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-11_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-11 People & Culture/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-11-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-11_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 People & Culture/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-11-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-11_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-11 People & Culture/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-11-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-11_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-11 People & Culture/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// SB-12 Scaling & Exit System Registry (Exit Readiness & M&A Package per CSV)
export const SB12Registry = {
  packParents: [
    { code: 'SB-12-Axx', name: 'SB-12 Appendix Pack Rollup — Exit Readiness & M&A Package', format: 'Pack Rollup (Appendix)', status: 'ACTIVE', file: 'OnPoint_SB-12_Appendix_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-12 Exit Readiness M&A/Appendix Pack', notes: 'PARENT PACK: contains SB-12-A01… (appendices, references, diagrams, artifacts).' },
    { code: 'SB-12-Wxx', name: 'SB-12 Web Copy Pack Rollup — Exit Readiness & M&A Package', format: 'Pack Rollup (Web Copy)', status: 'ACTIVE', file: 'OnPoint_SB-12_Web_Copy_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-12 Exit Readiness M&A/Web Copy Pack', notes: 'PARENT PACK: contains SB-12-W01…W03 (landing, blocks/components, downloads hub).' },
    { code: 'SB-12-Txx', name: 'SB-12 Template Pack Rollup — Exit Readiness & M&A Package', format: 'Pack Rollup (Templates)', status: 'ACTIVE', file: 'OnPoint_SB-12_Template_Pack_Rollup_v2026-02-17r3.zip', notion: '/Systems Book/SB-12 Exit Readiness M&A/Template Pack', notes: 'PARENT PACK: contains SB-12-T01… (SOPs, scripts, email templates, policies, reusable assets).' },
  ],
  web: [
    { code: 'SB-12-W01', name: 'Chapter Landing Page Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-12_W01_Landing_Page_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Exit Readiness M&A/Web Copy Pack/W01 Landing Page Copy', notes: 'SB-12 main page hero/intro, outcomes, navigation, CTA' },
    { code: 'SB-12-W02', name: 'Section Blocks & Component Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-12_W02_Section_Blocks_Component_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Exit Readiness M&A/Web Copy Pack/W02 Blocks & Components', notes: 'Reusable section blocks (problem/solution, steps, proof, FAQ, CTAs)' },
    { code: 'SB-12-W03', name: 'Downloads Hub Copy', format: 'DOCX', status: 'ACTIVE', file: 'OnPoint_SB-12_W03_Downloads_Hub_Copy_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Exit Readiness M&A/Web Copy Pack/W03 Downloads Hub', notes: 'Downloads index text, access notes, disclaimers, what\'s included' },
  ],
  appendix: [
    { code: 'SB-12-A01', name: 'System Diagram', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-12_A01_System_Diagram_v2026-02-17r3.pdf', notion: '/Systems Book/SB-12 Scaling & Exit/Appendix/A01 System Diagram', notes: 'Include in Appendix Pack index' },
    { code: 'SB-12-A02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-12_A02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Scaling & Exit/Appendix/A02 SOP Template', notes: 'Version-locked template' },
    { code: 'SB-12-A03', name: 'Scorecard', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-12_A03_Scorecard_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-12 Scaling & Exit/Appendix/A03 Scorecard', notes: 'KPI/scorecard worksheet' },
    { code: 'SB-12-A04', name: 'Example Pack', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-12_A04_Examples_v2026-02-17r3.pdf', notion: '/Systems Book/SB-12 Scaling & Exit/Appendix/A04 Examples', notes: 'Filled examples/screens' },
    { code: 'SB-12-A05', name: 'Standards & Definitions', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-12_A05_Standards_Definitions_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Scaling & Exit/Appendix/A05 Standards & Definitions', notes: 'Glossary + rules' },
  ],
  toolkit: [
    { code: 'SB-12-T01', name: 'Checklist', format: 'PDF', status: 'PLANNED', file: 'OnPoint_SB-12_T01_Checklist_v2026-02-17r3.pdf', notion: '/Systems Book/SB-12 Scaling & Exit/Toolkit/T01 Checklist', notes: 'Printable checklist' },
    { code: 'SB-12-T02', name: 'SOP Template', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-12_T02_SOP_Template_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Scaling & Exit/Toolkit/T02 SOP Template', notes: 'Execution SOP' },
    { code: 'SB-12-T03', name: 'Tracker', format: 'XLSX', status: 'PLANNED', file: 'OnPoint_SB-12_T03_Tracker_v2026-02-17r3.xlsx', notion: '/Systems Book/SB-12 Scaling & Exit/Toolkit/T03 Tracker', notes: 'Operating tracker' },
    { code: 'SB-12-T04', name: 'Scripts Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-12_T04_Scripts_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Scaling & Exit/Toolkit/T04 Scripts Pack', notes: 'Stakeholder comms scripts' },
    { code: 'SB-12-T05', name: 'Notion Template', format: 'MD', status: 'PLANNED', file: 'OnPoint_SB-12_T05_Notion_Template_v2026-02-17r3.md', notion: '/Systems Book/SB-12 Scaling & Exit/Toolkit/T05 Notion Template', notes: 'Database/page template' },
    { code: 'SB-12-T06', name: 'Prompt Pack', format: 'DOCX', status: 'PLANNED', file: 'OnPoint_SB-12_T06_Prompt_Pack_v2026-02-17r3.docx', notion: '/Systems Book/SB-12 Scaling & Exit/Toolkit/T06 Prompt Pack', notes: 'AI prompts' },
  ]
};

// Helper function to get format badge color
export const getFormatBadgeColor = (format) => {
  const colors = {
    'PDF': 'bg-red-100 text-red-800',
    'DOCX': 'bg-blue-100 text-blue-800',
    'XLSX': 'bg-green-100 text-green-800',
    'MD': 'bg-purple-100 text-purple-800',
  };
  return colors[format] || 'bg-gray-100 text-gray-800';
};

// Helper function to get status badge color
export const getStatusBadgeColor = (status) => {
  const colors = {
    'PLANNED': 'bg-yellow-100 text-yellow-800',
    'ACTIVE': 'bg-green-100 text-green-800',
    'DRAFT': 'bg-gray-100 text-gray-800',
    'LOCKED': 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

// Export all registries as a single object for easy lookup
export const allRegistries = {
  'SB-01': SB01Registry,
  'SB-02': SB02Registry,
  'SB-03': SB03Registry,
  'SB-04': SB04Registry,
  'SB-05': SB05Registry,
  'SB-06': SB06Registry,
  'SB-07': SB07Registry,
  'SB-08': SB08Registry,
  'SB-09': SB09Registry,
  'SB-10': SB10Registry,
  'SB-11': SB11Registry,
  'SB-12': SB12Registry,
};

export default allRegistries;
