import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SystemsPage = () => {
  const systemPillars = [
    'Authority Architecture Blueprint',
    'Operator Certification Engine',
    'Internal Review & Approval System',
    'Brand & IP Governance Layer',
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
              <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">
                MAIN SITE
              </a>
              <Link to="/systems" className="text-sm tracking-wider text-[#C5A059] border-b border-[#C5A059]">
                SYSTEMS
              </Link>
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">
                INVESTOR
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
      <section className="pt-32 pb-16 px-6">
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
            {systemPillars.map((pillar, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#C5A059] mt-2 flex-shrink-0" />
                <span className="text-gray-300">{pillar}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[#C5A059] text-lg italic" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            A business that scales without dilution and survives diligence without explanation.
          </p>
        </div>
      </section>

      {/* System Architecture Layers Section */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-8 text-center">SYSTEM ARCHITECTURE LAYERS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://static.prod-images.emergentagent.com/jobs/eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/images/959def4a2709c7d5d09c5ec9b35309b35d2e7ad555808c5bad3c67d77b40d7fe.png"
                alt="Institutional Authority"
                className="w-full h-auto mb-4"
                data-testid="chapter-img-authority"
              />
              <p className="text-gray-400 text-sm">Authority design</p>
            </div>
            <div className="text-center">
              <img 
                src="https://static.prod-images.emergentagent.com/jobs/eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/images/ce8467205a65f261a519d69be33e3750fa5c524047aa9e8d020d16f0a80a271b.png"
                alt="The Certification Gap"
                className="w-full h-auto mb-4"
                data-testid="chapter-img-certification"
              />
              <p className="text-gray-400 text-sm">Operator certification</p>
            </div>
            <div className="text-center">
              <img 
                src="https://static.prod-images.emergentagent.com/jobs/eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/images/e38ad10ce5a7ac07f9ec908770084cf36460f42c055cf6ab4f6f3ed380e1baaa.png"
                alt="Enforce or Erode"
                className="w-full h-auto mb-4"
                data-testid="chapter-img-enforce"
              />
              <p className="text-gray-400 text-sm">Enforcement mechanics</p>
            </div>
            <div className="text-center">
              <img 
                src="https://static.prod-images.emergentagent.com/jobs/eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/images/e8b38217e9f84b5951f2cf659de671fd5bd45cb29f068cd416e2b327f87ebaf5.png"
                alt="Governance Beyond the Founder"
                className="w-full h-auto mb-4"
                data-testid="chapter-img-governance"
              />
              <p className="text-gray-400 text-sm">Post-founder governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Transfer Section */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Built for transfer.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                OnPoint Authority Systems are designed from day one to be licensable, 
                transferable, and executable without the original founder.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Authority is not built through visibility, personality, or persuasion. 
                It is engineered through systems, governance, and enforceable standards.
              </p>
              <Link 
                to="/authority-review"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors"
                data-testid="cta-authority-review"
              >
                Request Authority Review <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://static.prod-images.emergentagent.com/jobs/eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/images/197fbc4af3b985c58196838da9a16969ad8da3e80eb3c0ed2dea3d4de6b6eb68.png"
                alt="OnPoint Authority Book"
                className="max-w-lg w-full"
                data-testid="main-book-spread"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src="https://customer-assets.emergentagent.com/job_167f0f2f-e4d4-4518-8cd8-ec0b74232bce/artifacts/g2m36blt_Certification%20Seal.png"
                alt="OnPoint Authority Certification Book and Seal"
                className="max-w-lg w-full"
                data-testid="certification-image"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#C5A059] text-sm tracking-widest mb-4">CERTIFICATION</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Certified Authority Operator
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                The standard in scalable, licensable authority design. OnPoint Authority 
                outlines the architecture behind businesses that scale without founders, 
                license without dilution, and exit without drama.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Written for operators, boards, and buyers, this book documents how authority 
                becomes infrastructure—transferable, enforceable, and durable beyond any individual.
              </p>
              <Link 
                to="/certification"
                className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider hover:gap-3 transition-all"
              >
                Learn about certification <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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
