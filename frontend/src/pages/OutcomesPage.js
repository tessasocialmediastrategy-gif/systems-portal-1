import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Shield, Award } from 'lucide-react';

const OutcomesPage = () => {
  const outcomes = [
    {
      metric: '100%',
      label: 'Transfer Ready',
      description: 'All systems designed for clean transfer from day one'
    },
    {
      metric: '12',
      label: 'Core Systems',
      description: 'Complete governance infrastructure coverage'
    },
    {
      metric: '217',
      label: 'Registry Assets',
      description: 'Version-controlled, auditable deliverables'
    },
    {
      metric: '0',
      label: 'Founder Dependency',
      description: 'Operations run without personal involvement'
    },
  ];

  const caseStudies = [
    {
      title: 'From Founder-Dependent to Exit-Ready',
      category: 'Governance Transformation',
      description: 'Implemented complete authority infrastructure enabling clean M&A process',
      results: ['90-day implementation', 'Full documentation', 'Successful transfer']
    },
    {
      title: 'Licensing Framework Design',
      category: 'IP & Licensing',
      description: 'Built licensable system architecture for multi-operator deployment',
      results: ['Scalable model', 'Certification program', 'Revenue diversification']
    },
    {
      title: 'Compliance Infrastructure Build',
      category: 'Governance & Compliance',
      description: 'Established audit-ready documentation and process standards',
      results: ['Passed due diligence', 'Reduced risk profile', 'Increased valuation']
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>ONPOINT.</Link>
            <div className="flex items-center gap-8">
              <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">MAIN SITE</a>
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BUYER</Link>
              
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">AUTHORITY REVIEW</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">OUTCOMES & CASE STUDIES</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Results That<br />
            <span className="text-[#C5A059] italic">Transfer</span>
          </h1>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="text-center">
                <p className="text-5xl font-light text-[#C5A059] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>{outcome.metric}</p>
                <p className="text-lg text-white mb-2">{outcome.label}</p>
                <p className="text-gray-500 text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-12" style={{ fontFamily: 'Libre Baskerville, serif' }}>Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="p-8 border border-[#262626] bg-[#111111] hover:border-[#C5A059]/30 transition-colors">
                <span className="text-xs text-[#C5A059] tracking-wider">{study.category}</span>
                <h3 className="text-xl font-light mt-2 mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>{study.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-1 h-1 bg-[#C5A059]" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>Ready for your transformation?</h2>
          <Link to="/authority-review" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">
            Request Authority Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} OnPoint Authority Systems, Inc.</span>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-gray-500 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OutcomesPage;
