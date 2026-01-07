// components/LoginForm.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Header from './header';
import Footer from './Footer';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Add your login logic here
    setTimeout(() => {
      setLoading(false);
      console.log('Login attempt:', { email, password });
      // simulate successful login
      try {
        auth.login({ email });
      } catch (err) {}
      navigate('/app');
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 flex items-center py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
            <div
              className="hidden md:block md:w-1/2 bg-cover bg-center relative"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80')" }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-semibold leading-tight">Secure Omnichannel Messaging</h3>
                <p className="text-white/90 mt-3 max-w-xs">Wiremail unifies SMS, WhatsApp, Email and RCS to help businesses reliably reach customers at scale.</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-12">
              <div className="flex justify-center mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fl9bQC1OEr789Mbi8jcmzEfAd17qFh.png"
                  alt="Wiremail Logo"
                  className="h-14 w-auto"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 text-center">Welcome Back</h2>
              <p className="text-center text-gray-600 mb-6">Enter your email and password to access your account</p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                <div className="flex justify-between items-center">
                  <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="w-full text-purple-600 font-semibold py-3 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition duration-200"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>

          
        </div>
      </main>
      <Footer />
    </>
  );
}