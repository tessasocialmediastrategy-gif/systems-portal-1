import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Lock, Shield, Download, CheckCircle } from 'lucide-react';

const InvestorDataRoomPage = () => {
  const journeySteps = [
    { step: 1, title: 'Review Teaser', description: 'Access public investment overview', link: '/investor/teaser', status: 'available' },
    { step: 2, title: 'Request NDA', description: 'Sign non-disclosure agreement', link: '/investor/nda-request', status: 'available' },
    { step: 3, title: 'Download CIM', description: 'Access full memorandum', link: '/investor/cim-download', status: 'requires-nda' },
    { step: 4, title: 'Appendix Pack', description: 'Supporting documentation', link: '/investor/appendix', status: 'requires-nda' },
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
              <Link to="/login" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">BUYER LOGIN</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">INVESTOR ACCESS</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Data Room
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Secure access to investment materials for qualified buyers. Follow the journey below 
            to access the Confidential Information Memorandum and supporting documentation.
          </p>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {journeySteps.map((item, index) => (
              <Link
                key={item.step}
                to={item.link}
                className={`block p-8 border ${item.status === 'available' ? 'border-[#262626] hover:border-[#C5A059]/50' : 'border-[#1a1a1a]'} bg-[#111111] transition-colors group`}
                data-testid={`journey-step-${item.step}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.status === 'available' ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-[#1a1a1a] text-gray-600'}`}>
                      {item.status === 'requires-nda' ? <Lock className="w-5 h-5" /> : <span className="text-lg font-light">{item.step}</span>}
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-1" style={{ fontFamily: 'Libre Baskerville, serif' }}>{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.status === 'requires-nda' && (
                      <span className="text-xs px-3 py-1 bg-[#1a1a1a] text-gray-500">Requires NDA</span>
                    )}
                    <ArrowRight className={`w-5 h-5 ${item.status === 'available' ? 'text-[#C5A059] group-hover:translate-x-1' : 'text-gray-700'} transition-transform`} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 border border-[#262626] bg-[#111111]">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>Confidentiality Notice</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All materials in this data room are confidential and intended solely for qualified buyers 
                  who have executed a non-disclosure agreement. Unauthorized access, distribution, or 
                  reproduction is strictly prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} OnPoint Authority Systems, Inc.</span>
          <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default InvestorDataRoomPage;
