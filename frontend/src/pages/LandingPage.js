import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Shield, Users, ArrowRight, Lock, CheckCircle, Cloud, Cpu, Zap, Server, Database, GitBranch, Activity, Globe, BarChart3 } from 'lucide-react';
import api from '../services/api';

const LandingPage = () => {
  const [publicDocs, setPublicDocs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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

  const infrastructureFeatures = [
    {
      icon: Cloud,
      title: 'Google Cloud Orchestrator',
      description: 'Dedicated compute region us-central1-a with enterprise-grade reliability and compliance.',
      badge: 'Active'
    },
    {
      icon: GitBranch,
      title: 'Autonomous n8n Environment',
      description: 'Self-managing workflow automation for continuous integration and deployment.',
      badge: 'Running'
    },
    {
      icon: Cpu,
      title: 'Jules-Driven Discovery',
      description: 'AI-powered technical debt scanning and modernization opportunity identification.',
      badge: 'Scanning'
    },
    {
      icon: Database,
      title: 'Decentralized Architecture',
      description: 'Distributed systems design for maximum resilience and scalability.',
      badge: 'Distributed'
    }
  ];

  const metrics = [
    { value: '5:1', label: 'AI-to-Human Efficiency Ratio', icon: Zap },
    { value: '$750M', label: 'Google Partner Fund Logic', icon: BarChart3 },
    { value: '99.9%', label: 'Infrastructure Uptime', icon: Activity },
    { value: '24/7', label: 'Autonomous Operations', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
              <span className="font-semibold text-white">OnPoint Authority Systems, Inc.</span>
            </Link>
            <div className="flex items-center gap-4">
              <a 
                href="https://tessaauthority.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
                data-testid="nav-main-site"
              >
                Main Site
              </a>
              <Link 
                to="/login" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
                data-testid="nav-buyer-login"
              >
                Buyer Portal
              </Link>
              <Link 
                to="/admin/login" 
                className="px-4 py-2 bg-[#C5A059] text-[#0a0a0a] text-sm font-medium rounded hover:bg-[#d4af6a] transition-colors"
                data-testid="nav-admin-login"
              >
                Admin Access
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1419] to-[#0a0a0a]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            {/* Operational Provenance Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full mb-8" data-testid="provenance-badge">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[#C5A059] text-sm font-medium">Infrastructure verified under onpointauthoritysystems.com Organization Identity</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              The Agentic Enterprise:<br />
              <span className="text-[#C5A059]">Technical Debt Modernization at Scale</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              OnPoint is powered by a dedicated Google Cloud Orchestrator, managing an autonomous n8n environment and Jules-driven Discovery scans. We convert technical debt into high-margin recurring revenue.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                to="/authority-review" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0a0a0a] font-semibold rounded hover:bg-[#d4af6a] transition-colors"
                data-testid="hero-deploy-cta"
              >
                Deploy Your Agentic Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#infrastructure" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded hover:bg-white/10 transition-colors"
                data-testid="hero-explore-infra"
              >
                <Server className="w-5 h-5" />
                Explore Infrastructure
              </a>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, i) => (
                <div 
                  key={i}
                  className="bg-white/5 border border-white/10 rounded p-4"
                  data-testid={`metric-${i}`}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <metric.icon className="w-5 h-5 text-[#C5A059]" />
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                  </div>
                  <p className="text-xs text-gray-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-24 bg-[#0f1419]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Infrastructure Status
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Google Cloud Modernization Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure powering autonomous technical debt conversion and AI-driven optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {infrastructureFeatures.map((feature, i) => (
              <div 
                key={i}
                className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 hover:border-[#C5A059]/30 transition-colors"
                data-testid={`infra-feature-${i}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#C5A059]/10 rounded flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Value Proposition Box */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#C5A059]/10 to-[#C5A059]/5 border border-[#C5A059]/20 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#C5A059] rounded flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#0a0a0a]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Value Proposition</h4>
                <p className="text-sm text-gray-400">Google Partner Ecosystem</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Our capability converts technical debt into high-margin recurring revenue using the <span className="text-[#C5A059] font-semibold">$750M Google Partner Fund</span> logic. With a <span className="text-[#C5A059] font-semibold">5:1 AI-to-Human efficiency ratio</span>, we deliver modernization outcomes that traditional consulting cannot match.
            </p>
          </div>
        </div>
      </section>

      {/* Public Documents Section */}
      <section id="documents" className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Available Downloads
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Public Investment Materials
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Download our teaser and CIM documents. These materials provide an overview of the investment opportunity.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : publicDocs.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No public documents available at this time.</p>
              <p className="text-sm text-gray-500 mt-2">Please contact us for more information.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicDocs.map((doc, index) => (
                <div 
                  key={doc.id || index}
                  className="bg-[#0f1419] border border-gray-800 rounded-lg p-6 hover:border-[#C5A059]/30 transition-all group"
                  data-testid={`document-card-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded flex items-center justify-center group-hover:bg-[#C5A059]/20 transition-colors">
                      <FileText className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <span className="px-2.5 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded">
                      {getCategoryLabel(doc.category)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C5A059] transition-colors" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {doc.description || 'Investment documentation for qualified buyers.'}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-xs text-gray-500">
                      {doc.file_size ? formatFileSize(doc.file_size) : 'PDF'}
                    </span>
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C5A059] text-sm font-medium hover:underline"
                      data-testid={`download-doc-${index}`}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Access Journey Section */}
      <section className="py-24 bg-[#0f1419]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Buyer Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Secure Access Protocol
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our structured process ensures qualified buyers receive appropriate access to confidential materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Review Teaser', desc: 'Access public investment overview', icon: FileText },
              { step: '02', title: 'Submit NDA', desc: 'Request confidential access', icon: Shield },
              { step: '03', title: 'Access CIM', desc: 'Download full documentation', icon: Lock }
            ].map((item, i) => (
              <div 
                key={i}
                className="text-center"
                data-testid={`journey-step-${i}`}
              >
                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#C5A059]" />
                </div>
                <span className="text-[#C5A059] text-sm font-mono">{item.step}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-1" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/investor/data-room" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0a0a0a] font-semibold rounded hover:bg-[#d4af6a] transition-colors"
              data-testid="start-journey-cta"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Ready to Transform Your Technical Debt?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Deploy your agentic roadmap today and start converting legacy systems into strategic assets.
            </p>
            <Link 
              to="/authority-review" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0a0a0a] text-lg font-semibold rounded hover:bg-[#d4af6a] transition-colors"
              data-testid="final-cta"
            >
              Deploy Your Agentic Roadmap
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0f1419] border-t border-gray-800">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/login" className="text-sm text-gray-500 hover:text-white transition-colors">
                Buyer Portal
              </Link>
              <Link to="/admin/login" className="text-sm text-gray-500 hover:text-white transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
