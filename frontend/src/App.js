import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BuyerPortal from "./pages/BuyerPortal";
import AdminDashboard from "./pages/AdminDashboard";
import SystemsBookPage from "./pages/SystemsBookPage";
import SyncMapPage from "./pages/SyncMapPage";
import SBControlPanelPage from "./pages/SBControlPanelPage";

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={requiredRole === 'admin' ? '/admin/login' : '/login'} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// App Routes
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/systems-book" element={<SystemsBookPage />} />
      <Route path="/sync-map" element={<SyncMapPage />} />
      <Route path="/sb-control-panel" element={<SBControlPanelPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/login" element={<LoginPage isAdmin />} />
      
      {/* Protected Buyer Route */}
      <Route 
        path="/portal" 
        element={
          <ProtectedRoute requiredRole="buyer">
            <BuyerPortal />
          </ProtectedRoute>
        } 
      />
      
      {/* Protected Admin Routes */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
