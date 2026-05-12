import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Send, Building2, User, Mail, Phone, MessageSquare, DollarSign, Layers, Target, Shield, Brain, Network, Key } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AuthorityReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    company: '',
    phone: '',
    institution_type: '',
    annual_revenue: '',
    tier_interest: '',
    current_challenges: '',
    timeline: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/api/authority-review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.detail || 'Failed to submit request');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tiers = [
    {
      id: 'sovereign-core',
      name: 'Tier I: Sovereign Core',
      price: '$2.5M - $5M',
      description: 'Layer 1 Integration - Non-custodial identity substrate',
      icon: Key
    },
    {
      id: 'agentic-governor',
      name: 'Tier II: Agentic Governor',
      price: '$7.5M - $12M',
      description: 'Layer 1 + 2 - Full AI governance + State 0 security',
      icon: Brain
    },
    {
      id: 'global-liquidity',
      name: 'Tier III: Global Liquidity',
      price: '$20M+',
      description: 'Layer 1, 2, & 3 - Full Cross-Bank Bridge',
      icon: Network
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#030303]">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/95 backdrop-blur-lg border-b border-gray-900">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-3">
                <span className="font-semibold text-white tracking-tight">OnPoint Authority Systems</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Success State */}
        <section className="pt-32 pb-24">
          <div className="container-custom">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Valuation Request Received
              </h1>
              <p className="text-gray-400 mb-8">
                Thank you for your interest in architectural sovereignty. A member of our strategic team will contact you within 48 hours to schedule your valuation consultation.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#030303] font-semibold rounded hover:bg-[#d4af6a] transition-colors"
              >
                Return to Home <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/95 backdrop-blur-lg border-b border-gray-900">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <span className="font-semibold text-white tracking-tight">OnPoint Authority Systems</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Strategic Valuation
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Request Your 3-Layer Blueprint
            </h1>
            <p className="text-gray-400">
              Complete the form below for a customized assessment of your institution's governance infrastructure requirements and investment pathway.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-[#050505] border border-gray-800 rounded-lg p-8" data-testid="strategic-valuation-form">
              
              {/* Contact Information */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  <User className="w-5 h-5 text-[#C5A059]" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      placeholder="Your name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Title / Role *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      placeholder="e.g., CTO, CISO, VP Engineering"
                      data-testid="input-title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      placeholder="you@institution.com"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
              </div>

              {/* Institution Information */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  <Building2 className="w-5 h-5 text-[#C5A059]" />
                  Institution Profile
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Institution Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      placeholder="Institution name"
                      data-testid="input-company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Institution Type *</label>
                    <select
                      name="institution_type"
                      value={formData.institution_type}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      data-testid="select-institution-type"
                    >
                      <option value="">Select institution type</option>
                      <option value="gsib">Global Systemically Important Bank (G-SIB)</option>
                      <option value="regional-bank">Regional Bank</option>
                      <option value="credit-union">Credit Union</option>
                      <option value="fintech">Fintech / Neobank</option>
                      <option value="asset-manager">Asset Manager / Hedge Fund</option>
                      <option value="insurance">Insurance / Reinsurance</option>
                      <option value="broker-dealer">Broker-Dealer</option>
                      <option value="payments">Payments / Processing</option>
                      <option value="other">Other Financial Institution</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Annual Revenue Range *</label>
                    <select
                      name="annual_revenue"
                      value={formData.annual_revenue}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      data-testid="select-revenue"
                    >
                      <option value="">Select annual revenue range</option>
                      <option value="under-100m">Under $100M</option>
                      <option value="100m-500m">$100M - $500M</option>
                      <option value="500m-1b">$500M - $1B</option>
                      <option value="1b-5b">$1B - $5B</option>
                      <option value="5b-20b">$5B - $20B</option>
                      <option value="20b-100b">$20B - $100B</option>
                      <option value="100b-plus">$100B+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Tier Selection */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  <Layers className="w-5 h-5 text-[#C5A059]" />
                  Tier of Interest
                </h3>
                
                <div className="space-y-3">
                  {tiers.map((tier) => (
                    <label 
                      key={tier.id}
                      className={`flex items-start gap-4 p-4 border rounded cursor-pointer transition-all ${
                        formData.tier_interest === tier.id 
                          ? 'bg-[#C5A059]/10 border-[#C5A059]/50' 
                          : 'bg-[#030303] border-gray-800 hover:border-gray-700'
                      }`}
                      data-testid={`tier-option-${tier.id}`}
                    >
                      <input
                        type="radio"
                        name="tier_interest"
                        value={tier.id}
                        checked={formData.tier_interest === tier.id}
                        onChange={handleChange}
                        className="mt-1 accent-[#C5A059]"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <tier.icon className={`w-5 h-5 ${formData.tier_interest === tier.id ? 'text-[#C5A059]' : 'text-gray-500'}`} />
                          <span className="text-white font-medium">{tier.name}</span>
                          <span className="text-[#C5A059] text-sm">{tier.price}</span>
                        </div>
                        <p className="text-gray-500 text-sm">{tier.description}</p>
                      </div>
                    </label>
                  ))}
                  <label 
                    className={`flex items-start gap-4 p-4 border rounded cursor-pointer transition-all ${
                      formData.tier_interest === 'undecided' 
                        ? 'bg-[#C5A059]/10 border-[#C5A059]/50' 
                        : 'bg-[#030303] border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tier_interest"
                      value="undecided"
                      checked={formData.tier_interest === 'undecided'}
                      onChange={handleChange}
                      className="mt-1 accent-[#C5A059]"
                    />
                    <div>
                      <span className="text-white font-medium">Not sure yet - Need consultation</span>
                      <p className="text-gray-500 text-sm">Help me determine the right tier for my institution</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Strategic Context */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  <Target className="w-5 h-5 text-[#C5A059]" />
                  Strategic Context
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Current Governance Challenges *</label>
                    <select
                      name="current_challenges"
                      value={formData.current_challenges}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      data-testid="select-challenges"
                    >
                      <option value="">Select primary challenge</option>
                      <option value="idp-dependency">Identity Provider (IdP) Dependency / Golden Ticket Risk</option>
                      <option value="ai-governance">AI Agent Governance / LLM Security</option>
                      <option value="cross-institution">Cross-Institution Settlement / Interoperability</option>
                      <option value="compliance">Regulatory Compliance Overhead</option>
                      <option value="insurance-costs">Cybersecurity Insurance Costs</option>
                      <option value="legacy-modernization">Legacy System Modernization</option>
                      <option value="zero-trust">Zero Trust Architecture Implementation</option>
                      <option value="multiple">Multiple Challenges - Need Assessment</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Implementation Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors"
                      data-testid="select-timeline"
                    >
                      <option value="">Select desired timeline</option>
                      <option value="immediate">Immediate (within 30 days)</option>
                      <option value="q1">This Quarter (Q1)</option>
                      <option value="h1">First Half of Year (H1)</option>
                      <option value="annual">Within 12 Months</option>
                      <option value="exploratory">Exploratory / No Fixed Timeline</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Additional Context</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-[#030303] border border-gray-800 rounded px-4 py-3 text-white focus:border-[#C5A059] focus:outline-none transition-colors resize-none"
                      placeholder="Share any additional context about your institution's current state, specific requirements, or questions for our team..."
                      data-testid="input-message"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-gray-800">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#C5A059] text-[#030303] font-semibold rounded hover:bg-[#d4af6a] transition-colors flex items-center justify-center gap-2"
                  data-testid="submit-valuation"
                >
                  {loading ? 'Submitting...' : 'Request Strategic Valuation'}
                  <Send className="w-5 h-5" />
                </button>

                {error && (
                  <p className="text-red-500 text-sm text-center mt-4">{error}</p>
                )}

                <p className="text-gray-600 text-xs text-center mt-4">
                  All information is treated with strict confidentiality under institutional NDA terms.
                </p>
              </div>
            </form>

            {/* Value Proposition Reminder */}
            <div className="mt-8 bg-[#050505] border border-[#C5A059]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C5A059]/10 rounded flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">The Liability Offset</h4>
                  <p className="text-sm text-gray-400">
                    Most institutions save an average of <span className="text-[#C5A059] font-semibold">$15M - $40M annually</span> in cybersecurity insurance premiums and compliance overhead by moving to a Non-Custodial substrate. Your strategic valuation will include a customized ROI analysis.
                  </p>
                </div>
              </div>
            </div>
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
            <p className="text-xs text-gray-700">
              © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthorityReviewPage;
