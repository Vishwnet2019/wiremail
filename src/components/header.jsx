import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useContext(AuthContext);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Partners', path: '/partners' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Integration', path: '/integration' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://wiremail.in/images/logo-wiremail/wiremail-logo.png"
              alt="Wiremail Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex gap-3 items-center">
            <Link to="/pricing" className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-700">Buy Now</Link>
            {auth && auth.user ? (
              <>
                <Link to="/app" className="px-4 py-2 border border-gray-200 text-gray-800 font-semibold rounded hover:bg-gray-50">Account</Link>
                <button onClick={auth.logout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Logout</button>
              </>
            ) : (
              <Link to="/login" className="px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50">Login / Register</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded hover:bg-gray-100"
          >
            {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded font-semibold"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 border-t pt-4">
              <Link to="/pricing" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded text-center">Buy Now</Link>
              {auth && auth.user ? (
                <>
                  <Link to="/app" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 text-gray-800 font-semibold rounded">
                    <User size={18} />
                    Account
                  </Link>
                  <button onClick={() => { auth.logout(); setIsOpen(false); }} className="px-4 py-2 text-red-600 font-semibold rounded border border-red-600">Logout</button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded">
                    <User size={18} />
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded text-center">Register</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
