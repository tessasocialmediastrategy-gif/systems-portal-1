import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const TrustTeaser = () => (
  <section
    className="relative py-14 md:py-20 bg-[#050505] border-y border-white/5 overflow-hidden"
    data-testid="trust-teaser-section"
  >
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle at 15% 50%, rgba(197,160,89,0.4) 0%, transparent 35%), radial-gradient(circle at 85% 50%, rgba(0,255,136,0.15) 0%, transparent 40%)'
      }}
    />
    <div className="container-custom relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1 max-w-2xl">
            <p className="text-[10px] text-[#C5A059] font-semibold tracking-[0.3em] uppercase mb-3">
              Architectural Integrity
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Built on 35 Years of Architectural Integrity.
            </h3>
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              From the 1991 COBOL mainframe to the 2026 Authority OS — four eras, one unbroken thread.
            </p>
          </div>
          <Link
            to="/heritage"
            className="group inline-flex items-center gap-3 px-6 py-4 border border-[#C5A059]/40 rounded hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all whitespace-nowrap"
            data-testid="trust-teaser-heritage-cta"
          >
            <span className="text-[#C5A059] text-sm font-semibold tracking-wide">
              Read the Founder's Note
            </span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
