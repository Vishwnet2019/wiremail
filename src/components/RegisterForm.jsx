// components/RegisterForm.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Header from './header';
import Footer from './Footer';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    // Add your registration logic here
    setTimeout(() => {
      setLoading(false);
      setSuccess('Account created successfully!');
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      console.log('Register attempt:', formData);
      try {
        auth.login({ email: formData.email, name: formData.fullName });
      } catch (e) {}
      navigate('/app');
    }, 1500);
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 text-center">Create Account</h2>
              <p className="text-center text-gray-600 mb-6">Join Wiremail today</p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  {success}
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"><span className="text-red-500">*</span> Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-400"
                      required
                    />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"><span className="text-red-500">*</span> Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-400"
                      required
                    />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"><span className="text-red-500">*</span> Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-400"
                      required
                    />
                  <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"><span className="text-red-500">*</span> Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-400"
                      required
                    />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="w-full text-purple-600 font-semibold py-3 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition duration-200"
                >
                  Sign In
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