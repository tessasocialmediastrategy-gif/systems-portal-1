import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ArrowLeft, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = ({ isAdmin = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login(email, password);
      
      if (isAdmin && user.role !== 'admin') {
        setError('Admin access required');
        setLoading(false);
        return;
      }
      
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/portal');
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1765371513492-264506c3ad09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxleGVjdXRpdmUlMjBtZWV0aW5nJTIwcm9vbSUyMGdsYXNzJTIwbW9kZXJufGVufDB8fHx8MTc3MTM0NTU2Nnww&ixlib=rb-4.1.0&q=85)'
        }}
      >
        <div className="absolute inset-0 bg-[#0B1C3E]/60" />
        <div className="relative z-10 flex flex-col justify-end p-12">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            {isAdmin ? 'Admin Portal' : 'Buyer Deal Room'}
          </h2>
          <p className="text-gray-300 max-w-md">
            {isAdmin 
              ? 'Manage buyers, documents, and track engagement with the CIM portal.'
              : 'Access exclusive investment materials, financial data, and deal documentation.'}
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-md w-full mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#111827] mb-8 transition-colors"
            data-testid="back-to-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#0B1C3E] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'Libre Baskerville, serif' }}>TA</span>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              {isAdmin ? 'Admin Sign In' : 'Welcome Back'}
            </h1>
            <p className="text-[#6B7280]">
              {isAdmin 
                ? 'Sign in to manage the CIM portal'
                : 'Sign in to access your deal room'}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded flex items-start gap-3" data-testid="login-error">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="label">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-10"
                  placeholder="you@company.com"
                  required
                  data-testid="login-email"
                />
              </div>
            </div>

            <div>
              <label className="label">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10 pr-10"
                  placeholder="Enter your password"
                  required
                  data-testid="login-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
                  data-testid="toggle-password"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
              data-testid="login-submit"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <Lock className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-[#6B7280] text-center">
              {isAdmin ? (
                <>
                  Looking for buyer access?{' '}
                  <Link to="/login" className="text-[#C5A059] hover:underline">
                    Buyer Portal
                  </Link>
                </>
              ) : (
                <>
                  Are you an admin?{' '}
                  <Link to="/admin/login" className="text-[#C5A059] hover:underline">
                    Admin Portal
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
