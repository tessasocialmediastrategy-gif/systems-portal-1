import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Zap, Lock, Award, Globe, TrendingUp, Brain, Network, Key, Building2, ChevronRight, Fingerprint, Play, X } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const LandingPage = () => {
  const [showPriorityForm, setShowPriorityForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    company: '',
    phone: '',
    institution_type: '',
    annual_revenue: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Send to existing authority-review API
      await fetch(`${API_URL}/api/authority-review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'GOLD_Campaign_Priority_Access',
          tier_interest: 'priority-access',
          current_challenges: 'enterprise-inquiry'
        })
      });
      
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const quantumPillars = [
    {
      icon: Key,
      title: 'Sovereign Identity Layer',
      description: 'Non-custodial ZKP verification eliminating IdP dependencies',
      metric: '100%',
      metricLabel: 'Golden Ticket Elimination'
    },
    {
      icon: Brain,
      title: 'Agentic Governance',
      description: 'AI brain safeguards with State 0 cryptographic security',
      metric: '5.4x',
      metricLabel: 'Efficiency Multiplier'
    },
    {
      icon: Network,
      title: 'Quantum Bridge',
      description: 'Cross-institutional settlement via JPMC Onyx integration',
      metric: '$40M+',
      metricLabel: 'Annual Savings'
    }
  ];

  const legacyToQuantum = [
    { legacy: 'Centralized IdP', quantum: 'Non-Custodial ZKP', improvement: 'Zero Trust Native' },
    { legacy: 'Manual Compliance', quantum: 'Autonomous Governance', improvement: '5.4x Efficiency' },
    { legacy: 'Siloed Settlement', quantum: 'Onyx Bridge', improvement: 'Real-time Inter-bank' },
    { legacy: 'Reactive Security', quantum: 'State 0 Protocol', improvement: 'Predictive Defense' },
    { legacy: 'Legacy Infrastructure', quantum: 'Quantum-Ready Stack', improvement: 'Future-Proof' }
  ];

  return (
    <div className="min-h-screen bg-[#030303] overflow-hidden">
      {/* Priority Access Modal */}
      {showPriorityForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#0a0a0a] border border-[#C5A059]/30 rounded-lg p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowPriorityForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Priority Access Confirmed
                </h3>
                <p className="text-gray-400 mb-4">
                  Your Agent Identity Signature has been registered. A member of our strategic team will contact you within 24 hours.
                </p>
                <div className="bg-[#C5A059]/10 border border-[#C5A059]/20 rounded p-4">
                  <p className="text-[#C5A059] text-sm">
                    Reference: AIS-{Date.now().toString(36).toUpperCase()}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full mb-4">
                    <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
                    <span className="text-[#C5A059] text-xs font-semibold tracking-wider">PRIORITY ACCESS</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    Agent Identity Signature
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Reserved for institutional decision-makers
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Title *</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                        placeholder="CTO, CISO, etc."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                      placeholder="you@institution.com"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Institution *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                        placeholder="Institution name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Institution Type *</label>
                    <select
                      name="institution_type"
                      value={formData.institution_type}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                    >
                      <option value="">Select type</option>
                      <option value="gsib">G-SIB (Global Systemically Important Bank)</option>
                      <option value="asset-manager">Asset Manager ($100B+ AUM)</option>
                      <option value="pe-firm">Private Equity / Alternative Assets</option>
                      <option value="sovereign-wealth">Sovereign Wealth Fund</option>
                      <option value="tier1-bank">Tier-1 Regional Bank</option>
                      <option value="other-institutional">Other Institutional</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] font-semibold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    {loading ? 'Registering...' : 'Register Priority Access'}
                    <Fingerprint className="w-4 h-4" />
                  </button>
                  
                  <p className="text-[10px] text-gray-600 text-center">
                    Protected under institutional NDA. SOC-2 compliant data handling.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/95 backdrop-blur-lg border-b border-gray-900">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-semibold text-white tracking-tight">OnPoint Authority Systems, Inc.</span>
              <span className="text-[#C5A059] text-[10px]">™</span>
            </Link>
            <div className="flex items-center gap-6">
              <span className="text-[10px] text-gray-600 hidden md:block">OPAS Authority OS™</span>
              <a href="#quantum" className="text-sm text-gray-500 hover:text-white transition-colors">
                The Agentic Shift
              </a>
              <Link to="/heritage" className="text-sm text-gray-500 hover:text-white transition-colors" data-testid="nav-heritage">
                Our Path
              </Link>
              <button 
                onClick={() => setShowPriorityForm(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] text-sm font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Priority Access
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Campaign Visual Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Campaign Hero Background Image */}
        <div className="absolute inset-0">
          {/* Desktop Hero Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: `url('/assets/campaign/gold-desktop-hero.png')`
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/70 via-[#030303]/50 to-[#030303]" />
          
          {/* Animated Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(197,160,89,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
          
          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#00ff88]/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88]/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="container-custom relative z-10 pt-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Campaign Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-[#C5A059]/20 to-[#C5A059]/5 border border-[#C5A059]/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
              <span className="text-[#C5A059] text-sm font-semibold tracking-wider">THE AGENTIC SHIFT</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 text-sm">GOLD Campaign</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              The Future of Finance<br />
              <span className="bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] bg-clip-text text-transparent">Runs on Sovereign AI</span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Project Authority Zero delivers the world's first 3-Layer Governance OS for institutional finance. 
              <span className="text-white"> BlackRock. JPMC. Blackstone.</span> The agentic shift is here.
            </p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C5A059]">5.4x</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Efficiency Multiplier</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$40M+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">ZKP Verified</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowPriorityForm(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] font-bold rounded hover:opacity-90 transition-opacity text-lg"
              >
                Request Priority Access
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#quantum" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5" />
                View Quantum Framework
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <span className="text-xs uppercase tracking-wider">Trusted by</span>
              <span className="text-gray-500">|</span>
              <span className="text-sm">G-SIB Institutions</span>
              <span className="text-gray-500">|</span>
              <span className="text-sm">$2T+ AUM Partners</span>
              <span className="text-gray-500">|</span>
              <span className="text-sm">JPMC Onyx Network</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-[#C5A059] rotate-90" />
        </div>
      </section>

      {/* Trust Teaser → links to /heritage */}
      <section className="relative py-14 md:py-20 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 50%, rgba(197,160,89,0.4) 0%, transparent 35%), radial-gradient(circle at 85% 50%, rgba(0,255,136,0.15) 0%, transparent 40%)'
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                <p className="text-[10px] text-[#C5A059] font-semibold tracking-[0.3em] uppercase mb-3">
                  Architectural Integrity
                </p>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: 'Libre Baskerville, serif' }}
                >
                  Built on 35 Years of Architectural Integrity.
                </h3>
                <p className="text-gray-500 mt-3 text-sm md:text-base">
                  From the 1991 COBOL mainframe to the 2026 Authority OS — four eras, one
                  unbroken thread.
                </p>
              </div>
              <Link
                to="/heritage"
                className="group inline-flex items-center gap-3 px-6 py-4 border border-[#C5A059]/40 rounded hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all whitespace-nowrap"
                data-testid="trust-teaser-heritage-cta"
              >
                <span className="text-[#C5A059] text-sm font-semibold tracking-wide">
                  Read the Founder's Note
                </span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Pillars Section */}
      <section id="quantum" className="py-24 bg-[#050505]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              The 3-Layer Governance OS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Architectural Sovereignty for the Agentic Era
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Powered by OPAS Authority OS™ — the institutional standard for AI governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quantumPillars.map((pillar, i) => (
              <div 
                key={i}
                className="bg-[#030303] border border-gray-800 rounded-lg p-8 hover:border-[#C5A059]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#C5A059]/20 to-[#C5A059]/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7 text-[#C5A059]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {pillar.description}
                </p>
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-2xl font-bold text-[#C5A059]">{pillar.metric}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider">{pillar.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy-to-Quantum Transition Map */}
      <section className="py-24 bg-[#030303]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium">5.4x Multiplier Validated</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Legacy-to-Quantum Transition Map
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The definitive modernization pathway for institutional finance infrastructure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#050505] border border-gray-800 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-[#0a0a0a] border-b border-gray-800">
                <div className="text-xs text-gray-500 uppercase tracking-wider">Legacy State</div>
                <div className="text-xs text-[#C5A059] uppercase tracking-wider text-center">Quantum State</div>
                <div className="text-xs text-green-500 uppercase tracking-wider text-right">Improvement</div>
              </div>
              
              {/* Rows */}
              {legacyToQuantum.map((row, i) => (
                <div 
                  key={i}
                  className="grid grid-cols-3 gap-4 p-4 border-b border-gray-800/50 hover:bg-[#0a0a0a] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/50" />
                    <span className="text-gray-400 text-sm">{row.legacy}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                    <span className="text-white text-sm font-medium">{row.quantum}</span>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-400 text-sm">{row.improvement}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Wiz AI Security Badge */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#050505] border border-gray-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-400">Wiz AI Security Audit</span>
                </div>
                <span className="text-gray-700">|</span>
                <span className="text-green-400 text-sm font-medium">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#050505] to-[#030303]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
              <span className="text-[#C5A059] text-sm font-semibold">Limited Availability</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Ready for the Agentic Shift?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Priority Access is reserved for institutional decision-makers committed to architectural sovereignty.
            </p>
            
            <button 
              onClick={() => setShowPriorityForm(true)}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] text-lg font-bold rounded hover:opacity-90 transition-opacity"
            >
              Request Priority Access
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <p className="text-gray-600 text-sm mt-6">
              BlackRock • JPMC • Blackstone • Tier-1 Institutions
            </p>
          </div>
        </div>
      </section>

      {/* Footer with Compliance Badges */}
      <footer className="py-12 bg-[#030303] border-t border-gray-900">
        <div className="container-custom">
          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 pb-8 border-b border-gray-900">
            {/* SOC-2 Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#050505] border border-gray-800 rounded">
              <Shield className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-white text-xs font-semibold">SOC 2</div>
                <div className="text-[10px] text-gray-600">Type II Certified</div>
              </div>
            </div>
            
            {/* SSL Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#050505] border border-gray-800 rounded">
              <Lock className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-white text-xs font-semibold">SSL/TLS</div>
                <div className="text-[10px] text-gray-600">256-bit Encryption</div>
              </div>
            </div>
            
            {/* Wiz AI Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#050505] border border-gray-800 rounded">
              <Award className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-white text-xs font-semibold">Wiz AI</div>
                <div className="text-[10px] text-gray-600">Security Verified</div>
              </div>
            </div>
            
            {/* ZKP Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#050505] border border-gray-800 rounded">
              <Fingerprint className="w-5 h-5 text-[#C5A059]" />
              <div>
                <div className="text-white text-xs font-semibold">ZKP</div>
                <div className="text-[10px] text-gray-600">Non-Custodial</div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-semibold">OnPoint Authority Systems, Inc.</span>
                <span className="text-[#C5A059] text-[10px]">™</span>
              </div>
              <p className="text-xs text-gray-600">
                USPTO S/N 99653409 • OPAS Authority OS™ S/N 99748939
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Global Operations: Charlotte | New York | London
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/authority-review" className="text-sm text-gray-500 hover:text-white transition-colors">
                Strategic Valuation
              </Link>
              <Link to="/admin/login" className="text-sm text-gray-500 hover:text-white transition-colors">
                Admin
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-900 text-center">
            <p className="text-[10px] text-gray-700">
              © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved. Protected under US trademark law.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animation Keyframes */}
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
