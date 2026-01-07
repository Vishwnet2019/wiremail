import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import dashboardImage from '/images/frontend-ui.png';

const Backend = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
          <div className="relative">
            <div className="absolute inset-0 transform -skew-x-6 bg-blue-500 rounded-lg"></div>
            <img
              className="relative w-full max-w-lg mx-auto rounded-lg shadow-lg"
              src={dashboardImage}
              alt="RCS Platform Dashboard UI"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Explore Our RCS Backend Dashboard
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6">
              Get an in-depth look at our powerful RCS platform. Download our detailed PDF to see the intuitive design and rich features of our dashboard that can help you manage your omnichannel communications effectively.
            </p>
            <a
              href="/pdf/admin-panel.pdf"
              download="rcs-platform-dashboard.pdf"
              className="inline-flex items-center justify-center px-8 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md sm:mt-10 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            >
              <FaFilePdf className="w-5 h-5 mr-3" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;
