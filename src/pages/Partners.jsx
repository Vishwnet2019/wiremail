import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';

export default function PartnersPage() {
  return (
    <>
      <Helmet>
        <title>Wiremail Partners: Join Our Network of Trusted Messaging Experts</title>
        <meta name="description" content="Join the Wiremail Partners ecosystem and empower businesses with unified messaging solutions. Discover revenue opportunities today!." />
        <meta name="keywords" content="Wiremail Partners, OmniConnect partners, Omnichannel messaging partners, Communication API partners." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wiremail.in/partners.php" />

        {/* Open Graph */}
        <meta property="og:title" content="Wiremail Partners: Join Our Network of Trusted Messaging Experts" />
        <meta property="og:description" content="Join the Wiremail Partners ecosystem and empower businesses with unified messaging solutions. Discover revenue opportunities today!." />
        <meta property="og:image" content="https://wiremail.in/images/logo-wiremail/wiremail-logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:url" content="https://wiremail.in/partners.php" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wiremail" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wiremail Partners: Join Our Network of Trusted Messaging Experts" />
        <meta name="twitter:description" content="Join the Wiremail Partners ecosystem and empower businesses with unified messaging solutions. Discover revenue opportunities today!." />
        <meta name="twitter:image" content="https://wiremail.in/images/logo-wiremail/wiremail-logo.png" />
      </Helmet>

      <Header />
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
              Our Partners
            </h1>
          </div>
        </section>

      <main className="min-h-screen bg-white">
        <section className="pt-12 pb-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Trusted Partners</h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 mb-8">Together, we empower businesses worldwide to connect, engage, and grow through unified messaging solutions that drive real results.</p>
          </div>
        </section>

        <section className="py-6" style={{ background: 'linear-gradient(135deg, #ae98d5, #ecebec)' }}>
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="partner-logo w-36 h-auto flex items-center justify-center">
                <img src="https://www.wiremail.in/images/logo-wiremail/logo1.png" alt="wiremail-company-logo-brand-1" className="w-full h-auto" />
              </div>

              <div className="partner-logo w-36 h-auto flex items-center justify-center">
                <img src="https://www.wiremail.in/images/logo-wiremail/logo2.webp" alt="wiremail-company-logo-brand-2" className="w-full h-auto" />
              </div>

              <div className="partner-logo w-36 h-auto flex items-center justify-center">
                <img src="https://www.wiremail.in/images/logo-wiremail/logo3.png" alt="wiremail-company-logo-brand-3" className="w-full h-auto" />
              </div>

              <div className="partner-logo w-36 h-auto flex items-center justify-center">
                <img src="https://www.wiremail.in/images/logo-wiremail/logo4.png" alt="wiremail-company-logo-brand-4" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        <Cta
          title="Become a Partner"
          subtitle="Join forces with Wiremail and unlock new opportunities in the world of omnichannel communication. As a partner, you’ll gain access to a powerful platform."
          primaryLabel="Request Demo"
          primaryTo="/contact"
          secondaryLabel="Contact Sales"
          secondaryTo="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
