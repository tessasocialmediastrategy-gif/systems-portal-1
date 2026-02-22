import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Send, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AuthorityReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    company_size: '',
    interest: '',
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

  const reviewAreas = [
    'Governance Infrastructure Assessment',
    'Documentation & Registry Audit',
    'Process Standardization Review',
    'Transfer Readiness Evaluation',
    'Certification Pathway Recommendation',
    'Implementation Roadmap'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#C5A059]" />
          </div>
          <h1 className="text-3xl font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            Request Received
          </h1>
          <p className="text-gray-400 mb-8">
            Thank you for your interest in an Authority Review. Our team will contact you within 2 business days to schedule your assessment.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider hover:gap-3 transition-all"
          >
            Return to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

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
              <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">MAIN SITE</a>
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/systems-book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BOOK</Link>
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">INVESTOR</Link>
              
              <span className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider">AUTHORITY REVIEW</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <p className="text-[#C5A059] text-sm tracking-widest mb-6">GET STARTED</p>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Request an<br />
                <span className="text-[#C5A059] italic">Authority Review</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                An Authority Review is your first step toward building governance infrastructure 
                that operates without founder dependency. Our assessment covers:
              </p>
              <ul className="space-y-4 mb-12">
                {reviewAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
              <div className="p-6 border border-[#262626] bg-[#111111]">
                <p className="text-sm text-gray-400">
                  <span className="text-[#C5A059]">What to expect:</span> A 60-minute discovery call 
                  followed by a written assessment with recommendations for your certification pathway.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:pl-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="authority-review-form">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111111] border border-[#262626] text-white pl-11 pr-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                        placeholder="Your name"
                        data-testid="input-name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111111] border border-[#262626] text-white pl-11 pr-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                        placeholder="you@company.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111111] border border-[#262626] text-white pl-11 pr-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                        placeholder="Company name"
                        data-testid="input-company"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#262626] text-white pl-11 pr-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Company Size *</label>
                  <select
                    name="company_size"
                    value={formData.company_size}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                    data-testid="select-company-size"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Primary Interest *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                    data-testid="select-interest"
                  >
                    <option value="">What brings you here?</option>
                    <option value="governance">Building governance infrastructure</option>
                    <option value="certification">Operator certification</option>
                    <option value="exit">M&A / Exit preparation</option>
                    <option value="licensing">Licensing authority systems</option>
                    <option value="investment">Investment opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-600" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-[#111111] border border-[#262626] text-white pl-11 pr-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your current situation and goals..."
                      data-testid="input-message"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider font-medium hover:bg-[#d4af6a] transition-colors disabled:opacity-50"
                  data-testid="submit-review-request"
                >
                  {loading ? 'Submitting...' : 'Submit Review Request'} <Send className="w-4 h-4" />
                </button>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
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

export default AuthorityReviewPage;
