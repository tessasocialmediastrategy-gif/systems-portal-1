import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, FolderTree, BarChart3, Briefcase, Settings, Globe,
  ChevronRight, ChevronDown, FileText, CheckCircle, ArrowRight,
  Shield, Clock, Users, Database, Lock, ExternalLink, Map,
  Layout, FileCode, Navigation, Search, GitBranch, AlertTriangle,
  Layers, Target, Mail, TrendingUp, DollarSign, Scale, Cpu,
  Building, RefreshCw, Calculator, FileCheck, Cog, Lightbulb,
  Server, UserCog
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
      title: 'Master Control & Registry',
      icon: Database,
      description: 'Single source of truth, version control, naming standards',
      subsections: [
        { id: 'SB-00-01', title: 'Purpose & Non-Negotiables' },
        { id: 'SB-00-02', title: 'File Naming Standard' },
        { id: 'SB-00-03', title: 'Registry Fields' },
      ]
    },
    {
      id: 'SB-01',
      title: 'Authority OS Overview',
      icon: Layers,
      description: 'Operating system architecture and layer model',
      subsections: [
        { id: 'SB-01-01', title: 'Authority OS Definition' },
        { id: 'SB-01-02', title: 'Layer Model' },
      ]
    },
    {
      id: 'SB-02',
      title: 'Data Room & Access Control',
      icon: FolderTree,
      description: 'File system taxonomy, permissions, and security',
      subsections: [
        { id: 'SB-02-01', title: 'Folder Taxonomy' },
        { id: 'SB-02-02', title: 'Access Control Standard' },
      ]
    },
    {
      id: 'SB-03',
      title: 'CIM Program',
      icon: Briefcase,
      description: 'Teaser → NDA → CIM → Buyer Deck → Appendix Pack',
      subsections: [
        { id: 'SB-03-01', title: 'Canonical Deliverable Chain' },
        { id: 'SB-03-02', title: 'Lock Rules' },
        { id: 'SB-03-03', title: 'Master vs. External Formats' },
      ]
    },
    {
      id: 'SB-04',
      title: 'Investor Readiness + Website Spec',
      icon: Globe,
      description: 'Complete website architecture and digital layer specification',
      subsections: [
        { id: 'SB-04-01', title: 'Investor Readiness: Core Proof Pack' },
        { id: 'SB-04-02-01', title: 'Information Architecture & Sitemap' },
        { id: 'SB-04-02-02', title: 'Page Templates & Components' },
        { id: 'SB-04-02-03', title: 'Content Types & CMS Fields' },
        { id: 'SB-04-02-04', title: 'Navigation & UX Standards' },
        { id: 'SB-04-02-05', title: 'SEO, Analytics & Tracking' },
        { id: 'SB-04-02-06', title: 'Publishing Workflow & Governance' },
        { id: 'SB-04-02-07', title: 'Version Tagging & Locking' },
        { id: 'SB-04-02-08', title: 'QA, Accessibility & Security' },
        { id: 'SB-04-03', title: 'Website ↔ CIM Mapping' },
      ]
    },
    {
      id: 'SB-05',
      title: 'Buyer Pipeline',
      icon: Target,
      description: 'Pipeline stages and communications library',
      subsections: [
        { id: 'SB-05-01', title: 'Pipeline Stages' },
        { id: 'SB-05-02', title: 'Standard Comms Library' },
      ]
    },
    {
      id: 'SB-06',
      title: 'KPI / Metrics',
      icon: TrendingUp,
      description: 'Scorecards and reporting framework',
      subsections: []
    },
    {
      id: 'SB-07',
      title: 'Finance and Modeling System',
      icon: Calculator,
      description: 'Close calendar, forecasting standards, buyer-ready package',
      subsections: [
        { id: 'SB-07-01', title: 'Domain Standards' },
        { id: 'SB-07-02', title: 'Canonical Artifact Set' },
        { id: 'SB-07-03', title: 'Core Workflows' },
        { id: 'SB-07-04', title: 'RACI & Metrics' },
      ]
    },
    {
      id: 'SB-08',
      title: 'Legal and Compliance System',
      icon: Scale,
      description: 'Signature authority, compliance calendar, privacy/security basics',
      subsections: [
        { id: 'SB-08-01', title: 'Domain Standards' },
        { id: 'SB-08-02', title: 'Canonical Artifact Set' },
        { id: 'SB-08-03', title: 'Core Workflows' },
        { id: 'SB-08-04', title: 'RACI & Metrics' },
      ]
    },
    {
      id: 'SB-09',
      title: 'Operations and Delivery System',
      icon: Cog,
      description: 'Delivery phases, QA, escalation, runbooks',
      subsections: [
        { id: 'SB-09-01', title: 'Domain Standards' },
        { id: 'SB-09-02', title: 'Canonical Artifact Set' },
        { id: 'SB-09-03', title: 'Core Workflows' },
        { id: 'SB-09-04', title: 'RACI & Metrics' },
      ]
    },
    {
      id: 'SB-10',
      title: 'Product and IP System',
      icon: Lightbulb,
      description: 'Roadmap governance, IP register rules, release standards',
      subsections: [
        { id: 'SB-10-01', title: 'Domain Standards' },
        { id: 'SB-10-02', title: 'Canonical Artifact Set' },
        { id: 'SB-10-03', title: 'Core Workflows' },
        { id: 'SB-10-04', title: 'RACI & Metrics' },
      ]
    },
    {
      id: 'SB-11',
      title: 'Technology Stack and Integrations',
      icon: Server,
      description: 'Stack layers, access/security, change management',
      subsections: [
        { id: 'SB-11-01', title: 'Domain Standards' },
        { id: 'SB-11-02', title: 'Canonical Artifact Set' },
        { id: 'SB-11-03', title: 'Core Workflows' },
        { id: 'SB-11-04', title: 'RACI & Metrics' },
      ]
    },
    {
      id: 'SB-12',
      title: 'HR and Org Design System',
      icon: UserCog,
      description: 'Role scorecards, hiring/onboarding, performance cadence',
      subsections: [
        { id: 'SB-12-01', title: 'Domain Standards' },
        { id: 'SB-12-02', title: 'Canonical Artifact Set' },
        { id: 'SB-12-03', title: 'Core Workflows' },
        { id: 'SB-12-04', title: 'RACI & Metrics' },
      ]
    },
  ];

  const sectionContent = {
    'SB-00': {
      title: 'Master Control & Registry System',
      content: (
        <div className="space-y-8">
          <div id="SB-00-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00-01 Purpose & Non-Negotiables
            </h3>
            <div className="space-y-3">
              {[
                { rule: 'Single Source of Truth', desc: 'One master registry governs all deliverables.' },
                { rule: 'Version-Locked Artifacts', desc: 'Every outward-facing file is immutable once distributed.' },
                { rule: 'Auditability', desc: 'Every send is logged (who/what/when/version).' },
                { rule: 'Two External Formats Only', desc: 'Institutional (modern) + classic/print (Garamond/Times).' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span className="text-[#374151]">
                    <strong className="text-[#111827]">{item.rule}:</strong> {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-00-02" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00-02 Canonical File Naming Standard
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
              <p className="text-sm text-[#6B7280] mb-2">Pattern:</p>
              <code className="text-[#0B1C3E] font-mono bg-white px-3 py-2 rounded border block">
                &lt;Org&gt;_&lt;Artifact&gt;_&lt;Audience&gt;_&lt;Format&gt;_&lt;Version&gt;.&lt;ext&gt;
              </code>
            </div>
            <div className="bg-[#0B1C3E] text-white rounded p-4 font-mono text-sm">
              <p className="text-[#C5A059] mb-2">Example:</p>
              <code>OnPoint_CIM_External_Modern_v2026-02-17r2.pdf</code>
            </div>
          </div>

          <div id="SB-00-03" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-00-03 Registry Fields
            </h3>
            <p className="text-[#6B7280] mb-4">Minimum fields for every artifact:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Artifact_Code', 'System_Code', 'Title', 'Audience', 'Format', 'File_Type', 'Version', 'Status', 'Owner', 'Last_Updated', 'Hash', 'Notes'].map((field, i) => (
                <div key={i} className="text-xs bg-white border border-gray-200 px-3 py-2 rounded font-mono">
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'SB-01': {
      title: 'Authority OS Overview & Architecture',
      content: (
        <div className="space-y-8">
          <div id="SB-01-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-01-01 Authority OS Definition
            </h3>
            <p className="text-[#6B7280] mb-4">
              <strong className="text-[#111827]">Authority OS</strong> is the documented, repeatable system that:
            </p>
            <div className="space-y-3">
              {[
                'Produces trusted materials (CIM & support pack)',
                'Governs distribution (NDA gated)',
                'Maintains a clean version trail for buyers, bankers, and internal leadership'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded">
                  <span className="w-6 h-6 bg-[#0B1C3E] text-white rounded text-sm flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <span className="text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-01-02" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-01-02 Layer Model
            </h3>
            <div className="space-y-3">
              {[
                { layer: 'CEO Control Layer', desc: 'KPIs, dashboards, weekly operator cadence', icon: BarChart3 },
                { layer: 'CIM Program Layer', desc: 'Teaser → NDA → CIM → Buyer Deck → Appendix', icon: Briefcase },
                { layer: 'Data Room Layer', desc: 'Access, permissions, indexing, audit log', icon: FolderTree },
                { layer: 'Delivery Layer', desc: 'Pipeline from lead → NDA → distribution → follow-up', icon: Target },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded">
                  <item.icon className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#111827]">{item.layer}</h4>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'SB-02': {
      title: 'Data Room, File System & Access Control',
      content: (
        <div className="space-y-8">
          <div id="SB-02-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-02-01 Folder Taxonomy (Canonical)
            </h3>
            <div className="bg-[#0B1C3E] text-white rounded p-6 font-mono text-sm">
              {[
                '00 MASTER CONTROL',
                '01 CEO CONTROL LAYER',
                '02 INVESTOR READINESS (CIM PROGRAM)',
                '03 DATA ROOM (APPENDIX PACK)',
                '04 BUYER PIPELINE',
                '05 FINANCIALS',
                '06 LEGAL & COMPLIANCE',
                '07 OPERATIONS',
                '08 TECH & PRODUCT',
                '09 HR & ORG',
                '99 ARCHIVE',
              ].map((folder, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <FolderTree className="w-4 h-4 text-[#C5A059]" />
                  <span>{folder}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-02-02" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-02-02 Access Control Standard
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
              <p className="text-sm text-yellow-800">
                <Lock className="w-4 h-4 inline mr-2" />
                External buyer access is <strong>time-bound</strong> and <strong>scope-bound</strong>. NDA required for any non-teaser content.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#111827]">Role Tiers:</p>
              {['Internal Admin', 'Internal Read', 'Banker / Advisor', 'Buyer (NDA)', 'Buyer (Redacted / Limited)'].map((role, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded">
                  <Shield className="w-4 h-4 text-[#0B1C3E]" />
                  <span className="text-[#374151]">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'SB-03': {
      title: 'CIM Program',
      content: (
        <div className="space-y-8">
          <div id="SB-03-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-03-01 Canonical Deliverable Chain
            </h3>
            <div className="space-y-3">
              {[
                { num: 1, name: 'Teaser', desc: 'No NDA required', badge: 'PUBLIC' },
                { num: 2, name: 'NDA Email + NDA', desc: 'Gating step', badge: 'GATE' },
                { num: 3, name: 'CIM', desc: 'PDF + DOCX master', badge: 'NDA' },
                { num: 4, name: 'Buyer Deck', desc: 'PPTX + PDF', badge: 'NDA' },
                { num: 5, name: 'Appendix Pack', desc: 'ZIP of exhibits / data room index', badge: 'NDA' },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#0B1C3E] text-white rounded font-bold flex items-center justify-center">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#111827]">{item.name}</h4>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.badge === 'PUBLIC' ? 'bg-green-100 text-green-800' :
                    item.badge === 'GATE' ? 'bg-[#C5A059]/20 text-[#C5A059]' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-03-02" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-03-02 Lock Rules
            </h3>
            <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
              <p className="text-red-800">
                <Lock className="w-4 h-4 inline mr-2" />
                Only <strong>locked</strong> versions can be sent externally.
              </p>
            </div>
            <p className="text-[#6B7280] mb-3">Any change after lock creates a new version and requires:</p>
            <ul className="space-y-2">
              {['Updated registry entry', 'Change note', 'Distribution log entry for re-send'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#374151]">
                  <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="SB-03-03" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-03-03 Master vs. External Formats
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded p-4">
                <FileText className="w-5 h-5 text-[#0B1C3E] mb-2" />
                <h4 className="font-semibold text-[#111827]">Master</h4>
                <p className="text-sm text-[#6B7280]">Word DOCX (editable source of truth)</p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4">
                <FileText className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="font-semibold text-[#111827]">External</h4>
                <p className="text-sm text-[#6B7280]">PDF (Modern + Classic)</p>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4">
                <Layout className="w-5 h-5 text-green-600 mb-2" />
                <h4 className="font-semibold text-[#111827]">Presentation</h4>
                <p className="text-sm text-[#6B7280]">PPTX/PDF (Buyer Deck)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-04': {
      title: 'Investor Readiness + Website Architecture Spec',
      content: (
        <div className="space-y-8">
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4 mb-6">
            <p className="text-sm text-[#374151]">
              <Globe className="w-4 h-4 inline mr-2 text-[#C5A059]" />
              This section defines the canonical structure for the <strong>public-facing</strong> and <strong>NDA-gated</strong> website layer.
            </p>
          </div>

          <div id="SB-04-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-04-01 Investor Readiness: Core Proof Pack
            </h3>
            <p className="text-[#6B7280] mb-4">Your digital layer must be supported by proof:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Corporate profile + leadership bios',
                'KPI snapshots + recurring trend charts',
                'Financial model outputs (summary)',
                'Contracts / legal summaries',
                'Case studies / outcomes library',
                'Operating cadence artifacts'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded">
                  <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-sm text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-04-02-01" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <Map className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-01 Information Architecture & Sitemap
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-[#111827] mb-3">Public Pages</p>
                <div className="bg-white border border-gray-200 rounded p-4 font-mono text-sm space-y-1">
                  {['/ Home', '/about', '/leadership', '/platform', '/outcomes', '/metrics', '/resources', '/faq', '/contact'].map((page, i) => (
                    <div key={i} className="text-[#374151]">{page}</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] mb-3">NDA-Gated Pages</p>
                <div className="bg-[#0B1C3E] text-white rounded p-4 font-mono text-sm space-y-1">
                  {['/data-room', '/data-room/cim', '/data-room/buyer-deck', '/data-room/appendix', '/data-room/registry', '/data-room/updates'].map((page, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Lock className="w-3 h-3 text-[#C5A059]" />
                      {page}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="SB-04-02-02" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <Layout className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-02 Page Templates & Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-semibold text-[#111827] mb-3">Template Types</p>
                <div className="space-y-2">
                  {['Standard Page (hero + sections)', 'Landing Page (single CTA)', 'Index/Hub (lists posts)', 'Gated Download Page', 'Release Notes Page'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#374151]">
                      <span className="w-5 h-5 bg-gray-100 rounded text-xs flex items-center justify-center">{i+1}</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] mb-3">Component Library</p>
                <div className="flex flex-wrap gap-2">
                  {['Hero', 'Credibility bar', 'Benefit blocks', 'Case study', 'KPI cards', 'CTA strip', 'Footer'].map((c, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-sm text-yellow-800">
                <strong>Design Rules:</strong> One primary CTA per page. Every page maps to a single owner and KPI.
              </p>
            </div>
          </div>

          <div id="SB-04-02-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <FileCode className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-03 Content Types & CMS Fields
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {['Page', 'Post', 'CaseStudy', 'MetricSnapshot', 'LeadershipProfile', 'DownloadAsset'].map((type, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-3 text-center">
                  <code className="text-sm text-[#0B1C3E]">{type}</code>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#111827] mb-2">Required Metadata Fields:</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 font-mono text-xs">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['title', 'slug', 'summary', 'primary_cta', 'owner', 'status', 'system_code', 'last_reviewed', 'version_tag'].map((f, i) => (
                  <span key={i} className="text-[#374151]">{f}</span>
                ))}
              </div>
            </div>
          </div>

          <div id="SB-04-02-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <Navigation className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-04 Navigation & UX Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded p-4">
                <p className="text-sm font-semibold text-[#111827] mb-2">Primary Nav</p>
                <p className="text-xs text-[#6B7280]">Home, Platform, Outcomes, Metrics, Resources, About, Contact</p>
              </div>
              <div className="bg-[#0B1C3E] text-white rounded p-4">
                <p className="text-sm font-semibold mb-2">Gated Nav (post-auth)</p>
                <p className="text-xs text-gray-300">Data Room, CIM, Buyer Deck, Appendix, Registry, Updates</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#111827]">UX Standards:</p>
              {[
                'No dead ends: every page ends with a next-step CTA',
                'Forms must route into CRM (or monitored inbox)',
                'Gated pages show: version, expiration, request update link'
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#374151]">
                  <CheckCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div id="SB-04-02-05" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <Search className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-05 SEO, Analytics & Tracking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-[#111827] mb-3">SEO Requirements</p>
                <ul className="space-y-2 text-sm text-[#374151]">
                  {['Unique title + meta per page', 'Clean slug structure', 'Schema markup (Organization, Article)', 'Canonical tags for duplicates'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827] mb-3">Tracking Events</p>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs font-mono space-y-1">
                  {['page_view', 'cta_click', 'form_submit', 'nda_request', 'gated_login', 'file_download'].map((evt, i) => (
                    <div key={i} className="text-[#374151]">{evt}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 bg-gray-50 border border-gray-200 rounded p-3">
              <p className="text-xs font-mono text-[#6B7280]">
                <strong>Field Schema:</strong> event_name, page_slug, system_code, asset_code, version, user_id
              </p>
            </div>
          </div>

          <div id="SB-04-02-06" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <RefreshCw className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-06 Publishing Workflow & Governance
            </h3>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {['Draft', 'Review', 'Legal', 'Publish', 'Log', 'Monitor'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <span className={`px-3 py-2 rounded text-sm font-medium ${
                    step === 'Publish' ? 'bg-[#C5A059] text-white' : 'bg-gray-100 text-[#374151]'
                  }`}>
                    {step}
                  </span>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#9CA3AF]" />}
                </React.Fragment>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { freq: 'Weekly', activity: 'Lead flow + site KPIs' },
                { freq: 'Monthly', activity: 'Content review (resources)' },
                { freq: 'Quarterly', activity: 'Architecture review' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-3">
                  <span className="text-xs bg-[#C5A059]/10 text-[#C5A059] px-2 py-1 rounded">{item.freq}</span>
                  <p className="text-sm text-[#374151] mt-2">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-04-02-07" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <GitBranch className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-07 Version Tagging & Locking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded p-4">
                <p className="text-sm font-semibold text-[#111827] mb-2">Website Releases</p>
                <code className="text-sm text-[#0B1C3E] bg-gray-50 px-2 py-1 rounded">WEB-v2026-02-17r2</code>
              </div>
              <div className="bg-white border border-gray-200 rounded p-4">
                <p className="text-sm font-semibold text-[#111827] mb-2">Gated Assets</p>
                <code className="text-sm text-[#0B1C3E] bg-gray-50 px-2 py-1 rounded">CIM-v2026-02-17r2</code>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="text-sm text-red-800">
                <Lock className="w-4 h-4 inline mr-2" />
                <strong>Locking:</strong> Gated artifacts are immutable once distributed. New version required for changes.
              </p>
            </div>
          </div>

          <div id="SB-04-02-08" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <AlertTriangle className="w-5 h-5 inline mr-2 text-[#C5A059]" />
              SB-04-02-08 QA, Accessibility & Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'QA', items: ['Link checks (no 404s)', 'Form tests (E2E)', 'Gated flow tests', 'Download integrity'] },
                { title: 'Accessibility', items: ['Heading structure', 'Alt text for images', 'Contrast checks', 'Keyboard navigation'] },
                { title: 'Security', items: ['NDA gate auth', 'Time-bound links', 'Audit log', 'Admin action logging'] },
                { title: 'Performance', items: ['Lighthouse mobile-first', 'Image compression', 'Caching rules', 'Secure file hosting'] },
              ].map((section, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded p-4">
                  <h4 className="font-semibold text-[#111827] mb-3">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-xs text-[#6B7280] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-04-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-04-03 Website ↔ CIM Mapping Table
            </h3>
            <p className="text-[#6B7280] mb-4">Create a mapping table (Notion database or spreadsheet) with:</p>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 font-mono text-xs">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Website_Page', 'System_Code', 'CIM_Section', 'Public_Safe?', 'Source_File', 'Owner', 'Last_Reviewed'].map((f, i) => (
                  <span key={i} className="text-[#374151]">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-05': {
      title: 'Buyer Pipeline & Communications',
      content: (
        <div className="space-y-8">
          <div id="SB-05-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-05-01 Pipeline Stages
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {['Lead', 'Qualified', 'NDA Sent', 'NDA Signed', 'CIM Delivered', 'Follow-Up', 'LOI', 'Diligence', 'Close'].map((stage, i, arr) => (
                <React.Fragment key={i}>
                  <span className={`px-3 py-2 rounded text-sm font-medium ${
                    stage === 'NDA Signed' ? 'bg-[#C5A059] text-white' :
                    stage === 'Close' ? 'bg-green-600 text-white' :
                    'bg-gray-100 text-[#374151]'
                  }`}>
                    {stage}
                  </span>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#9CA3AF]" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div id="SB-05-02" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-05-02 Standard Comms Library
            </h3>
            <div className="space-y-3">
              {[
                { type: 'NDA Email Templates', desc: 'Standard NDA request and follow-up emails' },
                { type: 'Follow-up Cadence', desc: 'Day 1 / Day 3 / Day 7 / Weekly' },
                { type: 'Objection Handling', desc: 'Scripts for common buyer concerns' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded">
                  <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#111827]">{item.type}</h4>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'SB-06': {
      title: 'KPI / Metrics / Reporting',
      content: (
        <div className="space-y-6">
          <p className="text-[#6B7280]">Scorecard and reporting framework (scaffold):</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'CEO Weekly Scorecard', icon: BarChart3 },
              { name: 'Ops KPIs', icon: Settings },
              { name: 'Sales Pipeline KPIs', icon: Target },
              { name: 'Website Conversion KPIs', icon: TrendingUp },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded">
                <item.icon className="w-5 h-5 text-[#C5A059]" />
                <span className="text-[#374151] font-medium">{item.name}</span>
              </div>
            ))}
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
            The canonical operating manual for OnPoint Authority Systems. Defines enterprise architecture, deal room workflow, investor readiness, and website specifications.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-xs bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">
              v2026-02-17r2
            </span>
            <span className="text-xs text-gray-400">
              Status: Working Master (Registry-Driven)
            </span>
            <Link 
              to="/sync-map" 
              className="text-xs bg-white/10 text-white px-3 py-1 rounded-full hover:bg-white/20 transition-colors flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              View Sync Map
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
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
                    {section.subsections.length > 0 && (
                      expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )
                    )}
                  </button>
                  {expandedSections.includes(section.id) && section.subsections.length > 0 && (
                    <div className="ml-4 mt-1 space-y-1">
                      {section.subsections.map((sub) => (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          className="block text-xs text-[#6B7280] hover:text-[#111827] py-1 pl-4 border-l border-gray-200 truncate"
                          onClick={() => setActiveSection(section.id)}
                          title={`${sub.id} ${sub.title}`}
                        >
                          {sub.title}
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
