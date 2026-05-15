import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react';

export const LegacyArchitect = () => (
  <section
    id="legacy-architect"
    className="relative py-20 md:py-28 overflow-hidden"
    style={{ backgroundColor: '#050505' }}
    data-testid="legacy-architect-section"
  >
    {/* Subtle gold ambient glow */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse 55% 40% at 50% 25%, rgba(197,160,89,0.06) 0%, transparent 65%)'
      }}
    />

    <div className="container-custom relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C5A059]/30 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
            <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
              Executive Profile · The Legacy Architect
            </span>
          </div>
        </div>

        {/* Pull Quote */}
        <figure className="relative mb-14 md:mb-16">
          <Quote
            aria-hidden
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 opacity-20"
            style={{ color: '#C5A059' }}
            strokeWidth={1.25}
          />
          <blockquote
            className="text-center text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.35] text-white pt-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Libre Baskerville, serif', fontStyle: 'italic' }}
          >
            <span className="text-[#C5A059]">&ldquo;</span>
            The bridge between legacy debt and agentic scaling isn&rsquo;t built by generalists;
            it&rsquo;s forged by those who speak the original code.
            <span className="text-[#C5A059]">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-6 text-center">
            <span
              className="block text-3xl md:text-4xl text-[#C5A059] italic leading-none"
              style={{ fontFamily: 'Brush Script MT, cursive' }}
            >
              Tessa Shepard
            </span>
            <span className="block mt-2 text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              Founder &middot; Architect &middot; OPAS Authority OS™
            </span>
          </figcaption>
        </figure>

        {/* Bio body */}
        <div
          className="space-y-5 text-gray-300 text-[15px] md:text-[16px] leading-[1.85] max-w-3xl mx-auto mb-12"
          itemScope
          itemType="https://schema.org/Person"
        >
          <p>
            <strong className="text-white" itemProp="name">
              Tessa Shepard
            </strong>{' '}
            founded <strong className="text-white">OnPoint Authority Systems, Inc.</strong> to solve
            the ultimate friction in global finance: the{' '}
            <span className="text-[#C5A059] font-semibold">
              multi-billion dollar anchor of technical debt
            </span>
            .
          </p>
          <p>
            With a career spanning from the <span className="text-white">1991 MCSE/COBOL era</span>{' '}
            to the frontier of <span className="text-white">React 19</span> and{' '}
            <span className="text-white">Non-Custodial Substrates</span>, Tessa provides the{' '}
            <em className="text-[#39FF14] not-italic font-semibold">Zero-Blast-Radius</em>{' '}
            transition that institutional risk committees demand.
          </p>
          <p>
            Backed by{' '}
            <span className="text-white font-medium">Google Cloud Partner Case #71129532</span>,
            OnPoint is the primary architect for firms like{' '}
            <span className="text-[#C5A059] font-semibold">BlackRock</span> seeking to reclaim
            sovereignty over their infrastructure.
          </p>
          <p hidden itemProp="jobTitle">
            Founder &amp; CEO, OnPoint Authority Systems, Inc.
          </p>
        </div>

        {/* Signal pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: '1991 · MCSE / COBOL', color: '#C5A059' },
            { label: 'Zero-Blast-Radius', color: '#39FF14' },
            { label: 'GCP Case #71129532', color: '#8da2fb' },
            { label: 'Architect of Record · BlackRock', color: '#C5A059' }
          ].map((pill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs tracking-wide"
              style={{
                border: `1px solid ${pill.color}40`,
                background: `${pill.color}0d`,
                color: pill.color
              }}
              data-testid={`architect-pill-${i}`}
            >
              <ShieldCheck className="w-3 h-3" />
              {pill.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="/heritage"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-[#C5A059]/40 rounded hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all"
            data-testid="architect-read-heritage"
          >
            <span className="text-[#C5A059] text-sm font-semibold tracking-wide uppercase">
              Read the Full Architectural Pedigree
            </span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
