import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';

const LeadershipPage = () => {
  const team = [
    {
      name: 'Tessa Shepard',
      role: 'Founder & CEO',
      bio: 'Creator of the OnPoint Authority framework. 20+ years building governance systems for scalable, transferable businesses.',
      linkedin: '#'
    },
  ];

  const advisors = [
    { name: 'Advisory Board Member', role: 'Strategic Advisor', specialty: 'M&A and Exit Planning' },
    { name: 'Advisory Board Member', role: 'Strategic Advisor', specialty: 'Governance & Compliance' },
    { name: 'Advisory Board Member', role: 'Strategic Advisor', specialty: 'Operations & Scale' },
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
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">INVESTOR</Link>
              
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">AUTHORITY REVIEW</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C5A059] text-sm tracking-widest mb-6">LEADERSHIP</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            The Team Behind<br />
            <span className="text-[#C5A059] italic">Authority</span>
          </h1>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-12" style={{ fontFamily: 'Libre Baskerville, serif' }}>Founder</h2>
          {team.map((member) => (
            <div key={member.name} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="aspect-square bg-[#111111] border border-[#262626] flex items-center justify-center">
                  <span className="text-6xl text-[#C5A059]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-light mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>{member.name}</h3>
                <p className="text-[#C5A059] mb-6">{member.role}</p>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">{member.bio}</p>
                <a href={member.linkedin} className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C5A059] transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-12" style={{ fontFamily: 'Libre Baskerville, serif' }}>Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, i) => (
              <div key={i} className="p-8 border border-[#262626] bg-[#111111]">
                <h3 className="text-xl font-light mb-2">{advisor.name}</h3>
                <p className="text-[#C5A059] text-sm mb-4">{advisor.role}</p>
                <p className="text-gray-500 text-sm">{advisor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>Work with us</h2>
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
            <Link to="/about" className="text-sm text-gray-500 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeadershipPage;
