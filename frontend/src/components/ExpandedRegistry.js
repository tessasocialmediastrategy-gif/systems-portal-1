import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, FolderOpen, Wrench } from 'lucide-react';
import { getFormatBadgeColor, getStatusBadgeColor } from '../data/systemsBookRegistry';

// Collapsible Registry Section Component
export const RegistrySection = ({ title, icon: Icon, items, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-[#C5A059]" />
          <span className="font-semibold text-[#111827]">{title}</span>
          <span className="text-xs bg-[#0B1C3E] text-white px-2 py-0.5 rounded-full">
            {items.length} items
          </span>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-[#6B7280]" />
        ) : (
          <ChevronRight className="w-5 h-5 text-[#6B7280]" />
        )}
      </button>
      
      {isExpanded && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#0B1C3E]/5">
              <tr>
                <th className="text-left p-3 font-semibold text-[#111827]">Code</th>
                <th className="text-left p-3 font-semibold text-[#111827]">Name</th>
                <th className="text-left p-3 font-semibold text-[#111827]">Format</th>
                <th className="text-left p-3 font-semibold text-[#111827]">Status</th>
                <th className="text-left p-3 font-semibold text-[#111827] hidden lg:table-cell">Output File</th>
                <th className="text-left p-3 font-semibold text-[#111827] hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-mono text-xs text-[#0B1C3E] whitespace-nowrap">{item.code}</td>
                  <td className="p-3 text-[#374151]">{item.name}</td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded ${getFormatBadgeColor(item.format)}`}>
                      {item.format}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusBadgeColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-[#6B7280] font-mono hidden lg:table-cell max-w-xs truncate" title={item.file}>
                    {item.file}
                  </td>
                  <td className="p-3 text-xs text-[#6B7280] hidden md:table-cell">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Full Registry Display Component
export const ExpandedRegistry = ({ registry, chapterCode }) => {
  if (!registry) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-[#C5A059]" />
        <h4 className="font-semibold text-[#111827]">Expanded Registry ({chapterCode})</h4>
        <span className="text-xs bg-[#C5A059]/20 text-[#C5A059] px-2 py-1 rounded-full">
          v2026-02-17r3
        </span>
      </div>

      <RegistrySection
        title="Appendix Pack (A01-A05)"
        icon={FolderOpen}
        items={registry.appendix}
        defaultExpanded={true}
      />

      <RegistrySection
        title="Toolkit (T01-T06)"
        icon={Wrench}
        items={registry.toolkit}
        defaultExpanded={false}
      />

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
        <strong>Note:</strong> All items are version-locked to <code className="bg-yellow-100 px-1 rounded">v2026-02-17r3</code>. 
        Notion paths are canonical. Output files follow naming convention: 
        <code className="bg-yellow-100 px-1 rounded ml-1">OnPoint_[Code]_[Name]_v2026-02-17r3.[ext]</code>
      </div>
    </div>
  );
};

export default ExpandedRegistry;
