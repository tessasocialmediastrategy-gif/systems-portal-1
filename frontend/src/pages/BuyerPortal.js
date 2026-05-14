import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText, Download, LogOut, Shield, User, Lock, ChevronRight,
  Clock, FolderArchive, CheckCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const BuyerPortal = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [myDownloads, setMyDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [docsRes, downloadsRes] = await Promise.all([
          api.getProtectedDocuments(),
          api.getMyDownloads().catch(() => ({ data: [] })),
        ]);
        setDocuments(docsRes.data);
        setMyDownloads(downloadsRes.data || []);
      } catch (error) {
        console.error('Error fetching portal data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return '—';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
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

  // Last-downloaded lookup per document id
  const lastDownloadByDoc = myDownloads.reduce((acc, d) => {
    if (!acc[d.document_id]) acc[d.document_id] = d.downloaded_at;
    return acc;
  }, {});

  const groupedDocs = documents.reduce((acc, doc) => {
    const category = doc.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(doc);
    return acc;
  }, {});

  const token = localStorage.getItem('token');

  // Stats for header banner
  const totalDocs = documents.length;
  const downloadedDocs = Object.keys(lastDownloadByDoc).length;
  const newDocs = Math.max(totalDocs - downloadedDocs, 0);

  const downloadProtected = (doc) => {
    fetch(api.getProtectedDownloadUrl(doc.id), {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.original_filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
        // Refresh download history so the activity widget updates
        setTimeout(() => {
          api.getMyDownloads().then((r) => setMyDownloads(r.data || [])).catch(() => {});
        }, 500);
      });
  };

  return (
    <div className="min-h-screen portal-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div>
                <span className="font-semibold text-white block">Deal Room</span>
                <span className="text-xs text-gray-500">OnPoint Authority Systems, Inc.</span>
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

      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#C5A059]">Deal Room</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              Welcome back, {user?.name?.split(' ')[0] || 'Reviewer'}.
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Access confidential investment materials below. All downloads are tracked and logged.
            </p>
          </div>

          {/* Stats banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" data-testid="portal-stats">
            {[
              { label: 'Documents Available', value: totalDocs, icon: FolderArchive, accent: '#C5A059' },
              { label: 'Downloaded', value: downloadedDocs, icon: CheckCircle, accent: '#39FF14' },
              { label: 'New for You', value: newDocs, icon: FileText, accent: '#8da2fb' },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-[#0f0f0f] border border-[#262626] rounded p-5 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}30` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.accent }} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white leading-none">{s.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              </div>
            ))}
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

          {/* Documents grid */}
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
            <div className="space-y-10">
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
                      {docs.map((doc) => {
                        const lastDl = lastDownloadByDoc[doc.id];
                        return (
                          <div
                            key={doc.id}
                            className="bg-[#171717] border border-[#262626] rounded p-5 hover:border-[#C5A059]/30 transition-colors relative"
                            data-testid={`protected-doc-${doc.id}`}
                          >
                            {!lastDl && (
                              <span
                                className="absolute top-3 right-3 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded"
                                style={{ background: '#8da2fb15', color: '#8da2fb', border: '1px solid #8da2fb30' }}
                              >
                                New
                              </span>
                            )}
                            <div className="flex items-start justify-between mb-3">
                              <span className="text-xs text-gray-500">{doc.version}</span>
                            </div>
                            <h3 className="text-white font-medium mb-1 pr-12">{doc.name}</h3>
                            {doc.description && (
                              <p className="text-sm text-gray-500 mb-3">{doc.description}</p>
                            )}
                            <div className="flex items-center justify-between pt-3 border-t border-[#262626]">
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500">
                                  {formatFileSize(doc.file_size)}
                                </span>
                                {lastDl && (
                                  <span className="text-[10px] text-gray-600 mt-0.5">
                                    Downloaded {formatDate(lastDl)}
                                  </span>
                                )}
                              </div>
                              <button
                                onClick={() => downloadProtected(doc)}
                                className="btn btn-accent text-sm py-1.5 px-3"
                                data-testid={`download-protected-${doc.id}`}
                              >
                                <Download className="w-4 h-4" />
                                Download
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Recent activity */}
          {myDownloads.length > 0 && (
            <div className="mt-14 bg-[#0f0f0f] border border-[#262626] rounded p-6" data-testid="portal-activity">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-[#C5A059]" />
                <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Your Recent Activity
                </h2>
              </div>
              <div className="space-y-3">
                {myDownloads.slice(0, 8).map((evt, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-[#1f1f1f] last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <Download className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-white">
                          {evt.document?.name || 'Document'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {evt.document ? getCategoryLabel(evt.document.category) : '—'}
                          {evt.document?.version && ` · ${evt.document.version}`}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-600">{formatDate(evt.downloaded_at)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="py-6 border-t border-[#262626]">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} OnPoint Authority Systems, Inc. Confidential.
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
