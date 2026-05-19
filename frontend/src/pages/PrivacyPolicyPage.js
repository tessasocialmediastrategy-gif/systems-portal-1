import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Shield } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const SECTIONS = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    body: [
      'OnPoint Authority Systems, Inc. ("OnPoint", "we", "us", or "our") respects your privacy and is committed to safeguarding the personal information of every executive, institution, and visitor that engages with onpointauthoritysystems.com (the "Site") and our protected portals.',
      'This Privacy Policy explains what information we collect, how we use and protect it, and the rights you have over your data. By using the Site, you agree to the practices described below.'
    ]
  },
  {
    id: 'information-we-collect',
    heading: '2. Information We Collect',
    body: [
      'We collect the minimum data necessary to support institutional engagement and platform integrity:',
    ],
    list: [
      { k: 'Identification & Contact Data', v: 'Name, title, work email, institution, phone, optional message — submitted via Priority Access, Authority Review, NDA, and Contact forms.' },
      { k: 'Institutional Profile', v: 'Institution type (G-SIB, asset manager, etc.), tier interest, annual revenue range, and engagement context, when voluntarily provided.' },
      { k: 'Authenticated Portal Activity', v: 'Documents accessed, NDA execution timestamps, and download events within /portal and the Deal Room.' },
      { k: 'Technical & Engagement Telemetry', v: 'Anonymized event signals (page views, video impressions, map zoom clicks), generated session identifiers stored in your browser, IP address and user-agent at the moment of submission.' }
    ]
  },
  {
    id: 'how-we-use',
    heading: '3. How We Use Your Information',
    body: [
      'Your information is used exclusively to operate, secure, and improve the OnPoint engagement substrate:'
    ],
    list: [
      { k: 'Service Delivery', v: 'Respond to inquiries, dispatch NDAs, provision Deal Room access, and execute the Strategic Authority Review.' },
      { k: 'Transactional Communication', v: 'Send branded acknowledgement and status emails (e.g., Priority Access confirmation, NDA receipt). We do not send unsolicited marketing.' },
      { k: 'Operational Integrity', v: 'Detect abuse, maintain audit logs, comply with SOC-2 controls, and support GCP Partner Case #71129532 telemetry obligations.' },
      { k: 'Aggregate Analytics', v: 'Measure engagement at the institutional cohort level — never to profile or sell to third parties.' }
    ]
  },
  {
    id: 'sharing',
    heading: '4. How We Share Information',
    body: [
      'OnPoint does not sell, rent, or barter your personal data. We share information only with the following categories of processors, each bound by written confidentiality and data-protection terms:'
    ],
    list: [
      { k: 'Infrastructure Providers', v: 'Google Cloud Platform (compute, IAM, BigQuery) and MongoDB Atlas (encrypted data-at-rest storage).' },
      { k: 'Transactional Email', v: 'Resend, used to deliver acknowledgement and notification emails from ops@onpointauthoritysystems.com.' },
      { k: 'Legal & Compliance', v: 'Disclosure may occur where required by law, subpoena, or to protect the rights and safety of OnPoint or its institutional partners.' }
    ]
  },
  {
    id: 'security',
    heading: '5. Data Security',
    body: [
      'We apply layered, institutional-grade controls: TLS 1.3 transport encryption, AES-256 encryption at rest, JWT-based authentication, role-segregated access, audited download logs, and ZKP-verified provenance within the Authority OS™ substrate. The Deal Room operates on non-custodial cryptographic boundaries — by design, no single operator can unilaterally exfiltrate documents.'
    ]
  },
  {
    id: 'retention',
    heading: '6. Data Retention',
    body: [
      'Form-submission records are retained for the duration of the engagement relationship plus a regulatory tail of seven (7) years to satisfy financial-services audit standards. Engagement telemetry (page-level events) is retained in aggregated form for up to twenty-four (24) months. You may request earlier deletion as outlined in Section 8.'
    ]
  },
  {
    id: 'cookies',
    heading: '7. Cookies & Local Storage',
    body: [
      'The Site uses strictly necessary browser storage (`sessionStorage`) to generate an anonymous session identifier for engagement analytics, and `localStorage` to hold authentication tokens for signed-in buyer-portal users. We do not deploy third-party advertising cookies or cross-site tracking pixels.'
    ]
  },
  {
    id: 'rights',
    heading: '8. Your Rights',
    body: [
      'Depending on your jurisdiction (including GDPR for EU/UK residents and CCPA/CPRA for California residents), you have the right to access, correct, port, restrict, or delete the personal information we hold about you, and to opt out of any non-essential processing. To exercise these rights, contact us using the details in Section 10. We will respond within thirty (30) days.'
    ]
  },
  {
    id: 'children',
    heading: '9. Children',
    body: [
      'OnPoint serves institutional principals and is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.'
    ]
  },
  {
    id: 'contact',
    heading: '10. Contact & Data Steward',
    body: [
      'Privacy questions, deletion requests, and regulatory inquiries should be directed to our operations desk:'
    ],
    contact: true
  },
  {
    id: 'updates',
    heading: '11. Updates to this Policy',
    body: [
      'We may amend this Policy from time to time to reflect operational, legal, or regulatory change. Material updates will be announced on this page with a revised "Last Updated" date. Continued use of the Site after such updates constitutes acceptance of the revised terms.'
    ]
  }
];

const PrivacyPolicyPage = () => {
  useSEO({
    title: 'Privacy Policy | OnPoint Authority Systems',
    description:
      'OnPoint Authority Systems privacy policy — what data we collect, how it is used and protected, and the rights you have over your information. SOC-2 aligned, GDPR/CCPA aware.',
    canonical: 'https://onpointauthoritysystems.com/privacy'
  });

  const lastUpdated = 'May 19, 2026';

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #0E1217 0%, #141A22 40%, #11161D 100%)'
      }}
      data-testid="privacy-policy-page"
    >
      {/* Subtle texture overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(197,160,89,0.18) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,255,136,0.06) 0%, transparent 40%)'
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 border-b border-white/5 backdrop-blur-md bg-[#0E1217]/70">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              data-testid="privacy-back-home"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm tracking-tight">Back to OnPoint</span>
            </Link>
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] hidden md:inline">
              Legal · Privacy
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10">
        <div className="container-custom pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C5A059]/30 rounded-full mb-8">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
                Privacy Policy
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              How OnPoint <span className="italic text-[#C5A059]">protects</span> your data.
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
              Institutional-grade privacy practices applied across every form submission, portal
              session, and engagement signal on onpointauthoritysystems.com.
            </p>
            <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </header>

      {/* Table of contents + content */}
      <section className="relative z-10 pb-20 md:pb-28 border-t border-white/5">
        <div className="container-custom pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sticky TOC */}
            <aside className="lg:col-span-3">
              <nav className="lg:sticky lg:top-24">
                <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-4">
                  Contents
                </p>
                <ul className="space-y-2.5">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-xs text-gray-500 hover:text-[#C5A059] transition-colors block"
                      >
                        <span className="text-gray-600 mr-2">{String(i + 1).padStart(2, '0')}</span>
                        {s.heading.replace(/^\d+\.\s*/, '')}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Body */}
            <div className="lg:col-span-9 space-y-12">
              {SECTIONS.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-24">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight"
                    style={{ fontFamily: 'Libre Baskerville, serif' }}
                  >
                    {s.heading}
                  </h2>

                  {s.body.map((p, i) => (
                    <p
                      key={i}
                      className="text-gray-300 text-[15px] leading-[1.85] mb-4 max-w-3xl"
                    >
                      {p}
                    </p>
                  ))}

                  {s.list && (
                    <ul className="mt-4 space-y-3 max-w-3xl">
                      {s.list.map((item, i) => (
                        <li
                          key={i}
                          className="pl-5 border-l border-[#C5A059]/30 text-gray-300 text-[15px] leading-[1.7]"
                        >
                          <span className="text-white font-medium">{item.k}.</span>{' '}
                          <span className="text-gray-400">{item.v}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.contact && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
                      <a
                        href="mailto:ops@onpointauthoritysystems.com"
                        className="flex items-center gap-3 p-4 rounded border border-white/5 hover:border-[#C5A059]/30 hover:bg-[#C5A059]/5 transition-colors"
                        data-testid="privacy-contact-email"
                      >
                        <Mail className="w-4 h-4 text-[#C5A059]" />
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em]">
                            Email
                          </div>
                          <div className="text-sm text-white">ops@onpointauthoritysystems.com</div>
                        </div>
                      </a>
                      <div className="flex items-center gap-3 p-4 rounded border border-white/5">
                        <MapPin className="w-4 h-4 text-[#C5A059]" />
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em]">
                            Postal
                          </div>
                          <div className="text-sm text-white">
                            P.O. Box 710485 · Santee, CA 92072
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
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
            USPTO S/N 99653409 · OPAS Authority OS™ S/N 99748939
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
