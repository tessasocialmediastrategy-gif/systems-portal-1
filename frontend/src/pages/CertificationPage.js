import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, BookOpen, Users, Shield } from 'lucide-react';

const CertificationPage = () => {
  const certificationLevels = [
    {
      level: 'Foundation',
      title: 'Authority Foundations',
      description: 'Core principles of authority design and governance infrastructure',
      duration: '4 weeks',
      modules: ['Authority OS Overview', 'Governance Principles', 'Documentation Standards', 'Registry Management'],
      color: 'bg-gray-700'
    },
    {
      level: 'Practitioner',
      title: 'Authority Practitioner',
      description: 'Implementation and operation of authority systems within organizations',
      duration: '8 weeks',
      modules: ['System Implementation', 'Change Control', 'Audit Procedures', 'Team Training'],
      color: 'bg-[#C5A059]/80'
    },
    {
      level: 'Expert',
      title: 'Certified Authority Operator',
      description: 'Full certification for operating and transferring authority systems',
      duration: '12 weeks',
      modules: ['Advanced Governance', 'M&A Readiness', 'Licensing Framework', 'Exit Preparation'],
      color: 'bg-[#C5A059]'
    },
  ];

  const benefits = [
    { icon: Shield, title: 'Credibility', description: 'Recognized standard in authority design' },
    { icon: Users, title: 'Network', description: 'Access to certified operator community' },
    { icon: BookOpen, title: 'Resources', description: 'Full Systems Book and toolkit access' },
    { icon: Award, title: 'License', description: 'Authority to implement and transfer systems' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              ONPOINT.
            </Link>
            <div className="flex items-center gap-8">
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/systems-book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BOOK</Link>
              <Link to="/governance" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">GOVERNANCE</Link>
              <Link to="/certification" className="text-sm tracking-wider text-[#C5A059] border-b border-[#C5A059]">CERTIFICATION</Link>
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">
                AUTHORITY REVIEW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C5A059] text-sm tracking-widest mb-6">OPERATOR CERTIFICATION</p>
              <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                The Certification<br />
                <span className="text-[#C5A059] italic">Gap</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Structured progression through doctrine that determines license eligibility. 
                Become a Certified Authority Operator and gain the credentials to implement, 
                operate, and transfer authority systems.
              </p>
              <Link 
                to="/authority-review"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors"
                data-testid="cta-start-certification"
              >
                Start Certification <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_167f0f2f-e4d4-4518-8cd8-ec0b74232bce/artifacts/g2m36blt_Certification%20Seal.png"
                alt="OnPoint Authority Certification"
                className="max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-12 text-center" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Certification Pathway
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationLevels.map((cert, index) => (
              <div 
                key={cert.level}
                className="relative p-8 border border-[#262626] bg-[#111111]"
                data-testid={`cert-level-${cert.level.toLowerCase()}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${cert.color}`} />
                <span className="text-xs text-gray-500 tracking-wider">LEVEL {index + 1}</span>
                <h3 className="text-xl font-light mt-2 mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {cert.title}
                </h3>
                <p className="text-[#C5A059] text-sm mb-4">{cert.duration}</p>
                <p className="text-gray-400 text-sm mb-6">{cert.description}</p>
                <ul className="space-y-2">
                  {cert.modules.map((module, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-12 text-center" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Certification Benefits
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <benefit.icon className="w-10 h-10 text-[#C5A059] mx-auto mb-4" />
                <h3 className="text-lg font-light mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Ready to become certified?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start with an Authority Review to assess your current state and determine the best certification path for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/authority-review"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors"
            >
              Request Authority Review <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/systems-book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C5A059] text-[#C5A059] text-sm tracking-wider hover:bg-[#C5A059]/10 transition-colors"
            >
              View Systems Book <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} OnPoint Authority Systems, Inc.</span>
          <div className="flex items-center gap-6">
            <Link to="/systems-book" className="text-sm text-gray-500 hover:text-white transition-colors">Systems Book</Link>
            <Link to="/sync-map" className="text-sm text-gray-500 hover:text-white transition-colors">Sync Map</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CertificationPage;
