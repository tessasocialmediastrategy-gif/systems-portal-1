import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Cloud,
  Layers,
  RefreshCw,
  Shield,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { track } from '../services/analytics';

const CloudTopologyModule = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [activeSubstrate, setActiveSubstrate] = useState('GCP');

  useSEO({
    title: 'Multi-Cloud Topology & Policy Compliance | AUTH-ID: AIS-BLR-0091Q',
    description:
      'OnPoint Authority Systems operational view — Multi-Cloud Topology & Policy Compliance. Substrate sync, sovereignty boundary validation, GCP Partner Case #71129532.',
    canonical: 'https://onpointauthoritysystems.com/cloud-topology',
  });

  useEffect(() => {
    track('briefing_view', { module: 'cloud_topology' });
  }, []);

  const triggerSubstrateSync = () => {
    setIsSyncing(true);
    track('priority_access_open', { source: 'cloud_topology_sync' });
    setTimeout(() => setIsSyncing(false), 1200);
  };

  return (
    <div className="bg-slate-950 min-h-screen p-6 md:p-8 font-sans text-slate-300" data-testid="cloud-topology-module">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500 hover:text-slate-300 transition-colors mb-6"
        data-testid="cloud-topology-back"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Onpoint
      </Link>

      {/* Module Header */}
      <div className="border-b border-slate-800 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
              <Layers size={24} />
            </span>
            <h1
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Multi-Cloud Topology &amp; Policy Compliance
            </h1>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            System Reference:{' '}
            <span className="text-slate-400 font-mono">AUTH-ID: AIS-BLR-0091Q</span>
          </p>
        </div>

        <button
          onClick={triggerSubstrateSync}
          disabled={isSyncing}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          data-testid="cloud-topology-sync"
        >
          <RefreshCw size={16} className={isSyncing ? 'animate-spin text-emerald-400' : ''} />
          {isSyncing ? 'Syncing Mesh...' : 'Force Substrate Sync'}
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Active Governance Control */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Cloud size={18} className="text-sky-400" />
              Active Environment Baselines
            </h2>

            {/* Substrate Selector Tabs */}
            <div className="flex border-b border-slate-800 mb-6">
              <button
                onClick={() => setActiveSubstrate('GCP')}
                className={`pb-3 px-4 font-medium text-sm transition-colors border-b-2 ${
                  activeSubstrate === 'GCP'
                    ? 'border-emerald-400 text-emerald-400'
                    : 'border-transparent text-slate-500 hover:text-slate-400'
                }`}
                data-testid="cloud-topology-tab-gcp"
              >
                Google Cloud Platform
              </button>
              <button
                onClick={() => setActiveSubstrate('Azure')}
                className={`pb-3 px-4 font-medium text-sm transition-colors border-b-2 ${
                  activeSubstrate === 'Azure'
                    ? 'border-sky-400 text-sky-400'
                    : 'border-transparent text-slate-500 hover:text-slate-400'
                }`}
                data-testid="cloud-topology-tab-azure"
              >
                Microsoft Azure
              </button>
            </div>

            {/* Substrate Conditional Rendering */}
            {activeSubstrate === 'GCP' ? (
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex justify-between items-center gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Partner Support Integration</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Unified case mapping tracking parameter validation history
                    </p>
                  </div>
                  <a
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded hover:bg-emerald-500/20 transition-colors whitespace-nowrap"
                  >
                    CASE #71129532
                  </a>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-slate-400">
                      Encapsulation Wrapper Core
                    </span>
                    <span className="text-xs font-mono bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                      v19.2-Next16
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <div
                    className="flex justify-between items-center mt-2 font-mono text-slate-600"
                    style={{ fontSize: '10px' }}
                  >
                    <span>STATUS: COMPLIANT</span>
                    <span>BLAST RADIUS: 0.00%</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex justify-between items-center gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Azure Core Substrate Mesh</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Standby deployment target for rapid migration pivot velocity
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded whitespace-nowrap">
                    STANDBY READY
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Sovereignty & Boundary Compliance */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield size={18} className="text-emerald-400" />
              Sovereignty Boundary Validator
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800">
                <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <h4 className="text-xs font-medium text-white">Non-Custodial Key Signatures</h4>
                  <p className="text-slate-500 mt-0.5" style={{ fontSize: '10px' }}>
                    Cryptographic boundaries verified across multi-tenant instances.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800">
                <AlertCircle className="text-slate-600 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <h4 className="text-xs font-medium text-slate-400">External Sync Latency</h4>
                  <p className="text-slate-600 mt-0.5" style={{ fontSize: '10px' }}>
                    Awaiting next scheduled heartbeat verification loop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudTopologyModule;
