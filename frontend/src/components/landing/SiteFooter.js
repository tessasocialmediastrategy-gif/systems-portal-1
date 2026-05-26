import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Fingerprint, Lock, Shield } from 'lucide-react';

const BADGES = [
  { icon: Shield, iconColor: 'text-blue-400', title: 'SOC 2', sub: 'Type II Certified' },
  { icon: Lock, iconColor: 'text-green-400', title: 'SSL/TLS', sub: '256-bit Encryption' },
  { icon: Award, iconColor: 'text-purple-400', title: 'Wiz AI', sub: 'Security Verified' },
  { icon: Fingerprint, iconColor: 'text-[#C5A059]', title: 'ZKP', sub: 'Non-Custodial' }
];

export const SiteFooter = () => (
  <footer className="py-12 bg-[#030303] border-t border-gray-900" data-testid="site-footer">
    <div className="container-custom">
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8 pb-8 border-b border-gray-900">
        {BADGES.map((b, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#050505] border border-gray-800 rounded">
            <b.icon className={`w-5 h-5 ${b.iconColor}`} />
            <div>
              <div className="text-white text-xs font-semibold">{b.title}</div>
              <div className="text-[10px] text-gray-600">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>

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
          <Link to="/heritage" className="text-sm text-gray-500 hover:text-white transition-colors">
            Heritage
          </Link>
          <Link to="/blog" className="text-sm text-gray-500 hover:text-white transition-colors" data-testid="footer-insights">
            Insights
          </Link>
          <Link to="/audit" className="text-sm text-gray-500 hover:text-white transition-colors" data-testid="footer-audit">
            Audit
          </Link>
          <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors" data-testid="footer-privacy">
            Privacy
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
);
