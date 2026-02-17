import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Scale, Building2 } from 'lucide-react';

const SystemsPage = () => {
  const systems = [
    {
      id: 'authority-design',
      title: 'Authority Architecture Blueprint',
      description: 'Authority infrastructure that operates without founder dependency.',
      icon: Building2,
    },
    {
      id: 'operator-certification',
      title: 'Operator Certification Engine',
      description: 'Structured progression through doctrine that determines license eligibility.',
      icon: Award,
    },
    {
      id: 'internal-review',
      title: 'Internal Review & Approval System',
      description: 'Quality assurance and governance checkpoints for all deliverables.',
      icon: Shield,
    },
    {
      id: 'brand-ip',
      title: 'Brand & IP Governance Layer',
      description: 'Revocable access, audit compliance, and violation management.',
      icon: Scale,
    },
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
              <Link to="/systems" className="text-sm tracking-wider text-[#C5A059] border-b border-[#C5A059]">
                SYSTEMS
              </Link>
              <Link to="/systems-book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">
                BOOK
              </Link>
              <Link to="/governance" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">
                GOVERNANCE
              </Link>
              <Link to="/certification" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">
                CERTIFICATION
              </Link>
              <Link 
                to="/authority-review" 
                className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors"
              >
                AUTHORITY REVIEW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">PRODUCT & IP</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Authority Systems,<br />
            <span className="text-[#C5A059] italic">Not Marketing Assets</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
            Every system we build is designed to survive founder absence. Authority is embedded 
            through process, certification, governance, and enforcement—not personality.
          </p>
          
          {/* System Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {systems.map((system) => (
              <div key={system.id} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#C5A059] mt-2 flex-shrink-0" />
                <span className="text-gray-300">{system.title}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[#C5A059] text-lg italic" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            A business that scales without dilution and survives diligence without explanation.
          </p>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systems.map((system) => (
              <div 
                key={system.id}
                className="p-8 border border-[#262626] bg-[#111111] hover:border-[#C5A059]/30 transition-colors group"
                data-testid={`system-card-${system.id}`}
              >
                <system.icon className="w-8 h-8 text-[#C5A059] mb-6" />
                <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {system.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {system.description}
                </p>
                <Link 
                  to={`/systems/${system.id}`}
                  className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Built for transfer.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            OnPoint Authority Systems are designed from day one to be licensable, 
            transferable, and executable without the original founder.
          </p>
          <Link 
            to="/authority-review"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors"
            data-testid="cta-authority-review"
          >
            Request Authority Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} OnPoint Authority Systems, Inc.
          </span>
          <div className="flex items-center gap-6">
            <Link to="/systems-book" className="text-sm text-gray-500 hover:text-white transition-colors">
              Systems Book
            </Link>
            <Link to="/sync-map" className="text-sm text-gray-500 hover:text-white transition-colors">
              Sync Map
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SystemsPage;
