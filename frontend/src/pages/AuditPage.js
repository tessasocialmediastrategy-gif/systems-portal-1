import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Calendar,
  ExternalLink,
  Activity,
  Cpu,
  Database
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// ------- Worksheet schema (drives both UI + payload keys) -------
const SECTIONS = [
  {
    id: 's1',
    icon: Database,
    eyebrow: 'Section 01',
    heading: 'The Centralized Control Layer Audit',
    blurb:
      'Evaluate your exposure to single points of failure caused by centralized database gateways and access brokers.',
    questions: [
      {
        key: 's1_q1_gateway_percent',
        prompt:
          'Does your primary production environment route more than 60% of data state validations or telemetry through a single database gateway?',
        unit: '%',
        kind: 'number',
        min: 0,
        max: 100,
        placeholder: 'e.g. 65',
        risk: '> 40% = HIGH'
      },
      {
        key: 's1_q2_api_latency_ms',
        prompt:
          'What is the average API gateway latency overhead during peak execution spikes (in milliseconds)?',
        unit: 'ms',
        kind: 'number',
        min: 0,
        placeholder: 'e.g. 220',
        risk: '> 200ms = CRITICAL'
      },
      {
        key: 's1_q3_broker_outage',
        prompt:
          'If your central identity access broker experiences an outage, do downstream microservices gracefully degrade or cascade into immediate downtime?',
        kind: 'choice',
        options: [
          { v: 'cascade', label: 'Cascade into downtime' },
          { v: 'degrade', label: 'Gracefully degrade' }
        ],
        risk: 'Cascade = HIGH'
      }
    ]
  },
  {
    id: 's2',
    icon: Cpu,
    eyebrow: 'Section 02',
    heading: 'Autonomous Loop Oversight & "Shadow AI" Diagnostic',
    blurb:
      'Audit how your infrastructure manages automated modifications, continuous deployment refactoring, and agentic workflows.',
    questions: [
      {
        key: 's2_q1_unsigned_agent_mutations',
        prompt:
          'Are autonomous agents or LLM-driven internal scripts modifying schemas, staging environments, or live code without an immutable, cryptographically signed log?',
        kind: 'choice',
        options: [
          { v: 'yes', label: 'Yes' },
          { v: 'no', label: 'No' }
        ],
        risk: 'Yes = CRITICAL'
      },
      {
        key: 's2_q2_audit_context_hours',
        prompt:
          'How long does it take your compliance team to audit the exact operational context and identity behind an automated database configuration shift?',
        unit: 'hours',
        kind: 'number',
        min: 0,
        step: '0.1',
        placeholder: 'e.g. 4',
        risk: '> 1 Hour = HIGH'
      },
      {
        key: 's2_q3_agent_identity_registry',
        prompt:
          'Do you enforce a distinct, sandboxed Agent Identity Registry that isolates automated scripts from interacting with heritage data layers?',
        kind: 'choice',
        options: [
          { v: 'yes', label: 'Yes' },
          { v: 'no', label: 'No' }
        ],
        risk: 'No = MEDIUM'
      }
    ]
  },
  {
    id: 's3',
    icon: Activity,
    eyebrow: 'Section 03',
    heading: 'Legacy System Debt & Migration Latency Tracker',
    blurb:
      'Measure the true operational drag caused by lifting and shifting legacy applications without decoupling their underlying data authority models.',
    questions: [
      {
        key: 's3_q1_heritage_wrapper_percent',
        prompt:
          'What percentage of engineering sprint velocity is diverted to maintaining "heritage wrappers" or managing database locks inherited from monolithic components?',
        unit: '%',
        kind: 'number',
        min: 0,
        max: 100,
        placeholder: 'e.g. 30',
        risk: '> 25% = HIGH'
      },
      {
        key: 's3_q2_cross_region_joins',
        prompt:
          'How many unindexed, cross-regional database joins are required to fulfill a single user state verification across your cloud architecture?',
        unit: 'joins',
        kind: 'number',
        min: 0,
        step: '1',
        placeholder: 'e.g. 4',
        risk: '> 3 Joins = SEVERE'
      }
    ]
  }
];

const TIER_VISUAL = {
  acceptable: {
    color: '#39FF14',
    chip: 'bg-[#39FF14]/10 border-[#39FF14]/40 text-[#39FF14]',
    glow: '0 0 0 1px rgba(57,255,20,0.25), 0 0 60px -10px rgba(57,255,20,0.3)'
  },
  systemic: {
    color: '#C5A059',
    chip: 'bg-[#C5A059]/10 border-[#C5A059]/40 text-[#C5A059]',
    glow: '0 0 0 1px rgba(197,160,89,0.3), 0 0 60px -10px rgba(197,160,89,0.4)'
  },
  critical: {
    color: '#FF4D4D',
    chip: 'bg-[#FF4D4D]/10 border-[#FF4D4D]/40 text-[#FF4D4D]',
    glow: '0 0 0 1px rgba(255,77,77,0.3), 0 0 60px -10px rgba(255,77,77,0.4)'
  }
};

const LEVEL_STYLE = {
  CRITICAL: 'text-[#FF4D4D] border-[#FF4D4D]/40 bg-[#FF4D4D]/5',
  SEVERE: 'text-[#FF4D4D] border-[#FF4D4D]/40 bg-[#FF4D4D]/5',
  HIGH: 'text-[#C5A059] border-[#C5A059]/40 bg-[#C5A059]/5',
  MEDIUM: 'text-gray-400 border-white/15 bg-white/5'
};

const initialIdentity = { full_name: '', title: '', company: '', work_email: '' };

const AuditPage = () => {
  useSEO({
    title: 'Enterprise Technical Debt Audit | OnPoint Authority Systems',
    description:
      'Framework v2.0 diagnostic — isolate Centralized Trapdoor exposure, Shadow AI schema drift, and legacy migration latency. Receive your structural risk profile and a private architecture review window.',
    canonical: 'https://onpointauthoritysystems.com/audit'
  });

  // Phase: 'identity' -> 'worksheet' -> 'results'
  const [phase, setPhase] = useState('identity');
  const [identity, setIdentity] = useState(initialIdentity);
  const [identityError, setIdentityError] = useState('');

  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [results, setResults] = useState(null);

  // ---- Identity validation ----
  const identityValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identity.work_email.trim());
    return (
      identity.full_name.trim().length > 1 &&
      identity.title.trim().length > 1 &&
      identity.company.trim().length > 1 &&
      emailOk
    );
  }, [identity]);

  // ---- Worksheet completeness ----
  const allQuestions = SECTIONS.flatMap((s) => s.questions);
  const worksheetComplete = allQuestions.every((q) => {
    const v = answers[q.key];
    if (v === undefined || v === null || v === '') return false;
    if (q.kind === 'number' && Number.isNaN(Number(v))) return false;
    return true;
  });

  const handleIdentitySubmit = (e) => {
    e.preventDefault();
    if (!identityValid) {
      setIdentityError('Please complete all four identity fields with a valid work email.');
      return;
    }
    setIdentityError('');
    setPhase('worksheet');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitAudit = async () => {
    setSubmitting(true);
    setSubmitError('');
    try {
      const payload = {
        full_name: identity.full_name.trim(),
        title: identity.title.trim(),
        company: identity.company.trim(),
        work_email: identity.work_email.trim(),
        s1_q1_gateway_percent: Number(answers.s1_q1_gateway_percent),
        s1_q2_api_latency_ms: Number(answers.s1_q2_api_latency_ms),
        s1_q3_broker_outage: answers.s1_q3_broker_outage,
        s2_q1_unsigned_agent_mutations: answers.s2_q1_unsigned_agent_mutations,
        s2_q2_audit_context_hours: Number(answers.s2_q2_audit_context_hours),
        s2_q3_agent_identity_registry: answers.s2_q3_agent_identity_registry,
        s3_q1_heritage_wrapper_percent: Number(answers.s3_q1_heritage_wrapper_percent),
        s3_q2_cross_region_joins: Number(answers.s3_q2_cross_region_joins)
      };
      const { data } = await axios.post(`${API}/audit/submit`, payload);
      setResults(data);
      setPhase('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setSubmitError(
        err?.response?.data?.detail
          ? typeof err.response.data.detail === 'string'
            ? err.response.data.detail
            : 'Some answers failed validation — please re-check the numeric fields.'
          : 'Could not submit your audit. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #0E1217 0%, #141A22 40%, #11161D 100%)' }}
      data-testid="audit-page"
    >
      {/* Texture */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 28%, rgba(197,160,89,0.18) 0%, transparent 45%), radial-gradient(circle at 82% 72%, rgba(57,255,20,0.06) 0%, transparent 45%)'
        }}
      />

      {/* Nav */}
      <nav className="relative z-20 border-b border-white/5 backdrop-blur-md bg-[#0E1217]/70">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              data-testid="audit-back-home"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm tracking-tight">Back to OnPoint</span>
            </Link>
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] hidden md:inline">
              Diagnostic · Framework v2.0
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10">
        <div className="container-custom pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C5A059]/30 rounded-full mb-7">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
                Enterprise Technical Debt Audit
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Isolate the bottleneck.
              <br />
              <span className="italic text-[#C5A059]">Engineer the substrate.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
              A nine-question diagnostic for CTOs, Principal Architects, and VPs of Infrastructure.
              Calculate your exposure to Centralized Trapdoors, Shadow AI schema drift, and legacy
              migration latency in under three minutes.
            </p>
          </div>
        </div>
      </header>

      {/* PHASE: IDENTITY */}
      {phase === 'identity' && (
        <section className="relative z-10 pb-20" data-testid="audit-phase-identity">
          <div className="container-custom">
            <form
              onSubmit={handleIdentitySubmit}
              className="max-w-2xl rounded-lg border border-white/10 bg-[#0F141A]/80 backdrop-blur p-7 md:p-9"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full border border-[#C5A059]/30 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em]">
                    Step 1 of 2 · Identity Verification
                  </div>
                  <div className="text-white text-sm">
                    Confirm your credentials to unlock the worksheet
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="Full Name"
                  required
                  value={identity.full_name}
                  onChange={(v) => setIdentity({ ...identity, full_name: v })}
                  placeholder="Jane Carter"
                  testid="audit-id-name"
                />
                <Field
                  label="Title"
                  required
                  value={identity.title}
                  onChange={(v) => setIdentity({ ...identity, title: v })}
                  placeholder="Chief Technology Officer"
                  testid="audit-id-title"
                />
                <Field
                  label="Company"
                  required
                  value={identity.company}
                  onChange={(v) => setIdentity({ ...identity, company: v })}
                  placeholder="Acme Asset Management"
                  testid="audit-id-company"
                />
                <Field
                  label="Work Email"
                  required
                  type="email"
                  value={identity.work_email}
                  onChange={(v) => setIdentity({ ...identity, work_email: v })}
                  placeholder="jane.carter@acme.com"
                  testid="audit-id-email"
                />
              </div>

              {identityError && (
                <div className="mt-5 flex items-start gap-2 text-[#FF4D4D] text-[12.5px] leading-relaxed">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{identityError}</span>
                </div>
              )}

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[11px] text-gray-500 leading-relaxed max-w-md">
                  Your responses are cryptographically logged under your work-email identity.
                  SOC-2 aligned. No marketing list — institutional use only.
                </p>
                <button
                  type="submit"
                  disabled={!identityValid}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded transition-all whitespace-nowrap ${
                    identityValid
                      ? 'bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#0E1217] hover:opacity-95'
                      : 'bg-white/5 text-gray-600 cursor-not-allowed'
                  }`}
                  data-testid="audit-identity-submit"
                >
                  Unlock Worksheet
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* PHASE: WORKSHEET */}
      {phase === 'worksheet' && (
        <section className="relative z-10 pb-20" data-testid="audit-phase-worksheet">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-white/10">
                <div>
                  <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em]">
                    Step 2 of 2 · Diagnostic Worksheet
                  </div>
                  <div className="text-white text-sm mt-1">
                    Signed in as{' '}
                    <span className="text-white font-medium">{identity.full_name}</span>
                    <span className="text-gray-500"> · {identity.company}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPhase('identity')}
                  className="text-[11px] text-gray-500 hover:text-[#C5A059] transition-colors uppercase tracking-[0.2em]"
                  data-testid="audit-edit-identity"
                >
                  Edit identity
                </button>
              </div>

              <div className="space-y-10">
                {SECTIONS.map((section) => (
                  <SectionBlock
                    key={section.id}
                    section={section}
                    answers={answers}
                    onChange={handleAnswer}
                  />
                ))}
              </div>

              {submitError && (
                <div className="mt-8 flex items-start gap-2 text-[#FF4D4D] text-[13px] leading-relaxed border border-[#FF4D4D]/30 bg-[#FF4D4D]/5 rounded p-4">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-7 border-t border-white/10">
                <p className="text-[11px] text-gray-500 leading-relaxed max-w-md">
                  On submission, your structural risk profile is computed and a private Architecture
                  Review window is reserved for you.
                </p>
                <button
                  type="button"
                  onClick={handleSubmitAudit}
                  disabled={!worksheetComplete || submitting}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded transition-all whitespace-nowrap ${
                    worksheetComplete && !submitting
                      ? 'bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#0E1217] hover:opacity-95'
                      : 'bg-white/5 text-gray-600 cursor-not-allowed'
                  }`}
                  data-testid="audit-submit"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Scoring…
                    </>
                  ) : (
                    <>
                      Compute Risk Profile
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PHASE: RESULTS */}
      {phase === 'results' && results && (
        <ResultsBlock identity={identity} results={results} />
      )}

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
          <div>
            © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved.
          </div>
          <div className="tracking-[0.2em] uppercase">
            USPTO S/N 99653409 · OPAS Authority OS™ S/N 99748939
          </div>
        </div>
      </footer>
    </div>
  );
};

// ---------- Subcomponents ----------

const Field = ({ label, value, onChange, type = 'text', placeholder, required, testid }) => (
  <label className="block">
    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
      {label}
      {required && <span className="text-[#C5A059] ml-1">·</span>}
    </span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-2 w-full bg-[#0B0F14] border border-white/10 focus:border-[#C5A059] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 transition-colors"
      data-testid={testid}
    />
  </label>
);

const SectionBlock = ({ section, answers, onChange }) => {
  const Icon = section.icon;
  return (
    <div
      className="rounded-lg border border-white/10 bg-[#0F141A]/70 p-6 md:p-8"
      data-testid={`audit-section-${section.id}`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded border border-[#C5A059]/30 bg-[#C5A059]/[0.06] flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-[#C5A059]" />
        </div>
        <div>
          <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-1">
            {section.eyebrow}
          </div>
          <h2
            className="text-xl md:text-2xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'Libre Baskerville, serif' }}
          >
            {section.heading}
          </h2>
          <p className="text-gray-400 text-[13.5px] leading-[1.7] mt-2 max-w-3xl">
            {section.blurb}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {section.questions.map((q, i) => (
          <Question
            key={q.key}
            index={i + 1}
            question={q}
            value={answers[q.key]}
            onChange={(v) => onChange(q.key, v)}
          />
        ))}
      </div>
    </div>
  );
};

const Question = ({ index, question, value, onChange }) => (
  <div className="border-t border-white/5 pt-5 first:border-t-0 first:pt-0">
    <div className="flex flex-col md:flex-row md:items-start md:gap-8">
      <div className="md:flex-1">
        <div className="flex items-baseline gap-3">
          <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.2em]">
            Q{index}
          </span>
          <p className="text-gray-200 text-[14px] md:text-[14.5px] leading-[1.7]">
            {question.prompt}
          </p>
        </div>
        <span className="inline-block mt-2.5 ml-8 text-[10px] uppercase tracking-[0.22em] text-gray-500">
          Risk threshold · {question.risk}
        </span>
      </div>

      <div className="mt-4 md:mt-0 md:w-72 md:flex-shrink-0">
        {question.kind === 'number' && (
          <div className="flex items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              min={question.min}
              max={question.max}
              step={question.step || 'any'}
              placeholder={question.placeholder}
              value={value ?? ''}
              onChange={(e) => onChange(e.target.value)}
              className="w-full bg-[#0B0F14] border border-white/10 focus:border-[#C5A059] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600"
              data-testid={`audit-input-${question.key}`}
            />
            <span className="text-[11px] text-gray-500 uppercase tracking-[0.2em] w-12">
              {question.unit}
            </span>
          </div>
        )}

        {question.kind === 'choice' && (
          <div className="flex flex-col gap-2">
            {question.options.map((opt) => {
              const active = value === opt.v;
              return (
                <button
                  type="button"
                  key={opt.v}
                  onClick={() => onChange(opt.v)}
                  className={`text-left px-3.5 py-2.5 rounded text-sm border transition-colors ${
                    active
                      ? 'border-[#C5A059] bg-[#C5A059]/10 text-white'
                      : 'border-white/10 bg-[#0B0F14] text-gray-400 hover:border-white/25 hover:text-white'
                  }`}
                  data-testid={`audit-choice-${question.key}-${opt.v}`}
                >
                  <span
                    className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      active ? 'bg-[#C5A059]' : 'bg-white/15'
                    }`}
                  />
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  </div>
);

const ResultsBlock = ({ identity, results }) => {
  const visual = TIER_VISUAL[results.tier_key] || TIER_VISUAL.acceptable;
  const calendlyUrl = results.booking_url;

  return (
    <section className="relative z-10 pb-24" data-testid="audit-phase-results">
      <div className="container-custom">
        <div className="max-w-5xl">
          {/* Verdict */}
          <div
            className="rounded-lg p-7 md:p-10 mb-10"
            style={{
              background: 'linear-gradient(180deg, #0F141A 0%, #0C1116 100%)',
              boxShadow: visual.glow,
              border: '1px solid rgba(255,255,255,0.06)'
            }}
            data-testid="audit-results-verdict"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em]">
                Audit Complete · Logged Against {identity.work_email}
              </span>
            </div>

            <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-5 text-[11px] font-semibold tracking-[0.25em] uppercase ${visual.chip}`}>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: visual.color }}
              />
              {results.tier_label}
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              {results.indicator_count} structural risk indicator{results.indicator_count === 1 ? '' : 's'} recorded.
            </h2>
            <p className="text-gray-300 text-[15px] md:text-[16px] leading-[1.85] max-w-3xl">
              {results.recommendation}
            </p>
          </div>

          {/* Findings list */}
          {results.findings && results.findings.length > 0 && (
            <div className="mb-12">
              <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-4">
                Indicator Breakdown
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.findings.map((f) => (
                  <div
                    key={f.code}
                    className="flex items-start gap-3 rounded border border-white/10 bg-[#0F141A]/70 p-4"
                    data-testid={`audit-finding-${f.code}`}
                  >
                    <span
                      className={`text-[9.5px] font-semibold tracking-[0.2em] px-2 py-1 border rounded ${
                        LEVEL_STYLE[f.level] || LEVEL_STYLE.MEDIUM
                      }`}
                    >
                      {f.level}
                    </span>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-[0.22em]">
                        {f.code} · Section {f.section}
                      </div>
                      <div className="text-gray-200 text-[13.5px] leading-[1.65] mt-1">
                        {f.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Calendly booking */}
          <div
            className="rounded-lg border border-[#C5A059]/30 bg-gradient-to-br from-[#C5A059]/[0.06] to-transparent p-6 md:p-8 mb-8"
            data-testid="audit-booking-card"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-5">
              <div>
                <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-2">
                  Reserved · Private Architecture Review
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'Libre Baskerville, serif' }}
                >
                  Book your engineering desk window.
                </h3>
                <p className="text-gray-400 text-[13.5px] leading-relaxed mt-2 max-w-xl">
                  A 30-minute private session with our engineering leadership to walk through
                  your indicator breakdown and a phased remediation plan tailored to{' '}
                  <span className="text-white">{identity.company}</span>.
                </p>
              </div>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#0E1217] text-sm font-semibold rounded hover:opacity-95 transition-opacity whitespace-nowrap"
                data-testid="audit-booking-cta-external"
              >
                <Calendar className="w-4 h-4" />
                Open Booking Page
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Calendly */}
            <div
              className="rounded border border-white/10 overflow-hidden bg-[#0B0F14]"
              style={{ height: 720 }}
            >
              <iframe
                title="Book Architecture Review"
                src={`${calendlyUrl}?hide_event_type_details=1&background_color=0B0F14&text_color=ffffff&primary_color=C5A059`}
                width="100%"
                height="100%"
                frameBorder="0"
                data-testid="audit-calendly-embed"
              />
            </div>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed max-w-3xl">
            A confirmation email with your structural risk profile has been dispatched to{' '}
            <span className="text-white">{identity.work_email}</span>. The OnPoint engineering desk
            has also been notified.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuditPage;
