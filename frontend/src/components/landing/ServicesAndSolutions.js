import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Server } from 'lucide-react';

const SERVICES = [
  {
    icon: Server,
    eyebrow: 'COBOL · Mainframe',
    title: 'Legacy Core Modernization',
    body:
      'Wrap indestructible JCL, COBOL, and z/OS batch cores in a non-custodial Authority OS — without rewriting a single line of mission-critical code. The 1991 foundation, given an agentic brain.'
  },
  {
    icon: Cloud,
    eyebrow: 'MCSE · Diamond Tier',
    title: 'Multi-Cloud Authority Architecture',
    body:
      'Zero-trust identity federation, Active Directory bridges, and cross-cloud governance spanning AWS, Azure, and on-prem. Architected by a 1995 MCSE for the institutions actually running the rails.'
  },
  {
    icon: Brain,
    eyebrow: 'Jules · Quantum Shift',
    title: 'Agentic Orchestration',
    body:
      'Deploy autonomous, ZKP-verified agents across the enterprise with State 0 cryptographic guardrails. The Jules orchestration layer turns your existing stack into a governed agentic mesh.'
  }
];

export const ServicesAndSolutions = () => (
  <section
    id="services"
    className="relative py-20 md:py-28 overflow-hidden"
    style={{ backgroundColor: '#121212' }}
    data-testid="services-and-solutions-section"
  >
    {/* Soft ambient neon glow — sits behind the cards without touching them */}
    <div
      aria-hidden
      className="absolute pointer-events-none"
      style={{
        inset: 0,
        background:
          'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(57,255,20,0.05) 0%, transparent 70%)'
      }}
    />

    <div className="container-custom relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full mb-6"
          style={{ borderColor: 'rgba(57,255,20,0.3)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#39FF14' }} />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: '#39FF14' }}>
            Services & Solutions
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          Three Eras. One Operator.
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Each engagement is delivered by the same architect who built the foundation, the bridge, and the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {SERVICES.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <article
              key={idx}
              className="group relative rounded-xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{
                border: '1px solid rgba(57,255,20,0.3)',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(57,255,20,0.02) 100%)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                boxShadow:
                  '0 0 0 1px rgba(57,255,20,0.04), 0 20px 60px -20px rgba(0,0,0,0.55)'
              }}
              data-testid={`service-card-${idx}`}
            >
              {/* Corner glass refraction (decorative, doesn't touch text) */}
              <div
                aria-hidden
                className="absolute top-0 right-0 w-32 h-32 rounded-tr-xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(57,255,20,0.10) 0%, transparent 65%)'
                }}
              />

              {/* Minimalist neon line icon */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110"
                style={{
                  border: '1px solid rgba(57,255,20,0.35)',
                  background: 'rgba(57,255,20,0.04)',
                  boxShadow: '0 0 24px -8px rgba(57,255,20,0.4)'
                }}
              >
                <Icon strokeWidth={1.25} className="w-7 h-7" style={{ color: '#39FF14' }} />
              </div>

              {/* Eyebrow */}
              <p
                className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: '#39FF14' }}
              >
                {svc.eyebrow}
              </p>

              {/* Title */}
              <h3
                className="text-xl md:text-[1.35rem] text-white tracking-tight mb-4 leading-snug"
                style={{ fontFamily: 'Libre Baskerville, serif' }}
              >
                {svc.title}
              </h3>

              {/* Body */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {svc.body}
              </p>

              {/* Learn More → routes to /heritage (where the architect's qualifications live) */}
              <Link
                to="/heritage#timeline"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide group/cta"
                style={{ color: '#39FF14' }}
                data-testid={`service-learn-more-${idx}`}
              >
                <span className="border-b border-transparent group-hover/cta:border-[#39FF14] transition-colors">
                  Learn More
                </span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
