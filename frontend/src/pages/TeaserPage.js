import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, CheckCircle, Building2, TrendingUp, Users, DollarSign } from 'lucide-react';

const TeaserPage = () => {
  const highlights = [
    { icon: Building2, label: 'Established Business', value: 'Authority Systems Provider' },
    { icon: TrendingUp, label: 'Growth Model', value: 'Scalable & Licensable' },
    { icon: Users, label: 'Target Buyers', value: 'Strategic & Financial' },
    { icon: DollarSign, label: 'Transaction Type', value: 'Full Acquisition' },
  ];

  const included = [
    'Business Overview',
    'Market Positioning',
    'Revenue Model',
    'Growth Opportunity',
    'Investment Highlights',
    'Next Steps'
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>ONPOINT.</Link>
            <div className="flex items-center gap-8">
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">DATA ROOM</Link>
              <Link to="/login" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">BUYER LOGIN</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/investor/data-room" className="hover:text-white transition-colors">Data Room</Link>
            <span>/</span>
            <span className="text-[#C5A059]">Teaser</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Investment Teaser
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Public overview of the OnPoint Authority Systems investment opportunity. 
            No NDA required for this document.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Highlights */}
            <div>
              <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>Opportunity Highlights</h2>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {highlights.map((item) => (
                  <div key={item.label} className="p-6 border border-[#262626] bg-[#111111]">
                    <item.icon className="w-6 h-6 text-[#C5A059] mb-4" />
                    <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>Teaser Includes</h3>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Download Card */}
            <div>
              <div className="p-8 border border-[#262626] bg-[#111111]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#C5A059]/20 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>Investment Teaser</h3>
                    <p className="text-gray-500 text-sm">PDF • Public Document</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  This teaser provides an overview of the investment opportunity. For detailed 
                  financials and complete information, please proceed to request NDA access.
                </p>

                <div className="space-y-4">
                  <a
                    href="/documents/OnPoint_Teaser_v2026-02-16.pdf"
                    download="OnPoint_Teaser_v2026-02-16.pdf"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider font-medium hover:bg-[#d4af6a] transition-colors"
                    data-testid="download-teaser"
                  >
                    <Download className="w-4 h-4" /> Download Teaser
                  </a>
                  <Link
                    to="/investor/nda-request"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-[#C5A059] text-[#C5A059] text-sm tracking-wider hover:bg-[#C5A059]/10 transition-colors"
                  >
                    Request NDA Access <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-8 p-6 border border-[#1a1a1a] bg-[#0d0d0d]">
                <p className="text-gray-500 text-sm">
                  <span className="text-[#C5A059]">Next Step:</span> After reviewing the teaser, 
                  request NDA access to view the full Confidential Information Memorandum.
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

export default TeaserPage;
