import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, Database, FileText, Globe, BookOpen, 
  ChevronRight, CheckCircle, Lock, AlertTriangle,
  ArrowRight, Download, Table, Code, Layers
} from 'lucide-react';

const SyncMapPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedArea, setSelectedArea] = useState('all');

  const syncData = {
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

  const areas = [
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

  const getFilteredData = () => {
    if (selectedArea === 'all') {
      return Object.values(syncData).flat();
    }
    return syncData[selectedArea] || [];
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0B1C3E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Libre Baskerville, serif' }}>TA</span>
              </div>
              <span className="font-semibold text-[#111827]">OnPoint Authority Systems, Inc.</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-[#6B7280] hover:text-[#111827]">Home</Link>
              <Link to="/systems-book" className="text-sm text-[#6B7280] hover:text-[#111827]">Systems Book</Link>
              <Link to="/login" className="btn btn-ghost text-sm">Buyer Portal</Link>
              <Link to="/admin/login" className="btn btn-primary text-sm">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12 bg-[#0B1C3E]">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-[#C5A059] text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/systems-book" className="hover:underline">Systems Book</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Sync Map</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <RefreshCw className="w-10 h-10 text-[#C5A059]" />
            <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Website ↔ Book Sync Map
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl">
            A single crosswalk that keeps Website Architecture pages, Notion operating pages, and the Systems Book chapters synchronized using one shared Canonical ID (CID).
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-xs bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">
              v2026-02-17r3
            </span>
            <span className="text-xs text-gray-400">
              {Object.values(syncData).flat().length} mappings • One System Build
            </span>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="container-custom py-8">
        <div className="flex flex-wrap gap-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
          {[
            { id: 'overview', label: 'Overview', icon: Layers },
            { id: 'cid-rules', label: 'Coding Standard', icon: Code },
            { id: 'source-truth', label: 'Source of Truth', icon: Database },
            { id: 'sync-table', label: 'Sync Table', icon: Table },
            { id: 'cadence', label: 'Cadence', icon: RefreshCw },
            { id: 'notion', label: 'Notion Tracker', icon: Database },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-colors ${
                activeTab === tab.id 
                  ? 'bg-white text-[#111827] shadow-sm' 
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
              data-testid={`tab-${tab.id}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                What is the Sync Map?
              </h2>
              <p className="text-[#6B7280] mb-6 max-w-3xl">
                The Sync Map ensures that every piece of content across <strong>Website</strong>, <strong>Notion</strong>, and <strong>Word/Book</strong> stays synchronized using a single <strong>Canonical ID (CID)</strong>. No more drift, no more version confusion.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Globe, title: 'Website', desc: 'CID in front matter metadata', color: 'bg-blue-500' },
                  { icon: Database, title: 'Notion', desc: 'CID as database property', color: 'bg-purple-500' },
                  { icon: BookOpen, title: 'Systems Book', desc: 'CID in heading prefixes', color: 'bg-green-500' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded p-6 text-center">
                    <div className={`w-12 h-12 ${item.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-6 h-6 ${item.color.replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="font-semibold text-[#111827] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
                <p className="text-sm text-[#374151]">
                  <strong className="text-[#0B1C3E]">Key Principle:</strong> The CID is universal — the same string must appear in Notion, Word, and Website. No renumbering after external publication.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: Object.values(syncData).flat().length.toString(), label: 'Mapped Pages' },
                { value: '10', label: 'Website Areas' },
                { value: '6', label: 'Notion DBs' },
                { value: 'v2026-02-17r2', label: 'Version' },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-4 text-center">
                  <p className="text-2xl font-bold text-[#0B1C3E]">{stat.value}</p>
                  <p className="text-sm text-[#6B7280]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CID Rules Tab */}
        {activeTab === 'cid-rules' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Canonical ID (CID) Rules
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-3">Format</h3>
                  <div className="bg-[#0B1C3E] text-white rounded p-4 font-mono">
                    <code>SB-##-##</code> or <code>SB-##-##-##</code>
                  </div>
                  <p className="text-sm text-[#6B7280] mt-2">
                    Matches Systems Book section codes (e.g., <code className="bg-gray-100 px-1 rounded">SB-04-02-01</code>)
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Website */}
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-500" />
                      Website (Front Matter)
                    </h4>
                    <div className="bg-gray-900 text-green-400 rounded p-4 font-mono text-sm">
                      <pre>{`cid: SB-04-02-01
version: v2026-02-17r1
lock: locked | draft
source_of_truth: notion`}</pre>
                    </div>
                  </div>

                  {/* Notion */}
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4 text-purple-500" />
                      Notion (Properties)
                    </h4>
                    <div className="bg-gray-50 border border-gray-200 rounded p-4 text-sm space-y-2">
                      {['CID (text, required)', 'Status (Draft/Review/Locked)', 'Owner (person)', 'Last Synced (date)', 'Source of Truth (select)'].map((prop, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-purple-500" />
                          <span className="text-[#374151]">{prop}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Word */}
                  <div>
                    <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-green-500" />
                      Word (Heading Format)
                    </h4>
                    <div className="bg-gray-50 border border-gray-200 rounded p-4 text-sm">
                      <p className="text-[#374151] mb-2">Prefix every Heading 1/2 with the CID:</p>
                      <code className="bg-white border px-2 py-1 rounded text-[#0B1C3E]">SB-04-02-01 Information Architecture</code>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <p className="text-sm text-red-800">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    <strong>No renumbering</strong> after external publication. If structure changes, add a new CID and mark the old CID as <code className="bg-red-100 px-1 rounded">DEPRECATED</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sync Table Tab */}
        {activeTab === 'sync-table' && (
          <div className="space-y-6 animate-fade-in">
            {/* Area Filter */}
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedArea === area.id
                      ? 'bg-[#0B1C3E] text-white'
                      : 'bg-white border border-gray-200 text-[#6B7280] hover:bg-gray-50'
                  }`}
                >
                  {area.label}
                  <span className="ml-1.5 text-xs opacity-70">({area.count})</span>
                </button>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-[#111827]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Sync Map Table
                </h2>
                <p className="text-[#6B7280] mt-2">
                  Complete mapping of SB codes ↔ WP codes ↔ Notion databases. Version: v2026-02-17r2
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-4 py-3">SB Code</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-4 py-3">WP Code</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-4 py-3">Title</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-4 py-3">URL Slug</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-4 py-3">Notion DB</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-4 py-3">Sync Rule</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {getFilteredData().map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <code className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">
                            {row.sb}
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs bg-[#C5A059]/20 text-[#C5A059] px-2 py-1 rounded font-mono">
                            {row.wp}
                          </code>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#374151] max-w-xs truncate" title={row.title}>
                          {row.title}
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono text-[#6B7280]">
                            {row.slug}
                          </code>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            {row.db}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-[#6B7280]">{row.sync}</td>
                        <td className="px-4 py-3">
                          <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded ${
                            row.status === 'Active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {row.status === 'Active' ? <Lock className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Workflow Tab */}
        {activeTab === 'workflow' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Sync Workflow (Version-Locked)
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {[
                  { step: '1', label: 'Draft/Revise in Notion', color: 'bg-purple-500' },
                  { step: '2', label: 'Commit to Book (Word)', color: 'bg-green-500' },
                  { step: '3', label: 'Publish to Website', color: 'bg-blue-500' },
                  { step: '4', label: 'Log in Registry', color: 'bg-[#C5A059]' },
                ].map((item, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 ${item.color} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                        {item.step}
                      </span>
                      <span className="text-sm text-[#374151] font-medium">{item.label}</span>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-5 h-5 text-[#9CA3AF]" />}
                  </React.Fragment>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-[#111827] mb-4">Quick Checks (Before Publishing)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Every page/chapter has exactly one CID',
                  'Website pages include cid + version + lock fields',
                  'Notion row contains CID + Status + Owner + Last Synced',
                  'Externally shared artifacts are marked LOCKED',
                ].map((check, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#374151]">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Source of Truth Tab */}
        {activeTab === 'source-truth' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Source-of-Truth Rules
              </h2>
              <p className="text-[#6B7280] mb-6">
                Each content type has exactly one canonical source. Changes flow in one direction to prevent drift.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { source: 'Systems Book (Word)', arrow: '→', targets: 'Notion → Website', desc: 'Long-form governance, playbooks, procedures', color: 'bg-green-500' },
                  { source: 'Notion', arrow: '→', targets: 'Website', desc: 'Operating databases, trackers, dynamic lists', color: 'bg-purple-500' },
                  { source: 'CIM Registry', arrow: '→', targets: 'Data Room → Notion', desc: 'Version-locked investor materials', color: 'bg-[#C5A059]' },
                  { source: 'Website', arrow: '↔', targets: 'Notion (selected)', desc: 'Public pages, marketing content (2-way sync)', color: 'bg-blue-500' },
                ].map((rule, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded">
                    <span className={`w-3 h-3 ${rule.color} rounded-full flex-shrink-0`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-[#111827]">{rule.source}</span>
                        <span className="text-[#9CA3AF]">{rule.arrow}</span>
                        <span className="text-[#6B7280]">{rule.targets}</span>
                      </div>
                      <p className="text-sm text-[#6B7280]">{rule.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded p-4">
                <p className="text-sm text-red-800">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  <strong>Never edit downstream.</strong> If Website is downstream, don't edit there—update the source and re-sync.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Publishing Cadence Tab */}
        {activeTab === 'cadence' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Publishing Cadence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { 
                    freq: 'Weekly', 
                    title: 'Hygiene Check',
                    tasks: ['Review Notion Sync Tracker for drift', 'Update Last Synced dates', 'Fix any broken links'],
                    color: 'bg-blue-500'
                  },
                  { 
                    freq: 'Monthly', 
                    title: 'External Refresh',
                    tasks: ['Review public website pages', 'Update marketing content', 'Check CIM versions'],
                    color: 'bg-purple-500'
                  },
                  { 
                    freq: 'Quarterly', 
                    title: 'Freeze & Audit',
                    tasks: ['Lock all external artifacts', 'Full registry audit', 'Archive old versions'],
                    color: 'bg-[#C5A059]'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`w-3 h-3 ${item.color} rounded-full`} />
                      <span className="text-xs font-semibold text-[#6B7280] uppercase">{item.freq}</span>
                    </div>
                    <h3 className="font-semibold text-[#111827] mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-[#0B1C3E] text-white rounded p-6">
                <h3 className="font-semibold mb-4">Version Lock Rule</h3>
                <p className="text-gray-300 text-sm">
                  Any artifact distributed externally (CIM, Teaser, Buyer Deck) is <strong>immutable</strong> once sent. 
                  New version required for any changes. Log change in registry with reason.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Notion Tracker Tab */}
        {activeTab === 'notion' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                OPS — Sync Tracker (Notion Database)
              </h2>
              <p className="text-[#6B7280] mb-6">
                Create this database in Notion to track sync status across all systems.
              </p>

              <h3 className="text-lg font-semibold text-[#111827] mb-4">Required Properties</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase px-4 py-3">Property</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase px-4 py-3">Type</th>
                      <th className="text-left text-xs font-semibold text-[#6B7280] uppercase px-4 py-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { prop: 'CID', type: 'Text (required)', purpose: 'Canonical ID (SB-##, WP-##)' },
                      { prop: 'Title', type: 'Title', purpose: 'Page/section name' },
                      { prop: 'Status', type: 'Select', purpose: 'Draft | Review | Locked | Retired' },
                      { prop: 'Source of Truth', type: 'Select', purpose: 'Book | Notion | Website | CIM' },
                      { prop: 'Owner', type: 'Person', purpose: 'Responsible for updates' },
                      { prop: 'Last Synced', type: 'Date', purpose: 'When last verified in sync' },
                      { prop: 'Version', type: 'Text', purpose: 'v2026-02-17r3' },
                      { prop: 'Website URL', type: 'URL', purpose: 'Link to live page' },
                      { prop: 'OneDrive Link', type: 'URL', purpose: 'Link to source file' },
                      { prop: 'Next Review', type: 'Date', purpose: 'Scheduled review date' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">{row.prop}</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#6B7280]">{row.type}</td>
                        <td className="px-4 py-3 text-sm text-[#374151]">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-[#111827] mb-4">Quick Setup</h3>
              <div className="space-y-3">
                {[
                  'Create new database in Notion: "OPS — Sync Tracker"',
                  'Add all properties from table above',
                  'Import CSV (from Data Room) to populate initial rows',
                  'Set Status = Draft for new items',
                  'Assign Owner to each row',
                  'Set Source of Truth based on content type',
                  'Add links to OneDrive + website',
                  'Set Next Review date',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#0B1C3E] text-white rounded text-sm flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#374151]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7280]">
              © {new Date().getFullYear()} OnPoint Authority Systems, Inc.. Sync Map v2026-02-17r3
            </span>
            <div className="flex items-center gap-4">
              <Link to="/systems-book" className="text-sm text-[#6B7280] hover:text-[#111827]">Systems Book</Link>
              <Link to="/login" className="text-sm text-[#6B7280] hover:text-[#111827]">Buyer Portal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SyncMapPage;
