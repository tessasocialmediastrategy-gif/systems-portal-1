import React, { useState } from 'react';
import { CheckCircle, Fingerprint, X } from 'lucide-react';
import { track } from '../../services/analytics';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const INITIAL_FORM = {
  name: '',
  title: '',
  email: '',
  company: '',
  phone: '',
  institution_type: '',
  annual_revenue: ''
};

export const PriorityAccessModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
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
      track('priority_access_submit', { institution_type: formData.institution_type });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      data-testid="priority-access-modal"
    >
      <div className="bg-[#0a0a0a] border border-[#C5A059]/30 rounded-lg p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white"
          data-testid="priority-access-close"
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
              <p className="text-[#C5A059] text-sm">Reference: AIS-{Date.now().toString(36).toUpperCase()}</p>
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
              <p className="text-gray-500 text-sm">Reserved for institutional decision-makers</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Full Name *</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Title *</label>
                  <input
                    type="text" name="title" value={formData.title} onChange={handleChange} required
                    className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                    placeholder="CTO, CISO, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Corporate Email *</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                  placeholder="you@institution.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Institution *</label>
                  <input
                    type="text" name="company" value={formData.company} onChange={handleChange} required
                    className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                    placeholder="Institution name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Phone</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-[#030303] border border-gray-800 rounded px-3 py-2 text-white text-sm focus:border-[#C5A059] focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Institution Type *</label>
                <select
                  name="institution_type" value={formData.institution_type} onChange={handleChange} required
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
                type="submit" disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] font-semibold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                data-testid="priority-access-submit"
              >
                {loading ? 'Registering...' : 'Register Priority Access'}
                <Fingerprint className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-gray-600 text-center">
                Protected under institutional NDA. SOC-2 compliant data handling. See our{' '}
                <a href="/privacy" target="_blank" rel="noreferrer" className="text-[#C5A059] hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
