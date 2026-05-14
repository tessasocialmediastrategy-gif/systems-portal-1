import React, { useEffect, useState } from 'react';
import { LandingNav } from '../components/landing/LandingNav';
import { PriorityAccessModal } from '../components/landing/PriorityAccessModal';
import { Hero } from '../components/landing/Hero';
import { VideoShowcase } from '../components/landing/VideoShowcase';
import { TrustTeaser } from '../components/landing/TrustTeaser';
import { QuantumPillars } from '../components/landing/QuantumPillars';
import { LegacyToQuantum } from '../components/landing/LegacyToQuantum';
import { ServicesAndSolutions } from '../components/landing/ServicesAndSolutions';
import { PriorityCTA } from '../components/landing/PriorityCTA';
import { SiteFooter } from '../components/landing/SiteFooter';
import { useSEO } from '../hooks/useSEO';
import { track } from '../services/analytics';

const LandingPage = () => {
  const [showPriorityForm, setShowPriorityForm] = useState(false);

  useSEO({
    title: 'OnPoint Authority Systems™ | The Agentic Shift — 3-Layer Governance OS',
    description:
      "The world's first 3-Layer Governance OS for institutional finance. Sovereign AI infrastructure for BlackRock, JPMC, Blackstone. 5.4x efficiency multiplier. $40M+ annual savings.",
    ogImage:
      'https://customer-assets.emergentagent.com/job_eb56a9ad-5d2b-4e41-bfb5-9dcc69b55a37/artifacts/eblm5ag9_image.png',
    canonical: 'https://onpointauthoritysystems.com/'
  });

  useEffect(() => {
    track('landing_view');
  }, []);

  const openModal = () => {
    track('priority_access_open');
    setShowPriorityForm(true);
  };
  const closeModal = () => setShowPriorityForm(false);

  return (
    <div className="min-h-screen bg-[#030303] overflow-hidden">
      <PriorityAccessModal open={showPriorityForm} onClose={closeModal} />
      <LandingNav onPriorityAccess={openModal} />
      <Hero onPriorityAccess={openModal} />
      <VideoShowcase />
      <TrustTeaser />
      <QuantumPillars />
      <ServicesAndSolutions />
      <LegacyToQuantum />
      <PriorityCTA onPriorityAccess={openModal} />
      <SiteFooter />

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
