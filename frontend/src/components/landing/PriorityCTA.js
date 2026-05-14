import React from 'react';
import { ArrowRight } from 'lucide-react';

export const PriorityCTA = ({ onPriorityAccess }) => (
  <section
    className="py-24 bg-gradient-to-b from-[#050505] to-[#030303]"
    data-testid="priority-cta-section"
  >
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
          <span className="text-[#C5A059] text-sm font-semibold">Limited Availability</span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          Ready for the Agentic Shift?
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Priority Access is reserved for institutional decision-makers committed to architectural sovereignty.
        </p>

        <button
          onClick={onPriorityAccess}
          className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] text-lg font-bold rounded hover:opacity-90 transition-opacity"
          data-testid="priority-cta-button"
        >
          Request Priority Access
          <ArrowRight className="w-6 h-6" />
        </button>

        <p className="text-gray-600 text-sm mt-6">
          BlackRock • JPMC • Blackstone • Tier-1 Institutions
        </p>
      </div>
    </div>
  </section>
);
