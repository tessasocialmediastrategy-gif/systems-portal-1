import React from 'react';

export const VideoShowcase = () => (
  <section
    className="relative py-20 md:py-28 overflow-hidden"
    style={{ backgroundColor: '#121212' }}
    data-testid="video-showcase-section"
  >
    {/* Fixed CSS Grid Pattern — static parallax (40×40 white @ 4%) */}
    <div
      aria-hidden
      className="pointer-events-none"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0
      }}
    />

    <div className="container-custom relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full mb-6"
            style={{ borderColor: 'rgba(57,255,20,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#39FF14' }} />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase" style={{ color: '#39FF14' }}>
              Live Deployment
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
            style={{ fontFamily: 'Libre Baskerville, serif' }}
          >
            The Quantum Financial Deployment
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            OPAS Authority OS™ — operational footage of the 3-Layer Governance stack in production.
          </p>
        </div>

        <div className="relative">
          {/* Soft radial glow #39FF14 @ 8% */}
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              inset: '-15%',
              background:
                'radial-gradient(ellipse at center, rgba(57,255,20,0.08) 0%, rgba(57,255,20,0.04) 35%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: 0
            }}
          />

          {/* Glassmorphism container — 1px #39FF14 @ 30% border */}
          <div
            className="relative rounded-xl overflow-hidden backdrop-blur-md"
            style={{
              border: '1px solid rgba(57,255,20,0.3)',
              boxShadow:
                '0 0 0 1px rgba(57,255,20,0.08), 0 30px 80px -20px rgba(57,255,20,0.15), 0 10px 40px -10px rgba(0,0,0,0.6)',
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(57,255,20,0.02) 100%)'
            }}
            data-testid="quantum-video-showcase"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/assets/campaign/gold-desktop-hero.png"
                data-testid="quantum-video-element"
              >
                <source src="/assets/onpoint_quantum_financial_deployment.webm" type="video/webm" />
                <source src="/assets/onpoint_quantum_financial_deployment.mp4" type="video/mp4" />
              </video>

              {/* Edge softening vignette */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow:
                    'inset 0 0 60px 10px rgba(18,18,18,0.6), inset 0 0 120px 20px rgba(18,18,18,0.4)'
                }}
              />
            </div>

            {/* Corner glass refraction accent */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(57,255,20,0.1) 0%, transparent 60%)'
              }}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#39FF14' }} />
              <span className="tracking-[0.2em] uppercase">OPAS Live · Production Footage</span>
            </div>
            <div className="text-gray-600 tracking-wider">
              ZKP-Verified · State 0 Protocol · Onyx Bridge
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
