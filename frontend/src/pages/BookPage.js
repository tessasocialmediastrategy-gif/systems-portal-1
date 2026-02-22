import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, Shield, FileCheck } from 'lucide-react';

const BookPage = () => {
  const chapters = [
    {
      image: '/assets/chapter-1-institutional-authority.png',
      title: 'Institutional Authority',
      subtitle: 'Authority design'
    },
    {
      image: '/assets/chapter-2-certification-gap.png',
      title: 'The Certification Gap',
      subtitle: 'Operator certification'
    },
    {
      image: '/assets/chapter-3-enforce-or-erode.png',
      title: 'Enforce or Erode',
      subtitle: 'Enforcement mechanics'
    },
    {
      image: '/assets/chapter-4-governance-beyond.png',
      title: 'Governance Beyond Founders',
      subtitle: 'Post-founder governance'
    }
  ];

  const authorityPath = [
    { icon: BookOpen, title: 'Book', desc: 'Intellectual foundation', sub: 'Public authority artifact', link: '/book', active: true },
    { icon: Award, title: 'Course', desc: 'Structured methodology', sub: 'Guided system comprehension', link: '/certification' },
    { icon: Shield, title: 'Certification', desc: 'Competency validation', sub: 'Enforcement readiness', link: '/certification' },
    { icon: FileCheck, title: 'License', desc: 'Contractual authority', sub: 'Audit + revocation rights', link: '/certification' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl tracking-widest font-light">ONPOINT.</Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Main Site</Link>
            <Link to="/systems" className="text-sm text-gray-400 hover:text-white transition-colors">Systems</Link>
            <Link to="/book" className="text-sm text-[#C5A059]">Book</Link>
            <Link to="/investor/data-room" className="text-sm text-gray-400 hover:text-white transition-colors">Investor</Link>
            <Link 
              to="/authority-review"
              className="px-4 py-2 border border-[#C5A059] text-[#C5A059] text-sm hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-colors"
            >
              Authority Review
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/assets/book-cover.png"
                alt="The Authority Operating Manual"
                className="max-w-xs w-full"
              />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                The Authority<br />Operating Manual
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                The institutional methodology behind businesses that scale without founders, 
                license without dilution, and transfer without disruption.
              </p>
              <Link 
                to="/authority-review"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors"
              >
                Request access to the system <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What This Book Is */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            What This Book Is
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            This book is not thought leadership.
          </p>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            It is not motivation, strategy, or opinion.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            It documents the operating logic behind OnPoint Authority Systems—a governed, 
            enforceable authority framework designed to replace founder dependency with 
            systems, certification, and licensing.
          </p>
        </div>
      </section>

      {/* What This Book Replaces */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            What This Book Replaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-[#C5A059] text-lg">Founder discretion</p>
            </div>
            <div className="text-center">
              <p className="text-[#C5A059] text-lg">Informal leadership</p>
            </div>
            <div className="text-center">
              <p className="text-[#C5A059] text-lg">Unenforced standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Depth - Chapter Images */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-center" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            System Depth
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Each section represents a non-negotiable layer of the authority stack.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {chapters.map((chapter, index) => (
              <div key={index} className="text-center">
                <img 
                  src={chapter.image}
                  alt={chapter.title}
                  className="w-full max-w-[200px] mx-auto mb-4"
                />
                <p className="text-gray-400 text-sm tracking-wider">{chapter.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Who This Is For
          </h2>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
              Operators building transferable businesses
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
              Investors evaluating founder risk
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
              Boards requiring governance continuity
            </li>
          </ul>
        </div>
      </section>

      {/* What This Leads To */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            What This Leads To
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            This book is the entry point to certification, licensing, and governed authority.
          </p>
          <Link 
            to="/certification"
            className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider hover:gap-3 transition-all"
          >
            View the Authority Path <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* The Authority Path */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            The Authority Path
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {authorityPath.map((step, index) => (
              <Link 
                key={index}
                to={step.link}
                className={`p-6 border transition-colors ${
                  step.active 
                    ? 'border-[#C5A059] bg-[#C5A059]/10' 
                    : 'border-[#1a1a1a] hover:border-[#C5A059]/50'
                }`}
              >
                <step.icon className={`w-8 h-8 mb-4 ${step.active ? 'text-[#C5A059]' : 'text-gray-500'}`} />
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{step.desc}</p>
                <p className="text-gray-500 text-xs">{step.sub}</p>
              </Link>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-12 text-sm">
            This book is the beginning of the authority system—not the product itself.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} OnPoint Authority Systems, Inc.
          </span>
          <div className="flex items-center gap-6">
            <Link to="/systems" className="text-sm text-gray-500 hover:text-white transition-colors">
              Systems
            </Link>
            <Link to="/read-book" className="text-sm text-gray-500 hover:text-white transition-colors">
              Read Online
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookPage;
