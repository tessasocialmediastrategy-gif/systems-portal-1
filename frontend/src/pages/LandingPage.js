import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Shield, Users, ArrowRight, Lock, CheckCircle } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
              <div className="w-10 h-10 bg-[#0B1C3E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Libre Baskerville, serif' }}>TA</span>
              </div>
              <span className="font-semibold text-[#111827]">OnPoint Authority Systems, Inc.</span>
            </Link>
            <div className="flex items-center gap-4">
              <a 
                href="https://tessaauthority.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
                data-testid="nav-main-site"
              >
                Main Site
              </a>
              <Link 
                to="/login" 
                className="btn btn-ghost text-sm"
                data-testid="nav-buyer-login"
              >
                Buyer Portal
              </Link>
              <Link 
                to="/admin/login" 
                className="btn btn-primary text-sm"
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
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1768081004885-645f789c75f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBza3lzY3JhcGVyJTIwYXJjaGl0ZWN0dXJlJTIwbG93JTIwYW5nbGV8ZW58MHx8fHwxNzcxMzQ1NTY1fDA&ixlib=rb-4.1.0&q=85)'
          }}
        >
          <div className="absolute inset-0 bg-[#0B1C3E]/80" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 animate-slide-up">
              <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
                Confidential Information Memorandum
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                OnPoint Authority<br />Systems, Inc.
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                Access investment materials for qualified buyers. Review our teaser and CIM documents to evaluate this strategic opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#documents" 
                  className="btn btn-accent"
                  data-testid="hero-view-documents"
                >
                  View Documents
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link 
                  to="/login" 
                  className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  data-testid="hero-buyer-portal"
                >
                  <Lock className="w-4 h-4" />
                  Access Deal Room
                </Link>
              </div>
            </div>
            <div className="md:col-span-4 animate-slide-up delay-200">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-[#C5A059]" />
                  <span className="text-white font-medium">Secure Access</span>
                </div>
                <ul className="space-y-3">
                  {['Public teaser available', 'NDA required for full CIM', 'Invite-only buyer portal'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Documents Section */}
      <section id="documents" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
              Available Downloads
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Public Investment Materials
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Download our teaser and CIM documents. These materials provide an overview of the investment opportunity.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : publicDocs.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-[#6B7280]">No public documents available yet.</p>
              <p className="text-sm text-[#9CA3AF] mt-2">Please check back soon or contact us for more information.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicDocs.map((doc, index) => (
                <div 
                  key={doc.id} 
                  className="card card-interactive p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`public-doc-${doc.id}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#0B1C3E]/5 rounded flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#0B1C3E]" />
                    </div>
                    <span className="badge badge-info">{doc.version}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {doc.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4">
                    {getCategoryLabel(doc.category)}
                  </p>
                  {doc.description && (
                    <p className="text-sm text-[#9CA3AF] mb-4">{doc.description}</p>
                  )}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-[#9CA3AF]">
                      {formatFileSize(doc.file_size)} • {doc.file_type.split('/')[1]?.toUpperCase()}
                    </span>
                    <a
                      href={api.getPublicDownloadUrl(doc.id)}
                      className="btn btn-primary text-sm py-2 px-4"
                      data-testid={`download-${doc.id}`}
                      download
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

      {/* Protected Section Preview */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1761437856299-af640f6e75ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGxpbmVzJTIwZ29sZCUyMGJsYWNrJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NzEzNDU1NzJ8MA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 animate-slide-up">
              <p className="text-[#C5A059] text-sm font-semibold tracking-wider uppercase mb-4">
                Exclusive Access
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Protected Deal Room
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Qualified buyers with signed NDAs receive exclusive access to detailed financials, buyer presentations, and complete appendix materials.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: FileText, label: 'Buyer Deck' },
                  { icon: FileText, label: 'Appendix Pack' },
                  { icon: Shield, label: 'Financial Data' },
                  { icon: Users, label: 'Data Room Index' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="w-5 h-5 text-[#C5A059]" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/login" 
                className="btn btn-accent"
                data-testid="cta-buyer-access"
              >
                Request Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#171717] border border-[#262626] rounded p-8 animate-slide-up delay-200">
                <Lock className="w-12 h-12 text-[#C5A059] mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  How to Get Access
                </h3>
                <ol className="space-y-4">
                  {[
                    'Review public teaser materials',
                    'Sign Non-Disclosure Agreement',
                    'Receive secure login credentials',
                    'Access full deal room documents'
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#C5A059]/20 text-[#C5A059] rounded text-sm flex items-center justify-center font-medium">
                        {i + 1}
                      </span>
                      <span className="text-gray-400">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0B1C3E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Libre Baskerville, serif' }}>TA</span>
              </div>
              <span className="text-sm text-[#6B7280]">
                © {new Date().getFullYear()} OnPoint Authority Systems, Inc.. All rights reserved.
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

export default LandingPage;
