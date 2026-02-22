import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CertificationPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl tracking-widest font-light">ONPOINT.</Link>
          <div className="flex items-center gap-8">
            <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
            <Link to="/book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BOOK</Link>
            <Link to="/governance" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">GOVERNANCE</Link>
            <Link to="/certification" className="text-sm tracking-wider text-[#C5A059]">CERTIFICATION</Link>
            <Link 
              to="/authority-review"
              className="px-4 py-2 border border-[#C5A059] text-[#C5A059] text-sm hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-colors"
            >
              AUTHORITY REVIEW
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">AUTHORITY CERTIFICATION</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Certification<br />
            <span className="text-[#C5A059] italic">Standards</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Certification is not education.<br />
            It is a gate to licensed authority.
          </p>
        </div>
      </section>

      {/* Certification Structure */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-8">CERTIFICATION STRUCTURE</p>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
              <span className="text-xl text-gray-300">Doctrine (what authority is)</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
              <span className="text-xl text-gray-300">Procedure (how authority is exercised)</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
              <span className="text-xl text-gray-300">Enforcement (what happens when it breaks)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Progression */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-8">PROGRESSION</p>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <span className="text-4xl font-light text-[#262626]">01</span>
              <div>
                <h3 className="text-xl font-light text-white mb-2">Foundation Module</h3>
                <p className="text-gray-400">Core principles of authority design. Governance infrastructure basics. Documentation standards.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-4xl font-light text-[#262626]">02</span>
              <div>
                <h3 className="text-xl font-light text-white mb-2">Practitioner Module</h3>
                <p className="text-gray-400">Implementation methodology. Change control procedures. Audit preparation.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-4xl font-light text-[#262626]">03</span>
              <div>
                <h3 className="text-xl font-light text-white mb-2">Operator Certification</h3>
                <p className="text-gray-400">Full license eligibility. M&A readiness. Transfer authority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Certification Grants */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-8">WHAT CERTIFICATION GRANTS</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-light text-[#C5A059] mb-3">License to Operate</h3>
              <p className="text-gray-400 text-sm">Authority to implement OnPoint systems within your organization or for clients.</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-[#C5A059] mb-3">Audit Rights</h3>
              <p className="text-gray-400 text-sm">Access to compliance frameworks and enforcement documentation.</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-[#C5A059] mb-3">Network Access</h3>
              <p className="text-gray-400 text-sm">Connection to other certified operators and institutional buyers.</p>
            </div>
            <div>
              <h3 className="text-lg font-light text-[#C5A059] mb-3">Transfer Authority</h3>
              <p className="text-gray-400 text-sm">Credentials recognized in M&A due diligence and investor review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Certification Is Not */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest mb-8">WHAT CERTIFICATION IS NOT</p>
          <div className="space-y-4">
            <p className="text-gray-400">It is not a course completion badge.</p>
            <p className="text-gray-400">It is not self-paced content consumption.</p>
            <p className="text-gray-400">It is not optional if you want licensed authority.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Begin with an <span className="text-[#C5A059] italic">Authority Review</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Certification eligibility is determined by current state assessment.
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
            <Link to="/governance" className="text-sm text-gray-500 hover:text-white transition-colors">Governance</Link>
            <Link to="/read-book" className="text-sm text-gray-500 hover:text-white transition-colors">Read Book</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertificationPage;
