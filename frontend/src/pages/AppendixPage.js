import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight, FileText, Download, FolderOpen, File } from 'lucide-react';

const AppendixPage = () => {
  // In production, this would check if user has signed NDA
  const hasNDAAccess = false;

  const appendixItems = [
    { name: 'Financial Statements (3 Years)', type: 'PDF', size: '2.4 MB' },
    { name: 'Revenue Breakdown', type: 'XLSX', size: '856 KB' },
    { name: 'Customer Analysis', type: 'PDF', size: '1.8 MB' },
    { name: 'Market Research', type: 'PDF', size: '3.2 MB' },
    { name: 'Organizational Chart', type: 'PDF', size: '420 KB' },
    { name: 'IP & Asset Register', type: 'PDF', size: '1.1 MB' },
    { name: 'Contracts Summary', type: 'PDF', size: '2.8 MB' },
    { name: 'Systems Book Overview', type: 'PDF', size: '4.5 MB' },
  ];

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
              Access to the Appendix Pack requires a signed Non-Disclosure Agreement.
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
            <span className="text-[#C5A059]">Appendix Pack</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <FolderOpen className="w-8 h-8 text-[#C5A059]" />
            <h1 className="text-4xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Appendix Pack
            </h1>
          </div>

          <p className="text-gray-400 mb-8">
            Supporting documentation for the Confidential Information Memorandum. 
            All files are confidential and subject to your signed NDA.
          </p>

          {/* File List */}
          <div className="border border-[#262626] bg-[#111111]">
            {appendixItems.map((item, index) => (
              <div 
                key={item.name}
                className={`flex items-center justify-between p-6 ${index !== appendixItems.length - 1 ? 'border-b border-[#262626]' : ''} hover:bg-[#1a1a1a] transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <File className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-white">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.type} • {item.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#C5A059] text-sm hover:text-[#d4af6a] transition-colors">
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            ))}
          </div>

          {/* Download All */}
          <div className="mt-8">
            <a 
              href="/documents/OnPoint_Appendix_Pack_v2026-02-16.pdf"
              download="OnPoint_Appendix_Pack_v2026-02-16.pdf"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider font-medium hover:bg-[#d4af6a] transition-colors"
              data-testid="download-all-appendix">
              <Download className="w-4 h-4" /> Download Appendix Pack (PDF)
            </a>
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

export default AppendixPage;
