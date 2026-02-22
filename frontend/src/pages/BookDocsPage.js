import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, FileText, Image, Package, Download, CheckCircle,
  Home, ChevronRight, Layers, Printer, Globe, Code,
  Tablet, FileCode, File, Monitor
} from 'lucide-react';

const BookDocsPage = () => {
  const [activeTab, setActiveTab] = useState('assembly');

  const tabs = [
    { id: 'assembly', label: 'Assembly Guide', icon: Package },
    { id: 'diagrams', label: 'Diagrams', icon: Image },
    { id: 'formats', label: 'File Formats', icon: FileText },
  ];

  // Chapter breakdown data
  const chapters = [
    { num: 1, title: 'Defining Authority', diagrams: 2 },
    { num: 2, title: 'Authority ≠ Experience', diagrams: 2 },
    { num: 3, title: 'Certification Systems', diagrams: 2 },
    { num: 4, title: 'Licensing & Enforcement', diagrams: 2 },
    { num: 5, title: 'Governance Architecture', diagrams: 2 },
    { num: 6, title: 'Authority Transfer', diagrams: 2 },
    { num: 7, title: 'Revenue Architecture', diagrams: 4 },
    { num: 8, title: 'Valuation Impact', diagrams: 4 },
    { num: 9, title: 'Post-Founder Continuity', diagrams: 4 },
    { num: 10, title: 'Authority as Asset', diagrams: 4 },
  ];

  // Diagram mapping data
  const diagramMapping = [
    { chapter: 1, id: 'CH1-D1', name: 'Authority vs Influence', page: 14 },
    { chapter: 1, id: 'CH1-D2', name: 'Informal vs Engineered Authority', page: 18 },
    { chapter: 2, id: 'CH2-D1', name: 'Experience ≠ Authority', page: 34 },
    { chapter: 2, id: 'CH2-D2', name: 'Authority Failure Modes', page: 41 },
    { chapter: 3, id: 'CH3-D1', name: 'Certification Gate Model', page: 57 },
    { chapter: 3, id: 'CH3-D2', name: 'Authority Qualification Funnel', page: 63 },
    { chapter: 4, id: 'CH4-D1', name: 'Licensing vs Permission', page: 79 },
    { chapter: 4, id: 'CH4-D2', name: 'Enforcement Escalation Loop', page: 86 },
    { chapter: 5, id: 'CH5-D1', name: 'Governance vs Management', page: 104 },
    { chapter: 5, id: 'CH5-D2', name: 'Decision Rights Map', page: 112 },
    { chapter: 6, id: 'CH6-D1', name: 'Authority Substitution Model', page: 129 },
    { chapter: 6, id: 'CH6-D2', name: 'Governance Escalation Ladder', page: 136 },
    { chapter: 7, id: 'CH7-D1', name: 'Services vs Authority Revenue', page: 153 },
    { chapter: 7, id: 'CH7-D2', name: 'Authority Revenue Stack', page: 159 },
    { chapter: 7, id: 'CH7-D3', name: 'Licensing Renewal Loop', page: 165 },
    { chapter: 7, id: 'CH7-D4', name: 'Authority Pricing Logic', page: 171 },
    { chapter: 8, id: 'CH8-D1', name: 'Informal Authority Risk Discount', page: 189 },
    { chapter: 8, id: 'CH8-D2', name: 'Authority Transferability', page: 195 },
    { chapter: 8, id: 'CH8-D3', name: 'Multiple Expansion Ladder', page: 201 },
    { chapter: 8, id: 'CH8-D4', name: 'Buyer Confidence Curve', page: 206 },
    { chapter: 9, id: 'CH9-D1', name: 'Founder Presence vs Absence', page: 223 },
    { chapter: 9, id: 'CH9-D2', name: 'Founder Authority Transition', page: 229 },
    { chapter: 9, id: 'CH9-D3', name: 'Culture Stabilization', page: 235 },
    { chapter: 9, id: 'CH9-D4', name: 'Exit Optionality Map', page: 241 },
    { chapter: 10, id: 'CH10-D1', name: 'Authority as Asset', page: 255 },
    { chapter: 10, id: 'CH10-D2', name: 'Infrastructure vs Advantage', page: 261 },
    { chapter: 10, id: 'CH10-D3', name: 'Replication Barrier Model', page: 267 },
    { chapter: 10, id: 'CH10-D4', name: 'Authority Enterprise Map', page: 273 },
  ];

  // File formats data
  const fileFormats = [
    { name: 'Word (.docx)', icon: FileText, use: 'Editing, Microsoft Word, Google Docs', editable: true },
    { name: 'PDF (.pdf)', icon: File, use: 'Reading, printing, universal viewing', editable: false },
    { name: 'Mac RTF (.rtf)', icon: FileCode, use: 'Mac Pages, TextEdit, cross-platform', editable: true },
    { name: 'Web HTML (.html)', icon: Globe, use: 'Publishing online, web viewing', editable: true },
    { name: 'eBook EPUB (.epub)', icon: Tablet, use: 'Kindle, Apple Books, Google Play', editable: false },
    { name: 'Python (.py)', icon: Code, use: 'Programmatic access, automation', editable: true },
    { name: 'Markdown (.md)', icon: FileText, use: 'GitHub, static site generators', editable: true },
    { name: 'Plain Text (.txt)', icon: File, use: 'Universal backup, simple reading', editable: true },
  ];

  // Existing PNG diagrams
  const existingDiagrams = [
    '01_Founder_Dependency_Loop',
    '02_Transferability_Gap_Chart',
    '03_Authority_Governance_Stack',
    '04_Charter_Certification_License_Flow',
    '05_Authority_Revenue_Engine',
    '06_Cohort_Retention_Structure',
    '07_Platform_Permission_Model',
    '08_Governance_Control_Matrix',
    '09_License_Scope_Hierarchy',
    '10_Recurring_Enforcement_Cycle',
    '11_Transfer_Survival_Map',
    '12_Board_Oversight_Model',
    '13_Post-Founder_Continuity_Flow',
    '14_Authority_Enterprise_OS',
    '15_Certification_Gate_Architecture',
    '16_Revocation_Trigger_Flow',
    '17_Authority_Enforcement_Logic',
    '18_Audit_Escalation_Ladder',
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1C3E] text-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#C5A059]" />
            <span className="font-semibold">OnPoint Authority</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/read-book" className="text-sm text-white/70 hover:text-white">Read Book</Link>
            <Link to="/systems-book" className="text-sm text-white/70 hover:text-white">Systems Book</Link>
            <Link to="/" className="text-sm text-white/70 hover:text-white flex items-center gap-1">
              <Home className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-8 bg-[#0B1C3E]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-[#C5A059] text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Book Documentation</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Book Publishing Documentation
          </h1>
          <p className="text-gray-300">
            Complete assembly guide, diagram inventory, and file format specifications for the OnPoint Authority book.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#C5A059] text-[#0B1C3E]'
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
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Assembly Guide Tab */}
        {activeTab === 'assembly' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-3xl font-bold text-[#0B1C3E]">10</p>
                <p className="text-sm text-gray-500">Chapters</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-3xl font-bold text-[#0B1C3E]">28</p>
                <p className="text-sm text-gray-500">Book Diagrams</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-3xl font-bold text-[#0B1C3E]">280</p>
                <p className="text-sm text-gray-500">Est. Pages</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-3xl font-bold text-[#0B1C3E]">6×9</p>
                <p className="text-sm text-gray-500">Hardcover Format</p>
              </div>
            </div>

            {/* Chapter Breakdown */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#0B1C3E] text-white">
                <h2 className="font-semibold flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Chapter Breakdown
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {chapters.map((ch) => (
                  <div key={ch.num} className="p-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center justify-center text-sm font-bold">
                        {ch.num}
                      </span>
                      <span className="font-medium text-[#111827]">{ch.title}</span>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Image className="w-4 h-4" />
                      {ch.diagrams} diagrams
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#0B1C3E] text-white">
                <h2 className="font-semibold">Assembly Steps</h2>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { step: 1, title: 'Insert Full Chapter Content', desc: 'Copy manuscript text into each chapter section' },
                  { step: 2, title: 'Insert All Diagrams', desc: 'Replace [DIAGRAM: name] placeholders with actual images' },
                  { step: 3, title: 'Format for Print', desc: 'Open in InDesign, set 6×9 trim, add page numbers' },
                  { step: 4, title: 'Create Book Cover', desc: 'Design front, spine, and back cover' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#C5A059] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-medium text-[#111827]">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publishing Options */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Printer className="w-8 h-8 text-[#C5A059] mb-3" />
                <h3 className="font-semibold text-[#111827] mb-2">Hardcover Print</h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 6×9 format</li>
                  <li>• IngramSpark or KDP Print</li>
                  <li>• Cream/white 60-70lb paper</li>
                  <li>• Casewrap binding</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Tablet className="w-8 h-8 text-[#C5A059] mb-3" />
                <h3 className="font-semibold text-[#111827] mb-2">Digital/eBook</h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• PDF for direct sales</li>
                  <li>• EPUB for Kindle/Apple</li>
                  <li>• Price: $27-47</li>
                  <li>• Authority positioning</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Monitor className="w-8 h-8 text-[#C5A059] mb-3" />
                <h3 className="font-semibold text-[#111827] mb-2">Audiobook</h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• After print success</li>
                  <li>• Professional narrator</li>
                  <li>• ACX (Audible) platform</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Diagrams Tab */}
        {activeTab === 'diagrams' && (
          <div className="space-y-8">
            {/* Diagram Stats */}
            <div className="bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-lg p-4">
              <p className="text-[#0B1C3E]">
                <strong>Total Diagrams:</strong> 40 (18 existing PNG + 22 new SVG)
              </p>
              <p className="text-sm text-[#0B1C3E]/70 mt-1">
                All diagrams: Black ink only, thick lines (3-4px), Inter font, grayscale, print-ready
              </p>
            </div>

            {/* Diagram Mapping Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#0B1C3E] text-white">
                <h2 className="font-semibold">Diagram Page Mapping</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Ch.</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">ID</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Diagram Name</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Page</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {diagramMapping.map((d, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-gray-500">{d.chapter}</td>
                        <td className="px-4 py-2 font-mono text-xs text-[#C5A059]">{d.id}</td>
                        <td className="px-4 py-2 text-[#111827]">{d.name}</td>
                        <td className="px-4 py-2 text-gray-500">{d.page}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Existing PNG Diagrams */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#0B1C3E] text-white flex items-center justify-between">
                <h2 className="font-semibold">Existing PNG Diagrams (18)</h2>
                <Link to="/systems-book" className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30">
                  View in Systems Book →
                </Link>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {existingDiagrams.map((name, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-[#111827] truncate">{name}.png</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* File Formats Tab */}
        {activeTab === 'formats' && (
          <div className="space-y-8">
            {/* Format Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fileFormats.map((format, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                  <format.icon className="w-8 h-8 text-[#C5A059] mb-3" />
                  <h3 className="font-semibold text-[#111827] mb-1">{format.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{format.use}</p>
                  <span className={`text-xs px-2 py-1 rounded ${format.editable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {format.editable ? 'Editable' : 'View Only'}
                  </span>
                </div>
              ))}
            </div>

            {/* Publishing Checklist */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#0B1C3E] text-white">
                <h2 className="font-semibold">Publishing Checklist</h2>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-[#111827] mb-3 flex items-center gap-2">
                    <Printer className="w-5 h-5 text-[#C5A059]" />
                    Hardcover Print
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Use .docx file</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Format in InDesign</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Insert all diagrams</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Create cover design</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Export to PDF</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Upload to printer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-[#111827] mb-3 flex items-center gap-2">
                    <Tablet className="w-5 h-5 text-[#C5A059]" />
                    Kindle/eBook
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Use .epub file</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Upload to Amazon KDP</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Add cover image</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Set pricing</li>
                    <li className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Publish</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* File Sizes */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="font-semibold text-[#111827]">File Sizes (Approximate)</h2>
              </div>
              <div className="p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="pb-2">Format</th>
                      <th className="pb-2">Size</th>
                      <th className="pb-2">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-2">.docx</td><td>~100 KB</td><td className="text-green-600">Editable</td></tr>
                    <tr><td className="py-2">.pdf</td><td>~500 KB</td><td className="text-gray-500">View only</td></tr>
                    <tr><td className="py-2">.rtf</td><td>~200 KB</td><td className="text-green-600">Editable</td></tr>
                    <tr><td className="py-2">.html</td><td>~150 KB</td><td className="text-green-600">Editable</td></tr>
                    <tr><td className="py-2">.epub</td><td>~200 KB</td><td className="text-gray-500">E-reader</td></tr>
                    <tr><td className="py-2">Diagrams (all)</td><td>~3 MB</td><td className="text-blue-600">Images</td></tr>
                    <tr className="font-medium"><td className="py-2">Total Package</td><td>~4-5 MB</td><td></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1C3E] text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-white/60">© 2026 OnPoint Authority Systems, Inc.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link to="/read-book" className="text-sm text-[#C5A059] hover:underline">Read the Book</Link>
            <Link to="/systems-book" className="text-sm text-[#C5A059] hover:underline">Systems Book</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookDocsPage;
