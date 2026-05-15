import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Brain,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Crown,
  Download,
  Flag,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useSEO } from '../hooks/useSEO';
import { track } from '../services/analytics';

// =========================================================================
// Diamond Tier palette
// =========================================================================
const NAVY = '#0a192f';
const NAVY_2 = '#0d2240';
const SLATE = '#8892b0';
const CYAN = '#64ffda';
const RED = '#ff5252';

// =========================================================================
// Background — abstract circuitry / network overlay
// =========================================================================
const CircuitryBackdrop = () => (
  <>
    {/* Base */}
    <div className="absolute inset-0" style={{ backgroundColor: NAVY }} />
    {/* Gradient */}
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse at 20% 10%, rgba(100,255,218,0.08) 0%, transparent 45%),' +
          'radial-gradient(ellipse at 80% 90%, rgba(100,255,218,0.06) 0%, transparent 50%)',
      }}
    />
    {/* Circuit grid */}
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full opacity-[0.14] pointer-events-none"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M0 40 H30 L40 30 V0 M40 80 V50 L50 40 H80"
            fill="none"
            stroke={CYAN}
            strokeWidth="0.6"
          />
          <circle cx="40" cy="40" r="1.4" fill={CYAN} />
          <circle cx="0" cy="40" r="1" fill={CYAN} />
          <circle cx="80" cy="40" r="1" fill={CYAN} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
    {/* Scan line */}
    <div
      aria-hidden
      className="absolute inset-x-0 h-px opacity-30 pointer-events-none"
      style={{
        background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)`,
        animation: 'briefingScan 8s linear infinite',
        top: '30%',
      }}
    />
  </>
);

// =========================================================================
// Slide chrome
// =========================================================================
const SlideShell = ({ eyebrow, title, kicker, children, testid }) => (
  <div
    className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 w-full"
    data-testid={testid}
  >
    {eyebrow && (
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase"
           style={{ borderColor: `${CYAN}40`, color: CYAN }}>
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: CYAN }} />
        {eyebrow}
      </div>
    )}
    {title && (
      <h2
        className="text-3xl md:text-5xl font-bold leading-[1.1] mb-4"
        style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}
      >
        {title}
      </h2>
    )}
    {kicker && (
      <p className="text-base md:text-lg max-w-3xl mb-10" style={{ color: SLATE }}>
        {kicker}
      </p>
    )}
    {children}
  </div>
);

// =========================================================================
// SLIDE 1 — Title
// =========================================================================
const SlideTitle = () => (
  <SlideShell testid="briefing-slide-title">
    <div className="flex items-center gap-2 mb-8">
      <Crown className="w-4 h-4" style={{ color: CYAN }} />
      <span className="text-[10px] font-semibold tracking-[0.4em] uppercase" style={{ color: CYAN }}>
        Diamond Tier · Institutional Briefing
      </span>
    </div>

    <h1
      className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
      style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}
    >
      Institutional Convergence:
      <br />
      <span style={{ color: CYAN }}>Accelerating OnPoint × Google Cloud.</span>
    </h1>

    <p className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed" style={{ color: SLATE }}>
      A confidential strategic briefing prepared for{' '}
      <span style={{ color: '#e6f1ff' }}>Tina Wilkinson</span>, Google Cloud — outlining the
      five-quarter convergence path to capture institutional finance under sovereign agentic
      infrastructure.
    </p>

    <div className="flex flex-wrap items-center gap-3 mb-12">
      {[
        { label: 'Auth ID · AIS-BLR-0091Q', icon: ShieldCheck },
        { label: 'GCP Partner Case #71129532', icon: Flag },
        { label: 'Architect of Record · BlackRock', icon: Sparkles },
      ].map((p, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
          style={{ border: `1px solid ${CYAN}30`, color: CYAN, background: `${CYAN}08` }}
        >
          <p.icon className="w-3.5 h-3.5" />
          {p.label}
        </span>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl">
      {[
        { k: '$7.8B', l: 'Technical Debt Index' },
        { k: '4.5 mo', l: 'Alpha Bridge to BlackRock' },
        { k: '11%', l: 'Target GCP Share Capture' },
      ].map((m, i) => (
        <div
          key={i}
          className="px-5 py-4 rounded"
          style={{ background: NAVY_2, border: `1px solid ${SLATE}26` }}
        >
          <div className="text-3xl font-bold" style={{ color: CYAN }}>
            {m.k}
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] mt-1" style={{ color: SLATE }}>
            {m.l}
          </div>
        </div>
      ))}
    </div>
  </SlideShell>
);

// =========================================================================
// SLIDE 2 — The Problem · $7.8B Technical Debt Index
// =========================================================================
const DEBT_DATA = [
  { year: '2024', debt: 3.2 },
  { year: '2025', debt: 4.3 },
  { year: '2026', debt: 5.5 },
  { year: '2027', debt: 6.8 },
  { year: '2028', debt: 7.8 },
];

const SlideProblem = () => (
  <SlideShell
    eyebrow="The Problem"
    title="The $7.8B Technical Debt Index."
    kicker="Every quarter Google Cloud hesitates, the institutional debt balloons by ~$1.1B in wasted refactoring spend — capital that should be flowing to OPAS Authority OS™ deployments."
    testid="briefing-slide-problem"
  >
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
      <div className="lg:col-span-3">
        <div
          className="rounded-lg p-5"
          style={{ background: NAVY_2, border: `1px solid ${SLATE}26` }}
        >
          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={DEBT_DATA} margin={{ top: 16, right: 24, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="debtGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CYAN} stopOpacity={0.55} />
                  <stop offset="100%" stopColor={CYAN} stopOpacity={0.04} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={`${SLATE}22`} />
              <XAxis dataKey="year" stroke={SLATE} tick={{ fontSize: 12, fill: SLATE }} />
              <YAxis
                stroke={SLATE}
                tick={{ fontSize: 12, fill: SLATE }}
                tickFormatter={(v) => `$${v}B`}
              />
              <Tooltip
                contentStyle={{
                  background: NAVY,
                  border: `1px solid ${CYAN}55`,
                  borderRadius: 6,
                  color: '#e6f1ff',
                }}
                formatter={(v) => [`$${v}B`, 'Wasted Expenditure']}
              />
              <Area
                type="monotone"
                dataKey="debt"
                stroke={CYAN}
                strokeWidth={2}
                fill="url(#debtGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider" style={{ color: SLATE }}>
            <span>Source · OnPoint Authority Systems · GCP Case #71129532</span>
            <span>Projected through FY2028</span>
          </div>
        </div>
      </div>

      <ul className="lg:col-span-2 space-y-4">
        {[
          {
            icon: AlertTriangle,
            color: RED,
            title: 'Compounding Burn Rate',
            body: 'Technical debt accelerates ~22% YoY — refactoring costs now outpace new feature velocity at 4 of the top 8 G-SIBs.',
          },
          {
            icon: TrendingDown,
            color: '#ffb86b',
            title: 'Revenue Leak Per Day',
            body: 'Each day of vendor hesitation = $3.0M deferred revenue moving toward Azure absorption.',
          },
          {
            icon: ShieldCheck,
            color: CYAN,
            title: 'OPAS Reclamation',
            body: 'Authority OS™ deployment recovers up to 75% of refactoring latency with zero blast radius.',
          },
        ].map((c, i) => (
          <li
            key={i}
            className="flex gap-4 p-4 rounded"
            style={{ background: NAVY_2, border: `1px solid ${SLATE}22` }}
          >
            <c.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: c.color }} />
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: '#e6f1ff' }}>
                {c.title}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: SLATE }}>
                {c.body}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </SlideShell>
);

// =========================================================================
// SLIDE 3 — The Pilot · Sarah Emerson / BlackRock-Aladdin
// =========================================================================
const SlidePilot = () => (
  <SlideShell
    eyebrow="The Pilot"
    title={
      <>
        The Sarah Emerson <span style={{ color: CYAN }}>Aladdin Anchor.</span>
      </>
    }
    kicker="The BlackRock / Aladdin Engineering engagement is the lighthouse account — the precedent every other Tier-1 institution will benchmark against."
    testid="briefing-slide-pilot"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div
        className="lg:col-span-7 rounded-lg p-7 relative overflow-hidden"
        style={{ background: NAVY_2, border: `1px solid ${CYAN}33` }}
      >
        <div
          aria-hidden
          className="absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-[0.08]"
          style={{ background: CYAN, filter: 'blur(40px)' }}
        />
        <div className="flex items-center gap-3 mb-5 relative z-10">
          <Target className="w-5 h-5" style={{ color: CYAN }} />
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold" style={{ color: CYAN }}>
            Anchor Account
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 relative z-10" style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}>
          Sarah Emerson · Aladdin Engineering
        </h3>
        <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: SLATE }}>
          The Aladdin platform powers <span style={{ color: '#e6f1ff' }}>$21.6T in AUM</span>. A
          Zero-Blast-Radius wrapper around its compute substrate is the single most strategic
          deployment OPAS can execute — and the first one Google Cloud co-signs publicly.
        </p>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          {[
            { k: '$21.6T', l: 'Aladdin AUM' },
            { k: '4.5 mo', l: 'Pilot Window' },
            { k: '75%', l: 'Latency Reduction' },
            { k: '0', l: 'Blast Radius' },
          ].map((m, i) => (
            <div key={i} className="px-4 py-3 rounded" style={{ background: NAVY, border: `1px solid ${SLATE}22` }}>
              <div className="text-2xl font-bold" style={{ color: CYAN }}>{m.k}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] mt-1" style={{ color: SLATE }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      <ul className="lg:col-span-5 space-y-3">
        {[
          { step: '01', title: 'Pre-Engagement Telemetry', body: 'Read-only Authority OS observer on Aladdin staging. Two weeks. Zero risk.' },
          { step: '02', title: 'Non-Custodial Substrate Drop', body: 'Identity federation + ZKP envelope. AD-bridged in <14 days.' },
          { step: '03', title: 'Co-Signed Whitepaper', body: 'OnPoint × BlackRock × Google jointly publish the canonical reference architecture.' },
          { step: '04', title: 'Inbound Cascade', body: 'JPMC, State Street, Citadel watch the announce-day metrics — Tier-1 pipeline opens.' },
        ].map((s, i) => (
          <li
            key={i}
            className="flex gap-4 p-4 rounded"
            style={{ background: NAVY_2, border: `1px solid ${SLATE}1f` }}
          >
            <div
              className="flex-shrink-0 w-9 h-9 rounded flex items-center justify-center text-xs font-bold"
              style={{ background: NAVY, border: `1px solid ${CYAN}40`, color: CYAN }}
            >
              {s.step}
            </div>
            <div>
              <div className="text-sm font-semibold mb-0.5" style={{ color: '#e6f1ff' }}>{s.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: SLATE }}>{s.body}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </SlideShell>
);

// =========================================================================
// SLIDE 4 — Competitive Friction · Google vs Azure
// =========================================================================
const SHARE_DATA = [
  { vendor: 'AWS', share: 32, label: 'Steady · No movement on agentic governance' },
  { vendor: 'Azure', share: 24, label: 'Absorbing institutional workloads — fast' },
  { vendor: 'GCP (current)', share: 7, label: 'Hesitating on financial vertical' },
  { vendor: 'GCP (target)', share: 11, label: 'OnPoint convergence path' },
];

const SlideFriction = () => (
  <SlideShell
    eyebrow="Competitive Friction"
    title={
      <>
        The Google Hesitation Cost <span style={{ color: RED }}>vs.</span> Azure Absorption.
      </>
    }
    kicker="Every quarter Google Cloud delays a public co-sign on Authority OS™, Microsoft absorbs more institutional finance workloads. The 11% target is achievable in 6 quarters — but only if OnPoint moves first, together."
    testid="briefing-slide-friction"
  >
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
      <div
        className="lg:col-span-3 rounded-lg p-5"
        style={{ background: NAVY_2, border: `1px solid ${SLATE}26` }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: SLATE }}>
            Institutional Finance · Cloud Share %
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: CYAN }}>
            FY2026 baseline
          </span>
        </div>
        <ResponsiveContainer width="100%" height={310}>
          <BarChart data={SHARE_DATA} layout="vertical" margin={{ top: 8, right: 24, left: 12, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={`${SLATE}1f`} horizontal={false} />
            <XAxis type="number" stroke={SLATE} tick={{ fontSize: 12, fill: SLATE }} tickFormatter={(v) => `${v}%`} />
            <YAxis dataKey="vendor" type="category" stroke={SLATE} tick={{ fontSize: 12, fill: '#e6f1ff' }} width={110} />
            <Tooltip
              contentStyle={{ background: NAVY, border: `1px solid ${CYAN}55`, borderRadius: 6, color: '#e6f1ff' }}
              formatter={(v) => [`${v}%`, 'Share']}
            />
            <Bar dataKey="share" radius={[0, 4, 4, 0]}>
              {SHARE_DATA.map((d, i) => (
                <Cell
                  key={i}
                  fill={
                    d.vendor === 'GCP (target)'
                      ? CYAN
                      : d.vendor === 'GCP (current)'
                      ? '#ffb86b'
                      : d.vendor === 'Azure'
                      ? RED
                      : SLATE
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="lg:col-span-2 space-y-3">
        {SHARE_DATA.map((d, i) => {
          const accent =
            d.vendor === 'GCP (target)' ? CYAN : d.vendor === 'GCP (current)' ? '#ffb86b' : d.vendor === 'Azure' ? RED : SLATE;
          return (
            <div
              key={i}
              className="p-4 rounded"
              style={{ background: NAVY_2, border: `1px solid ${accent}33` }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold" style={{ color: '#e6f1ff' }}>{d.vendor}</span>
                <span className="text-sm font-bold" style={{ color: accent }}>{d.share}%</span>
              </div>
              <div className="text-xs leading-snug" style={{ color: SLATE }}>{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>

    <div
      className="mt-8 p-5 rounded flex items-start gap-3"
      style={{ background: `${RED}10`, border: `1px solid ${RED}40` }}
    >
      <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: RED }} />
      <p className="text-sm leading-relaxed" style={{ color: '#fce8e8' }}>
        <span className="font-bold">Daily Hesitation Cost:</span> Microsoft is converting 2.4 G-SIB workloads per quarter. At
        current velocity, Google's window to anchor institutional finance under sovereign AI closes by Q3 2027. OnPoint is the
        co-sign that resets the curve.
      </p>
    </div>
  </SlideShell>
);

// =========================================================================
// SLIDE 5 — Technical Solution · Authority OS Substrate
// =========================================================================
const SlideSolution = () => (
  <SlideShell
    eyebrow="Technical Solution"
    title={
      <>
        Authority OS™ — the Non-Custodial Substrate.
      </>
    }
    kicker="A four-layer substrate wrapping legacy cores (COBOL/JCL/z/OS) with ZKP-verified sovereign identity, agentic orchestration, and a quantum-ready bridge — delivered on React 19 / Next.js 16."
    testid="briefing-slide-solution"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        {
          icon: ShieldCheck,
          tag: 'Layer 01',
          title: 'Sovereign Identity',
          body: 'Non-custodial ZKP envelope. No IdP dependency. Eliminates Golden Ticket vectors.',
        },
        {
          icon: Brain,
          tag: 'Layer 02',
          title: 'Agentic Governance',
          body: 'State 0 cryptographic guardrails. Every agent action signed, traced, revocable.',
        },
        {
          icon: Network,
          tag: 'Layer 03',
          title: 'Quantum Bridge',
          body: 'Onyx-compatible settlement plane. Cross-institutional in milliseconds.',
        },
        {
          icon: Cpu,
          tag: 'Layer 04',
          title: 'React 19 / Next.js 16',
          body: 'Server components, partial pre-rendering, sub-100ms TTFB for institutional dashboards.',
        },
      ].map((l, i) => (
        <div
          key={i}
          className="p-5 rounded relative overflow-hidden"
          style={{ background: NAVY_2, border: `1px solid ${CYAN}26` }}
        >
          <div
            aria-hidden
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-[0.08]"
            style={{ background: CYAN, filter: 'blur(20px)' }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <l.icon className="w-5 h-5" style={{ color: CYAN }} />
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: SLATE }}>
                {l.tag}
              </span>
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}
            >
              {l.title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: SLATE }}>
              {l.body}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { k: 'Zero', l: 'Custodial Dependency' },
        { k: '100%', l: 'ZKP-Verified Provenance' },
        { k: '<100ms', l: 'Dashboard TTFB' },
      ].map((m, i) => (
        <div
          key={i}
          className="px-5 py-4 rounded"
          style={{ background: NAVY_2, border: `1px solid ${SLATE}26` }}
        >
          <div className="text-3xl font-bold" style={{ color: CYAN }}>{m.k}</div>
          <div className="text-[10px] uppercase tracking-[0.25em] mt-1" style={{ color: SLATE }}>
            {m.l}
          </div>
        </div>
      ))}
    </div>
  </SlideShell>
);

// =========================================================================
// SLIDE 6 — Roadmap · 4.5-month Alpha Bridge
// =========================================================================
const ROADMAP = [
  { month: 'Month 1', label: 'Wrap', body: 'Initial legacy-core encapsulation + read-only audit on Aladdin staging. Zero-write contract.', accent: CYAN },
  { month: 'Month 2', label: 'Handshake', body: 'Verified ZKP-Wrapper deployment on GCP. AD-federated identity bridge. Compliance sign-off.', accent: CYAN },
  { month: 'Month 3', label: 'Scaling', body: 'Pilot node expansion to Blackstone / OpenAI under State 0 guardrails.', accent: CYAN },
  { month: 'Month 4', label: 'Co-Signed Whitepaper', body: 'OnPoint × BlackRock × Google joint reference architecture published.', accent: '#ffb86b' },
  { month: 'Month 4.5', label: 'Authority', body: 'Full institutional seeding transition complete. Sarah Emerson public anchor.', accent: CYAN },
];

const SlideRoadmap = () => (
  <SlideShell
    eyebrow="The Roadmap"
    title="The 4.5-Month Alpha Bridge."
    kicker="From signed engagement letter to public co-sign on the Aladdin deployment. Aggressive, executable, audit-ready."
    testid="briefing-slide-roadmap"
  >
    <div className="relative">
      <div
        aria-hidden
        className="hidden md:block absolute left-0 right-0 top-9 h-px"
        style={{ background: `linear-gradient(90deg, ${CYAN}20, ${CYAN}80, ${CYAN}20)` }}
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {ROADMAP.map((r, i) => (
          <div key={i} className="relative">
            <div
              className="hidden md:flex w-5 h-5 rounded-full mx-auto mb-4 items-center justify-center"
              style={{
                background: r.accent,
                boxShadow: `0 0 0 4px ${NAVY}, 0 0 16px ${r.accent}80`,
              }}
            />
            <div
              className="p-4 rounded h-full"
              style={{ background: NAVY_2, border: `1px solid ${r.accent}33` }}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: r.accent }}>
                {r.month}
              </div>
              <div className="text-base font-bold mb-2" style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}>
                {r.label}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: SLATE }}>{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div
      className="mt-10 p-6 rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
      style={{ background: NAVY_2, border: `1px solid ${CYAN}40` }}
    >
      <div className="flex items-start gap-3">
        <TrendingUp className="w-6 h-6 mt-0.5" style={{ color: CYAN }} />
        <div>
          <div className="text-lg font-bold mb-1" style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}>
            Decision Window Closes Q3 2026
          </div>
          <p className="text-sm" style={{ color: SLATE }}>
            Every business day of delay is <span style={{ color: RED }}>$3.0M</span> in deferred revenue moving to Azure absorption.
          </p>
        </div>
      </div>
      <a
        href="mailto:ops@onpointauthoritysystems.com?subject=AIS-BLR-0091Q · Briefing Follow-Up"
        className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold tracking-wider uppercase text-sm transition-opacity hover:opacity-90"
        style={{ background: CYAN, color: NAVY }}
        data-testid="briefing-execute-cta"
      >
        Execute Engagement
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </SlideShell>
);

// =========================================================================
// SLIDE 7 — Founder's Directive (closing)
// =========================================================================
const SlideDirective = () => (
  <SlideShell eyebrow="The Founder's Directive" testid="briefing-slide-directive">
    <div className="max-w-4xl">
      <figure className="relative mb-12">
        <div
          aria-hidden
          className="absolute -top-4 -left-2 text-7xl leading-none opacity-30 select-none"
          style={{ color: CYAN, fontFamily: 'Libre Baskerville, serif' }}
        >
          &ldquo;
        </div>
        <blockquote
          className="text-3xl md:text-4xl lg:text-5xl leading-[1.25] italic pl-12 pt-2"
          style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}
        >
          Tenacity is the only differentiator at the{' '}
          <span style={{ color: CYAN, fontStyle: 'normal' }}>Diamond Tier.</span> Every move I make
          is designed to force the market&rsquo;s hand.
        </blockquote>
        <figcaption className="mt-8 pl-12">
          <span
            className="block text-3xl"
            style={{ color: CYAN, fontFamily: 'Brush Script MT, cursive', fontStyle: 'italic' }}
          >
            Tessa Shepard
          </span>
          <span className="block mt-1 text-[10px] uppercase tracking-[0.3em]" style={{ color: SLATE }}>
            Legacy Architect · Founder, OnPoint Authority Systems
          </span>
        </figcaption>
      </figure>

      <div
        className="p-6 rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        style={{ background: NAVY_2, border: `1px solid ${CYAN}40` }}
      >
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: CYAN }}>
            Next Action
          </div>
          <div className="text-xl font-bold" style={{ color: '#e6f1ff', fontFamily: 'Libre Baskerville, serif' }}>
            Finalize the &ldquo;All In&rdquo; Google Commitment.
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/assets/OnPoint_x_Google_Briefing.pptx"
            download="OnPoint_x_Google_Briefing.pptx"
            className="inline-flex items-center gap-2 px-5 py-3 rounded font-semibold tracking-wider uppercase text-xs transition-opacity hover:opacity-90"
            style={{ background: 'transparent', color: CYAN, border: `1px solid ${CYAN}60` }}
            data-testid="briefing-download-pptx"
          >
            <Download className="w-4 h-4" />
            Download .pptx
          </a>
          <a
            href="mailto:ops@onpointauthoritysystems.com?subject=AIS-BLR-0091Q · All-In Commitment · Tina Wilkinson"
            className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold tracking-wider uppercase text-sm transition-opacity hover:opacity-90"
            style={{ background: CYAN, color: NAVY }}
            data-testid="briefing-directive-cta"
          >
            Open Direct Line
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </SlideShell>
);

// =========================================================================
// Deck shell — keyboard nav, dots, progress, slide router
// =========================================================================
const SLIDES = [
  { id: 'title', label: 'Title', render: <SlideTitle /> },
  { id: 'problem', label: 'The Problem', render: <SlideProblem /> },
  { id: 'pilot', label: 'The Pilot', render: <SlidePilot /> },
  { id: 'friction', label: 'Friction', render: <SlideFriction /> },
  { id: 'solution', label: 'Solution', render: <SlideSolution /> },
  { id: 'roadmap', label: 'Roadmap', render: <SlideRoadmap /> },
  { id: 'directive', label: 'Directive', render: <SlideDirective /> },
];

const BriefingTinaWilkinson = () => {
  const [idx, setIdx] = useState(0);
  const last = SLIDES.length - 1;
  const slide = SLIDES[idx];

  useSEO({
    title: 'AIS-BLR-0091Q · OnPoint × Google Cloud Briefing | Confidential',
    description:
      'Diamond Tier institutional briefing prepared for Tina Wilkinson, Google Cloud. Authority OS™ convergence path, $7.8B technical debt index, BlackRock/Aladdin anchor pilot, 4.5-month roadmap. GCP Partner Case #71129532.',
    canonical: 'https://onpointauthoritysystems.com/briefing/tina-wilkinson',
  });

  useEffect(() => {
    track('briefing_view', { slide: slide.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const next = useCallback(() => setIdx((i) => Math.min(i + 1, last)), [last]);
  const prev = useCallback(() => setIdx((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (/^[1-7]$/.test(e.key)) {
        setIdx(Number(e.key) - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const progress = useMemo(() => ((idx + 1) / SLIDES.length) * 100, [idx]);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: NAVY }} data-testid="briefing-deck">
      <CircuitryBackdrop />

      {/* Top bar */}
      <header
        className="relative z-20 flex items-center justify-between px-6 md:px-12 py-4 border-b"
        style={{ borderColor: `${SLATE}1f` }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] hover:opacity-80 transition-opacity"
          style={{ color: SLATE }}
          data-testid="briefing-back-home"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Onpoint
        </Link>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]" style={{ color: SLATE }}>
          <ShieldCheck className="w-3.5 h-3.5" style={{ color: CYAN }} />
          Confidential · Auth ID AIS-BLR-0091Q
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: SLATE }}>
          {idx + 1} / {SLIDES.length}
        </div>
      </header>

      {/* Progress bar */}
      <div className="relative z-20 h-0.5" style={{ background: `${SLATE}22` }}>
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${progress}%`, background: CYAN }}
        />
      </div>

      {/* Slide canvas */}
      <main className="relative z-10 min-h-[calc(100vh-180px)] flex items-center" key={slide.id}>
        <div className="w-full animate-fadeUp">{slide.render}</div>
      </main>

      {/* Nav controls */}
      <footer
        className="relative z-20 flex flex-col gap-3 px-6 md:px-12 py-4 border-t"
        style={{ borderColor: `${SLATE}1f` }}
      >
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prev}
            disabled={idx === 0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs uppercase tracking-[0.2em] disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 transition-opacity"
            style={{ color: SLATE, border: `1px solid ${SLATE}33` }}
            data-testid="briefing-prev"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Prev
          </button>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}: ${s.label}`}
                className="group flex items-center gap-2"
                data-testid={`briefing-dot-${i}`}
              >
                <span
                  className="rounded-full transition-all"
                  style={{
                    background: i === idx ? CYAN : `${SLATE}55`,
                    boxShadow: i === idx ? `0 0 12px ${CYAN}80` : 'none',
                    height: 8,
                    width: i === idx ? 24 : 8,
                    borderRadius: i === idx ? 4 : 999,
                  }}
                />
                <span
                  className="hidden md:inline text-[10px] uppercase tracking-[0.2em] transition-colors"
                  style={{ color: i === idx ? CYAN : `${SLATE}aa` }}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={next}
            disabled={idx === last}
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs uppercase tracking-[0.2em] disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            style={{ background: CYAN, color: NAVY }}
            data-testid="briefing-next"
          >
            Next <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.25em] pt-2 border-t" style={{ color: SLATE, borderColor: `${SLATE}14` }}>
          <span>ops@onpointauthoritysystems.com</span>
          <span className="opacity-30">·</span>
          <span>P.O. Box 710485 · Santee, CA 92072</span>
          <span className="opacity-30">·</span>
          <span>GCP Partner Case #71129532</span>
        </div>
      </footer>

      <style>{`
        @keyframes briefingScan {
          0% { top: 20%; opacity: 0; }
          50% { opacity: 0.6; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.5s ease-out; }
      `}</style>
    </div>
  );
};

export default BriefingTinaWilkinson;
