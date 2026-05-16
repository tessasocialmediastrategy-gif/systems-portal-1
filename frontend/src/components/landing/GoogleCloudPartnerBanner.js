import React from 'react';
import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react';
import { track } from '../../services/analytics';

const PARTNER_COMPOSITE_URL =
  'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/zcgn9xgl_GooglePartner.jpeg';

// External institutional portal (subdomain now provisioned)
const PORTAL_DESTINATION = 'https://portal.onpointauthoritysystems.com';

export const GoogleCloudPartnerBanner = () => (
  <section
    id="google-cloud-partner"
    className="relative py-20 md:py-28 overflow-hidden"
    style={{ backgroundColor: '#050505' }}
    data-testid="google-cloud-partner-section"
  >
    {/* Soft tri-color wash (Google brand bridge) */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse 35% 50% at 15% 30%, rgba(66,133,244,0.06) 0%, transparent 60%),' +
          'radial-gradient(ellipse 35% 50% at 50% 80%, rgba(15,157,88,0.05) 0%, transparent 60%),' +
          'radial-gradient(ellipse 35% 50% at 85% 30%, rgba(244,180,0,0.05) 0%, transparent 60%)'
      }}
    />

    <div className="container-custom relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#C5A059]/30 rounded-full mb-6">
            <BadgeCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
              Newly Authorized · Strategic Validation
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            style={{ fontFamily: 'Libre Baskerville, serif' }}
          >
            We are now a <span className="text-[#C5A059] italic">Google Cloud Partner.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Enterprise automation unleashed. <span className="text-white">45 enterprise leads
            active.</span> Automated sequences ready. Validated under{' '}
            <span className="text-white">GCP Partner Case #71129532</span>.
          </p>
        </div>

        {/* Clickable composite — routes to the briefing substrate */}
        <a
          href={PORTAL_DESTINATION}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('priority_access_open', { source: 'gcp_partner_banner' })}
          className="group relative block rounded-xl overflow-hidden mx-auto transition-transform duration-500 hover:-translate-y-1"
          style={{
            border: '1px solid rgba(197,160,89,0.4)',
            boxShadow:
              '0 0 0 1px rgba(197,160,89,0.08), 0 30px 80px -20px rgba(197,160,89,0.2), 0 10px 40px -10px rgba(0,0,0,0.6)'
          }}
          data-testid="gcp-partner-banner-link"
          aria-label="Open OnPoint × Google Cloud institutional portal"
        >
          <img
            src={PARTNER_COMPOSITE_URL}
            alt="OnPoint Authority Systems × Google Cloud Partner — Enterprise Automation Unleashed: Agent Registry architecture, IAM data governance, 45 active enterprise leads"
            className="w-full h-auto block"
            loading="lazy"
            decoding="async"
            data-testid="gcp-partner-banner-image"
          />

          {/* Floating "Authorized Partner" badge */}
          <div
            className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
            style={{
              background: 'rgba(0,0,0,0.55)',
              border: '1px solid rgba(197,160,89,0.45)'
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
              Authorized Partner
            </span>
          </div>

          {/* Hover CTA pill */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-md"
              style={{
                background: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(197,160,89,0.5)'
              }}
            >
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Enter Institutional Portal
              </span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </div>
          </div>
        </a>

        {/* Stat strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: '45', l: 'Enterprise Leads Active' },
            { k: 'GCP', l: 'Authorized Partner' },
            { k: '#71129532', l: 'Validation Case' },
            { k: 'Q3', l: 'Joint Whitepaper · 2026' }
          ].map((stat, i) => (
            <div
              key={i}
              className="px-5 py-4 rounded text-center md:text-left"
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(197,160,89,0.18)'
              }}
            >
              <div className="text-xl md:text-2xl font-bold text-[#C5A059]">{stat.k}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
