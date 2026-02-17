import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight, FileText, Download, Shield, AlertTriangle } from 'lucide-react';

const CIMDownloadPage = () => {
  // In production, this would check if user has signed NDA
  const hasNDAAccess = false;

  if (!hasNDAAccess) {
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

        {/* Locked State */}
        <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
          <div className="max-w-md text-center">
            <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-8">
              <Lock className="w-10 h-10 text-gray-600" />
            </div>
            <h1 className="text-3xl font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>NDA Required</h1>
            <p className="text-gray-400 mb-8">
              Access to the Confidential Information Memorandum requires a signed Non-Disclosure Agreement.
            </p>
            <div className="space-y-4">
              <Link to="/investor/nda-request" className="block w-full px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider font-medium hover:bg-[#d4af6a] transition-colors text-center">
                Request NDA Access
              </Link>
              <Link to="/login" className="block w-full px-8 py-4 border border-[#262626] text-white text-sm tracking-wider hover:border-[#C5A059] transition-colors text-center">
                Already have access? Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>ONPOINT.</Link>
            <div className="flex items-center gap-8">
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">DATA ROOM</Link>
              <Link to="/portal" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">MY PORTAL</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/investor/data-room" className="hover:text-white transition-colors">Data Room</Link>
            <span>/</span>
            <span className="text-[#C5A059]">CIM Download</span>
          </div>

          <h1 className="text-4xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Confidential Information Memorandum
          </h1>

          {/* Warning */}
          <div className="p-6 border border-[#C5A059]/30 bg-[#C5A059]/5 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#C5A059] font-medium mb-2">Confidentiality Reminder</h3>
                <p className="text-gray-400 text-sm">
                  This document is confidential and protected under your signed NDA. Do not share, 
                  distribute, or reproduce without written authorization.
                </p>
              </div>
            </div>
          </div>

          {/* Download Card */}
          <div className="p-8 border border-[#262626] bg-[#111111]">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-[#C5A059]/20 flex items-center justify-center">
                <FileText className="w-10 h-10 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-2xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  OnPoint Authority Systems CIM
                </h3>
                <p className="text-gray-500">PDF • Confidential • v2026.02</p>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider font-medium hover:bg-[#d4af6a] transition-colors"
              data-testid="download-cim">
              <Download className="w-4 h-4" /> Download CIM
            </button>
          </div>

          {/* Next Steps */}
          <div className="mt-8 p-6 border border-[#1a1a1a] bg-[#0d0d0d]">
            <p className="text-gray-500 text-sm">
              <span className="text-[#C5A059]">Next:</span> Review the Appendix Pack for supporting 
              documentation, financials, and additional materials.
            </p>
            <Link to="/investor/appendix" className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider mt-4 hover:gap-3 transition-all">
              View Appendix Pack <ArrowRight className="w-4 h-4" />
            </Link>
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

export default CIMDownloadPage;
