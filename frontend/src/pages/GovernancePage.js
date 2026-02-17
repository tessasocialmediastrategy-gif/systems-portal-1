import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileCheck, Scale, Lock, BookOpen, Users } from 'lucide-react';

const GovernancePage = () => {
  const governanceAreas = [
    {
      id: 'master-control',
      code: 'SB-00',
      title: 'Master Control & Registry System',
      description: 'Single source of truth, version control, naming standards',
      icon: Lock,
      slug: '/governance/master-control',
      items: ['Purpose & Non-Negotiables', 'Canonical File Naming', 'Registry Fields']
    },
    {
      id: 'metrics',
      code: 'SB-06',
      title: 'KPI / Metrics / Reporting',
      description: 'Performance tracking and business intelligence',
      icon: FileCheck,
      slug: '/governance/metrics',
      items: ['Key Performance Indicators', 'Reporting Cadence', 'Dashboard Standards']
    },
    {
      id: 'change-control',
      code: 'SB-13',
      title: 'Continuous Improvement & Change Control',
      description: 'Process for updates, retirements, and version management',
      icon: Scale,
      slug: '/governance/change-control',
      items: ['Change Control Process', 'Retirement Procedures', 'Version Locking']
    },
  ];

  const plannedSystems = [
    { code: 'SB-07', title: 'Sales Control System', slug: '/governance/sb-07-sales-control' },
    { code: 'SB-08', title: 'Marketing Control System', slug: '/governance/sb-08-marketing-control' },
    { code: 'SB-09', title: 'Customer Success Control System', slug: '/governance/sb-09-customer-success' },
    { code: 'SB-10', title: 'Finance & Controls System', slug: '/governance/sb-10-finance-controls' },
    { code: 'SB-11', title: 'HR & People Ops System', slug: '/governance/sb-11-hr-people-ops' },
    { code: 'SB-12', title: 'Tech & Product Control System', slug: '/governance/sb-12-tech-product' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              ONPOINT.
            </Link>
            <div className="flex items-center gap-8">
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/systems-book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BOOK</Link>
              <Link to="/governance" className="text-sm tracking-wider text-[#C5A059] border-b border-[#C5A059]">GOVERNANCE</Link>
              <Link to="/certification" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">CERTIFICATION</Link>
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">
                AUTHORITY REVIEW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">GOVERNANCE FRAMEWORK</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Governance<br />
            <span className="text-[#C5A059] italic">Beyond Founders</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
            Authority infrastructure that operates without founder dependency. Every system is designed 
            to be transferable, auditable, and enforceable by anyone who inherits control.
          </p>
        </div>
      </section>

      {/* Active Governance Areas */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Active Governance Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {governanceAreas.map((area) => (
              <div 
                key={area.id}
                className="p-8 border border-[#262626] bg-[#111111] hover:border-[#C5A059]/30 transition-colors group"
                data-testid={`governance-${area.id}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <area.icon className="w-6 h-6 text-[#C5A059]" />
                  <span className="text-xs text-gray-500 tracking-wider">{area.code}</span>
                </div>
                <h3 className="text-xl font-light mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{area.description}</p>
                <ul className="space-y-2 mb-6">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-1 h-1 bg-[#C5A059]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={area.slug}
                  className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider group-hover:gap-3 transition-all"
                >
                  View System <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Systems */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Planned Control Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {plannedSystems.map((system) => (
              <Link 
                key={system.code}
                to={system.slug}
                className="p-6 border border-[#262626] bg-[#0d0d0d] hover:border-[#C5A059]/30 transition-colors flex items-center justify-between group"
                data-testid={`planned-${system.code}`}
              >
                <div>
                  <span className="text-xs text-[#C5A059] tracking-wider">{system.code}</span>
                  <p className="text-gray-300 mt-1">{system.title}</p>
                </div>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-500 rounded">Planned</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Ready for Authority Review?
          </h2>
          <p className="text-gray-400 mb-8">
            Get your governance infrastructure assessed against OnPoint Authority standards.
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
            <Link to="/systems-book" className="text-sm text-gray-500 hover:text-white transition-colors">Systems Book</Link>
            <Link to="/sync-map" className="text-sm text-gray-500 hover:text-white transition-colors">Sync Map</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovernancePage;
