import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Brand / Intro (col-span 4) */}
          <div className="lg:col-span-4">
            <Link to="/">
              <img
                src="https://wiremail.in/images/logo-wiremail/wiremail-logo.png"
                alt="Wiremail Logo"
                className="h-12 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Wiremail — Secure, scalable omnichannel messaging for enterprises. SMS, WhatsApp, RCS, Email and Voice APIs with global reach and enterprise-grade delivery.
            </p>

            <div className="flex items-center gap-3">
              <a href="https://facebook.com/wiremail" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/wiremail" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com/wiremail" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Columns (col-span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-4">Navigation</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-4">Products</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/integration" className="hover:text-white">Integrations</Link></li>
                <li><Link to="/partners" className="hover:text-white">Partners</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>

          {/* Get in touch (col-span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Get in touch</h4>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-gray-300" size={18} />
                <p>WZ-177, Street-11, Shiv Nagar Janakpuri<br/>New Delhi 110058</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-300" />
                <a href="tel:+919355603311" className="hover:text-white">+91 9355603311</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-300" />
                <a href="mailto:info@wiremail.in" className="hover:text-white">info@wiremail.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© {currentYear} Wiremail. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919355603311?text=Hello%20Wiremail%2C%20I%20need%20help"
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-6 z-50 rounded-full bg-emerald-600 p-3 shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="white" aria-hidden>
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 .001 5.373 0 12c0 2.11.553 4.144 1.6 5.94L0 24l6.24-1.64A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.92-.44-3.73-1.48-5.32zM12 22.08c-1.66 0-3.28-.44-4.7-1.28l-.34-.2-3.7.97.99-3.6-.22-.37A9.018 9.018 0 0 1 2.94 12C2.94 6.48 7.48 2 12 2s9.06 4.48 9.06 10c0 5.52-4.54 10.08-9.06 10.08z"/>
          <path d="M17.5 14.1c-.3-.1-1.8-.9-2-.9-.2-.1-.3-.1-.5.1s-.6.9-.8 1.1c-.2.2-.4.2-.7.1-1.1-.5-3.6-2-4.8-3.6-.4-.6.4-.6 1.2-2 .1-.2 0-.4 0-.6 0-.2-.5-.5-.8-.8-.2-.2-.5-.2-.8-.1-.6.2-1.6.8-1.6 1.9s1.6 3.5 3.6 5c2 1.6 3.6 1.4 4.1 1.3.4-.1 1.3-.5 1.5-.9.2-.4.2-.8.1-.9-.1-.1-.4-.2-.7-.3z"/>
        </svg>
      </a>
    </footer>
  );
}
