import React from 'react';
import QRCode from 'react-qr-code';
import { ArrowRight, ScanLine } from 'lucide-react';
import { track } from '../../services/analytics';

const GATEWAY_INFOGRAPHIC_URL =
  'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/fgmt7p9y_OPAS%20-%20The%20Institutional%20Seeding%20Gateway%20Infographic.jpg';

const PORTAL_URL = 'https://portal.onpointauthoritysystems.com';

export const InstitutionalSeedingGateway = () => (
  <section
    id="seeding-gateway"
    className="relative bg-slate-900 py-20 md:py-24 px-6 border-y border-slate-800 overflow-hidden"
    data-testid="institutional-seeding-gateway-section"
  >
    {/* Subtle gold + neon ambient wash */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse 50% 40% at 20% 30%, rgba(197,160,89,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(57,255,20,0.05) 0%, transparent 60%)'
      }}
    />

    <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
      {/* Eyebrow */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full mb-6"
        style={{ borderColor: 'rgba(57,255,20,0.3)' }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: '#39FF14' }}
        />
        <span
          className="text-[11px] font-semibold tracking-[0.3em] uppercase"
          style={{ color: '#39FF14' }}
        >
          The Seeding Gateway
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-3xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight"
        style={{ fontFamily: 'Libre Baskerville, serif' }}
      >
        The Institutional Seeding Gateway
        <sup className="text-[#C5A059] text-base ml-1 align-super">™</sup>
      </h2>
      <p className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl text-center leading-relaxed">
        Bridging the <span className="text-[#C5A059] font-semibold">$7.8B technical debt gap</span>{' '}
        with non-custodial sovereignty. Validated under{' '}
        <span className="text-white font-medium">GCP Case #71129532</span>.
      </p>

      {/* Main Infographic Container */}
      <div
        className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden"
        style={{
          border: '1px solid rgba(57,255,20,0.3)',
          boxShadow:
            '0 0 0 1px rgba(57,255,20,0.08), 0 30px 80px -20px rgba(57,255,20,0.15), 0 10px 40px -10px rgba(0,0,0,0.6)'
        }}
        data-testid="seeding-gateway-infographic"
      >
        <img
          src={GATEWAY_INFOGRAPHIC_URL}
          alt="OnPoint Authority Systems — Institutional Seeding Gateway Framework"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Interactive CTA & QR Scan */}
      <div
        className="mt-12 flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg w-full max-w-3xl"
        style={{
          background: 'rgba(30,41,59,0.5)',
          border: '1px solid rgba(51,65,85,0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {/* QR Code */}
        <div
          className="w-32 h-32 bg-white p-3 rounded-lg flex-shrink-0"
          data-testid="seeding-gateway-qr"
        >
          <QRCode
            value={typeof window !== 'undefined' ? `${window.location.origin}${PORTAL_URL}` : `https://onpointauthoritysystems.com${PORTAL_URL}`}
            size={112}
            level="M"
            bgColor="#FFFFFF"
            fgColor="#0F172A"
            style={{ height: '100%', width: '100%' }}
          />
        </div>

        {/* CTA Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <ScanLine className="w-4 h-4" style={{ color: '#39FF14' }} />
            <h3
              className="text-xl font-semibold"
              style={{ color: '#39FF14', fontFamily: 'Libre Baskerville, serif' }}
            >
              Scan for Priority Access
            </h3>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Access the <span className="text-[#C5A059] font-medium">Diamond Tier</span> briefing
            and real-time telemetry for{' '}
            <span className="text-white font-medium">Auth ID: AIS-BLR-0091Q</span>.
          </p>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('priority_access_open', { source: 'seeding_gateway' })}
            className="inline-flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-widest text-white underline decoration-[#39FF14] decoration-2 underline-offset-4 hover:decoration-[#C5A059] transition-colors"
            data-testid="seeding-gateway-portal-link"
          >
            Enter Institutional Portal
            <ArrowRight className="w-4 h-4" style={{ color: '#39FF14' }} />
          </a>
        </div>
      </div>
    </div>
  </section>
);
