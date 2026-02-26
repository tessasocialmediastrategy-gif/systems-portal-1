import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ArrowRight, FileText, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { syncData } from '../data/syncMapData';

// Find page data from syncMapData
const findPageBySlug = (slug) => {
  for (const area of Object.values(syncData)) {
    const page = area.find(item => item.slug === slug);
    if (page) return page;
  }
  return null;
};

// Get area name from slug
const getAreaFromSlug = (slug) => {
  if (slug.includes('/governance')) return 'Governance';
  if (slug.includes('/systems-book')) return 'Systems Book';
  if (slug.includes('/investor')) return 'Investor';
  if (slug.includes('/authority-os')) return 'Authority OS';
  if (slug.includes('/website-architecture')) return 'Website Architecture';
  if (slug.includes('/resources')) return 'Resources';
  return 'OnPoint';
};

const SkeletonPage = () => {
  const location = useLocation();
  const slug = location.pathname;
  const pageData = findPageBySlug(slug);
  const area = getAreaFromSlug(slug);

  // Breadcrumb parts
  const pathParts = slug.split('/').filter(Boolean);

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
              <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">MAIN SITE</a>
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">INVESTOR</Link>
              
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">
                AUTHORITY REVIEW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {pathParts.map((part, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-4 h-4" />
                <span className={i === pathParts.length - 1 ? 'text-[#C5A059]' : 'hover:text-white transition-colors'}>
                  {part.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {pageData ? (
            <>
              {/* Page Header */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2 py-1 bg-[#C5A059]/20 text-[#C5A059] tracking-wider">{pageData.sb}</span>
                  <span className="text-xs text-gray-500">{pageData.db}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {pageData.title}
                </h1>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Status: <span className={pageData.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}>{pageData.status}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Sync: {pageData.sync}
                  </span>
                </div>
              </div>

              {/* Placeholder Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="p-8 border border-[#262626] bg-[#111111] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <FileText className="w-8 h-8 text-[#C5A059]" />
                      <div>
                        <h2 className="text-xl font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>Content Pending</h2>
                        <p className="text-gray-500 text-sm">This page is part of the Systems Book registry</p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      This is a skeleton page for <strong>{pageData.title}</strong>. Content will be populated 
                      from the Systems Book registry once the source material is finalized.
                    </p>
                    <div className="p-4 bg-[#0A0A0A] border border-[#1a1a1a]">
                      <p className="text-sm text-gray-500">
                        <span className="text-[#C5A059]">Registry Code:</span> {pageData.sb}<br />
                        <span className="text-[#C5A059]">Website Code:</span> {pageData.wp}<br />
                        <span className="text-[#C5A059]">Database:</span> {pageData.db}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div>
                  <div className="p-6 border border-[#262626] bg-[#111111] mb-6">
                    <h3 className="text-lg font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>Quick Links</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/systems-book" className="flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors text-sm">
                          <ArrowRight className="w-4 h-4" /> Systems Book
                        </Link>
                      </li>
                      <li>
                        <Link to="/sync-map" className="flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors text-sm">
                          <ArrowRight className="w-4 h-4" /> Sync Map
                        </Link>
                      </li>
                      <li>
                        <Link to="/sb-control-panel" className="flex items-center gap-2 text-gray-400 hover:text-[#C5A059] transition-colors text-sm">
                          <ArrowRight className="w-4 h-4" /> Control Panel
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 border border-[#C5A059]/30 bg-[#C5A059]/5">
                    <p className="text-sm text-gray-400">
                      <span className="text-[#C5A059] font-medium">Need this content?</span><br />
                      Contact us to prioritize this page in the content pipeline.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#C5A059] text-sm mt-4 hover:gap-3 transition-all">
                      Request Content <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // 404-like state for unknown slugs
            <div className="text-center py-20">
              <h1 className="text-4xl font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>Page Not in Registry</h1>
              <p className="text-gray-400 mb-8">This page slug is not yet mapped in the Systems Book registry.</p>
              <Link to="/sync-map" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">
                View Sync Map <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a] mt-20">
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

export default SkeletonPage;
