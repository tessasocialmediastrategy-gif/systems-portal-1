import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const api = {
  // Auth
  login: (email, password) => 
    axios.post(`${API}/auth/login`, { email, password }),
  
  getMe: () => 
    axios.get(`${API}/auth/me`, { headers: getAuthHeader() }),
  
  changePassword: (oldPassword, newPassword) =>
    axios.post(`${API}/auth/change-password`, null, {
      params: { old_password: oldPassword, new_password: newPassword },
      headers: getAuthHeader()
    }),

  // Documents
  getPublicDocuments: () => 
    axios.get(`${API}/documents/public`),
  
  getProtectedDocuments: () => 
    axios.get(`${API}/documents/protected`, { headers: getAuthHeader() }),
  
  getAllDocuments: () => 
    axios.get(`${API}/documents/all`, { headers: getAuthHeader() }),
  
  uploadDocument: (formData) => 
    axios.post(`${API}/documents/upload`, formData, { 
      headers: { ...getAuthHeader(), 'Content-Type': 'multipart/form-data' }
    }),
  
  deleteDocument: (docId) => 
    axios.delete(`${API}/documents/${docId}`, { headers: getAuthHeader() }),

  // Downloads
  getPublicDownloadUrl: (docId) => `${API}/downloads/public/${docId}`,
  
  getProtectedDownloadUrl: (docId) => `${API}/downloads/protected/${docId}`,

  // Admin
  inviteBuyer: (data) => 
    axios.post(`${API}/admin/invite`, data, { headers: getAuthHeader() }),
  
  getUsers: () => 
    axios.get(`${API}/admin/users`, { headers: getAuthHeader() }),
  
  toggleUserActive: (userId) => 
    axios.put(`${API}/admin/users/${userId}/toggle-active`, null, { headers: getAuthHeader() }),
  
  deleteUser: (userId) => 
    axios.delete(`${API}/admin/users/${userId}`, { headers: getAuthHeader() }),
  
  getInvites: () => 
    axios.get(`${API}/admin/invites`, { headers: getAuthHeader() }),
  
  getDownloadLogs: () => 
    axios.get(`${API}/admin/downloads`, { headers: getAuthHeader() }),
  
  getStats: () => 
    axios.get(`${API}/stats`, { headers: getAuthHeader() }),

  // Authority Reviews
  getAuthorityReviews: () => 
    axios.get(`${API}/admin/authority-reviews`, { headers: getAuthHeader() }),
  
  updateReviewStatus: (reviewId, status, notes) => 
    axios.put(`${API}/admin/authority-reviews/${reviewId}/status`, null, { 
      params: { status, notes },
      headers: getAuthHeader() 
    }),

  // NDA Requests
  getNdaRequests: () => 
    axios.get(`${API}/admin/nda-requests`, { headers: getAuthHeader() }),

  // Contacts
  getContacts: () => 
    axios.get(`${API}/admin/contacts`, { headers: getAuthHeader() }),

  // Engagement Analytics
  getAdminAnalytics: () =>
    axios.get(`${API}/admin/analytics`, { headers: getAuthHeader() }),

  // Buyer's own download history
  getMyDownloads: () =>
    axios.get(`${API}/buyer/my-downloads`, { headers: getAuthHeader() }),

  // Seed
  seedAdmin: () => 
    axios.post(`${API}/seed-admin`),
};

export default api;
