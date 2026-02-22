import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BuyerPortal from "./pages/BuyerPortal";
import AdminDashboard from "./pages/AdminDashboard";
import SystemsBookPage from "./pages/SystemsBookPage";
import BookReaderPage from "./pages/BookReaderPage";
import BookDocsPage from "./pages/BookDocsPage";
import BookPage from "./pages/BookPage";
import SyncMapPage from "./pages/SyncMapPage";
import SBControlPanelPage from "./pages/SBControlPanelPage";
import SystemsPage from "./pages/SystemsPage";
import GovernancePage from "./pages/GovernancePage";
import CertificationPage from "./pages/CertificationPage";
import AuthorityReviewPage from "./pages/AuthorityReviewPage";
import AboutPage from "./pages/AboutPage";
import PlatformPage from "./pages/PlatformPage";
import LeadershipPage from "./pages/LeadershipPage";
import OutcomesPage from "./pages/OutcomesPage";
import ContactPage from "./pages/ContactPage";
import InvestorDataRoomPage from "./pages/InvestorDataRoomPage";
import TeaserPage from "./pages/TeaserPage";
import NDARequestPage from "./pages/NDARequestPage";
import CIMDownloadPage from "./pages/CIMDownloadPage";
import AppendixPage from "./pages/AppendixPage";
import SkeletonPage from "./pages/SkeletonPage";

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
      <Route path="/read-book" element={<BookReaderPage />} />
      <Route path="/book-docs" element={<BookDocsPage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/sync-map" element={<SyncMapPage />} />
      <Route path="/sb-control-panel" element={<SBControlPanelPage />} />
      <Route path="/systems" element={<SystemsPage />} />
      <Route path="/governance" element={<GovernancePage />} />
      <Route path="/certification" element={<CertificationPage />} />
      <Route path="/authority-review" element={<AuthorityReviewPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/platform" element={<PlatformPage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
      <Route path="/outcomes" element={<OutcomesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/investor/data-room" element={<InvestorDataRoomPage />} />
      <Route path="/investor/teaser" element={<TeaserPage />} />
      <Route path="/investor/nda-request" element={<NDARequestPage />} />
      <Route path="/investor/cim-download" element={<CIMDownloadPage />} />
      <Route path="/investor/appendix" element={<AppendixPage />} />
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
      
      {/* Fallback - Skeleton pages for any unmapped routes from Sync Map */}
      <Route path="/governance/*" element={<SkeletonPage />} />
      <Route path="/systems-book/*" element={<SkeletonPage />} />
      <Route path="/authority-os" element={<SkeletonPage />} />
      <Route path="/authority-os/*" element={<SkeletonPage />} />
      <Route path="/investor/*" element={<SkeletonPage />} />
      <Route path="/website-architecture" element={<SkeletonPage />} />
      <Route path="/website-architecture/*" element={<SkeletonPage />} />
      <Route path="/resources/*" element={<SkeletonPage />} />
      
      {/* 404 Fallback */}
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
