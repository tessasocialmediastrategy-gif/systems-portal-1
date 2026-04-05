import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Send, Building2, User, Mail, Phone, MessageSquare, ClipboardCheck, FileSearch, Settings, Award, Map, Shield } from 'lucide-react';

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

  const reviewServices = [
    {
      icon: ClipboardCheck,
      title: 'Governance Infrastructure Assessment',
      description: 'Comprehensive review of your current governance structure and documentation.'
    },
    {
      icon: FileSearch,
      title: 'Documentation & Registry Audit',
      description: 'Analysis of existing documentation completeness and compliance status.'
    },
    {
      icon: Settings,
      title: 'Process Standardization Review',
      description: 'Evaluation of operational processes and standardization opportunities.'
    },
    {
      icon: Shield,
      title: 'Transfer Readiness Evaluation',
      description: 'Assessment of your organization\'s readiness for ownership transition.'
    },
    {
      icon: Award,
      title: 'Certification Pathway Recommendation',
      description: 'Customized roadmap to achieve Authority certification.'
    },
    {
      icon: Map,
      title: 'Implementation Roadmap',
      description: 'Detailed action plan with milestones and timelines.'
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/40">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
                <span className="font-semibold text-[#111827]">OnPoint Authority Systems, Inc.</span>
              </Link>
              <div className="flex items-center gap-4">
                <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                  Main Site
                </a>
                <Link to="/login" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                  Buyer Portal
                </Link>
                <Link to="/admin/login" className="btn btn-primary">
                  Admin Access
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Success State */}
        <section className="pt-32 pb-24">
          <div className="container-custom">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Request Received
              </h1>
              <p className="text-[#6B7280] mb-8">
                Thank you for your interest in an Authority Review. Our team will contact you within 2 business days to schedule your assessment.
              </p>
              <Link 
                to="/"
                className="btn btn-primary inline-flex items-center gap-2"
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
              <span className="font-semibold text-[#111827]">OnPoint Authority Systems, Inc.</span>
            </Link>
            <div className="flex items-center gap-4">
              <a href="https://tessaauthority.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                Main Site
              </a>
              <Link to="/login" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                Buyer Portal
              </Link>
              <Link to="/admin/login" className="btn btn-primary">
                Admin Access
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Get Started
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Request an Authority Review
            </h1>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              An Authority Review is your first step toward building governance infrastructure that operates without founder dependency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              What We Assess
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Comprehensive Review Services
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Our assessment covers every aspect of your organization's governance readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviewServices.map((service, index) => (
              <div 
                key={index}
                className="card card-interactive p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`service-card-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#0B1C3E]/5 rounded flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#0B1C3E]" />
                  </div>
                  <span className="badge badge-info">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B7280]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* What to Expect Box */}
          <div className="max-w-3xl mx-auto bg-[#F9FAFB] border border-gray-200 rounded-lg p-6 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#C5A059]/10 rounded flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] mb-2">What to Expect</h4>
                <p className="text-sm text-[#6B7280]">
                  A 60-minute discovery call followed by a written assessment with recommendations for your certification pathway. 
                  Our team will work with you to understand your unique situation and provide actionable next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Apply Now
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Submit Your Review Request
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Complete the form below and our team will reach out within 2 business days.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card p-8" data-testid="authority-review-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-colors"
                      placeholder="Your name"
                      data-testid="input-name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-colors"
                      placeholder="you@company.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">Company *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-colors"
                      placeholder="Company name"
                      data-testid="input-company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#374151] mb-2">Company Size *</label>
                <select
                  name="company_size"
                  value={formData.company_size}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-colors"
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

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#374151] mb-2">Primary Interest *</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-colors"
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

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#374151] mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#9CA3AF]" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your current situation and goals..."
                    data-testid="input-message"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary py-4 text-base flex items-center justify-center gap-2"
                data-testid="submit-review-request"
              >
                {loading ? 'Submitting...' : 'Submit Review Request'} <Send className="w-4 h-4" />
              </button>

              {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}

              <p className="text-xs text-[#9CA3AF] text-center mt-4">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#6B7280]">
                © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/login" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                Buyer Portal
              </Link>
              <Link to="/admin/login" className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthorityReviewPage;
