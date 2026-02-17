import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, FileCheck, Shield, RefreshCw, Lock, BookOpen } from 'lucide-react';

const PlatformPage = () => {
  const capabilities = [
    { icon: Layers, title: 'Authority Architecture', description: 'Complete governance infrastructure design and implementation', features: ['System blueprints', 'Process documentation', 'Registry management'] },
    { icon: FileCheck, title: 'Certification Engine', description: 'Operator qualification and licensing framework', features: ['Training programs', 'Assessment protocols', 'Credential management'] },
    { icon: Shield, title: 'Governance Layer', description: 'Standards enforcement and compliance management', features: ['Audit procedures', 'Compliance tracking', 'Violation management'] },
    { icon: Lock, title: 'Access Control', description: 'Role-based permissions and data room management', features: ['User provisioning', 'Document security', 'Activity logging'] },
    { icon: RefreshCw, title: 'Change Control', description: 'Version management and continuous improvement', features: ['Change requests', 'Version locking', 'Retirement procedures'] },
    { icon: BookOpen, title: 'Systems Book', description: 'Canonical operating manual and knowledge base', features: ['Living documentation', 'Sync management', 'Distribution control'] },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>ONPOINT.</Link>
            <div className="flex items-center gap-8">
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/systems-book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BOOK</Link>
              <Link to="/governance" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">GOVERNANCE</Link>
              <Link to="/certification" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">CERTIFICATION</Link>
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">AUTHORITY REVIEW</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">PLATFORM & SOLUTIONS</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            The Operating System<br />
            <span className="text-[#C5A059] italic">for Authority</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            A complete platform for building, certifying, and transferring governance infrastructure. 
            Every component designed to operate without founder dependency.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-8 border border-[#262626] bg-[#111111] hover:border-[#C5A059]/30 transition-colors">
                <cap.icon className="w-8 h-8 text-[#C5A059] mb-6" />
                <h3 className="text-xl font-light mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>{cap.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-1 h-1 bg-[#C5A059]" />
                      {feature}
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
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>See the platform in action</h2>
          <Link to="/authority-review" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">
            Request Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} OnPoint Authority Systems, Inc.</span>
          <div className="flex items-center gap-6">
            <Link to="/systems-book" className="text-sm text-gray-500 hover:text-white transition-colors">Systems Book</Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlatformPage;
