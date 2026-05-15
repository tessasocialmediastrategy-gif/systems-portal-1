import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react';

// Set this to the actual headshot URL when provided by Tessa
const HEADSHOT_URL = 'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/8mfuq5zl_C1A3F13D-7B62-4EAD-937D-8D0812C01973_1_105_c.jpeg';

const InitialsMedallion = () => (
  <div
    className="w-full aspect-square rounded-full flex items-center justify-center relative"
    style={{
      background:
        'radial-gradient(circle at 30% 30%, rgba(197,160,89,0.18) 0%, rgba(20,15,8,0.95) 70%)',
      border: '1px solid rgba(197,160,89,0.35)'
    }}
    aria-label="Portrait placeholder — pending official headshot"
  >
    <span
      className="text-6xl md:text-7xl text-[#C5A059] tracking-wide"
      style={{ fontFamily: 'Libre Baskerville, serif', fontStyle: 'italic' }}
    >
      T<span className="opacity-70">S</span>
    </span>
    {/* Tiny status pill */}
    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full bg-[#0a0a0a] border border-[#C5A059]/30 text-[#C5A059] whitespace-nowrap">
      Official Photo Pending
    </span>
  </div>
);

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
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C5A059]/30 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
            <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
              Executive Profile · The Legacy Architect
            </span>
          </div>
        </div>

        {/* Two-column layout: portrait left, bio right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14">
          {/* Portrait column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 md:w-64 lg:w-full max-w-xs">
              {/* Gold halo glow */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(197,160,89,0.18) 0%, rgba(197,160,89,0.05) 45%, transparent 70%)',
                  filter: 'blur(20px)'
                }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  border: '1px solid rgba(197,160,89,0.4)',
                  boxShadow:
                    '0 0 0 1px rgba(197,160,89,0.1), 0 30px 60px -20px rgba(197,160,89,0.25)'
                }}
              >
                {HEADSHOT_URL ? (
                  <img
                    src={HEADSHOT_URL}
                    alt="Tessa Shepard — Founder & Architect of OnPoint Authority Systems"
                    className="w-full h-full object-cover aspect-square"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <InitialsMedallion />
                )}
              </div>
              <div className="mt-7 text-center">
                <span
                  className="block text-3xl md:text-4xl text-[#C5A059] italic leading-none"
                  style={{ fontFamily: 'Brush Script MT, cursive' }}
                >
                  Tessa Shepard
                </span>
                <span className="block mt-2 text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                  Founder &middot; Architect
                </span>
                <span className="block mt-1 text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                  OPAS Authority OS™
                </span>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-8">
            {/* Pull Quote */}
            <figure className="relative mb-10">
              <Quote
                aria-hidden
                className="absolute -top-4 -left-2 w-10 h-10 opacity-20"
                style={{ color: '#C5A059' }}
                strokeWidth={1.25}
              />
              <blockquote
                className="text-xl md:text-2xl lg:text-[1.65rem] leading-[1.4] text-white pt-4 pl-10"
                style={{ fontFamily: 'Libre Baskerville, serif', fontStyle: 'italic' }}
              >
                <span className="text-[#C5A059]">&ldquo;</span>
                The bridge between legacy debt and agentic scaling isn&rsquo;t built by generalists;
                it&rsquo;s forged by those who speak the original code.
                <span className="text-[#C5A059]">&rdquo;</span>
              </blockquote>
            </figure>

            {/* Bio body */}
            <div
              className="space-y-4 text-gray-300 text-[15px] md:text-[16px] leading-[1.85]"
              itemScope
              itemType="https://schema.org/Person"
            >
              <p>
                <strong className="text-white" itemProp="name">
                  Tessa Shepard
                </strong>{' '}
                founded <strong className="text-white">OnPoint Authority Systems, Inc.</strong> to
                solve the ultimate friction in global finance: the{' '}
                <span className="text-[#C5A059] font-semibold">
                  multi-billion dollar anchor of technical debt
                </span>
                .
              </p>
              <p>
                With a career spanning from the{' '}
                <span className="text-white">1991 MCSE/COBOL era</span> to the frontier of{' '}
                <span className="text-white">React 19</span> and{' '}
                <span className="text-white">Non-Custodial Substrates</span>, Tessa provides the{' '}
                <em className="text-[#39FF14] not-italic font-semibold">Zero-Blast-Radius</em>{' '}
                transition that institutional risk committees demand.
              </p>
              <p>
                Backed by{' '}
                <span className="text-white font-medium">
                  Google Cloud Partner Case #71129532
                </span>
                , OnPoint is the primary architect for firms like{' '}
                <span className="text-[#C5A059] font-semibold">BlackRock</span> seeking to reclaim
                sovereignty over their infrastructure.
              </p>
              <p hidden itemProp="jobTitle">
                Founder &amp; CEO, OnPoint Authority Systems, Inc.
              </p>
            </div>
          </div>
        </div>

        {/* Signal pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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
