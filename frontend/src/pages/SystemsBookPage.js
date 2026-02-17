import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, FolderTree, BarChart3, Briefcase, Settings, Globe,
  ChevronRight, ChevronDown, FileText, CheckCircle, ArrowRight,
  Shield, Clock, Users, Database, Lock, ExternalLink
} from 'lucide-react';

const SystemsBookPage = () => {
  const [activeSection, setActiveSection] = useState('SB-00');
  const [expandedSections, setExpandedSections] = useState(['SB-00']);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(s => s !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections = [
    {
      id: 'SB-00',
      title: 'Master Control',
      icon: Database,
      description: 'Canonical truth rules, folder architecture, naming standards, and registries',
      subsections: [
        { id: 'SB-00.1', title: 'Canonical Truth Rules' },
        { id: 'SB-00.2', title: 'Folder Architecture' },
        { id: 'SB-00.3', title: 'File Naming Standard' },
        { id: 'SB-00.4', title: 'Registries' },
        { id: 'SB-00.5', title: 'Change Control Workflow' },
      ]
    },
    {
      id: 'SB-01',
      title: 'CEO Control Layer',
      icon: BarChart3,
      description: 'Executive dashboard, financial models, and investor pipeline management',
      subsections: [
        { id: 'SB-01.1', title: 'Executive Dashboard' },
        { id: 'SB-01.2', title: 'Financial Models' },
        { id: 'SB-01.3', title: 'Investor / Buyer Pipeline' },
      ]
    },
    {
      id: 'SB-02',
      title: 'Deal Room',
      icon: Briefcase,
      description: 'M&A and capital raise workflow, external file sets, and gating process',
      subsections: [
        { id: 'SB-02.1', title: 'Canonical External File Set' },
        { id: 'SB-02.2', title: 'Gating Workflow' },
        { id: 'SB-02.3', title: 'Deal Room Folder Layout' },
        { id: 'SB-02.4', title: 'Release Checklist' },
      ]
    },
    {
      id: 'SB-03',
      title: 'Authority OS',
      icon: Settings,
      description: 'Internal operating system, cadence, governance, and automation',
      subsections: [
        { id: 'SB-03.1', title: 'Operating Rhythm (Cadence)' },
        { id: 'SB-03.2', title: 'Governance' },
        { id: 'SB-03.3', title: 'Automation Principles' },
      ]
    },
    {
      id: 'SB-04',
      title: 'Website & Content Ops',
      icon: Globe,
      description: 'Source of truth mapping, content types, and publishing workflow',
      subsections: [
        { id: 'SB-04.1', title: 'Source of Truth Mapping' },
        { id: 'SB-04.2', title: 'Content Types' },
        { id: 'SB-04.3', title: 'Publishing Workflow' },
        { id: 'SB-04.4', title: 'Website Page Coding Standard' },
      ]
    },
  ];

  const sectionContent = {
    'SB-00': {
      title: 'Master Control',
      content: (
        <div className="space-y-8">
          <div id="SB-00.1" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00.1 Canonical Truth Rules
            </h3>
            <ol className="space-y-3">
              {[
                { rule: 'One Master per asset', desc: '(CIM, Buyer Deck, Teaser, etc.). All other files are format outputs.' },
                { rule: 'Version-locked releases only', desc: 'go external (no "working drafts").' },
                { rule: 'Registry-driven', desc: 'every external file must have a matching registry entry (ID, version, status, hash/size, owner, distribution rules).' },
                { rule: 'Naming is non-negotiable', desc: '(see SB-00.3). If a file is renamed manually, it is "uncontrolled."' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0B1C3E] text-white rounded text-sm flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <span className="text-[#374151]">
                    <strong className="text-[#111827]">{item.rule}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div id="SB-00.2" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00.2 Folder Architecture (Top Level)
            </h3>
            <div className="bg-[#0B1C3E] text-white rounded p-6 font-mono text-sm">
              <div className="space-y-1">
                {[
                  '00 MASTER CONTROL/',
                  '01 CEO CONTROL LAYER/',
                  '02 AUTHORITY OS/',
                  '03 DEAL ROOM/',
                  '04 APPENDIX PACK/',
                  '05 LEGAL & COMPLIANCE/',
                  '06 WEBSITE & CONTENT OPS/',
                  '99 ARCHIVE/',
                ].map((folder, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FolderTree className="w-4 h-4 text-[#C5A059]" />
                    <span>{folder}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="SB-00.3" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00.3 File Naming Standard (Canonical)
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
              <p className="text-sm text-[#6B7280] mb-2">Pattern:</p>
              <code className="text-[#0B1C3E] font-mono bg-white px-2 py-1 rounded border">
                OnPoint_&lt;AssetName&gt;_&lt;Audience&gt;_vYYYY-MM-DDrN.&lt;ext&gt;
              </code>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[#6B7280]">Examples:</p>
              {[
                'OnPoint_CIM_External_v2026-02-17r2.docx',
                'OnPoint_Buyer_Deck_External_v2026-02-17r2.pptx',
                'OnPoint_Teaser_External_v2026-02-17r2.pdf',
                'OnPoint_Appendix_Pack_External_v2026-02-17r2.zip',
              ].map((file, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-[#6B7280]" />
                  <code className="font-mono text-[#374151]">{file}</code>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-00.4" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00.4 Registries (Must Exist)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { name: 'Version Registry', desc: 'Single source of truth for "what\'s live"' },
                { name: 'CIM Registry', desc: 'CIM-specific release tracking' },
                { name: 'Distribution Log', desc: 'Who received what, when, and under which NDA' },
              ].map((reg, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-4">
                  <Database className="w-5 h-5 text-[#C5A059] mb-2" />
                  <h4 className="font-semibold text-[#111827] mb-1">{reg.name}</h4>
                  <p className="text-sm text-[#6B7280]">{reg.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded p-4">
              <p className="text-sm font-medium text-[#111827] mb-2">Required columns (minimum):</p>
              <div className="flex flex-wrap gap-2">
                {['Asset ID', 'Asset Name', 'Version', 'Status', 'Release Date', 'Owner', 'Format Outputs', 'Notes'].map((col, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div id="SB-00.5" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00.5 Change Control Workflow
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {['Draft', 'Review', 'Release', 'Distribute', 'Archive'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <span className={`px-4 py-2 rounded font-medium text-sm ${
                    step === 'Release' ? 'bg-[#C5A059] text-white' : 'bg-gray-100 text-[#374151]'
                  }`}>
                    {step}
                  </span>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#9CA3AF]" />}
                </React.Fragment>
              ))}
            </div>
            <p className="text-sm text-[#6B7280] mt-4">
              <strong>Only the Release step</strong> generates the external outputs (PDF, PPTX, web export, etc.).
            </p>
          </div>
        </div>
      )
    },
    'SB-01': {
      title: 'CEO Control Layer',
      content: (
        <div className="space-y-8">
          <div id="SB-01.1" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-01.1 Executive Dashboard
            </h3>
            <p className="text-[#6B7280] mb-4">Live CEO-level visibility across the business.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { title: 'Sales Pipeline', metrics: 'Pipeline + conversion rates' },
                { title: 'Financial Health', metrics: 'Revenue, gross margin, cash' },
                { title: 'Operations', metrics: 'Cycle time, quality, rework' },
                { title: 'Customer Experience', metrics: 'NPS/CSAT, referrals' },
                { title: 'People', metrics: 'Capacity, utilization, hiring' },
              ].map((kpi, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-4">
                  <BarChart3 className="w-5 h-5 text-[#0B1C3E] mb-2" />
                  <h4 className="font-semibold text-[#111827]">{kpi.title}</h4>
                  <p className="text-sm text-[#6B7280]">{kpi.metrics}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
              <p className="text-sm font-medium text-[#111827] mb-2">Outputs:</p>
              <ul className="text-sm text-[#6B7280] space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  Weekly CEO snapshot (1 page)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  Monthly board / investor summary (5–10 pages)
                </li>
              </ul>
            </div>
          </div>

          <div id="SB-01.2" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-01.2 Financial Models
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {['3-Year Financial Model', 'Revenue Forecast', 'Valuation Model', 'Sensitivity Analysis'].map((model, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-3 text-center">
                  <FileText className="w-5 h-5 text-[#C5A059] mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#111827]">{model}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-sm text-yellow-800">
                <strong>Control rules:</strong> Only one "Master Model" workbook is editable. PDF exports are read-only outputs tied to a release.
              </p>
            </div>
          </div>

          <div id="SB-01.3" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-01.3 Investor / Buyer Pipeline
            </h3>
            <div className="space-y-2">
              {['Buyer Outreach CRM', 'Investor Pipeline Tracker', 'NDA Tracker', 'Investor Communications templates'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded">
                  <Users className="w-5 h-5 text-[#0B1C3E]" />
                  <span className="text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'SB-02': {
      title: 'Deal Room',
      content: (
        <div className="space-y-8">
          <div id="SB-02.1" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-02.1 Canonical External File Set (Release Package)
            </h3>
            <p className="text-[#6B7280] mb-4">This is the <strong>only</strong> external package:</p>
            <div className="space-y-3">
              {[
                { num: 1, name: 'Teaser', desc: 'Blind / sanitized, no sensitive details' },
                { num: 2, name: 'NDA Email + NDA', desc: 'Gating step' },
                { num: 3, name: 'CIM', desc: 'Full narrative' },
                { num: 4, name: 'Buyer Deck', desc: 'Presentation' },
                { num: 5, name: 'Appendix Pack', desc: 'Supporting docs + exhibits' },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded hover:border-[#C5A059]/50 transition-colors">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0B1C3E] text-white rounded font-bold flex items-center justify-center">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-semibold text-[#111827]">{item.name}</h4>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-02.2" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-02.2 Gating Workflow (Required)
            </h3>
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  'Teaser',
                  'Interested party request',
                  'NDA email',
                  'NDA signed',
                  'CIM access',
                  'Buyer Deck call',
                  'Appendix Pack access'
                ].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <span className={`px-3 py-2 rounded text-sm font-medium ${
                      i === 0 ? 'bg-green-100 text-green-800' :
                      i === 3 ? 'bg-[#C5A059] text-white' :
                      i === arr.length - 1 ? 'bg-[#0B1C3E] text-white' :
                      'bg-gray-100 text-[#374151]'
                    }`}>
                      {step}
                    </span>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#9CA3AF]" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div id="SB-02.3" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-02.3 Deal Room Folder Layout
            </h3>
            <div className="bg-[#0B1C3E] text-white rounded p-6 font-mono text-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <FolderTree className="w-4 h-4" />
                  <span>03 DEAL ROOM/</span>
                </div>
                {[
                  '01 Teaser/',
                  '02 NDA/',
                  '03 CIM/',
                  '04 Buyer Deck/',
                  '05 Disclosures & Q&A/',
                  '06 Distribution Logs/',
                ].map((folder, i) => (
                  <div key={i} className="flex items-center gap-2 pl-6">
                    <FolderTree className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{folder}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="SB-02.4" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-02.4 Release Checklist (Before External Send)
            </h3>
            <div className="space-y-2">
              {[
                'Version Registry updated',
                'CIM Registry updated',
                'Distribution Log entry created (or placeholder created)',
                'PDF outputs verified (no tracked changes, no comments)',
                'Links tested (OneDrive sharing permissions correct)',
                'Approved by Owner (CEO Control Layer)',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'SB-03': {
      title: 'Authority OS',
      content: (
        <div className="space-y-8">
          <div id="SB-03.1" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-03.1 Operating Rhythm (Cadence)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { freq: 'Daily', activity: 'Pipeline + execution alignment', duration: '15 min' },
                { freq: 'Weekly', activity: 'CEO dashboard review + priority reset', duration: '60 min' },
                { freq: 'Monthly', activity: 'Operating review + scorecard', duration: '90 min' },
                { freq: 'Quarterly', activity: 'Strategy + resource allocation', duration: 'Half-day' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#0B1C3E]">{item.freq}</span>
                    <span className="text-xs bg-[#C5A059]/10 text-[#C5A059] px-2 py-1 rounded">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[#6B7280]">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-03.2" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-03.2 Governance
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {['Owner', 'Editor', 'Reviewer', 'Approver'].map((role, i) => (
                <span key={i} className="px-4 py-2 bg-[#0B1C3E] text-white rounded font-medium">
                  {role}
                </span>
              ))}
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="text-red-800 font-medium">
                <Lock className="w-4 h-4 inline mr-2" />
                System rule: "No approval, no release."
              </p>
            </div>
          </div>

          <div id="SB-03.3" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-03.3 Automation Principles
            </h3>
            <div className="space-y-3">
              {[
                { title: 'Automate capture', desc: 'Intake forms, CRM, deal room requests' },
                { title: 'Automate reporting', desc: 'Dashboards, weekly snapshots' },
                { title: 'Automate versioning', desc: 'Registry update + release packaging' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded">
                  <Settings className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#111827]">{item.title}</h4>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'SB-04': {
      title: 'Website & Content Ops',
      content: (
        <div className="space-y-8">
          <div id="SB-04.1" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-04.1 Source of Truth Mapping
            </h3>
            <div className="space-y-3">
              {[
                { source: 'Word/Docx Master', purpose: 'Canonical long-form narrative (CIM, Systems Book)' },
                { source: 'Notion', purpose: 'Structured databases + operational dashboards' },
                { source: 'Website', purpose: 'Published pages derived from canonical sources' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded">
                  <Database className="w-5 h-5 text-[#0B1C3E]" />
                  <div>
                    <span className="font-semibold text-[#111827]">{item.source}</span>
                    <span className="text-[#6B7280]"> = {item.purpose}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-04.2" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-04.2 Content Types (Recommended)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded p-4">
                <h4 className="font-semibold text-[#111827] mb-2">Page</h4>
                <p className="text-sm text-[#6B7280]">About, Platform, Case Studies, Authority OS, Investor Relations (gated)</p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4">
                <h4 className="font-semibold text-[#111827] mb-2">Post</h4>
                <p className="text-sm text-[#6B7280]">Insights, News, Updates</p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4">
                <h4 className="font-semibold text-[#111827] mb-2">Library</h4>
                <p className="text-sm text-[#6B7280]">PDFs (released only), decks, one-pagers</p>
              </div>
            </div>
          </div>

          <div id="SB-04.3" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-04.3 Publishing Workflow (No Drift)
            </h3>
            <div className="space-y-2">
              {[
                'Update Master (Word / Notion)',
                'Release version (registry updated)',
                'Export website-ready copy (web formatting rules)',
                'Publish to site (tagged with version)',
                'Archive previous website version snapshot',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#C5A059] text-white rounded text-sm flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <span className="text-[#374151]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-04.4" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-04.4 Website Page Coding Standard
            </h3>
            <p className="text-[#6B7280] mb-4">Use the same section codes everywhere (website anchors, Notion headings, Word headings):</p>
            <div className="bg-[#0B1C3E] text-white rounded p-4 font-mono text-sm space-y-1">
              <div><span className="text-[#C5A059]">SB-00</span> Master Control</div>
              <div><span className="text-[#C5A059]">SB-01</span> CEO Control Layer</div>
              <div><span className="text-[#C5A059]">SB-02</span> Deal Room</div>
              <div><span className="text-[#C5A059]">SB-03</span> Authority OS</div>
              <div><span className="text-[#C5A059]">SB-04</span> Website & Content Ops</div>
            </div>
            <div className="mt-4 bg-gray-50 border border-gray-200 rounded p-4">
              <p className="text-sm text-[#6B7280] mb-2">Example website anchors:</p>
              <code className="text-sm text-[#0B1C3E]">/systems-book#SB-02</code><br />
              <code className="text-sm text-[#0B1C3E]">/systems-book#SB-02-4-release-checklist</code>
            </div>
          </div>
        </div>
      )
    },
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
              <div className="w-10 h-10 bg-[#0B1C3E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Libre Baskerville, serif' }}>TA</span>
              </div>
              <span className="font-semibold text-[#111827]">TessaAuthority</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-[#6B7280] hover:text-[#111827]">Home</Link>
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
            <span>Systems Book</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-10 h-10 text-[#C5A059]" />
            <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Systems Book
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl">
            The canonical operating manual for OnPoint Authority Systems. Defines enterprise architecture, deal room workflow, and governance.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-xs bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">
              v2026-02-17r2
            </span>
            <span className="text-xs text-gray-400">
              Status: Working Master | Owner: CEO Control Layer
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Contents</p>
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      toggleSection(section.id);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded text-left transition-colors ${
                      activeSection === section.id 
                        ? 'bg-[#0B1C3E] text-white' 
                        : 'bg-white border border-gray-200 text-[#374151] hover:bg-gray-50'
                    }`}
                    data-testid={`nav-${section.id}`}
                  >
                    <div className="flex items-center gap-2">
                      <section.icon className={`w-4 h-4 ${activeSection === section.id ? 'text-[#C5A059]' : 'text-[#6B7280]'}`} />
                      <span className="text-sm font-medium">{section.id}</span>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {expandedSections.includes(section.id) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {section.subsections.map((sub) => (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          className="block text-xs text-[#6B7280] hover:text-[#111827] py-1 pl-4 border-l border-gray-200"
                          onClick={() => setActiveSection(section.id)}
                        >
                          {sub.id} {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                {sections.find(s => s.id === activeSection)?.icon && 
                  React.createElement(sections.find(s => s.id === activeSection).icon, {
                    className: "w-6 h-6 text-[#C5A059]"
                  })
                }
                <div>
                  <h2 className="text-2xl font-bold text-[#111827]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {activeSection} — {sectionContent[activeSection]?.title}
                  </h2>
                  <p className="text-sm text-[#6B7280]">
                    {sections.find(s => s.id === activeSection)?.description}
                  </p>
                </div>
              </div>
              {sectionContent[activeSection]?.content}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7280]">
              © {new Date().getFullYear()} TessaAuthority. Systems Book v2026-02-17r2
            </span>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-[#6B7280] hover:text-[#111827]">Home</Link>
              <Link to="/login" className="text-sm text-[#6B7280] hover:text-[#111827]">Buyer Portal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SystemsBookPage;
