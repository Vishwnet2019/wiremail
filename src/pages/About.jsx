import { Helmet } from 'react-helmet';
import { CheckCircle } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Wiremail – Omnichannel Communication Platform</title>
        <meta name="description" content="Omnichannel Communication by Wiremail integrates email, CPaaS, RCS, WhatsApp, and chatbots into one seamless platform. Build stronger customer connections today." />
        <meta name="keywords" content="Omnichannel Communication, WhatsApp Business api, SMS chatbots, CPaaS, Google RCS, real-time messaging, middleware communication, communication channels, middleware service, notification management" />
        <meta name="author" content="Wiremail" />
        <meta name="publisher" content="Wiremail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wiremail.in/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Wiremail – Omnichannel Communication Platform" />
        <meta property="og:description" content="Omnichannel Communication by Wiremail integrates email, CPaaS, RCS, WhatsApp, and chatbots into one seamless platform. Build stronger customer connections today." />
        <meta property="og:image" content="https://wiremail.in/images/wiremail-images/platform-side-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="646" />
        <meta property="og:image:height" content="408" />
        <meta property="og:url" content="https://wiremail.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wiremail" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Wiremail – Omnichannel Communication Platform" />
        <meta name="twitter:description" content="Omnichannel Communication by Wiremail integrates email, CPaaS, RCS, WhatsApp, and chatbots into one seamless platform." />
        <meta name="twitter:image" content="https://wiremail.in/images/wiremail-images/platform-side-image.png" />
        <meta name="twitter:site" content="@wiremail" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Banner Section */}
        <section 
          className="py-16 md:py-20 bg-cover bg-center text-white"
          style={{
            backgroundImage: 'url(/images/wiremail-images/background-header-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-8">
              About Us
            </h1>
          </div>
        </section>

        {/* Section 2 - Introduction */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <p className="text-lg md:text-xl text-center text-gray-800 mb-12 max-w-full mx-auto leading-relaxed">
              We help brands deliver consistent, personalized, and real-time messages across all channels, creating stronger relationships and better results. With cutting-edge technology and a customer-first approach, Wiremail is your trusted partner in building smarter, more connected communication strategies.
            </p>

            {/* Image Section */}
            <div className="mb-12 flex justify-center">
              <img
                src="/images/wiremail-images/wiremail-message-image.png"
                alt="Wiremail Message Platform"
                className="w-full max-w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Heading and Description */}
            <div className="max-w-full mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seamless Omnichannel Communication at Its Best
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                At Wiremail, we believe in the power of seamless{' '}
                <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                  omnichannel communication
                </a>{' '}
                to transform the way businesses connect with their customers. Our mission is to unify every touchpoint—email, CPaaS, Google RCS, WhatsApp Business, SMS chatbots, and more—into one powerful, user-friendly platform.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Omnichannel Details */}
        <section className="py-12 md:py-20 bg-purple-100">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  OmniConnect – The Ultimate Omnichannel Messaging Platform for Businesses
                </h2>

                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  At OmniConnect, we empower businesses to connect with their customers like never before. As a leading omnichannel communication platform, we bring together email, CPaaS, Google RCS, WhatsApp Business, SMS chatbots, and more—into one seamless, unified system.
                </p>

                {/* Benefits List */}
                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800">
                        Our mission is to help brands deliver personalized, real-time messages across every channel, ensuring consistency, engagement, and results.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800">
                        Whether you're a startup or an enterprise, OmniConnect gives you the tools to streamline your communication, enhance customer experience, and drive growth.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800">
                        Experience the future of business messaging with a platform built for flexibility, speed, and scalability. OmniConnect—where your communication becomes truly connected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center items-center">
                <img
                  src="https://wiremail.in/images/wiremail-images/platform-side-image.png"
                  alt="About - Omnichannel Messaging Platform"
                  className="w-full max-w-xxl rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <Cta
          title="Get Started Today"
          subtitle="Ready to revolutionize how you connect? Sign up for a free trial and experience the OmniConnect difference."
          primaryLabel="Know More"
          primaryTo="/contact"
          secondaryLabel="Home"
          secondaryTo="/"
        />
      </main>

      <Footer />
    </>
  );
}
