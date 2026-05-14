import React from 'react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

export const Hero = ({ onPriorityAccess }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Campaign Hero Background Image */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/assets/campaign/gold-desktop-hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/70 via-[#030303]/50 to-[#030303]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197,160,89,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff88]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88]/5 rounded-full blur-[150px]" />
    </div>

    <div className="container-custom relative z-10 pt-24">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-[#C5A059]/20 to-[#C5A059]/5 border border-[#C5A059]/30 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
          <span className="text-[#C5A059] text-sm font-semibold tracking-wider">THE AGENTIC SHIFT</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400 text-sm">GOLD Campaign</span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          The Future of Finance<br />
          <span className="bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] bg-clip-text text-transparent">
            Runs on Sovereign AI
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Project Authority Zero delivers the world's first 3-Layer Governance OS for institutional finance.
          <span className="text-white"> BlackRock. JPMC. Blackstone.</span> The agentic shift is here.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C5A059]">5.4x</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Efficiency Multiplier</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">$40M+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">ZKP Verified</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onPriorityAccess}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] font-bold rounded hover:opacity-90 transition-opacity text-lg"
            data-testid="hero-priority-access"
          >
            Request Priority Access
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#quantum"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded hover:bg-white/10 transition-colors"
          >
            <Play className="w-5 h-5" />
            View Quantum Framework
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600">
          <span className="text-xs uppercase tracking-wider">Trusted by</span>
          <span className="text-gray-500">|</span>
          <span className="text-sm">G-SIB Institutions</span>
          <span className="text-gray-500">|</span>
          <span className="text-sm">$2T+ AUM Partners</span>
          <span className="text-gray-500">|</span>
          <span className="text-sm">JPMC Onyx Network</span>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronRight className="w-6 h-6 text-[#C5A059] rotate-90" />
    </div>
  </section>
);
