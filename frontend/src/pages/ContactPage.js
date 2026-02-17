import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#C5A059]" />
          </div>
          <h1 className="text-3xl font-light mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>Message Sent</h1>
          <p className="text-gray-400 mb-8">Thank you for reaching out. We'll respond within 1 business day.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-[#C5A059] text-sm tracking-wider hover:gap-3 transition-all">
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
            <Link to="/" className="text-xl tracking-widest font-light" style={{ fontFamily: 'Libre Baskerville, serif' }}>ONPOINT.</Link>
            <div className="flex items-center gap-8">
              <Link to="/systems" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">SYSTEMS</Link>
              <Link to="/systems-book" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">BOOK</Link>
              <Link to="/governance" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">GOVERNANCE</Link>
              <Link to="/certification" className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">CERTIFICATION</Link>
              <Link to="/authority-review" className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider hover:bg-[#d4af6a] transition-colors">AUTHORITY REVIEW</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#C5A059] text-sm tracking-widest mb-6">CONTACT</p>
              <h1 className="text-5xl font-light leading-tight mb-8" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Get in Touch
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Ready to build authority infrastructure? Have questions about our systems? We're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#111111] border border-[#262626] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-white">contact@onpointauthority.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#111111] border border-[#262626] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-white">Available upon request</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#111111] border border-[#262626] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-white">United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#111111] border border-[#262626] text-white px-4 py-3 focus:border-[#C5A059] focus:outline-none transition-colors resize-none"
                    data-testid="input-message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0A0A0A] text-sm tracking-wider font-medium hover:bg-[#d4af6a] transition-colors"
                  data-testid="submit-contact"
                >
                  Send Message <Send className="w-4 h-4" />
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
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-gray-500 hover:text-white transition-colors">About</Link>
            <Link to="/systems-book" className="text-sm text-gray-500 hover:text-white transition-colors">Systems Book</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
