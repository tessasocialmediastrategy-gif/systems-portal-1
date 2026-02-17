import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileSignature, CheckCircle, User, Mail, Building2, Phone } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const NDARequestPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', title: '', phone: '', buyer_type: '', interest: '', timeline: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/api/investor/nda-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.detail || 'Failed to submit request');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#C5A059]" />
          </div>
          <h1 className="text-3xl font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>NDA Request Submitted</h1>
          <p className="text-gray-400 mb-8">
            Thank you for your interest. We will review your request and send the NDA for signature within 24-48 hours.
          </p>
          <Link to="/investor/data-room" className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider hover:gap-3 transition-all">
            Return to Data Room <ArrowRight className="w-4 h-4" />
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
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>ONPOINT.</Link>
            <div className="flex items-center gap-8">
              <Link to="/investor/data-room" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">DATA ROOM</Link>
              <Link to="/login" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">BUYER LOGIN</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/investor/data-room" className="hover:text-white transition-colors">Data Room</Link>
            <span>/</span>
            <span className="text-[#C5A059]">NDA Request</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <h1 className="text-4xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Request NDA Access
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                To access the Confidential Information Memorandum and detailed materials, 
                please complete this form. We'll send you an NDA for electronic signature.
              </p>

              <div className="p-6 border border-[#262626] bg-[#111111] mb-8">
                <div className="flex items-start gap-4">
                  <FileSignature className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-light mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>NDA Process</h3>
                    <ol className="space-y-2 text-gray-400 text-sm">
                      <li>1. Complete buyer qualification form</li>
                      <li>2. Receive NDA via email (24-48 hours)</li>
                      <li>3. Sign electronically</li>
                      <li>4. Receive data room credentials</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-[#1a1a1a] bg-[#0d0d0d]">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-500 text-sm">
                    All information provided is kept strictly confidential and used solely for 
                    qualifying potential buyers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="nda-request-form">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company *</label>
                    <input type="text" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Title *</label>
                    <input type="text" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Buyer Type *</label>
                  <select required value={formData.buyer_type} onChange={(e) => setFormData({...formData, buyer_type: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none">
                    <option value="">Select buyer type</option>
                    <option value="strategic">Strategic Buyer</option>
                    <option value="pe">Private Equity</option>
                    <option value="family-office">Family Office</option>
                    <option value="individual">Individual Buyer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Investment Interest *</label>
                  <textarea required rows={3} value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none resize-none"
                    placeholder="Brief description of your investment thesis and interest..." />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Timeline</label>
                  <select value={formData.timeline} onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none">
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (0-3 months)</option>
                    <option value="near">Near-term (3-6 months)</option>
                    <option value="medium">Medium-term (6-12 months)</option>
                    <option value="exploring">Exploring options</option>
                  </select>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider font-medium hover:bg-[#d4af6a] transition-colors"
                  data-testid="submit-nda-request">
                  Submit NDA Request <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} OnPoint Authority Systems, Inc.</span>
          <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default NDARequestPage;
