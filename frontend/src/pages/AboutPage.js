import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Shield, Award, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    { icon: Target, title: 'Precision', description: 'Every system built with exact specifications and measurable outcomes' },
    { icon: Shield, title: 'Durability', description: 'Infrastructure designed to outlast any individual operator' },
    { icon: Award, title: 'Standards', description: 'Uncompromising commitment to governance excellence' },
    { icon: Users, title: 'Transfer', description: 'Built from day one to be licensable and transferable' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>ONPOINT.</Link>
            <div className="flex items-center gap-8">
              <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">MAIN SITE</a>
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BUYER</Link>
              
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">AUTHORITY REVIEW</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">ABOUT ONPOINT</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Authority Is<br />
            <span className="text-[#C5A059] italic">Engineered</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            OnPoint Authority Systems builds governance infrastructure for businesses that need to scale 
            without founder dependency, license without dilution, and exit without drama.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We believe authority should be infrastructure, not personality. Our systems transform 
                founder-dependent businesses into institutions that can be operated, licensed, and 
                transferred by anyone qualified.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every document, process, and standard we create is designed to survive due diligence, 
                enable clean transfers, and maintain value beyond any individual's involvement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 border border-[#262626] bg-[#111111]">
                  <value.icon className="w-8 h-8 text-[#C5A059] mb-4" />
                  <h3 className="text-lg font-light mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>Ready to build authority?</h2>
          <Link to="/authority-review" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">
            Request Authority Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} OnPoint Authority Systems, Inc.</span>
          <div className="flex items-center gap-6">
            <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">tessaauthority.com</a>
            <Link to="/systems-book" className="text-sm text-gray-500 hover:text-white transition-colors">Systems Book</Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
