import React from 'react';
import { Brain, Key, Network } from 'lucide-react';

const PILLARS = [
  {
    icon: Key,
    title: 'Sovereign Identity Layer',
    description: 'Non-custodial ZKP verification eliminating IdP dependencies',
    metric: '100%',
    metricLabel: 'Golden Ticket Elimination'
  },
  {
    icon: Brain,
    title: 'Agentic Governance',
    description: 'AI brain safeguards with State 0 cryptographic security',
    metric: '5.4x',
    metricLabel: 'Efficiency Multiplier'
  },
  {
    icon: Network,
    title: 'Quantum Bridge',
    description: 'Cross-institutional settlement via JPMC Onyx integration',
    metric: '$40M+',
    metricLabel: 'Annual Savings'
  }
];

export const QuantumPillars = () => (
  <section id="quantum" className="py-24 bg-[#050505]" data-testid="quantum-pillars-section">
    <div className="container-custom">
      <div className="text-center mb-16">
        <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
          The 3-Layer Governance OS
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          Architectural Sovereignty for the Agentic Era
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Powered by OPAS Authority OS™ — the institutional standard for AI governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PILLARS.map((pillar, i) => (
          <div
            key={i}
            className="bg-[#030303] border border-gray-800 rounded-lg p-8 hover:border-[#C5A059]/30 transition-all group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#C5A059]/20 to-[#C5A059]/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <pillar.icon className="w-7 h-7 text-[#C5A059]" />
            </div>
            <h3
              className="text-xl font-semibold text-white mb-3"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              {pillar.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{pillar.description}</p>
            <div className="pt-4 border-t border-gray-800">
              <div className="text-2xl font-bold text-[#C5A059]">{pillar.metric}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">{pillar.metricLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
