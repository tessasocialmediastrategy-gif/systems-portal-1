import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Download, FolderOpen, FileText, Globe, Wrench,
  ChevronDown, ChevronRight, ExternalLink, CheckCircle, Clock,
  Database, Users, Calendar, Shield, Settings
} from 'lucide-react';
import { BookMaster, ChapterRollups, allRegistries, registryVersion } from '../data/systemsBookRegistry';

const SBControlPanelPage = () => {
  const [expandedChapters, setExpandedChapters] = useState({});
  const [activeTab, setActiveTab] = useState('overview');

  const toggleChapter = (ch) => {
    setExpandedChapters(prev => ({ ...prev, [ch]: !prev[ch] }));
  };

  const chapters = [
    { id: 'SB-01', name: 'Foundation & Positioning', icon: Shield },
    { id: 'SB-02', name: 'Offer, Pricing & Packaging', icon: FileText },
    { id: 'SB-03', name: 'Lead Gen & Marketing Engine', icon: Globe },
    { id: 'SB-04', name: 'Client Experience & Delivery', icon: Users },
    { id: 'SB-05', name: 'Systems, Tools & Automation', icon: Settings },
    { id: 'SB-06', name: 'Performance Management & KPI', icon: Database },
    { id: 'SB-07', name: 'Delivery & Operations', icon: FolderOpen },
    { id: 'SB-08', name: 'Sales Pipeline & Growth', icon: ChevronRight },
    { id: 'SB-09', name: 'Finance & Reporting', icon: FileText },
    { id: 'SB-10', name: 'People & Org Design', icon: Users },
    { id: 'SB-11', name: 'Legal, Risk & Compliance', icon: Shield },
    { id: 'SB-12', name: 'Exit Readiness & M&A', icon: CheckCircle },
  ];

  // Calculate stats
  const totalItems = Object.values(allRegistries).reduce((sum, reg) => {
    return sum + (reg.packParents?.length || 0) + (reg.web?.length || 0) + 
           (reg.appendix?.length || 0) + (reg.toolkit?.length || 0);
  }, 0);

  const activeItems = Object.values(allRegistries).reduce((sum, reg) => {
    const items = [...(reg.packParents||[]), ...(reg.web||[]), ...(reg.appendix||[]), ...(reg.toolkit||[])];
    return sum + items.filter(i => i.status === 'ACTIVE').length;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0B1C3E] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#C5A059]/20 rounded-lg">
              <BookOpen className="w-8 h-8 text-[#C5A059]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Systems Book Control Panel
              </h1>
              <p className="text-gray-300 mt-1">
                Command center for OnPoint Authority Systems Book
              </p>
            </div>
          </div>
          
          {/* Version Badge */}
          <div className="flex items-center gap-4 mt-6">
            <span className="px-4 py-2 bg-[#C5A059]/20 text-[#C5A059] rounded-full font-medium">
              {registryVersion}
            </span>
            <span className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              Version Locked
            </span>
            <span className="text-gray-400">
              {activeItems} / {totalItems} items ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'chapters', label: 'Chapters', icon: FolderOpen },
              { id: 'registry', label: 'Registry', icon: Database },
              { id: 'distribution', label: 'Distribution Log', icon: Users },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id 
                    ? 'border-[#C5A059] text-[#0B1C3E] bg-[#C5A059]/5' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Book Master Card */}
            <div className="bg-gradient-to-r from-[#0B1C3E] to-[#1a3a6e] rounded-xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-6 h-6 text-[#C5A059]" />
                    <span className="text-[#C5A059] font-medium">SB-00</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {BookMaster.name}
                  </h2>
                  <p className="text-gray-300 text-sm mb-4">{BookMaster.notes}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {BookMaster.status}
                    </span>
                    <span className="text-gray-400">{BookMaster.format}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-[#0B1C3E] rounded-lg font-medium hover:bg-[#d4af6a] transition-colors">
                  <Download className="w-4 h-4" />
                  Download Master
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-3xl font-bold text-[#0B1C3E]">12</div>
                <div className="text-gray-500 text-sm">Chapter Rollups</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-3xl font-bold text-[#0B1C3E]">36</div>
                <div className="text-gray-500 text-sm">Pack Parents</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-3xl font-bold text-[#0B1C3E]">168</div>
                <div className="text-gray-500 text-sm">Child Items</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-3xl font-bold text-green-600">217</div>
                <div className="text-gray-500 text-sm">Total Registry Rows</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-[#0B1C3E] mb-4">Quick Links</h3>
              <div className="grid grid-cols-3 gap-4">
                <Link to="/systems-book" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <BookOpen className="w-5 h-5 text-[#C5A059]" />
                  <span className="font-medium text-[#0B1C3E]">Systems Book</span>
                </Link>
                <Link to="/sync-map" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Database className="w-5 h-5 text-[#C5A059]" />
                  <span className="font-medium text-[#0B1C3E]">Sync Map</span>
                </Link>
                <Link to="/buyer-portal" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Users className="w-5 h-5 text-[#C5A059]" />
                  <span className="font-medium text-[#0B1C3E]">Buyer Portal</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Chapters Tab */}
        {activeTab === 'chapters' && (
          <div className="space-y-4">
            {chapters.map(chapter => {
              const reg = allRegistries[chapter.id];
              const isExpanded = expandedChapters[chapter.id];
              const chapterRollup = ChapterRollups[chapter.id];
              
              return (
                <div key={chapter.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-[#0B1C3E]/5 rounded-lg">
                        <chapter.icon className="w-5 h-5 text-[#0B1C3E]" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-[#C5A059] font-medium">{chapter.id}</span>
                          <span className="font-semibold text-[#0B1C3E]">{chapter.name}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {reg?.packParents?.length || 0} packs • {(reg?.web?.length || 0) + (reg?.appendix?.length || 0) + (reg?.toolkit?.length || 0)} items
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">ACTIVE</span>
                      {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                      {/* Chapter Rollup */}
                      <div className="mb-4 p-3 bg-[#0B1C3E]/5 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-[#C5A059] font-medium">Chapter Rollup</div>
                            <div className="font-medium text-[#0B1C3E]">{chapterRollup?.name}</div>
                          </div>
                          <button className="flex items-center gap-1 px-3 py-1 bg-[#C5A059] text-white text-sm rounded hover:bg-[#b8954f]">
                            <Download className="w-3 h-3" />
                            Download
                          </button>
                        </div>
                      </div>
                      
                      {/* Pack Parents */}
                      <div className="grid grid-cols-3 gap-3">
                        {reg?.packParents?.map(pack => (
                          <div key={pack.code} className="p-3 bg-white rounded border border-gray-200">
                            <div className="flex items-center gap-2 mb-1">
                              {pack.code.includes('Axx') && <FolderOpen className="w-4 h-4 text-blue-500" />}
                              {pack.code.includes('Wxx') && <Globe className="w-4 h-4 text-green-500" />}
                              {pack.code.includes('Txx') && <Wrench className="w-4 h-4 text-orange-500" />}
                              <span className="text-xs text-gray-500">{pack.code}</span>
                            </div>
                            <div className="text-sm font-medium text-[#0B1C3E] truncate">{pack.name.split(' — ')[0]}</div>
                            <div className="text-xs text-gray-400 mt-1">{pack.format}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Registry Tab */}
        {activeTab === 'registry' && (
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#0B1C3E]">Full Registry Export</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0B1C3E] text-white rounded-lg hover:bg-[#152d52]">
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Format</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Book Master */}
                  <tr className="bg-[#0B1C3E]/5">
                    <td className="px-4 py-3 font-medium text-[#C5A059]">{BookMaster.code}</td>
                    <td className="px-4 py-3 text-[#0B1C3E]">{BookMaster.name}</td>
                    <td className="px-4 py-3 text-gray-500">{BookMaster.format}</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">ACTIVE</span></td>
                    <td className="px-4 py-3 text-gray-500">Book Master</td>
                  </tr>
                  {/* Chapter Rollups */}
                  {Object.entries(ChapterRollups).slice(0, 5).map(([key, ch]) => (
                    <tr key={key} className="bg-blue-50/50">
                      <td className="px-4 py-3 font-medium text-[#C5A059]">{ch.code}</td>
                      <td className="px-4 py-3 text-[#0B1C3E]">{ch.name}</td>
                      <td className="px-4 py-3 text-gray-500">{ch.format}</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">ACTIVE</span></td>
                      <td className="px-4 py-3 text-gray-500">Chapter Rollup</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5" className="px-4 py-2 text-center text-gray-400 text-sm">
                      ... and {217 - 6} more rows. Click "Export CSV" for full registry.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Distribution Log Tab */}
        {activeTab === 'distribution' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#0B1C3E]">Distribution Log</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-white rounded-lg hover:bg-[#b8954f]">
                  <FileText className="w-4 h-4" />
                  New Entry
                </button>
              </div>
              
              {/* Log Table */}
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assets Sent</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Release</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-gray-500">2026-02-17</td>
                    <td className="px-4 py-3 text-[#0B1C3E]">Internal Team</td>
                    <td className="px-4 py-3 text-[#0B1C3E]">SB-00 Master + All Chapters</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-[#C5A059]/20 text-[#C5A059] text-xs rounded-full">v2026-02-17r3</span></td>
                    <td className="px-4 py-3 text-gray-500">OneDrive Share</td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="px-4 py-8 text-center text-gray-400">
                      <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      No additional distribution entries yet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SBControlPanelPage;
