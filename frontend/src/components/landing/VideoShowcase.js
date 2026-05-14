import React, { useEffect, useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';
import { track } from '../../services/analytics';

// 1:1 pixel-fidelity high-resolution architectural map from secure storage
const ARCHITECTURAL_MAP_URL =
  'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/eblm5ag9_image.png';

export const VideoShowcase = () => {
  const sectionRef = useRef(null);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [impressed, setImpressed] = useState(false);

  // Fire one impression event the first time the showcase scrolls into view
  useEffect(() => {
    if (impressed || !sectionRef.current) return;
    const el = sectionRef.current;
    if (typeof IntersectionObserver === 'undefined') {
      track('video_showcase_impression');
      setImpressed(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track('video_showcase_impression');
          setImpressed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [impressed]);

  const openZoom = () => {
    track('architectural_map_zoom');
    setZoomOpen(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 md:pt-28 pb-32 md:pb-40 overflow-hidden"
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
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: '#39FF14' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: '#39FF14' }}
              >
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
              OPAS Authority OS™ — the architectural map of the 3-Layer Governance stack in
              production.
            </p>
          </div>

          <div className="relative">
            {/* Soft radial glow #39FF14 @ 8% (behind, untouched pixels) */}
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
              className="group relative rounded-xl overflow-hidden cursor-zoom-in"
              style={{
                border: '1px solid rgba(57,255,20,0.3)',
                boxShadow:
                  '0 0 0 1px rgba(57,255,20,0.08), 0 30px 80px -20px rgba(57,255,20,0.15), 0 10px 40px -10px rgba(0,0,0,0.6)'
              }}
              onClick={openZoom}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openZoom();
                }
              }}
              data-testid="quantum-architectural-showcase"
            >
              <img
                src={ARCHITECTURAL_MAP_URL}
                alt="The OnPoint Shift — Quantum Financial Network Deployment: SHA-256 Agent Identity Signatures, Legacy Cores (JPMC Phoenix, MSFT O, IBM Z), OPAS Authority OS JPMC Pilot, 5.4× Operational Efficiency Multiplier, Agent Identity Registry, Verified Project Metrics"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="eager"
                decoding="async"
                data-testid="quantum-architectural-map"
              />

              {/* Hover zoom hint */}
              <div className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
                  style={{
                    background: 'rgba(0,0,0,0.55)',
                    border: '1px solid rgba(57,255,20,0.35)'
                  }}
                >
                  <ZoomIn className="w-3.5 h-3.5" style={{ color: '#39FF14' }} />
                  <span
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: '#39FF14' }}
                  >
                    Click to Zoom
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pr-0 md:pr-48 flex flex-wrap items-center justify-between gap-4 text-xs">
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

      <ImageLightbox
        src={ARCHITECTURAL_MAP_URL}
        alt="OnPoint Shift Architectural Map — Zoomed"
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
      />
    </section>
  );
};
