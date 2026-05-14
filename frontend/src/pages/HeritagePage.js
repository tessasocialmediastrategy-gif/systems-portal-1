import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Server, Network, Cpu, Award, Shield, Fingerprint } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { track } from '../services/analytics';

const HeritagePage = () => {
  useSEO({
    title: 'The Architectural Pedigree of OnPoint Authority Systems | Heritage',
    description:
      'The 35-year architectural pedigree behind OnPoint Authority Systems — from 1991 Devry COBOL mainframes and 1995 MCSE network infrastructure to the 2026 Authority OS for agentic, quantum-ready institutional finance.',
    ogImage:
      'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/eblm5ag9_image.png',
    canonical: 'https://onpointauthoritysystems.com/heritage'
  });

  useEffect(() => {
    track('heritage_view');
  }, []);

  const timeline = [
    {
      year: '1991',
      era: 'The Core',
      title: 'Devry Institute — COBOL Mainframe Mastery',
      icon: Server,
      body:
        'The foundation. At the Devry Institute, I learned the logic of the mainframe — JCL, COBOL, batch processing, and the disciplined architectural thinking that still quietly powers the world\'s largest financial institutions today. This is the bedrock that has never failed.',
      accent: '#7C7264'
    },
    {
      year: '1995',
      era: 'The Bridge',
      title: 'MCSE / MCP — Networked Enterprise Architecture',
      icon: Network,
      body:
        'As a Microsoft Certified Systems Engineer, I architected the bridge between mainframe systems-of-record and the distributed networked enterprise. Active Directory, identity federation, and the early protocols of trust between systems — the precursors to today\'s zero-trust models.',
      accent: '#9E8A5C'
    },
    {
      year: '2000s–2010s',
      era: 'The Translator',
      title: 'Enterprise Modernization & Compliance',
      icon: Award,
      body:
        'Three decades inside Tier-1 institutions translating between the indestructible legacy core and each successive wave of innovation — virtualization, cloud, SOC-2, GRC, IAM. Every transition validated the same architectural truth: you do not replace the foundation. You give it a brain.',
      accent: '#B89A60'
    },
    {
      year: '2026',
      era: 'The Future',
      title: 'OPAS Authority OS™ — Agentic Orchestration & ZKP',
      icon: Cpu,
      body:
        'The culmination. A proprietary 3-Layer Governance OS that wraps 35 years of institutional technical debt into a non-custodial, quantum-ready substrate. Sovereign identity. Agentic governance. Quantum bridge. The Authority OS is the architectural answer to the agentic shift.',
      accent: '#C5A059'
    }
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(180deg, #0E1217 0%, #141A22 40%, #11161D 100%)'
      }}
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Subtle slate texture overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(197,160,89,0.18) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,255,136,0.06) 0%, transparent 40%)'
        }}
      />
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 border-b border-white/5 backdrop-blur-md bg-[#0E1217]/70">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              data-testid="heritage-back-home"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm tracking-tight">Back to OnPoint</span>
            </Link>
            <div className="flex items-center gap-6">
              <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] hidden md:inline">
                Our Path
              </span>
              <Link
                to="/authority-review"
                className="px-4 py-2 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] text-sm font-semibold rounded hover:opacity-90 transition-opacity"
                data-testid="heritage-cta-review"
              >
                Request Strategic Review
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / Masthead */}
      <header className="relative z-10">
        <div className="container-custom pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C5A059]/30 rounded-full mb-10">
              <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
              <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
                Heritage · Architectural Pedigree
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
              itemProp="headline"
            >
              From COBOL to Quantum.
              <br />
              <span className="text-[#C5A059] italic">A 35-Year Architecture.</span>
            </h1>

            <p
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl"
              itemProp="description"
            >
              The Authority OS was not invented in a conference room. It was earned across four
              technology eras — from the COBOL mainframe to the agentic enterprise — by an
              architect who has spent a career translating between the indestructible legacy core
              and every wave of innovation that followed.
            </p>

            {/* Digital Signature — prominent at the top */}
            <div className="mt-14 pt-10 border-t border-white/5 max-w-2xl" itemScope itemType="https://schema.org/Person" itemProp="author">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-4">
                Authored & Architected By
              </p>
              <div
                className="text-5xl md:text-6xl text-[#C5A059] italic mb-3 leading-none"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                Tessa Shepard
              </div>
              <p className="text-white font-medium tracking-tight" itemProp="name">
                Tessa Shepard
              </p>
              <p className="text-gray-500 text-sm" itemProp="jobTitle">
                Founder &amp; CEO · OnPoint Authority Systems, Inc.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                B.S. Business Administration · MCSE · Legacy Architect
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Founder's Letter */}
      <section className="relative z-10 py-16 md:py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
            <div className="lg:col-span-3">
              <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] sticky top-24">
                A Note From <br /> The Founder
              </p>
            </div>
            <div className="lg:col-span-9 space-y-6 text-gray-300 leading-[1.85] text-[17px]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              <p>
                In 1991, at the Devry Institute, I learned the logic of the mainframe — the COBOL
                foundations that still quietly power the world's largest financial institutions
                today.
              </p>
              <p>
                Through the 1990s, as a Microsoft Certified Systems Engineer, I saw the birth of
                the networked enterprise — Active Directory, identity federation, and the early
                language of trust between systems.
              </p>
              <p>
                For thirty-five years, I have watched the gap widen between these indestructible
                legacy cores and the speed of modern innovation. I founded OnPoint Authority
                Systems to bridge that gap — not with a slide deck, but with an operating system.
              </p>
              <p>
                We don't just "build AI." We deploy{' '}
                <span className="text-[#C5A059] font-semibold not-italic">OPAS Authority OS™</span>{' '}
                — a proprietary orchestration engine designed to wrap three decades of
                institutional technical debt into a non-custodial, quantum-ready future. We aren't
                replacing the foundation;{' '}
                <span className="text-white font-medium not-italic">we are giving it a brain.</span>
              </p>
              <p className="text-white text-xl md:text-2xl pt-4">
                Welcome to the Agentic Shift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Innovation */}
      <section id="timeline" className="relative z-10 py-16 md:py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-4">
              Timeline of Innovation
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Four eras. One unbroken thread.
            </h2>
          </div>

          <div className="max-w-6xl">
            <div className="relative">
              {/* Vertical thread */}
              <div
                aria-hidden
                className="absolute left-6 md:left-8 top-2 bottom-2 w-px"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(124,114,100,0.4) 0%, rgba(197,160,89,0.6) 50%, rgba(0,255,136,0.5) 100%)'
                }}
              />

              <div className="space-y-12 md:space-y-16">
                {timeline.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={idx}
                      className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-6 md:gap-10 group"
                      data-testid={`heritage-timeline-${item.year}`}
                    >
                      {/* Node */}
                      <div className="relative flex justify-center">
                        <div
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border bg-[#0E1217] relative z-10 transition-all duration-500 group-hover:scale-105"
                          style={{
                            borderColor: item.accent,
                            boxShadow: `0 0 0 4px rgba(14,18,23,1), 0 0 24px ${item.accent}22`
                          }}
                        >
                          <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: item.accent }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-1 md:pt-2">
                        <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                          <span
                            className="text-2xl md:text-3xl font-bold tracking-tight"
                            style={{ color: item.accent, fontFamily: 'Libre Baskerville, serif' }}
                          >
                            {item.year}
                          </span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                            {item.era}
                          </span>
                        </div>
                        <h3
                          className="text-xl md:text-2xl text-white mb-3 tracking-tight"
                          style={{ fontFamily: 'Libre Baskerville, serif' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-[1.8] max-w-2xl">
                          {item.body}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IP / Credentials */}
      <section className="relative z-10 py-16 md:py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {[
                { k: '35+', label: 'Years of Architecture' },
                { k: 'MCSE', label: 'Microsoft Certified' },
                { k: 'COBOL', label: 'Mainframe Heritage' }
              ].map((b, i) => (
                <div key={i} className="bg-[#0E1217] p-8 md:p-10">
                  <div
                    className="text-3xl md:text-4xl text-[#C5A059] mb-3"
                    style={{ fontFamily: 'Libre Baskerville, serif' }}
                  >
                    {b.k}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.25em]">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C5A059]" />
                <span>USPTO S/N 99653409</span>
              </div>
              <span className="text-gray-700">·</span>
              <div className="flex items-center gap-2">
                <Fingerprint className="w-4 h-4 text-[#C5A059]" />
                <span>OPAS Authority OS™ S/N 99748939</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative z-10 py-20 md:py-28 border-t border-white/5">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Architecture is a discipline.<br />
              <span className="text-[#C5A059] italic">Not a feature.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              If your institution is preparing for the agentic shift, the conversation begins with
              a Strategic Authority Review.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/authority-review"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] font-semibold rounded hover:opacity-90 transition-opacity"
                data-testid="heritage-cta-review-bottom"
              >
                Request Strategic Review
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 text-gray-300 border border-white/10 rounded hover:bg-white/5 transition-colors"
                data-testid="heritage-back-home-bottom"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
          <div>
            © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved.
          </div>
          <div className="tracking-[0.2em] uppercase">
            Charlotte · New York · London
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeritagePage;
