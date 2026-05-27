import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Gauge,
  ClipboardCheck,
  Rocket,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { track } from '../../services/analytics';

const STEPS = [
  {
    n: '01',
    name: 'AUDIT',
    badge: 'VECTOR ANALYSIS',
    title: 'Deep-Layer Data Ingress',
    body:
      'Instantly expose hidden technical debt, identifying high-risk architecture vulnerabilities across key data gateways.',
    accent: '#00F2FE',
    icon: Search,
    glowOpacity: 0.18
  },
  {
    n: '02',
    name: 'SCORE',
    badge: 'COMPUTE MATRIX',
    title: 'Operational Health Index',
    body:
      'Quantify systemic health into actionable metrics, mapping critical risk indicators against optimal baseline targets.',
    accent: '#FFB300',
    icon: Gauge,
    glowOpacity: 0.18
  },
  {
    n: '03',
    name: 'PLAN',
    badge: 'BLUEPRINT GEN',
    title: 'The Agentic Shift Blueprint',
    body:
      'Auto-generate an un-siloed, friction-free implementation plan to safely restructure legacy dependencies.',
    accent: '#00E676',
    icon: ClipboardCheck,
    glowOpacity: 0.2
  },
  {
    n: '04',
    name: 'DEPLOY',
    badge: 'AUTHORITY OS™',
    title: 'System Live Activation',
    body:
      'Transition operations smoothly onto a resilient, modern ecosystem without interrupting active service lines.',
    accent: '#2979FF',
    icon: Rocket,
    glowOpacity: 0.32 // solid electric blue
  }
];

const COMMAND_CENTER_IMG =
  'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/8dael470_OnPointAuthoritySystemsDeploymentReadyImage.jpg';

const CALENDLY_URL = 'https://calendly.com/ops-onpointauthoritysystems';

export const AgenticShiftFramework = () => (
  <section
    id="agentic-shift-framework"
    className="relative py-24 md:py-32 bg-[#0A0A0A]"
    data-testid="agentic-shift-section"
  >
    {/* Texture overlay */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.05]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 12% 20%, rgba(0,242,254,0.20) 0%, transparent 35%), radial-gradient(circle at 88% 80%, rgba(41,121,255,0.18) 0%, transparent 38%)'
      }}
    />

    <div className="relative container-custom">
      {/* ===== Component 1: Section Header ===== */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <div className="text-[11px] text-[#C5A059] font-semibold tracking-[0.4em] uppercase mb-5">
          The Operational Workflow
        </div>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          The 4-Step <span className="italic text-[#C5A059]">Agentic Shift</span> Framework
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Stop managing complexity. Transition legacy infrastructure to high-performance compute
          with an automated, friction-free deployment pipeline.
        </p>
      </div>

      {/* ===== Component 2: Step Blueprint ===== */}
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 mb-20 md:mb-24"
        data-testid="agentic-shift-steps"
      >
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === STEPS.length - 1;
          return (
            <React.Fragment key={step.n}>
              <div
                className="group relative rounded-lg bg-[#121212] p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  border: `1px solid ${step.accent}33`,
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.02), 0 0 40px -18px ${step.accent}${Math.round(
                    step.glowOpacity * 255
                  )
                    .toString(16)
                    .padStart(2, '0')}`
                }}
                data-testid={`step-${step.n}`}
              >
                {/* Top accent line */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${step.accent}99 50%, transparent 100%)`
                  }}
                />

                {/* Step header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="text-[10px] font-semibold tracking-[0.3em]"
                    style={{ color: step.accent }}
                  >
                    STEP {step.n}
                  </div>
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      background: `${step.accent}12`,
                      border: `1px solid ${step.accent}40`
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: step.accent }} />
                  </div>
                </div>

                {/* Step name (large) */}
                <h3
                  className="text-2xl font-bold text-white tracking-tight mb-2"
                  style={{ fontFamily: 'Libre Baskerville, serif' }}
                >
                  {step.name}
                </h3>

                {/* Badge / kicker */}
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-5">
                  {step.badge}
                </div>

                {/* Sub-title (white) */}
                <div className="text-[13.5px] text-white font-medium mb-3 leading-snug">
                  {step.title}
                </div>

                {/* Body copy */}
                <p className="text-gray-400 text-[13px] leading-[1.7]">{step.body}</p>

                {/* Subtle bottom edge glow */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-6 right-6 h-px opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${step.accent}66 50%, transparent 100%)`
                  }}
                />
              </div>

              {/* Inter-card arrow — desktop only */}
              {!isLast && (
                <div
                  aria-hidden
                  className="hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center pointer-events-none"
                  style={{
                    left: `calc(${((idx + 1) / STEPS.length) * 100}% - 12px)`,
                    width: '24px'
                  }}
                >
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ===== Component 3: Command Center Alpha asset ===== */}
      <figure className="relative max-w-5xl mx-auto mb-20 md:mb-24" data-testid="command-center-figure">
        <div
          className="relative rounded-xl overflow-hidden border border-white/8 bg-[#0F141A]"
          style={{
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.03), 0 40px 120px -20px rgba(0,242,254,0.18), 0 60px 140px -10px rgba(41,121,255,0.14)'
          }}
        >
          <img
            src={COMMAND_CENTER_IMG}
            alt="OnPoint Authority Systems Command Center Alpha showcasing the 4-step Agentic Shift workflow: Audit, Score, Plan, and Deploy."
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
        {/* Radial floor shadow */}
        <div
          aria-hidden
          className="absolute -bottom-10 left-[10%] right-[10%] h-24 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,242,254,0.18) 0%, rgba(41,121,255,0.10) 40%, transparent 75%)',
            filter: 'blur(20px)'
          }}
        />
        <figcaption className="mt-6 text-center text-[12px] text-gray-500 italic leading-relaxed max-w-2xl mx-auto">
          Figure 1.1: Live architecture mapping visualization inside OnPoint Command Center Alpha
          during an active enterprise deployment.
        </figcaption>
      </figure>

      {/* ===== Component 4: CTA Banner ===== */}
      <div
        className="relative max-w-5xl mx-auto rounded-xl overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0B1426 0%, #0F1A30 50%, #0A1220 100%)',
          border: '1px solid rgba(0,230,118,0.18)'
        }}
        data-testid="agentic-shift-cta-banner"
      >
        {/* Micro grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,230,118,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Top accent line */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(0,230,118,0.7) 50%, transparent 100%)'
          }}
        />

        <div className="relative p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:max-w-xl">
            <div className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#00E676] mb-3">
              Agentic Readiness Score
            </div>
            <h3
              className="text-2xl md:text-3xl lg:text-[34px] font-bold text-white leading-[1.15] tracking-tight mb-4"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Ready to discover your <span className="italic text-[#00E676]">Agentic Readiness</span> Score?
            </h3>
            <p className="text-gray-400 text-[14.5px] leading-relaxed">
              Run a deep-layer framework evaluation. Expose your legacy infrastructure bottlenecks
              before they impact your compute budgets.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4 flex-shrink-0">
            <Link
              to="/audit"
              onClick={() => track('cta_click', { source: 'agentic_shift_banner', target: '/audit' })}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded text-sm font-semibold transition-all whitespace-nowrap"
              style={{
                background: 'linear-gradient(90deg, #00E676 0%, #2BF98E 100%)',
                color: '#0A0A0A',
                boxShadow: '0 0 0 1px rgba(0,230,118,0.45), 0 12px 32px -10px rgba(0,230,118,0.55)'
              }}
              data-testid="agentic-shift-primary-cta"
            >
              Run Free Technical Debt Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('cta_click', { source: 'agentic_shift_banner', target: 'calendly' })}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              data-testid="agentic-shift-secondary-cta"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Architecture Review
              <ArrowRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
