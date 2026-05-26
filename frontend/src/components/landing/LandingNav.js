import React from 'react';
import { Link } from 'react-router-dom';

export const LandingNav = ({ onPriorityAccess }) => (
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
          <Link
            to="/heritage"
            className="text-sm text-gray-500 hover:text-white transition-colors"
            data-testid="nav-heritage"
          >
            Our Path
          </Link>
          <Link
            to="/blog"
            className="text-sm text-gray-500 hover:text-white transition-colors"
            data-testid="nav-insights"
          >
            Insights
          </Link>
          <Link
            to="/audit"
            className="text-sm text-gray-500 hover:text-white transition-colors"
            data-testid="nav-audit"
          >
            Audit
          </Link>
          <button
            onClick={onPriorityAccess}
            className="px-4 py-2 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#030303] text-sm font-semibold rounded hover:opacity-90 transition-opacity"
            data-testid="nav-priority-access"
          >
            Priority Access
          </button>
        </div>
      </div>
    </div>
  </nav>
);
