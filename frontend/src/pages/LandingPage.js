import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Shield, ArrowRight, Lock, CheckCircle, Layers, Brain, Globe, Key, Fingerprint, Network, Building2, ChevronRight, X } from 'lucide-react';
import api from '../services/api';

const LandingPage = () => {
  const [publicDocs, setPublicDocs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showPortalModal, setShowPortalModal] = useState(false);

  React.useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await api.getPublicDocuments();
        setPublicDocs(response.data);
      } catch (error) {
        console.error('Error fetching public docs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getCategoryLabel = (category) => {
    const labels = {
      teaser: 'Investment Teaser',
      cim_times: 'CIM (Times)',
      cim_modern: 'CIM (Modern)',
      buyer_deck: 'Buyer Deck',
      appendix: 'Appendix Pack',
      data_room: 'Data Room'
    };
    return labels[category] || category;
  };

  const governanceLayers = [
    {
      layer: '01',
      title: 'The Sovereign Perimeter',
      subtitle: 'Non-Custodial Identity Architecture',
      icon: Key,
      focus: 'Non-custodial identity. Eliminating IdP dependency.',
      feature: 'Zero-Knowledge Proof (ZKP) verification to remove "Golden Ticket" vulnerabilities.',
      color: 'from-amber-500/20 to-amber-600/5'
    },
    {
      layer: '02',
      title: 'Agentic Governance',
      subtitle: 'AI "Brain" Safeguards',
      icon: Brain,
      focus: 'AI "Brain" Safeguards for institutional agents.',
      feature: 'Integrating cryptographic guardrails into bank-native AI agents (e.g., Ally\'s Jules) to achieve "State 0" security.',
      color: 'from-blue-500/20 to-blue-600/5'
    },
    {
      layer: '03',
      title: 'Institutional Liquidity Bridge',
      subtitle: 'Cross-Institutional Decentralization',
      icon: Network,
      focus: 'Cross-institutional decentralization.',
      feature: 'ZKP-verified settlement gateways for JPMC Onyx and institutional blockchains.',
      color: 'from-emerald-500/20 to-emerald-600/5'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      {/* ZKP Portal Modal */}
      {showPortalModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowPortalModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Institutional Portal
              </h3>
              <p className="text-sm text-gray-500">Layer 1 Authentication Required</p>
            </div>

            <div className="bg-[#0f1419] border border-[#C5A059]/20 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Key className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-medium">Non-Custodial ZKP Access Only</span>
              </div>
              <p className="text-xs text-gray-400">
                This portal requires Zero-Knowledge Proof verification through your institution's sovereign identity provider. No centralized credentials are stored or transmitted.
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full py-3 bg-[#C5A059] text-[#030303] font-semibold rounded hover:bg-[#d4af6a] transition-colors flex items-center justify-center gap-2">
                <Fingerprint className="w-5 h-5" />
                Verify with ZKP
              </button>
              <button 
                onClick={() => setShowPortalModal(false)}
                className="w-full py-3 bg-white/5 text-white border border-white/10 rounded hover:bg-white/10 transition-colors"
              >
                Request Institutional Access
              </button>
            </div>

            <p className="text-xs text-gray-600 text-center mt-4">
              Contact your institution's governance administrator for access provisioning.
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/95 backdrop-blur-lg border-b border-gray-900">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
              <span className="font-semibold text-white tracking-tight">OnPoint Authority Systems</span>
            </Link>
            <div className="flex items-center gap-6">
              <a href="#governance" className="text-sm text-gray-500 hover:text-white transition-colors">
                Governance Model
              </a>
              <a href="#pricing" className="text-sm text-gray-500 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#thesis" className="text-sm text-gray-500 hover:text-white transition-colors">
                Strategic Thesis
              </a>
              <button 
                onClick={() => setShowPortalModal(true)}
                className="px-4 py-2 bg-[#C5A059] text-[#030303] text-sm font-medium rounded hover:bg-[#d4af6a] transition-colors"
                data-testid="nav-portal"
              >
                Institutional Portal
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-full">
                <Shield className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-medium tracking-wide">Project Authority Zero</span>
              </div>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 leading-tight" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              We don't just secure the bank;<br />
              <span className="text-[#C5A059]">we define the rules by which the bank's AI is allowed to think.</span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mx-auto mb-10 leading-relaxed">
              The world's first 3-Layer Governance OS for Institutional Finance.<br />
              <span className="text-gray-500">Transition from defensive security to architectural sovereignty.</span>
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/authority-review" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#030303] font-semibold rounded hover:bg-[#d4af6a] transition-colors"
                data-testid="hero-primary-cta"
              >
                Request the 3-Layer Blueprint
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#thesis" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded hover:bg-white/10 transition-colors"
                data-testid="hero-secondary-cta"
              >
                View the JPMC/Onyx Strategic Thesis
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Layer Governance Model Section */}
      <section id="governance" className="py-24 bg-[#050505]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              The Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              The 3-Layer Governance Model
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A comprehensive framework for institutional sovereignty in the age of autonomous finance.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {governanceLayers.map((layer, i) => (
              <div 
                key={i}
                className={`bg-gradient-to-r ${layer.color} border border-gray-800 rounded-lg p-8 hover:border-[#C5A059]/30 transition-all`}
                data-testid={`governance-layer-${i}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#030303] rounded-lg flex items-center justify-center">
                      <layer.icon className="w-8 h-8 text-[#C5A059]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#C5A059] text-sm font-mono">LAYER {layer.layer}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                      {layer.title}
                    </h3>
                    <p className="text-[#C5A059]/80 text-sm mb-4">{layer.subtitle}</p>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-600 text-xs uppercase tracking-wider">Focus</span>
                        <p className="text-gray-400 text-sm">{layer.focus}</p>
                      </div>
                      <div>
                        <span className="text-gray-600 text-xs uppercase tracking-wider">Key Feature</span>
                        <p className="text-gray-300 text-sm">{layer.feature}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Tiers Section */}
      <section id="pricing" className="py-24 bg-[#030303]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Institutional Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Strategic Investment in Architectural Sovereignty
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We don't sell software; we provide the substrate for the future of finance.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {/* Tier I */}
            <div className="bg-[#050505] border border-gray-800 rounded-lg p-8 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-500 text-xs font-mono tracking-wider">TIER I</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Sovereign Core
              </h3>
              <p className="text-gray-600 text-sm mb-6">Layer 1 Integration</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$2.5M</span>
                <span className="text-gray-500"> - $5M</span>
                <p className="text-gray-600 text-xs mt-1">Annual Investment</p>
              </div>
              
              <p className="text-gray-400 text-sm mb-6">
                Non-custodial identity substrate + ZKP wrapper for legacy systems.
              </p>
              
              <div className="pt-4 border-t border-gray-800">
                <p className="text-gray-600 text-xs uppercase tracking-wider mb-2">Ideal For</p>
                <p className="text-gray-400 text-sm">Regional Banks / Fintech Unicorns</p>
              </div>
            </div>

            {/* Tier II - Featured */}
            <div className="bg-gradient-to-b from-[#C5A059]/10 to-[#050505] border border-[#C5A059]/30 rounded-lg p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-[#C5A059] text-[#030303] text-xs font-semibold rounded-full">
                  Most Selected
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#C5A059] text-xs font-mono tracking-wider">TIER II</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Agentic Governor
              </h3>
              <p className="text-gray-600 text-sm mb-6">Layer 1 + 2 Integration</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$7.5M</span>
                <span className="text-gray-500"> - $12M</span>
                <p className="text-gray-600 text-xs mt-1">Annual Investment</p>
              </div>
              
              <p className="text-gray-400 text-sm mb-6">
                Full AI "Brain" governance (The Jules Protocol) + State 0 security.
              </p>
              
              <div className="pt-4 border-t border-[#C5A059]/20">
                <p className="text-gray-600 text-xs uppercase tracking-wider mb-2">Ideal For</p>
                <p className="text-gray-400 text-sm">Tier-1 Institutions (Ally, Capital One)</p>
              </div>
            </div>

            {/* Tier III */}
            <div className="bg-[#050505] border border-gray-800 rounded-lg p-8 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-emerald-500 text-xs font-mono tracking-wider">TIER III</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Global Liquidity
              </h3>
              <p className="text-gray-600 text-sm mb-6">Layer 1, 2, & 3 Integration</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$20M</span>
                <span className="text-gray-500">+</span>
                <p className="text-gray-600 text-xs mt-1">Annual Investment</p>
              </div>
              
              <p className="text-gray-400 text-sm mb-6">
                Full Cross-Bank Bridge + Onyx/Institutional Ledger Handshakes.
              </p>
              
              <div className="pt-4 border-t border-gray-800">
                <p className="text-gray-600 text-xs uppercase tracking-wider mb-2">Ideal For</p>
                <p className="text-gray-400 text-sm">Global Systemically Important Banks (JPMC)</p>
              </div>
            </div>
          </div>

          {/* Service Breakdown */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-white mb-6 text-center" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              The Strategic Breakdown
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#050505] border border-gray-800 rounded p-5">
                <p className="text-[#C5A059] text-xs uppercase tracking-wider mb-2">Implementation Fee</p>
                <p className="text-white font-semibold mb-2">$500K - $1M</p>
                <p className="text-gray-500 text-xs">One-time architectural setup fee for custom "Brain" alignment.</p>
              </div>
              
              <div className="bg-[#050505] border border-gray-800 rounded p-5">
                <p className="text-[#C5A059] text-xs uppercase tracking-wider mb-2">Performance Incentive</p>
                <p className="text-white font-semibold mb-2">0.001% Fee</p>
                <p className="text-gray-500 text-xs">Layer 3 "Liquidity Integrity Fee" on all inter-bank settlements processed through the bridge.</p>
              </div>
              
              <div className="bg-[#050505] border border-gray-800 rounded p-5">
                <p className="text-[#C5A059] text-xs uppercase tracking-wider mb-2">Liability Offset</p>
                <p className="text-white font-semibold mb-2">$15M - $40M Saved</p>
                <p className="text-gray-500 text-xs">Average annual savings in cybersecurity insurance and compliance overhead.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link 
                to="/authority-review" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#030303] font-semibold rounded hover:bg-[#d4af6a] transition-colors"
                data-testid="pricing-cta"
              >
                Request a Strategic Valuation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-gray-600 text-xs mt-4">
                The price reflects the risk we neutralize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Statement Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-[#C5A059] text-6xl" style={{ fontFamily: 'Libre Baskerville, serif' }}>"</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              In the old world, the elite owned the vaults. In the new world, the elite own the rules of engagement. Project Authority Zero isn't a vendor; it's the standard for how the world's largest banks interact with the future.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center">
                <span className="text-[#C5A059] font-semibold">T</span>
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Tessa</p>
                <p className="text-gray-600 text-sm">CEO, OnPoint Authority Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Thesis Section */}
      <section id="thesis" className="py-24 bg-[#050505]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Strategic Positioning
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              JPMC/Onyx Strategic Thesis
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The convergence of institutional finance and decentralized infrastructure creates unprecedented governance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: 'Institutional Integration',
                desc: 'Native compatibility with JPMC Onyx, institutional blockchains, and regulated DeFi protocols.'
              },
              {
                icon: Fingerprint,
                title: 'ZKP Verification',
                desc: 'Zero-knowledge proof architecture for identity verification without centralized credential exposure.'
              },
              {
                icon: Layers,
                title: 'Sovereign Architecture',
                desc: 'Complete elimination of third-party identity provider dependencies and golden ticket vulnerabilities.'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-[#030303] border border-gray-800 rounded-lg p-6 hover:border-[#C5A059]/20 transition-colors"
              >
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Documents Section */}
      {publicDocs.length > 0 && (
        <section id="documents" className="py-24 bg-[#030303]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
                Documentation
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Public Investment Materials
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Review our strategic documentation and investment thesis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {publicDocs.map((doc, index) => (
                <div 
                  key={doc.id || index}
                  className="bg-[#050505] border border-gray-800 rounded-lg p-6 hover:border-[#C5A059]/20 transition-all group"
                  data-testid={`document-card-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-[#C5A059]/10 rounded flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#C5A059]" />
                    </div>
                    <span className="px-2 py-1 bg-white/5 text-gray-500 text-xs font-medium rounded">
                      {getCategoryLabel(doc.category)}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {doc.description || 'Strategic documentation for qualified institutions.'}
                  </p>
                  <a
                    href={doc.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C5A059] text-sm font-medium hover:underline"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#050505] border-t border-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Ready for Architectural Sovereignty?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Request your custom 3-Layer Blueprint and begin the transition from defensive security to institutional governance.
            </p>
            <Link 
              to="/authority-review" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#030303] text-lg font-semibold rounded hover:bg-[#d4af6a] transition-colors"
              data-testid="final-cta"
            >
              Request the 3-Layer Blueprint
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#030303] border-t border-gray-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-medium mb-1">OnPoint Authority Systems, Inc.</p>
              <p className="text-sm text-gray-600">
                Global Operations: Charlotte | New York | London
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setShowPortalModal(true)}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Institutional Portal
              </button>
              <Link to="/admin/login" className="text-sm text-gray-500 hover:text-white transition-colors">
                Admin
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-900 text-center">
            <p className="text-xs text-gray-700">
              © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
