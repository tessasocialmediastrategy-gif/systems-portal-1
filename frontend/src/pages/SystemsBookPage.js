import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, FolderTree, BarChart3, Briefcase, Settings, Globe,
  ChevronRight, ChevronDown, FileText, CheckCircle, ArrowRight,
  Shield, Clock, Users, Database, Lock, ExternalLink, Map,
  Layout, FileCode, Navigation, Search, GitBranch, AlertTriangle,
  Layers, Target, Mail, TrendingUp, DollarSign, Scale, Cpu,
  Building, RefreshCw, Calculator, FileCheck, Cog, Lightbulb,
  Server, UserCog, FolderOpen, Wrench, Code, Image, ZoomIn
} from 'lucide-react';
import { 
  SB01Registry, SB02Registry, SB03Registry, SB04Registry, SB05Registry, SB06Registry,
  SB07Registry, SB08Registry, SB09Registry, 
  SB10Registry, SB11Registry, SB12Registry,
  getFormatBadgeColor, getStatusBadgeColor 
} from '../data/systemsBookRegistry';

// Inline Expanded Registry Component
const ExpandedRegistrySection = ({ title, icon: Icon, items, packParent, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-[#C5A059]" />
          <span className="font-semibold text-[#111827]">{title}</span>
          <span className="text-xs bg-[#0B1C3E] text-white px-2 py-0.5 rounded-full">
            {items.length} items
          </span>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-[#6B7280]" />
        ) : (
          <ChevronRight className="w-5 h-5 text-[#6B7280]" />
        )}
      </button>
      
      {isExpanded && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#0B1C3E]/5">
              <tr>
                <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                <th className="text-left p-3 font-semibold text-[#111827]">Name</th>
                <th className="text-left p-3 font-semibold text-[#111827]">Format</th>
                <th className="text-left p-3 font-semibold text-[#111827]">Status</th>
                <th className="text-left p-3 font-semibold text-[#111827] hidden lg:table-cell">Output File</th>
                <th className="text-left p-3 font-semibold text-[#111827] hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {/* Pack Parent Row */}
              {packParent && (
                <tr className="border-t border-gray-200 bg-[#C5A059]/10">
                  <td className="p-3 font-mono text-xs text-[#0B1C3E] font-bold whitespace-nowrap">{packParent.code}</td>
                  <td className="p-3 text-[#374151] font-semibold">{packParent.name}</td>
                  <td className="p-3">
                    <span className="text-xs px-2 py-1 rounded bg-[#0B1C3E] text-white">{packParent.format}</span>
                  </td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusBadgeColor(packParent.status)}`}>
                      {packParent.status}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-[#6B7280] font-mono hidden lg:table-cell max-w-xs truncate" title={packParent.file}>
                    {packParent.file}
                  </td>
                  <td className="p-3 text-xs text-[#C5A059] font-semibold hidden md:table-cell">{packParent.notes}</td>
                </tr>
              )}
              {/* Child Items */}
              {items.map((item, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-mono text-xs text-[#0B1C3E] whitespace-nowrap pl-6">{item.code}</td>
                  <td className="p-3 text-[#374151]">{item.name}</td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded ${getFormatBadgeColor(item.format)}`}>
                      {item.format}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusBadgeColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-[#6B7280] font-mono hidden lg:table-cell max-w-xs truncate" title={item.file}>
                    {item.file}
                  </td>
                  <td className="p-3 text-xs text-[#6B7280] hidden md:table-cell">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Diagram lightbox component
const DiagramLightbox = ({ diagram, onClose }) => {
  if (!diagram) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#0B1C3E] text-white rounded-full hover:bg-[#C5A059] transition-colors"
          data-testid="close-lightbox"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#111827] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            {diagram.title}
          </h3>
          <p className="text-sm text-[#6B7280] mb-4">{diagram.chapter}</p>
          <img 
            src={diagram.src} 
            alt={diagram.title}
            className="max-h-[70vh] w-auto mx-auto rounded border border-gray-200"
          />
          <p className="mt-4 text-sm text-[#374151] text-center">{diagram.description}</p>
        </div>
      </div>
    </div>
  );
};

const SystemsBookPage = () => {
  const [activeSection, setActiveSection] = useState('DIAGRAMS');
  const [expandedSections, setExpandedSections] = useState(['DIAGRAMS']);
  const [selectedDiagram, setSelectedDiagram] = useState(null);
  
  // All book diagrams
  const bookDiagrams = [
    {
      id: 1,
      title: 'Founder Dependency Loop',
      chapter: 'Chapter 2 — Diagram 3',
      src: '/images/diagrams/01_Founder_Dependency_Loop.png',
      description: 'Informal authority creates a closed loop. No decision resolves permanently without the founder\'s involvement.'
    },
    {
      id: 2,
      title: 'Transferability Gap Chart',
      chapter: 'Chapter 3 — Diagram 5',
      src: '/images/diagrams/02_Transferability_Gap_Chart.png',
      description: 'The gap between current operations and buyer-ready transferability.'
    },
    {
      id: 3,
      title: 'Authority Governance Stack',
      chapter: 'Chapter 4 — Diagram 7',
      src: '/images/diagrams/03_Authority_Governance_Stack.png',
      description: 'The layered architecture of formal authority governance.'
    },
    {
      id: 4,
      title: 'Charter / Certification / License Flow',
      chapter: 'Chapter 5 — Diagram 8',
      src: '/images/diagrams/04_Charter_Certification_License_Flow.png',
      description: 'The process flow from charter establishment through certification to operational licensing.'
    },
    {
      id: 5,
      title: 'Authority Revenue Engine',
      chapter: 'Chapter 8 — Diagram 15',
      src: '/images/diagrams/05_Authority_Revenue_Engine.png',
      description: 'Certified authority is not only a governance asset. It is a revenue-generating system with compounding returns.'
    },
    {
      id: 6,
      title: 'Cohort Retention Structure',
      chapter: 'Chapter 8 — Diagram 16',
      src: '/images/diagrams/06_Cohort_Retention_Structure.png',
      description: 'Certified licensees renew at higher rates because their authority is conditional, not permanent.'
    },
    {
      id: 7,
      title: 'Platform Permission Model',
      chapter: 'Chapter 8 — Diagram 15',
      src: '/images/diagrams/07_Platform_Permission_Model.png',
      description: 'Every platform access tier is governed by the authority level of the entity requesting permission.'
    },
    {
      id: 8,
      title: 'Governance Control Matrix',
      chapter: 'Chapter 7 — Diagram 13',
      src: '/images/diagrams/08_Governance_Control_Matrix.png',
      description: 'Maps every governance function to its decision authority, enforcement mechanism, and review cycle.'
    },
    {
      id: 9,
      title: 'License Scope Hierarchy',
      chapter: 'Chapter 6 — Diagram 9',
      src: '/images/diagrams/09_License_Scope_Hierarchy.png',
      description: 'Every license operates within a defined hierarchy of scope. No license exceeds its parent.'
    },
    {
      id: 10,
      title: 'Recurring Enforcement Cycle',
      chapter: 'Chapter 5 — Diagram 10',
      src: '/images/diagrams/10_Recurring_Enforcement_Cycle.png',
      description: 'Enforcement is not an event. It is a continuous operating cycle with defined intervals and outputs.'
    },
    {
      id: 11,
      title: 'Transfer Survival Map',
      chapter: 'Chapter 10 — Diagram 18',
      src: '/images/diagrams/11_Transfer_Survival_Map.png',
      description: 'Two paths. One enterprise transfers cleanly. The other does not survive its founder.'
    },
    {
      id: 12,
      title: 'Board Oversight Model',
      chapter: 'Chapter 7 — Diagram 14',
      src: '/images/diagrams/12_Board_Oversight_Model.png',
      description: 'The governance board does not manage operations. It governs authority, certifies roles, and revokes when required.'
    },
    {
      id: 13,
      title: 'Post-Founder Continuity Flow',
      chapter: 'Chapter 10 — Diagram 20',
      src: '/images/diagrams/13_Post-Founder_Continuity_Flow.png',
      description: 'When the founder exits, the authority system activates. The enterprise does not pause. It continues.'
    },
    {
      id: 14,
      title: 'Authority Enterprise OS',
      chapter: 'Chapter 9 — Diagram 17',
      src: '/images/diagrams/14_Authority_Enterprise_OS.png',
      description: 'The complete operating system — all layers integrated into a single institutional architecture.'
    },
    {
      id: 15,
      title: 'Certification Gate Architecture',
      chapter: 'Chapter 4 — Diagram 7',
      src: '/images/diagrams/15_Certification_Gate_Architecture.png',
      description: 'Authority is not assumed. It is proven at every gate before it is granted.'
    },
    {
      id: 16,
      title: 'Revocation Trigger Flow',
      chapter: 'Chapter 4 — Diagram 8',
      src: '/images/diagrams/16_Revocation_Trigger_Flow.png',
      description: 'Authority that cannot be revoked is not authority. It is a permanent entitlement.'
    },
    {
      id: 17,
      title: 'Authority Enforcement Logic',
      chapter: 'Chapter 6 — Diagram 11',
      src: '/images/diagrams/17_Authority_Enforcement_Logic.png',
      description: 'Enforcement logic converts detected violations into defined, non-negotiable outcomes.'
    },
    {
      id: 18,
      title: 'Audit Escalation Ladder',
      chapter: 'Chapter 6 — Diagram 12',
      src: '/images/diagrams/18_Audit_Escalation_Ladder.png',
      description: 'Every unresolved audit finding escalates to a higher authority level until resolved or revocation is initiated.'
    },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(s => s !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections = [
    {
      id: 'DIAGRAMS',
      title: 'Key Diagrams',
      icon: Image,
      description: 'Visual frameworks and models from the Authority Systems Book',
      subsections: []
    },
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
        { id: 'SB-01-03', title: 'Expanded Registry' },
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
        { id: 'SB-02-03', title: 'Expanded Registry' },
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
        { id: 'SB-03-03', title: 'Expanded Registry' },
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
        { id: 'SB-04-04', title: 'Expanded Registry' },
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
        { id: 'SB-05-03', title: 'Expanded Registry' },
      ]
    },
    {
      id: 'SB-06',
      title: 'KPI / Metrics',
      icon: TrendingUp,
      description: 'Scorecards and reporting framework',
      subsections: [
        { id: 'SB-06-01', title: 'Expanded Registry' },
      ]
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
        { id: 'SB-07-05', title: 'Expanded Registry' },
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
        { id: 'SB-08-05', title: 'Expanded Registry' },
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
        { id: 'SB-09-05', title: 'Expanded Registry' },
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
        { id: 'SB-10-05', title: 'Expanded Registry' },
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
        { id: 'SB-11-05', title: 'Expanded Registry' },
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
        { id: 'SB-12-05', title: 'Expanded Registry' },
      ]
    },
  ];

  const sectionContent = {
    'DIAGRAMS': {
      title: 'Key Diagrams',
      content: (
        <div className="space-y-8">
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4 mb-6">
            <p className="text-sm text-[#374151]">
              <Image className="w-4 h-4 inline mr-2 text-[#C5A059]" />
              Visual frameworks and conceptual models from the <strong>OnPoint Authority Systems Book</strong>. Click any diagram to view in full size.
            </p>
          </div>

          {/* Diagram Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookDiagrams.map((diagram) => (
              <div 
                key={diagram.id}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#C5A059] transition-all cursor-pointer"
                onClick={() => setSelectedDiagram(diagram)}
                data-testid={`diagram-card-${diagram.id}`}
              >
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  <img 
                    src={diagram.src} 
                    alt={diagram.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#0B1C3E]/0 group-hover:bg-[#0B1C3E]/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="text-xs text-[#C5A059] font-medium mb-1">{diagram.chapter}</p>
                  <h4 className="font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {diagram.title}
                  </h4>
                  <p className="text-sm text-[#6B7280] line-clamp-2">{diagram.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Diagram Usage Note */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Usage:</strong> These diagrams are version-locked to the current Systems Book release. 
              They may be referenced in presentations and internal materials. For external distribution, 
              use only locked PDF exports.
            </p>
          </div>
        </div>
      )
    },
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

          {/* Expanded Registry Section */}
          <div id="SB-01-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-01-03 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB01Registry.web}
                packParent={SB01Registry.packParents.find(p => p.code === 'SB-01-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB01Registry.appendix}
                packParent={SB01Registry.packParents.find(p => p.code === 'SB-01-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB01Registry.toolkit}
                packParent={SB01Registry.packParents.find(p => p.code === 'SB-01-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
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

          {/* Expanded Registry Section */}
          <div id="SB-02-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-02-03 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB02Registry.web}
                packParent={SB02Registry.packParents.find(p => p.code === 'SB-02-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB02Registry.appendix}
                packParent={SB02Registry.packParents.find(p => p.code === 'SB-02-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB02Registry.toolkit}
                packParent={SB02Registry.packParents.find(p => p.code === 'SB-02-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
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

          {/* Expanded Registry Section */}
          <div id="SB-03-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-03-03 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB03Registry.web}
                packParent={SB03Registry.packParents.find(p => p.code === 'SB-03-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB03Registry.appendix}
                packParent={SB03Registry.packParents.find(p => p.code === 'SB-03-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB03Registry.toolkit}
                packParent={SB03Registry.packParents.find(p => p.code === 'SB-03-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
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

          {/* Expanded Registry Section */}
          <div id="SB-04-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-04-04 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB04Registry.web}
                packParent={SB04Registry.packParents.find(p => p.code === 'SB-04-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB04Registry.appendix}
                packParent={SB04Registry.packParents.find(p => p.code === 'SB-04-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB04Registry.toolkit}
                packParent={SB04Registry.packParents.find(p => p.code === 'SB-04-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
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

          {/* Expanded Registry Section */}
          <div id="SB-05-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-05-03 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB05Registry.web}
                packParent={SB05Registry.packParents.find(p => p.code === 'SB-05-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB05Registry.appendix}
                packParent={SB05Registry.packParents.find(p => p.code === 'SB-05-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB05Registry.toolkit}
                packParent={SB05Registry.packParents.find(p => p.code === 'SB-05-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
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

          {/* Expanded Registry Section */}
          <div id="SB-06-01" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-06-01 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB06Registry.web}
                packParent={SB06Registry.packParents.find(p => p.code === 'SB-06-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB06Registry.appendix}
                packParent={SB06Registry.packParents.find(p => p.code === 'SB-06-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB06Registry.toolkit}
                packParent={SB06Registry.packParents.find(p => p.code === 'SB-06-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-07': {
      title: 'Finance and Modeling System',
      content: (
        <div className="space-y-8">
          {/* Version Lock Block */}
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">v2026-02-17r3</span>
              <span className="text-[#6B7280]">Website Slug: <code className="bg-gray-100 px-2 py-0.5 rounded">/systems-book/finance-modeling</code></span>
              <span className="text-[#6B7280]">Status: <strong className="text-green-600">ACTIVE</strong></span>
            </div>
          </div>

          <div id="SB-07-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-07-01 Domain Standards
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  Financial Close Calendar (Minimum)
                </h4>
                <div className="space-y-2">
                  {[
                    { day: 'Day 0–1', action: 'Reconcile cash, AR/AP, payroll, subscriptions; lock source exports' },
                    { day: 'Day 2–3', action: 'Update P&L/BS/CF, margin by product/service line, and variance notes' },
                    { day: 'Day 4', action: 'Executive review + approvals; publish Close Pack (locked PDF)' },
                    { day: 'Day 5', action: 'Update forecast + KPIs; sync any CIM/Appendix figures if changed materially' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded">
                      <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{item.day}</span>
                      <span className="text-sm text-[#374151]">{item.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#C5A059]" />
                  Forecasting Standards
                </h4>
                <div className="space-y-2">
                  {[
                    'Assumptions live in a single tab/section with: owner, date, source, and confidence level',
                    'Scenarios are named consistently: Base / Upside / Downside (never overwritten)',
                    'Revenue drivers are measurable units (leads, conversion, ARPU, churn)',
                    'Every forecast ties to capacity (people/time) and delivery constraints',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#C5A059]" />
                  Buyer-Ready Finance Package
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'TTM + YTD financials with normalized adjustments',
                    'Unit economics summary (CAC, LTV, churn, gross margin)',
                    'Bridge schedule for major variances',
                    'KPIs that match CIM/Deck numbers',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-[#374151]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="SB-07-02" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-07-02 Canonical Artifact Set
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Artifact</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Cadence</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'SB-07-A01', name: '3-Year Financial Model (Canon)', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-07-A02', name: 'Valuation Model (Canon)', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-07-A03', name: 'Revenue Forecast (Canon)', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-07-A04', name: 'Sensitivity Analysis (Canon)', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-07-A05', name: 'KPI Tracking Model (Finance)', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="p-3 font-mono text-xs text-[#0B1C3E]">{row.code}</td>
                      <td className="p-3 text-[#374151]">{row.name}</td>
                      <td className="p-3 text-[#6B7280]">{row.cadence}</td>
                      <td className="p-3"><span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{row.output}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="SB-07-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-07-03 Core Workflows
            </h3>
            <div className="space-y-4">
              {[
                { code: 'SB-07-W01', name: 'Monthly close pack + variance commentary' },
                { code: 'SB-07-W02', name: 'Quarterly reforecast + scenario update' },
                { code: 'SB-07-W03', name: 'Annual plan + budget build' },
                { code: 'SB-07-W04', name: 'Buyer-ready finance package refresh (for CIM/Appendix)' },
              ].map((wf, i) => (
                <div key={i} className="p-4 bg-white border border-gray-200 rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{wf.code}</span>
                    <span className="font-medium text-[#111827]">{wf.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Intake', 'Prepare', 'Review', 'Publish', 'Retrospective'].map((step, j, arr) => (
                      <React.Fragment key={j}>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{step}</span>
                        {j < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-sm text-yellow-800">
                <strong>Control Points:</strong> No external share without NDA coverage, version-locked output, and Registry entry.
              </p>
            </div>
          </div>

          <div id="SB-07-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-07-04 Roles (RACI) & Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">RACI Matrix</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 rounded">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-2 text-left">Process</th>
                        <th className="p-2 text-center">R</th>
                        <th className="p-2 text-center">A</th>
                        <th className="p-2 text-center">C</th>
                        <th className="p-2 text-center">I</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { process: 'Artifact update', r: 'Owner', a: 'CEO', c: 'SMEs', i: 'Team' },
                        { process: 'External distribution', r: 'Steward', a: 'CEO', c: 'Deal Lead', i: 'Stakeholders' },
                        { process: 'Exception handling', r: 'Owner', a: 'CEO', c: 'SMEs', i: 'Team' },
                      ].map((row, i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-2">{row.process}</td>
                          <td className="p-2 text-center bg-blue-50">{row.r}</td>
                          <td className="p-2 text-center bg-green-50">{row.a}</td>
                          <td className="p-2 text-center bg-yellow-50">{row.c}</td>
                          <td className="p-2 text-center bg-gray-50">{row.i}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Key Metrics</h4>
                <div className="space-y-2">
                  {[
                    { metric: 'Freshness', target: '95%+ artifacts updated within cadence' },
                    { metric: 'Accuracy', target: '<2% material errors' },
                    { metric: 'Compliance', target: 'Zero external shares without NDA + log' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded text-sm">
                      <span className="font-medium text-[#111827]">{item.metric}</span>
                      <span className="text-[#6B7280]">{item.target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
              <p className="text-sm font-semibold text-[#111827] mb-2">Templates</p>
              <div className="flex flex-wrap gap-2">
                {['SB-07-T01 Intake form', 'SB-07-T02 Review checklist', 'SB-07-T03 Publish checklist', 'SB-07-T04 Quarterly review agenda'].map((t, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Expanded Registry Section */}
          <div id="SB-07-05" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-07-05 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB07Registry.web}
                packParent={SB07Registry.packParents?.find(p => p.code === 'SB-07-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB07Registry.appendix}
                packParent={SB07Registry.packParents?.find(p => p.code === 'SB-07-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB07Registry.toolkit}
                packParent={SB07Registry.packParents?.find(p => p.code === 'SB-07-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-08': {
      title: 'Legal and Compliance System',
      content: (
        <div className="space-y-8">
          {/* Version Lock Block */}
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">v2026-02-17r3</span>
              <span className="text-[#6B7280]">Website Slug: <code className="bg-gray-100 px-2 py-0.5 rounded">/systems-book/legal-compliance</code></span>
              <span className="text-[#6B7280]">Status: <strong className="text-green-600">ACTIVE</strong></span>
            </div>
          </div>

          <div id="SB-08-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-08-01 Domain Standards
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#C5A059]" />
                  Signature Authority and Approvals
                </h4>
                <div className="space-y-2">
                  {[
                    'Define who can sign: NDA, SOW, MSA, vendor contracts, and deal documents (by dollar threshold)',
                    'No "side letter" commitments without written approval and registry entry',
                    'All executed documents are stored in the canonical contract repository and linked in the log',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  Compliance Calendar (Minimum)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { freq: 'Annual', items: 'Insurance renewals, licenses, IP/trademark status, privacy/security review' },
                    { freq: 'Quarterly', items: 'Vendor risk review + contract renewal watchlist' },
                    { freq: 'Monthly', items: 'Contract log reconciliation + open obligations review' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-gray-200 rounded">
                      <span className="text-xs bg-[#C5A059]/20 text-[#C5A059] px-2 py-1 rounded font-medium">{item.freq}</span>
                      <p className="mt-2 text-sm text-[#374151]">{item.items}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C5A059]" />
                  Data Privacy and Security Basics
                </h4>
                <div className="space-y-2">
                  {[
                    'Least-privilege access; MFA required on all core systems',
                    'Data classification: Public / Internal / Confidential / Restricted (buyer data room is Restricted)',
                    'Incident response: record, contain, notify (as required), remediate, and log post-mortem',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-white border border-gray-200 rounded text-sm text-[#374151]">
                      <Lock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="SB-08-02" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-08-02 Canonical Artifact Set
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Artifact</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Cadence</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'SB-08-A01', name: 'NDA (Mutual/One-way) templates', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-08-A02', name: 'MSA / SOW templates', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-08-A03', name: 'IP assignment & contractor agreements', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-08-A04', name: 'Insurance / licensing binder', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-08-A05', name: 'Data privacy & security policy pack', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="p-3 font-mono text-xs text-[#0B1C3E]">{row.code}</td>
                      <td className="p-3 text-[#374151]">{row.name}</td>
                      <td className="p-3 text-[#6B7280]">{row.cadence}</td>
                      <td className="p-3"><span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{row.output}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="SB-08-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-08-03 Core Workflows
            </h3>
            <div className="space-y-4">
              {[
                { code: 'SB-08-W01', name: 'Contract intake → review → approval' },
                { code: 'SB-08-W02', name: 'Annual compliance review + renewals' },
                { code: 'SB-08-W03', name: 'Data room legal binder refresh' },
                { code: 'SB-08-W04', name: 'Risk/claims log triage' },
              ].map((wf, i) => (
                <div key={i} className="p-4 bg-white border border-gray-200 rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{wf.code}</span>
                    <span className="font-medium text-[#111827]">{wf.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Intake', 'Prepare', 'Review', 'Publish', 'Retrospective'].map((step, j, arr) => (
                      <React.Fragment key={j}>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{step}</span>
                        {j < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-08-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-08-04 Roles (RACI) & Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Key Metrics</h4>
                <div className="space-y-2">
                  {[
                    { metric: 'Freshness', target: '95%+ artifacts updated within cadence' },
                    { metric: 'Accuracy', target: '<2% material errors' },
                    { metric: 'Compliance', target: 'Zero external shares without NDA + log' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded text-sm">
                      <span className="font-medium text-[#111827]">{item.metric}</span>
                      <span className="text-[#6B7280]">{item.target}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Templates</h4>
                <div className="space-y-2">
                  {['SB-08-T01 Intake form', 'SB-08-T02 Review checklist', 'SB-08-T03 Publish checklist', 'SB-08-T04 Quarterly review agenda'].map((t, i) => (
                    <div key={i} className="text-xs bg-white border border-gray-200 px-3 py-2 rounded">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Registry Section */}
          <div id="SB-08-05" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-08-05 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB08Registry.web}
                packParent={SB08Registry.packParents?.find(p => p.code === 'SB-08-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB08Registry.appendix}
                packParent={SB08Registry.packParents?.find(p => p.code === 'SB-08-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB08Registry.toolkit}
                packParent={SB08Registry.packParents?.find(p => p.code === 'SB-08-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-09': {
      title: 'Operations and Delivery System',
      content: (
        <div className="space-y-8">
          {/* Version Lock Block */}
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">v2026-02-17r3</span>
              <span className="text-[#6B7280]">Website Slug: <code className="bg-gray-100 px-2 py-0.5 rounded">/systems-book/operations-delivery</code></span>
              <span className="text-[#6B7280]">Status: <strong className="text-green-600">ACTIVE</strong></span>
            </div>
          </div>

          <div id="SB-09-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-09-01 Domain Standards
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C5A059]" />
                  Delivery Phases (Default)
                </h4>
                <div className="space-y-2">
                  {[
                    { phase: 'Phase 0', desc: 'Sales handoff → scope confirmation → success criteria' },
                    { phase: 'Phase 1', desc: 'Kickoff → timeline → responsibilities → access & assets' },
                    { phase: 'Phase 2', desc: 'Execution sprints → weekly reporting → change requests managed' },
                    { phase: 'Phase 3', desc: 'QA → acceptance → handoff → training' },
                    { phase: 'Phase 4', desc: '30/60/90-day check-ins + renewal/expansion plan' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded">
                      <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{item.phase}</span>
                      <span className="text-sm text-[#374151]">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  Quality Control
                </h4>
                <div className="space-y-2">
                  {[
                    'Pre-flight checklist before work begins (inputs complete, scope signed, access granted)',
                    'In-flight spot checks (sample audits) + defect tracking with corrective actions',
                    'Post-delivery acceptance criteria recorded; unresolved issues become tracked change requests',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#C5A059]" />
                  Escalation
                </h4>
                <div className="space-y-2">
                  {[
                    'SLA tiers: standard / priority / critical with response + resolution targets',
                    'Escalation ladder: CSM → Ops Lead → CEO (or delegate) for critical items',
                    'Every critical escalation triggers a short post-mortem within 72 hours',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-white border border-gray-200 rounded text-sm text-[#374151]">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="SB-09-02" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-09-02 Canonical Artifact Set
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Artifact</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Cadence</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'SB-09-A01', name: 'Service Delivery Playbook', cadence: 'Weekly/Monthly', output: 'LOCKED (PDF)' },
                    { code: 'SB-09-A02', name: 'Implementation / onboarding SOP', cadence: 'Weekly/Monthly', output: 'LOCKED (PDF)' },
                    { code: 'SB-09-A03', name: 'Client Success scorecard', cadence: 'Weekly/Monthly', output: 'LOCKED (PDF)' },
                    { code: 'SB-09-A04', name: 'Issue/Change Request log', cadence: 'Weekly/Monthly', output: 'LOCKED (PDF)' },
                    { code: 'SB-09-A05', name: 'SLA & Escalation runbook', cadence: 'Weekly/Monthly', output: 'LOCKED (PDF)' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="p-3 font-mono text-xs text-[#0B1C3E]">{row.code}</td>
                      <td className="p-3 text-[#374151]">{row.name}</td>
                      <td className="p-3 text-[#6B7280]">{row.cadence}</td>
                      <td className="p-3"><span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{row.output}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="SB-09-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-09-03 Core Workflows
            </h3>
            <div className="space-y-4">
              {[
                { code: 'SB-09-W01', name: 'Delivery kickoff → plan → execute → handoff' },
                { code: 'SB-09-W02', name: 'Weekly ops cadence + KPI review' },
                { code: 'SB-09-W03', name: 'Quality audits + corrective actions' },
                { code: 'SB-09-W04', name: 'Post-mortem + continuous improvement' },
              ].map((wf, i) => (
                <div key={i} className="p-4 bg-white border border-gray-200 rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{wf.code}</span>
                    <span className="font-medium text-[#111827]">{wf.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Intake', 'Prepare', 'Review', 'Publish', 'Retrospective'].map((step, j, arr) => (
                      <React.Fragment key={j}>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{step}</span>
                        {j < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-09-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-09-04 Roles (RACI) & Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Key Metrics</h4>
                <div className="space-y-2">
                  {[
                    { metric: 'Freshness', target: '95%+ artifacts updated within cadence' },
                    { metric: 'Accuracy', target: '<2% material errors' },
                    { metric: 'Speed', target: 'Cycle time from intake → publish' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded text-sm">
                      <span className="font-medium text-[#111827]">{item.metric}</span>
                      <span className="text-[#6B7280]">{item.target}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Templates</h4>
                <div className="space-y-2">
                  {['SB-09-T01 Intake form', 'SB-09-T02 Review checklist', 'SB-09-T03 Publish checklist', 'SB-09-T04 Quarterly review agenda'].map((t, i) => (
                    <div key={i} className="text-xs bg-white border border-gray-200 px-3 py-2 rounded">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Registry Section */}
          <div id="SB-09-05" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-09-05 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB09Registry.web}
                packParent={SB09Registry.packParents?.find(p => p.code === 'SB-09-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB09Registry.appendix}
                packParent={SB09Registry.packParents?.find(p => p.code === 'SB-09-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB09Registry.toolkit}
                packParent={SB09Registry.packParents?.find(p => p.code === 'SB-09-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-10': {
      title: 'Product and IP System',
      content: (
        <div className="space-y-8">
          {/* Version Lock Block */}
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">v2026-02-17r3</span>
              <span className="text-[#6B7280]">Website Slug: <code className="bg-gray-100 px-2 py-0.5 rounded">/systems-book/product-ip</code></span>
              <span className="text-[#6B7280]">Status: <strong className="text-green-600">ACTIVE</strong></span>
            </div>
          </div>

          <div id="SB-10-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-10-01 Domain Standards
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Map className="w-4 h-4 text-[#C5A059]" />
                  Roadmap Governance
                </h4>
                <div className="space-y-2">
                  {[
                    'Single backlog with clear intake categories: customer request, internal improvement, compliance, growth',
                    'Prioritization uses scoring: revenue impact, strategic fit, effort, risk, and dependency load',
                    'Roadmap is reviewed monthly; major changes require a lock event and comms update',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C5A059]" />
                  IP Register Rules
                </h4>
                <div className="space-y-2">
                  {[
                    'Every asset is tagged: type (doc/code/design), owner, creation date, license status, reuse rights',
                    'Third-party assets require a recorded license and attribution obligations',
                    'Protectable IP triggers legal review (trademark, copyright, patentability as relevant)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-white border border-gray-200 rounded text-sm text-[#374151]">
                      <Lock className="w-4 h-4 text-[#0B1C3E] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-[#C5A059]" />
                  Release Standards
                </h4>
                <div className="space-y-2">
                  {[
                    'Each release includes: version, changes, migration notes, rollback plan, and owner sign-off',
                    'Public-facing messaging pulls from Brand/Positioning canon to avoid drift',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="SB-10-02" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-10-02 Canonical Artifact Set
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Artifact</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Cadence</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'SB-10-A01', name: 'Product roadmap + backlog', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-10-A02', name: 'Release notes template', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-10-A03', name: 'IP register', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-10-A04', name: 'Brand + messaging guidelines', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-10-A05', name: 'Pricing & packaging sheet', cadence: 'Monthly/Quarterly', output: 'LOCKED (PDF)' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="p-3 font-mono text-xs text-[#0B1C3E]">{row.code}</td>
                      <td className="p-3 text-[#374151]">{row.name}</td>
                      <td className="p-3 text-[#6B7280]">{row.cadence}</td>
                      <td className="p-3"><span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{row.output}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="SB-10-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-10-03 Core Workflows
            </h3>
            <div className="space-y-4">
              {[
                { code: 'SB-10-W01', name: 'Idea → evaluate → prioritize' },
                { code: 'SB-10-W02', name: 'Build → QA → release' },
                { code: 'SB-10-W03', name: 'IP creation → protection → reuse' },
                { code: 'SB-10-W04', name: 'Pricing changes → approval → publish' },
              ].map((wf, i) => (
                <div key={i} className="p-4 bg-white border border-gray-200 rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{wf.code}</span>
                    <span className="font-medium text-[#111827]">{wf.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Intake', 'Prepare', 'Review', 'Publish', 'Retrospective'].map((step, j, arr) => (
                      <React.Fragment key={j}>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{step}</span>
                        {j < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-10-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-10-04 Roles (RACI) & Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Key Metrics</h4>
                <div className="space-y-2">
                  {[
                    { metric: 'Freshness', target: '95%+ artifacts updated within cadence' },
                    { metric: 'Accuracy', target: '<2% material errors' },
                    { metric: 'Compliance', target: 'Zero external shares without NDA + log' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded text-sm">
                      <span className="font-medium text-[#111827]">{item.metric}</span>
                      <span className="text-[#6B7280]">{item.target}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Templates</h4>
                <div className="space-y-2">
                  {['SB-10-T01 Intake form', 'SB-10-T02 Review checklist', 'SB-10-T03 Publish checklist', 'SB-10-T04 Quarterly review agenda'].map((t, i) => (
                    <div key={i} className="text-xs bg-white border border-gray-200 px-3 py-2 rounded">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Registry Section */}
          <div id="SB-10-05" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-10-05 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB10Registry.web}
                packParent={SB10Registry.packParents?.find(p => p.code === 'SB-10-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB10Registry.appendix}
                packParent={SB10Registry.packParents?.find(p => p.code === 'SB-10-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB10Registry.toolkit}
                packParent={SB10Registry.packParents?.find(p => p.code === 'SB-10-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-11': {
      title: 'Technology Stack and Integrations',
      content: (
        <div className="space-y-8">
          {/* Version Lock Block */}
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">v2026-02-17r3</span>
              <span className="text-[#6B7280]">Website Slug: <code className="bg-gray-100 px-2 py-0.5 rounded">/systems-book/tech-stack-integrations</code></span>
              <span className="text-[#6B7280]">Status: <strong className="text-green-600">ACTIVE</strong></span>
            </div>
          </div>

          <div id="SB-11-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-11-01 Domain Standards
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C5A059]" />
                  Stack Layers to Document
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  {['Identity & access (SSO/MFA)', 'Messaging', 'CRM', 'Project/work management', 'Finance/billing', 'Analytics', 'Storage', 'Integrations'].map((item, i) => (
                    <div key={i} className="text-xs bg-white border border-gray-200 px-3 py-2 rounded text-center">{item}</div>
                  ))}
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#6B7280]">
                  Integrations are mapped with: <strong>source, destination, trigger, data fields, frequency, and owner</strong>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C5A059]" />
                  Security and Access
                </h4>
                <div className="space-y-2">
                  {[
                    'Access matrix includes role-based groups; no shared credentials',
                    'Quarterly access review + immediate offboarding checklist for leavers',
                    'Backups: define RPO/RTO per system; test restores at least quarterly',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 bg-white border border-gray-200 rounded text-sm text-[#374151]">
                      <Lock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#C5A059]" />
                  Change Management
                </h4>
                <div className="space-y-2">
                  {[
                    'All automation changes require: ticket, test plan, rollback, and lock note in registry',
                    'Production changes occur in defined windows; incidents override with after-action review',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="SB-11-02" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-11-02 Canonical Artifact Set
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Artifact</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Cadence</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'SB-11-A01', name: 'System architecture diagram', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-11-A02', name: 'Integration map', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-11-A03', name: 'Access control matrix', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-11-A04', name: 'Backup & recovery plan', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-11-A05', name: 'Vendor inventory', cadence: 'As-needed/Quarterly', output: 'LOCKED (PDF)' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="p-3 font-mono text-xs text-[#0B1C3E]">{row.code}</td>
                      <td className="p-3 text-[#374151]">{row.name}</td>
                      <td className="p-3 text-[#6B7280]">{row.cadence}</td>
                      <td className="p-3"><span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{row.output}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="SB-11-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-11-03 Core Workflows
            </h3>
            <div className="space-y-4">
              {[
                { code: 'SB-11-W01', name: 'New tool evaluation → pilot → deploy' },
                { code: 'SB-11-W02', name: 'Access provisioning / offboarding' },
                { code: 'SB-11-W03', name: 'Incident response + uptime tracking' },
                { code: 'SB-11-W04', name: 'Change management for automations/integrations' },
              ].map((wf, i) => (
                <div key={i} className="p-4 bg-white border border-gray-200 rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{wf.code}</span>
                    <span className="font-medium text-[#111827]">{wf.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Intake', 'Prepare', 'Review', 'Publish', 'Retrospective'].map((step, j, arr) => (
                      <React.Fragment key={j}>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{step}</span>
                        {j < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-11-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-11-04 Roles (RACI) & Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Key Metrics</h4>
                <div className="space-y-2">
                  {[
                    { metric: 'Freshness', target: '95%+ artifacts updated within cadence' },
                    { metric: 'Accuracy', target: '<2% material errors' },
                    { metric: 'Compliance', target: 'Zero external shares without NDA + log' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded text-sm">
                      <span className="font-medium text-[#111827]">{item.metric}</span>
                      <span className="text-[#6B7280]">{item.target}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Templates</h4>
                <div className="space-y-2">
                  {['SB-11-T01 Intake form', 'SB-11-T02 Review checklist', 'SB-11-T03 Publish checklist', 'SB-11-T04 Quarterly review agenda'].map((t, i) => (
                    <div key={i} className="text-xs bg-white border border-gray-200 px-3 py-2 rounded">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Registry Section */}
          <div id="SB-11-05" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-11-05 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB11Registry.web}
                packParent={SB11Registry.packParents?.find(p => p.code === 'SB-11-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB11Registry.appendix}
                packParent={SB11Registry.packParents?.find(p => p.code === 'SB-11-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB11Registry.toolkit}
                packParent={SB11Registry.packParents?.find(p => p.code === 'SB-11-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'SB-12': {
      title: 'HR and Org Design System',
      content: (
        <div className="space-y-8">
          {/* Version Lock Block */}
          <div className="bg-[#0B1C3E]/5 border border-[#0B1C3E]/10 rounded p-4">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full font-medium">v2026-02-17r3</span>
              <span className="text-[#6B7280]">Website Slug: <code className="bg-gray-100 px-2 py-0.5 rounded">/systems-book/hr-org-design</code></span>
              <span className="text-[#6B7280]">Status: <strong className="text-green-600">ACTIVE</strong></span>
            </div>
          </div>

          <div id="SB-12-01" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-12-01 Domain Standards
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#C5A059]" />
                  Role Scorecards
                </h4>
                <div className="space-y-2">
                  {[
                    'Each role has: mission, outcomes, KPIs, core responsibilities, required skills, and decision rights',
                    'Scorecards link directly to SOPs and the cadence they own',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <UserCog className="w-4 h-4 text-[#C5A059]" />
                  Hiring and Onboarding
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-[#111827] mb-2">Standard Pipeline:</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {['Application', 'Screen', 'Structured Interview', 'Work Sample', 'References', 'Offer'].map((step, i, arr) => (
                        <React.Fragment key={i}>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{step}</span>
                          {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#6B7280]">
                    <strong>Onboarding includes:</strong> tools access, SOP orientation, first-week outcomes, and 30/60/90 plan
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#C5A059]" />
                  Performance and Culture Cadence
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { freq: 'Weekly', activity: '1:1s' },
                    { freq: 'Monthly', activity: 'Scorecard review' },
                    { freq: 'Quarterly', activity: 'Performance + comp check-in' },
                    { freq: 'Annual', activity: 'Calibration' },
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white border border-gray-200 rounded text-center">
                      <span className="text-xs bg-[#C5A059]/20 text-[#C5A059] px-2 py-1 rounded font-medium">{item.freq}</span>
                      <p className="mt-2 text-sm text-[#374151]">{item.activity}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-sm text-[#6B7280]">
                  Values are operationalized as behaviors with examples; violations are handled consistently and logged.
                </div>
              </div>
            </div>
          </div>

          <div id="SB-12-02" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-12-02 Canonical Artifact Set
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Artifact</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Cadence</th>
                    <th className="text-left p-3 font-semibold text-[#111827]">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'SB-12-A01', name: 'Org chart + role scorecards', cadence: 'Weekly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-12-A02', name: 'Hiring pipeline + interview kits', cadence: 'Weekly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-12-A03', name: 'Onboarding/offboarding checklists', cadence: 'Weekly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-12-A04', name: 'Performance review framework', cadence: 'Weekly/Quarterly', output: 'LOCKED (PDF)' },
                    { code: 'SB-12-A05', name: 'Training & SOP library index', cadence: 'Weekly/Quarterly', output: 'LOCKED (PDF)' },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-200">
                      <td className="p-3 font-mono text-xs text-[#0B1C3E]">{row.code}</td>
                      <td className="p-3 text-[#374151]">{row.name}</td>
                      <td className="p-3 text-[#6B7280]">{row.cadence}</td>
                      <td className="p-3"><span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">{row.output}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="SB-12-03" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-12-03 Core Workflows
            </h3>
            <div className="space-y-4">
              {[
                { code: 'SB-12-W01', name: 'Hiring → offer → onboard' },
                { code: 'SB-12-W02', name: 'Weekly 1:1s + quarterly reviews' },
                { code: 'SB-12-W03', name: 'Comp changes → approval → communicate' },
                { code: 'SB-12-W04', name: 'Culture + values reinforcement cadence' },
              ].map((wf, i) => (
                <div key={i} className="p-4 bg-white border border-gray-200 rounded">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-[#0B1C3E] text-white px-2 py-1 rounded font-mono">{wf.code}</span>
                    <span className="font-medium text-[#111827]">{wf.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Intake', 'Prepare', 'Review', 'Publish', 'Retrospective'].map((step, j, arr) => (
                      <React.Fragment key={j}>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{step}</span>
                        {j < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="SB-12-04" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-12-04 Roles (RACI) & Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Key Metrics</h4>
                <div className="space-y-2">
                  {[
                    { metric: 'Freshness', target: '95%+ artifacts updated within cadence' },
                    { metric: 'Accuracy', target: '<2% material errors' },
                    { metric: 'Compliance', target: 'Zero external shares without NDA + log' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded text-sm">
                      <span className="font-medium text-[#111827]">{item.metric}</span>
                      <span className="text-[#6B7280]">{item.target}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] mb-3">Templates</h4>
                <div className="space-y-2">
                  {['SB-12-T01 Intake form', 'SB-12-T02 Review checklist', 'SB-12-T03 Publish checklist', 'SB-12-T04 Quarterly review agenda'].map((t, i) => (
                    <div key={i} className="text-xs bg-white border border-gray-200 px-3 py-2 rounded">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Registry Section */}
          <div id="SB-12-05" className="scroll-mt-24 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SB-12-05 Expanded Registry
            </h3>
            <div className="space-y-4">
              <ExpandedRegistrySection
                title="Web Copy (W01-W03)"
                icon={Globe}
                items={SB12Registry.web}
                packParent={SB12Registry.packParents?.find(p => p.code === 'SB-12-Wxx')}
                defaultExpanded={false}
              />
              <ExpandedRegistrySection
                title="Appendix Pack (A01-A05)"
                icon={FolderOpen}
                items={SB12Registry.appendix}
                packParent={SB12Registry.packParents?.find(p => p.code === 'SB-12-Axx')}
                defaultExpanded={true}
              />
              <ExpandedRegistrySection
                title="Toolkit (T01-T06)"
                icon={Wrench}
                items={SB12Registry.toolkit}
                packParent={SB12Registry.packParents?.find(p => p.code === 'SB-12-Txx')}
                defaultExpanded={false}
              />
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                <strong>Note:</strong> All items version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
                Output files follow: <code className="bg-yellow-100 px-1 rounded">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Diagram Lightbox */}
      {selectedDiagram && (
        <DiagramLightbox 
          diagram={selectedDiagram} 
          onClose={() => setSelectedDiagram(null)} 
        />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
              <div className="w-10 h-10 bg-[#0B1C3E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Libre Baskerville, serif' }}>TA</span>
              </div>
              <span className="font-semibold text-[#111827]">OnPoint Authority Systems, Inc.</span>
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
              v2026-02-17r3
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
            <Link 
              to="/read-book" 
              className="text-xs bg-[#C5A059] text-[#0B1C3E] px-3 py-1 rounded-full hover:bg-[#C5A059]/80 transition-colors flex items-center gap-1 font-medium"
              data-testid="read-book-link"
            >
              <BookOpen className="w-3 h-3" />
              Read the Book
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
              © {new Date().getFullYear()} OnPoint Authority Systems, Inc.. Systems Book v2026-02-17r3
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
