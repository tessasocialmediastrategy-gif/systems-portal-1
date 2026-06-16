import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { track } from '../../services/analytics';

// "AI Doesn't Fail Image.jpg" — Authority Layer governance command center.
const AUTHORITY_IMG =
  'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/fsmbqnz6_AI%20Doesn%27t%20Fail%20Image.jpg';

export const AuthorityLayerSection = () => (
  <section
    className="min-h-[500px] flex items-center justify-center"
    style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#ffffff',
      padding: '80px 4%',
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
      boxSizing: 'border-box'
    }}
    data-testid="authority-layer-section"
  >
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left: copy + CTA */}
      <div className="flex flex-col justify-center">
        <span
          className="uppercase font-bold inline-block"
          style={{
            color: '#38bdf8',
            letterSpacing: '2px',
            fontSize: '0.85rem',
            marginBottom: '12px'
          }}
        >
          Enterprise Architecture
        </span>
        <h1
          className="text-white"
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0'
          }}
        >
          Authority Is Infrastructure
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            lineHeight: 1.5,
            color: '#cbd5e1',
            margin: '0 0 32px 0',
            fontWeight: 400
          }}
        >
          How category power is engineered—not branded. We bridge the gap between experimental AI
          models and production-ready enterprise systems by deploying an absolute, automated{' '}
          <strong style={{ color: '#38bdf8', fontWeight: 600 }}>Authority Layer</strong> over your
          workflows.
        </p>
        <div>
          <Link
            to="/audit"
            onClick={() =>
              track('cta_click', { source: 'authority_layer_section', target: '/audit' })
            }
            className="inline-flex items-center gap-2 transition-colors"
            style={{
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '14px 28px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              borderRadius: '6px',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0369a1')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
            data-testid="authority-apply-cta"
          >
            Apply for Core Verification
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right: visual */}
      <div className="relative flex justify-center items-center">
        <div
          className="w-full overflow-hidden"
          style={{
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <img
            src={AUTHORITY_IMG}
            alt="OnPoint AI Governance Command Center Architecture"
            loading="lazy"
            className="w-full h-auto block object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
