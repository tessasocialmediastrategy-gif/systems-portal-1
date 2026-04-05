import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, Upload, Users, Download, LogOut, Plus, 
  Trash2, UserCheck, UserX, Copy, Eye, ChevronRight,
  BarChart3, Clock, Shield, Settings, Mail
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [downloadLogs, setDownloadLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [authorityReviews, setAuthorityReviews] = useState([]);
  const [ndaRequests, setNdaRequests] = useState([]);
  const [contacts, setContacts] = useState([]);
  
  // Modals
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  
  // Form states
  const [inviteForm, setInviteForm] = useState({ email: '', name: '', company: '' });
  const [uploadForm, setUploadForm] = useState({ 
    name: '', category: 'buyer_deck', is_public: false, description: '', version: 'v2026-02-16r1', file: null 
  });
  const [inviteResult, setInviteResult] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, docsRes, usersRes, invitesRes, logsRes, reviewsRes, ndaRes, contactsRes] = await Promise.all([
        api.getStats(),
        api.getAllDocuments(),
        api.getUsers(),
        api.getInvites(),
        api.getDownloadLogs(),
        api.getAuthorityReviews().catch(() => ({ data: [] })),
        api.getNdaRequests().catch(() => ({ data: [] })),
        api.getContacts().catch(() => ({ data: [] }))
      ]);
      setStats(statsRes.data);
      setDocuments(docsRes.data);
      setUsers(usersRes.data);
      setInvites(invitesRes.data);
      setDownloadLogs(logsRes.data);
      setAuthorityReviews(reviewsRes.data || []);
      setNdaRequests(ndaRes.data || []);
      setContacts(contactsRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);
    try {
      const response = await api.inviteBuyer(inviteForm);
      setInviteResult(response.data);
      setInviteForm({ email: '', name: '', company: '' });
      fetchData();
    } catch (error) {
      setFormError(error.response?.data?.detail || 'Failed to create invite');
    } finally {
      setFormLoading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('name', uploadForm.name);
      formData.append('category', uploadForm.category);
      formData.append('is_public', uploadForm.is_public);
      formData.append('description', uploadForm.description);
      formData.append('version', uploadForm.version);
      formData.append('file', uploadForm.file);
      
      await api.uploadDocument(formData);
      setShowUploadModal(false);
      setUploadForm({ name: '', category: 'buyer_deck', is_public: false, description: '', version: 'v2026-02-16r1', file: null });
      fetchData();
    } catch (error) {
      setFormError(error.response?.data?.detail || 'Failed to upload document');
    } finally {
      setFormLoading(false);
    }
  };

  const handleToggleUser = async (userId) => {
    try {
      await api.toggleUserActive(userId);
      fetchData();
    } catch (error) {
      console.error('Error toggling user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await api.deleteUser(userId);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeleteDocument = async (docId) => {
    if (!window.confirm('Are you sure you want to delete this document?')) return;
    try {
      await api.deleteDocument(docId);
      fetchData();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'submissions', label: 'Submissions', icon: Mail },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'buyers', label: 'Buyers', icon: Users },
    { id: 'activity', label: 'Activity', icon: Clock },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div>
                <span className="font-semibold text-[#111827] block">Admin Portal</span>
                <span className="text-xs text-[#6B7280]">OnPoint Authority Systems, Inc.</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm text-[#6B7280] hover:text-[#111827]" data-testid="view-site">
                View Site
              </Link>
              <button 
                onClick={handleLogout}
                className="btn btn-ghost text-[#6B7280] hover:text-[#111827]"
                data-testid="admin-logout"
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#111827]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Dashboard
              </h1>
              <p className="text-[#6B7280]">Manage your CIM portal</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowInviteModal(true)}
                className="btn btn-secondary"
                data-testid="invite-buyer-btn"
              >
                <Plus className="w-4 h-4" />
                Invite Buyer
              </button>
              <button 
                onClick={() => setShowUploadModal(true)}
                className="btn btn-primary"
                data-testid="upload-doc-btn"
              >
                <Upload className="w-4 h-4" />
                Upload Document
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-white text-[#111827] shadow-sm' 
                    : 'text-[#6B7280] hover:text-[#111827]'
                }`}
                data-testid={`tab-${tab.id}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Buyers', value: stats?.total_buyers || 0, icon: Users, color: 'bg-blue-500' },
                  { label: 'Active Buyers', value: stats?.active_buyers || 0, icon: UserCheck, color: 'bg-green-500' },
                  { label: 'Documents', value: stats?.total_documents || 0, icon: FileText, color: 'bg-purple-500' },
                  { label: 'Total Downloads', value: stats?.total_downloads || 0, icon: Download, color: 'bg-orange-500' },
                ].map((stat, i) => (
                  <div key={i} className="card p-6" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 ${stat.color} bg-opacity-10 rounded flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 ${stat.color.replace('bg-', 'text-')}`} />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-[#111827]">{stat.value}</p>
                    <p className="text-sm text-[#6B7280]">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Recent Downloads
                </h3>
                {downloadLogs.length === 0 ? (
                  <p className="text-[#6B7280] text-center py-8">No download activity yet</p>
                ) : (
                  <div className="space-y-3">
                    {downloadLogs.slice(0, 5).map((log, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <Download className="w-4 h-4 text-[#6B7280]" />
                          <div>
                            <p className="text-sm text-[#111827]">{log.user_email || 'Anonymous'}</p>
                            <p className="text-xs text-[#6B7280]">Document ID: {log.document_id.slice(0, 8)}...</p>
                          </div>
                        </div>
                        <span className="text-xs text-[#9CA3AF]">{formatDate(log.downloaded_at)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="card p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                    <Eye className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#111827]">{stats?.public_documents || 0}</p>
                    <p className="text-sm text-[#6B7280]">Public Documents</p>
                  </div>
                </div>
                <div className="card p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#111827]">{stats?.protected_documents || 0}</p>
                    <p className="text-sm text-[#6B7280]">Protected Documents</p>
                  </div>
                </div>
              </div>

              {documents.length === 0 ? (
                <div className="card p-12 text-center">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-[#6B7280]">No documents uploaded yet</p>
                  <button 
                    onClick={() => setShowUploadModal(true)}
                    className="btn btn-primary mt-4"
                  >
                    Upload First Document
                  </button>
                </div>
              ) : (
                <div className="card overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Document</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Category</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Status</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Size</th>
                        <th className="text-right text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-50" data-testid={`doc-row-${doc.id}`}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-[#6B7280]" />
                              <div>
                                <p className="text-sm font-medium text-[#111827]">{doc.name}</p>
                                <p className="text-xs text-[#9CA3AF]">{doc.original_filename}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#6B7280]">{getCategoryLabel(doc.category)}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`badge ${doc.is_public ? 'badge-success' : 'badge-warning'}`}>
                              {doc.is_public ? 'Public' : 'Protected'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#6B7280]">{formatFileSize(doc.file_size)}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDeleteDocument(doc.id)}
                              className="text-red-600 hover:text-red-700 p-2"
                              data-testid={`delete-doc-${doc.id}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Buyers Tab */}
          {activeTab === 'buyers' && (
            <div className="space-y-6 animate-fade-in">
              {users.length === 0 ? (
                <div className="card p-12 text-center">
                  <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-[#6B7280]">No buyers invited yet</p>
                  <button 
                    onClick={() => setShowInviteModal(true)}
                    className="btn btn-primary mt-4"
                  >
                    Invite First Buyer
                  </button>
                </div>
              ) : (
                <div className="card overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Buyer</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Company</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Status</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Added</th>
                        <th className="text-right text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {users.map((u) => (
                        <tr key={u.id} className="hover:bg-gray-50" data-testid={`user-row-${u.id}`}>
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-sm font-medium text-[#111827]">{u.name}</p>
                              <p className="text-xs text-[#9CA3AF]">{u.email}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#6B7280]">{u.company || '-'}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`badge ${u.is_active ? 'badge-success' : 'badge-error'}`}>
                              {u.is_active ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#6B7280]">{formatDate(u.created_at)}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleToggleUser(u.id)}
                                className={`p-2 ${u.is_active ? 'text-orange-600 hover:text-orange-700' : 'text-green-600 hover:text-green-700'}`}
                                title={u.is_active ? 'Deactivate' : 'Activate'}
                                data-testid={`toggle-user-${u.id}`}
                              >
                                {u.is_active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                              </button>
                              <button
                                onClick={() => handleDeleteUser(u.id)}
                                className="text-red-600 hover:text-red-700 p-2"
                                data-testid={`delete-user-${u.id}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Recent Invites */}
              {invites.length > 0 && (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    Recent Invites
                  </h3>
                  <div className="space-y-3">
                    {invites.slice(0, 5).map((invite) => (
                      <div key={invite.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div>
                          <p className="text-sm font-medium text-[#111827]">{invite.name}</p>
                          <p className="text-xs text-[#6B7280]">{invite.email}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">{invite.temp_password}</code>
                          <button
                            onClick={() => copyToClipboard(invite.temp_password)}
                            className="text-[#6B7280] hover:text-[#111827]"
                            title="Copy password"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Submissions Tab */}
          {activeTab === 'submissions' && (
            <div className="space-y-8 animate-fade-in">
              {/* Authority Reviews */}
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#C5A059]" />
                  Authority Review Requests ({authorityReviews.length})
                </h3>
                {authorityReviews.length === 0 ? (
                  <div className="card p-8 text-center">
                    <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#6B7280]">No authority review requests yet</p>
                  </div>
                ) : (
                  <div className="card overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Name</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Email</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Company</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Interest</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Date</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {authorityReviews.map((review, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <span className="text-sm font-medium text-[#111827]">{review.name}</span>
                            </td>
                            <td className="px-6 py-4">
                              <a href={`mailto:${review.email}`} className="text-sm text-[#C5A059] hover:underline">{review.email}</a>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#6B7280]">{review.company}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#6B7280] capitalize">{review.interest?.replace('_', ' ')}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#9CA3AF]">{formatDate(review.created_at)}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`badge ${review.status === 'pending' ? 'badge-warning' : review.status === 'contacted' ? 'badge-info' : 'badge-success'}`}>
                                {review.status || 'pending'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* NDA Requests */}
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0B1C3E]" />
                  NDA Requests ({ndaRequests.length})
                </h3>
                {ndaRequests.length === 0 ? (
                  <div className="card p-8 text-center">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#6B7280]">No NDA requests yet</p>
                  </div>
                ) : (
                  <div className="card overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Name</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Email</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Company</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Title</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Date</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {ndaRequests.map((req, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <span className="text-sm font-medium text-[#111827]">{req.full_name}</span>
                            </td>
                            <td className="px-6 py-4">
                              <a href={`mailto:${req.email}`} className="text-sm text-[#C5A059] hover:underline">{req.email}</a>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#6B7280]">{req.company}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#6B7280]">{req.title}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#9CA3AF]">{formatDate(req.timestamp)}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`badge ${req.status === 'pending' ? 'badge-warning' : 'badge-success'}`}>
                                {req.status || 'pending'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Contact Submissions */}
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-green-600" />
                  Contact Form Submissions ({contacts.length})
                </h3>
                {contacts.length === 0 ? (
                  <div className="card p-8 text-center">
                    <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#6B7280]">No contact submissions yet</p>
                  </div>
                ) : (
                  <div className="card overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Name</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Email</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Message</th>
                          <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {contacts.map((contact, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <span className="text-sm font-medium text-[#111827]">{contact.full_name}</span>
                            </td>
                            <td className="px-6 py-4">
                              <a href={`mailto:${contact.email}`} className="text-sm text-[#C5A059] hover:underline">{contact.email}</a>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#6B7280] truncate max-w-xs block">{contact.message}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-[#9CA3AF]">{formatDate(contact.timestamp)}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div className="animate-fade-in">
              {downloadLogs.length === 0 ? (
                <div className="card p-12 text-center">
                  <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-[#6B7280]">No activity recorded yet</p>
                </div>
              ) : (
                <div className="card overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">User</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Document</th>
                        <th className="text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider px-6 py-3">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {downloadLogs.map((log, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <Download className="w-4 h-4 text-[#6B7280]" />
                              <span className="text-sm text-[#111827]">{log.user_email || 'Anonymous'}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#6B7280]">{log.document_id}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#9CA3AF]">{formatDate(log.downloaded_at)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => { setShowInviteModal(false); setInviteResult(null); setFormError(''); }}>
          <div className="bg-white rounded-lg max-w-md w-full p-6 animate-scale-in" onClick={e => e.stopPropagation()}>
            {inviteResult ? (
              <div>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827]" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    Buyer Invited
                  </h3>
                </div>
                <div className="bg-gray-50 rounded p-4 mb-6">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-[#6B7280] uppercase">Email</label>
                      <p className="text-sm text-[#111827]">{inviteResult.email}</p>
                    </div>
                    <div>
                      <label className="text-xs text-[#6B7280] uppercase">Temporary Password</label>
                      <div className="flex items-center gap-2">
                        <code className="text-sm bg-white px-2 py-1 rounded border font-mono flex-1">{inviteResult.temp_password}</code>
                        <button
                          onClick={() => copyToClipboard(inviteResult.temp_password)}
                          className="btn btn-ghost p-2"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] mb-4">
                  Send these credentials to the buyer. They can log in at <strong>/login</strong>
                </p>
                <button
                  onClick={() => { setShowInviteModal(false); setInviteResult(null); }}
                  className="btn btn-primary w-full"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleInvite}>
                <h3 className="text-xl font-semibold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Invite New Buyer
                </h3>
                {formError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                    {formError}
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    <label className="label">Name *</label>
                    <input
                      type="text"
                      className="input"
                      value={inviteForm.name}
                      onChange={(e) => setInviteForm({...inviteForm, name: e.target.value})}
                      required
                      data-testid="invite-name"
                    />
                  </div>
                  <div>
                    <label className="label">Email *</label>
                    <input
                      type="email"
                      className="input"
                      value={inviteForm.email}
                      onChange={(e) => setInviteForm({...inviteForm, email: e.target.value})}
                      required
                      data-testid="invite-email"
                    />
                  </div>
                  <div>
                    <label className="label">Company</label>
                    <input
                      type="text"
                      className="input"
                      value={inviteForm.company}
                      onChange={(e) => setInviteForm({...inviteForm, company: e.target.value})}
                      data-testid="invite-company"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => { setShowInviteModal(false); setFormError(''); }}
                    className="btn btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="btn btn-primary flex-1"
                    data-testid="invite-submit"
                  >
                    {formLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        Create Invite
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => { setShowUploadModal(false); setFormError(''); }}>
          <div className="bg-white rounded-lg max-w-md w-full p-6 animate-scale-in" onClick={e => e.stopPropagation()}>
            <form onSubmit={handleUpload}>
              <h3 className="text-xl font-semibold text-[#111827] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                Upload Document
              </h3>
              {formError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                  {formError}
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <label className="label">Document Name *</label>
                  <input
                    type="text"
                    className="input"
                    value={uploadForm.name}
                    onChange={(e) => setUploadForm({...uploadForm, name: e.target.value})}
                    placeholder="e.g., OnPoint CIM v2026-02-16r1"
                    required
                    data-testid="upload-name"
                  />
                </div>
                <div>
                  <label className="label">Category *</label>
                  <select
                    className="input"
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm({...uploadForm, category: e.target.value})}
                    data-testid="upload-category"
                  >
                    <option value="teaser">Investment Teaser</option>
                    <option value="cim_times">CIM (Times)</option>
                    <option value="cim_modern">CIM (Modern)</option>
                    <option value="buyer_deck">Buyer Deck</option>
                    <option value="appendix">Appendix Pack</option>
                    <option value="data_room">Data Room Index</option>
                  </select>
                </div>
                <div>
                  <label className="label">Version</label>
                  <input
                    type="text"
                    className="input"
                    value={uploadForm.version}
                    onChange={(e) => setUploadForm({...uploadForm, version: e.target.value})}
                    data-testid="upload-version"
                  />
                </div>
                <div>
                  <label className="label">Description</label>
                  <textarea
                    className="input h-20 resize-none"
                    value={uploadForm.description}
                    onChange={(e) => setUploadForm({...uploadForm, description: e.target.value})}
                    placeholder="Optional description..."
                    data-testid="upload-description"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="is_public"
                    checked={uploadForm.is_public}
                    onChange={(e) => setUploadForm({...uploadForm, is_public: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300"
                    data-testid="upload-public"
                  />
                  <label htmlFor="is_public" className="text-sm text-[#6B7280]">
                    Make publicly accessible (no login required)
                  </label>
                </div>
                <div>
                  <label className="label">File *</label>
                  <input
                    type="file"
                    onChange={(e) => setUploadForm({...uploadForm, file: e.target.files[0]})}
                    className="input pt-2"
                    accept=".pdf,.docx,.doc,.pptx,.ppt,.xlsx,.xls"
                    required
                    data-testid="upload-file"
                  />
                  <p className="text-xs text-[#9CA3AF] mt-1">Accepted: PDF, Word, PowerPoint, Excel</p>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => { setShowUploadModal(false); setFormError(''); }}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="btn btn-primary flex-1"
                  data-testid="upload-submit"
                >
                  {formLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Upload
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
