import React from 'react';
import { Link } from 'react-router-dom';
import { track } from '../../services/analytics';

const COMMAND_CENTER_IMG =
  'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/8dael470_OnPointAuthoritySystemsDeploymentReadyImage.jpg';

const CALENDLY_URL = 'https://calendly.com/ops-onpointauthoritysystems';

export const AgenticShiftFrameworkSimple = () => (
  <section
    className="bg-black text-white py-20 px-6 font-sans"
    data-testid="agentic-shift-simple-section"
  >
    <div className="max-w-6xl mx-auto text-center mb-16">
      <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
        The Operational Workflow
      </span>
      <h2 className="text-4xl font-bold mt-2 mb-4">The 4-Step Agentic Shift Framework</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Stop managing complexity. Transition legacy infrastructure to high-performance compute with
        an automated, friction-free deployment pipeline.
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
      <div
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg hover:border-cyan-500 transition-all duration-300"
        data-testid="simple-step-01"
      >
        <div className="text-cyan-400 text-sm font-mono mb-4">01 // AUDIT</div>
        <h3 className="text-xl font-semibold mb-2">Vector Analysis</h3>
        <p className="text-zinc-400 text-sm">
          Instantly expose hidden technical debt, identifying high-risk architecture vulnerabilities
          across key data gateways.
        </p>
      </div>
      <div
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg hover:border-amber-500 transition-all duration-300"
        data-testid="simple-step-02"
      >
        <div className="text-amber-400 text-sm font-mono mb-4">02 // SCORE</div>
        <h3 className="text-xl font-semibold mb-2">Compute Matrix</h3>
        <p className="text-zinc-400 text-sm">
          Quantify systemic health into actionable metrics, mapping critical risk indicators against
          optimal baseline targets.
        </p>
      </div>
      <div
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg hover:border-emerald-500 transition-all duration-300"
        data-testid="simple-step-03"
      >
        <div className="text-emerald-400 text-sm font-mono mb-4">03 // PLAN</div>
        <h3 className="text-xl font-semibold mb-2">Blueprint Gen</h3>
        <p className="text-zinc-400 text-sm">
          Auto-generate an un-siloed, friction-free implementation plan to safely restructure legacy
          dependencies.
        </p>
      </div>
      <div
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg hover:border-blue-500 transition-all duration-300"
        data-testid="simple-step-04"
      >
        <div className="text-blue-500 text-sm font-mono mb-4">04 // DEPLOY</div>
        <h3 className="text-xl font-semibold mb-2">Authority OS™</h3>
        <p className="text-zinc-400 text-sm">
          Transition operations smoothly onto a resilient, modern ecosystem without interrupting
          active service lines.
        </p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-800 shadow-2xl shadow-cyan-950/20 mb-16">
      <img
        src={COMMAND_CENTER_IMG}
        alt="OnPoint Command Center Framework Visualization"
        loading="lazy"
        className="w-full h-auto"
      />
      <div className="bg-zinc-950 p-3 text-center text-xs text-zinc-500 italic border-t border-zinc-900">
        Figure 1.1: Live architecture mapping visualization inside OnPoint Command Center Alpha
        during an active enterprise deployment.
      </div>
    </div>

    <div className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-xl p-10 text-center">
      <h3 className="text-2xl font-bold mb-2">Ready to Discover Your Agentic Readiness Score?</h3>
      <p className="text-zinc-400 text-sm mb-6 max-w-xl mx-auto">
        Run a deep-layer framework evaluation. Expose your legacy infrastructure bottlenecks before
        they impact your compute budgets.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/audit"
          onClick={() => track('cta_click', { source: 'agentic_shift_simple_banner', target: '/audit' })}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded transition-all"
          data-testid="simple-primary-cta"
        >
          Run Technical Debt Audit &rarr;
        </Link>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            track('cta_click', { source: 'agentic_shift_simple_banner', target: 'calendly' })
          }
          className="bg-transparent hover:bg-zinc-900 border border-zinc-700 px-6 py-3 rounded transition-all"
          data-testid="simple-secondary-cta"
        >
          Book Architecture Review
        </a>
      </div>
    </div>
  </section>
);
