import React, { useState } from 'react';
import { LandingNav } from '../components/landing/LandingNav';
import { PriorityAccessModal } from '../components/landing/PriorityAccessModal';
import { Hero } from '../components/landing/Hero';
import { VideoShowcase } from '../components/landing/VideoShowcase';
import { TrustTeaser } from '../components/landing/TrustTeaser';
import { QuantumPillars } from '../components/landing/QuantumPillars';
import { LegacyToQuantum } from '../components/landing/LegacyToQuantum';
import { PriorityCTA } from '../components/landing/PriorityCTA';
import { SiteFooter } from '../components/landing/SiteFooter';

const LandingPage = () => {
  const [showPriorityForm, setShowPriorityForm] = useState(false);
  const openModal = () => setShowPriorityForm(true);
  const closeModal = () => setShowPriorityForm(false);

  return (
    <div className="min-h-screen bg-[#030303] overflow-hidden">
      <PriorityAccessModal open={showPriorityForm} onClose={closeModal} />
      <LandingNav onPriorityAccess={openModal} />
      <Hero onPriorityAccess={openModal} />
      <VideoShowcase />
      <TrustTeaser />
      <QuantumPillars />
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
