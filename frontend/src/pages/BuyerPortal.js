import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Download, LogOut, Shield, User, Lock, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const BuyerPortal = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await api.getProtectedDocuments();
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
      data_room: 'Data Room Index'
    };
    return labels[category] || category;
  };

  const getCategoryIcon = (category) => {
    if (category === 'data_room') return Shield;
    return FileText;
  };

  const groupedDocs = documents.reduce((acc, doc) => {
    const category = doc.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(doc);
    return acc;
  }, {});

  const token = localStorage.getItem('token');

  return (
    <div className="min-h-screen portal-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C5A059] rounded flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-lg" style={{ fontFamily: 'Libre Baskerville, serif' }}>TA</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Deal Room</span>
                <span className="text-xs text-gray-500">TessaAuthority</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#171717] rounded">
                <User className="w-4 h-4 text-[#C5A059]" />
                <span className="text-sm text-gray-300">{user?.name}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="btn btn-ghost text-gray-400 hover:text-white"
                data-testid="logout-btn"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#C5A059]">Deal Room</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Protected Documents
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Welcome back, {user?.name}. Access confidential investment materials below. All downloads are tracked and logged.
            </p>
          </div>

          {/* Security Notice */}
          <div className="bg-[#171717] border border-[#262626] rounded p-4 mb-8 flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium mb-1">Confidential Materials</p>
              <p className="text-sm text-gray-400">
                These documents are protected under your NDA agreement. Unauthorized distribution is prohibited.
              </p>
            </div>
          </div>

          {/* Documents */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : documents.length === 0 ? (
            <div className="text-center py-16 bg-[#171717] border border-[#262626] rounded">
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                No Documents Available
              </h3>
              <p className="text-gray-400">
                Protected documents will appear here once uploaded by the admin.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedDocs).map(([category, docs]) => {
                const IconComponent = getCategoryIcon(category);
                return (
                  <div key={category} className="animate-slide-up">
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-5 h-5 text-[#C5A059]" />
                      <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                        {getCategoryLabel(category)}
                      </h2>
                      <span className="text-xs text-gray-500 bg-[#262626] px-2 py-1 rounded">
                        {docs.length} file{docs.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {docs.map((doc) => (
                        <div 
                          key={doc.id}
                          className="bg-[#171717] border border-[#262626] rounded p-5 hover:border-[#C5A059]/30 transition-colors"
                          data-testid={`protected-doc-${doc.id}`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 bg-[#262626] rounded flex items-center justify-center">
                              <FileText className="w-5 h-5 text-[#C5A059]" />
                            </div>
                            <span className="text-xs text-gray-500">{doc.version}</span>
                          </div>
                          <h3 className="text-white font-medium mb-1">{doc.name}</h3>
                          {doc.description && (
                            <p className="text-sm text-gray-500 mb-3">{doc.description}</p>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t border-[#262626]">
                            <span className="text-xs text-gray-500">
                              {formatFileSize(doc.file_size)}
                            </span>
                            <a
                              href={`${api.getProtectedDownloadUrl(doc.id)}`}
                              onClick={(e) => {
                                e.preventDefault();
                                // Create download with auth header
                                fetch(`${api.getProtectedDownloadUrl(doc.id)}`, {
                                  headers: { Authorization: `Bearer ${token}` }
                                })
                                .then(res => res.blob())
                                .then(blob => {
                                  const url = window.URL.createObjectURL(blob);
                                  const a = document.createElement('a');
                                  a.href = url;
                                  a.download = doc.original_filename;
                                  document.body.appendChild(a);
                                  a.click();
                                  window.URL.revokeObjectURL(url);
                                  a.remove();
                                });
                              }}
                              className="btn btn-accent text-sm py-1.5 px-3"
                              data-testid={`download-protected-${doc.id}`}
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-[#262626]">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} TessaAuthority. Confidential.
            </span>
            <span className="text-xs text-gray-600">
              Logged in as {user?.email}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuyerPortal;
