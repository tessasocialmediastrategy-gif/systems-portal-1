import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, BarChart3, Lock, CheckCircle } from 'lucide-react';

const GovernancePage = () => {
  const layers = [
    {
      num: '01',
      status: 'Unauthenticated',
      title: 'Public Authority Layer',
      purpose: 'Establish legitimacy, signal scarcity, pre-qualify buyers without selling.',
      pages: [
        'Homepage (silent authority positioning)',
        'Systems Page (architecture explanation)',
        'Certification Overview (no pricing details)',
        'Governance & Enforcement (high-level)',
        'Founder Manifesto',
        'Investor Access Request',
        'Operator Application'
      ],
      outcome: 'Visitors self-select up or out.'
    },
    {
      num: '02',
      status: 'Gated — Light',
      title: 'Applicant / Pre-License Layer',
      purpose: 'Filter operators before certification.',
      accessMethod: ['Webflow Memberships', 'Invite or application approval'],
      pages: [
        'Operator Readiness Assessment',
        'Authority Diagnostic (scored)',
        'Application Status Page',
        'Conditional Acceptance Notice'
      ],
      logic: ['Pass → invite to certification', 'Fail → waitlisted or rejected', 'Everything logged'],
      note: 'This is where authority begins.'
    },
    {
      num: '03',
      status: 'Core System',
      title: 'Certification & Licensing Portal',
      description: 'This is the heart of the business.',
      subtext: 'Role-based login. License status check on every page.',
      sections: [
        {
          name: 'Operator Dashboard',
          items: ['License Status Indicator', 'Certification Tier', 'Audit Schedule', 'Enforcement Notices', 'Required Actions']
        },
        {
          name: 'Certification Modules',
          items: ['Institutional doctrine', 'Operating frameworks', '"Authority Rationale" (why this is enforced)', 'Locked progression', 'Timed exams', 'Auto-fail conditions']
        },
        {
          name: 'Enforcement System',
          items: ['Violation notices', 'Remediation steps', 'Revocation logic', 'Immutable logs']
        }
      ],
      criticalRule: 'Content access ≠ license continuity.',
      ruleNote: 'This alone separates you from education companies.'
    },
    {
      num: '04',
      status: 'Read-Only',
      title: 'Investor / Board View',
      purpose: 'Prove scalability without exposure.',
      accessMethod: ['Invite-only', 'Separate role permissions'],
      metrics: ['License Count', 'Revenue per License', 'Enforcement Events', 'Churn', 'Audit Pass Rate'],
      note: 'No documents. No storytelling. Just proof.'
    }
  ];

  const systemFlow = [
    'Public Visitor',
    'Authority Content',
    'Application Gate',
    'Certification Access',
    'License Issued',
    'Ongoing Enforcement',
    'Metrics Surface to Investors'
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl tracking-widest font-light">ONPOINT.</Link>
          <div className="flex items-center gap-8">
            <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
            <Link to="/book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BOOK</Link>
            <Link to="/governance" className="text-sm tracking-wider text-[#C5A059]">GOVERNANCE</Link>
            <Link to="/certification" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">CERTIFICATION</Link>
            <Link 
              to="/authority-review"
              className="px-4 py-2 border border-[#C5A059] text-[#C5A059] text-sm hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-colors"
            >
              AUTHORITY REVIEW
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">AUTHORITY INFRASTRUCTURE</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            System<br />
            <span className="text-[#C5A059] italic">Governance</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Four distinct access layers. One unified authority system. No fragmentation. No duct tape. No LMS nonsense.
          </p>
        </div>
      </section>

      {/* Layer 01 - Unauthenticated */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <span className="text-4xl font-light text-[#262626]">01</span>
            <div>
              <p className="text-xs text-gray-500 tracking-widest mb-2">UNAUTHENTICATED</p>
              <h2 className="text-3xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Public Authority Layer
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#C5A059] text-sm mb-2">Purpose:</p>
              <p className="text-gray-400 mb-8">{layers[0].purpose}</p>
              
              <p className="text-gray-500 text-xs tracking-widest mb-3">PAGES:</p>
              <ul className="space-y-2">
                {layers[0].pages.map((page, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C5A059]"></span>
                    {page}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-[#C5A059] text-sm mb-2">Outcome:</p>
              <p className="text-gray-300 text-lg">{layers[0].outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 02 - Gated Light */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <span className="text-4xl font-light text-[#262626]">02</span>
            <div>
              <p className="text-xs text-gray-500 tracking-widest mb-2">GATED — LIGHT</p>
              <h2 className="text-3xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Applicant / Pre-License Layer
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#C5A059] text-sm mb-2">Purpose:</p>
              <p className="text-gray-400 mb-6">{layers[1].purpose}</p>
              
              <p className="text-gray-500 text-xs tracking-widest mb-3">ACCESS METHOD:</p>
              <ul className="space-y-2 mb-8">
                {layers[1].accessMethod.map((method, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C5A059]"></span>
                    {method}
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-500 text-xs tracking-widest mb-3">PAGES:</p>
              <ul className="space-y-2">
                {layers[1].pages.map((page, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C5A059]"></span>
                    {page}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-gray-500 text-xs tracking-widest mb-3">LOGIC:</p>
              <ul className="space-y-2 mb-8">
                {layers[1].logic.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm">{item}</li>
                ))}
              </ul>
              
              <p className="text-[#C5A059] text-lg italic">{layers[1].note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 03 - Core System */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <span className="text-4xl font-light text-[#262626]">03</span>
            <div>
              <p className="text-xs text-gray-500 tracking-widest mb-2">CORE SYSTEM</p>
              <h2 className="text-3xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Certification & Licensing Portal
              </h2>
            </div>
          </div>
          
          <p className="text-[#C5A059] text-lg mb-2">{layers[2].description}</p>
          <p className="text-gray-400 mb-12">{layers[2].subtext}</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {layers[2].sections.map((section, i) => (
              <div key={i} className="p-6 border border-[#262626] bg-[#0d0d0d]">
                <h3 className="text-lg font-medium mb-4 text-white">{section.name}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#C5A059] mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="p-6 border border-[#C5A059]/30 bg-[#C5A059]/5">
            <p className="text-[#C5A059] font-medium mb-2">Critical Rule:</p>
            <p className="text-white text-lg mb-2">{layers[2].criticalRule}</p>
            <p className="text-gray-400 text-sm">{layers[2].ruleNote}</p>
          </div>
        </div>
      </section>

      {/* Layer 04 - Read Only */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-8">
            <span className="text-4xl font-light text-[#262626]">04</span>
            <div>
              <p className="text-xs text-gray-500 tracking-widest mb-2">READ-ONLY</p>
              <h2 className="text-3xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Investor / Board View
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#C5A059] text-sm mb-2">Purpose:</p>
              <p className="text-gray-400 mb-6">{layers[3].purpose}</p>
              
              <p className="text-gray-500 text-xs tracking-widest mb-3">ACCESS:</p>
              <ul className="space-y-2">
                {layers[3].accessMethod.map((method, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C5A059]"></span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-gray-500 text-xs tracking-widest mb-3">METRICS DASHBOARD</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {layers[3].metrics.map((metric, i) => (
                  <div key={i} className="p-3 bg-[#111] border border-[#262626] text-center">
                    <p className="text-gray-300 text-sm">{metric}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 italic">{layers[3].note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Flow */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-2">END-TO-END</p>
          <h2 className="text-3xl font-light mb-12" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            System Flow
          </h2>
          
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">END-TO-END AUTHORITY FLOW</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {systemFlow.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C5A059] text-[#0A0A0A] flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
                {i < systemFlow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                )}
              </React.Fragment>
            ))}
          </div>
          
          <p className="text-gray-400 text-center">
            Everything lives inside one unified instance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            One System. <span className="text-[#C5A059]">Complete Authority.</span>
          </h2>
          <p className="text-gray-400 mb-8">
            No fragmentation. No duct tape. No LMS nonsense. Every layer enforces authority.
          </p>
          <Link 
            to="/authority-review"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors"
          >
            Request Authority Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} OnPoint Authority Systems, Inc.</span>
          <div className="flex items-center gap-6">
            <Link to="/systems" className="text-sm text-gray-500 hover:text-white transition-colors">Systems</Link>
            <Link to="/systems-book" className="text-sm text-gray-500 hover:text-white transition-colors">Systems Book</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovernancePage;
