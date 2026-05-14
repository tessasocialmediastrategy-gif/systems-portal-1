import React from 'react';
import { ArrowRight, CheckCircle, Shield, TrendingUp, X } from 'lucide-react';

const ROWS = [
  { legacy: 'Centralized IdP', quantum: 'Non-Custodial ZKP', improvement: 'Zero Trust Native' },
  { legacy: 'Manual Compliance', quantum: 'Autonomous Governance', improvement: '5.4x Efficiency' },
  { legacy: 'Siloed Settlement', quantum: 'Onyx Bridge', improvement: 'Real-time Inter-bank' },
  { legacy: 'Reactive Security', quantum: 'State 0 Protocol', improvement: 'Predictive Defense' },
  { legacy: 'Legacy Infrastructure', quantum: 'Quantum-Ready Stack', improvement: 'Future-Proof' }
];

export const LegacyToQuantum = () => (
  <section className="py-24 bg-[#030303]" data-testid="legacy-to-quantum-section">
    <div className="container-custom">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full mb-6">
          <TrendingUp className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[#C5A059] text-sm font-medium">5.4x Multiplier Validated</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          Legacy-to-Quantum Transition Map
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          The definitive modernization pathway for institutional finance infrastructure.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-[#050505] border border-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-[#0a0a0a] border-b border-gray-800">
            <div className="text-xs text-gray-500 uppercase tracking-wider">Legacy State</div>
            <div className="text-xs text-[#C5A059] uppercase tracking-wider text-center">Quantum State</div>
            <div className="text-xs text-green-500 uppercase tracking-wider text-right">Improvement</div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 gap-4 p-4 border-b border-gray-800/50 hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500/50" />
                <span className="text-gray-400 text-sm">{row.legacy}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                <span className="text-white text-sm font-medium">{row.quantum}</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-400 text-sm">{row.improvement}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#050505] border border-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Wiz AI Security Audit</span>
            </div>
            <span className="text-gray-700">|</span>
            <span className="text-green-400 text-sm font-medium">Verified</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
