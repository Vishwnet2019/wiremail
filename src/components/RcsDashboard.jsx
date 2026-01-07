import React, { useState } from 'react';
import { FaFilePdf, FaEye, FaComments, FaChartLine, FaUserShield, FaClock, FaGlobe, FaMobileAlt } from 'react-icons/fa';

const RcsDashboard = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {/* RCS Dashboard Section */}
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Explore Our RCS Agent Dashboard
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 px-4 lg:px-0">
                Get an in-depth look at our powerful RCS platform. Download our detailed PDF to see the intuitive design and rich features of our dashboard that can help you manage your omnichannel communications effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center lg:justify-start px-4 lg:px-0">
                <a
                  href="/pdf/frontend.pdf"
                  download="rcs-platform-dashboard.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  <FaFilePdf className="w-5 h-5 mr-3" />
                  Download PDF
                </a>
                <button
                  onClick={() => setShowPreview(true)}
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold text-blue-600 transition-all duration-200 bg-white border-2 border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  <FaEye className="w-5 h-5 mr-3" />
                  Preview PDF
                </button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 px-4 sm:px-6 lg:px-0">
              <div className="absolute inset-0 transform -skew-x-6 bg-blue-500 rounded-lg opacity-80"></div>
              <img
                className="relative w-full max-w-lg mx-auto rounded-lg shadow-2xl"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="RCS Platform Dashboard UI"
              />
            </div>
          </div>
        </div>

        {/* PDF Preview Modal */}
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <div className="relative w-full h-full max-w-6xl bg-white rounded-lg shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Dashboard Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="/pdf/frontend.pdf"
                  className="w-full h-full"
                  title="Dashboard Preview"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Benefits of Omnichannel Communication Section */}
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Benefits of Omnichannel Communication
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 max-w-3xl mx-auto px-4">
              Transform your customer engagement with our comprehensive omnichannel communication platform designed for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {/* Benefit 1 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-lg mb-4">
                <FaComments className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Unified Messaging
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Manage all customer conversations from a single platform, including SMS, RCS, WhatsApp, and more.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-lg mb-4">
                <FaChartLine className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enhanced Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track engagement metrics, delivery rates, and customer behavior with real-time analytics and insights.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-green-600 rounded-lg mb-4">
                <FaUserShield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Compliant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with end-to-end encryption and compliance with global data protection standards.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-orange-600 rounded-lg mb-4">
                <FaClock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Availability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automated responses and chatbots ensure your customers receive instant support anytime, anywhere.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-cyan-600 rounded-lg mb-4">
                <FaGlobe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with customers worldwide through multiple channels and languages with seamless integration.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-yellow-600 rounded-lg mb-4">
                <FaMobileAlt className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mobile-First Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for mobile devices with responsive design, ensuring perfect experience across all screens.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 px-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Get Started Today
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 transition-all duration-200 bg-white border-2 border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RcsDashboard;