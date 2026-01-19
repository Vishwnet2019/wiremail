import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';

const faqs = [
  {
    q: 'What is OmniConnect?',
    a: 'OmniConnect is an all-in-one omnichannel messaging platform that allows businesses to communicate with customers across multiple channels, including email, SMS, WhatsApp, Google RCS, and more, from a single unified dashboard.'
  },
  {
    q: 'How does OmniConnect improve customer engagement?',
    a: 'OmniConnect enables businesses to send personalized, automated messages in real time, enhancing customer interaction and satisfaction across every communication touchpoint.'
  },
  {
    q: 'Can I integrate OmniConnect with my existing tools?',
    a: 'Yes, OmniConnect offers seamless integrations with popular CRM systems, marketing automation platforms, and other business tools to help you streamline your communication workflow.'
  },
  {
    q: 'Is OmniConnect scalable for businesses of all sizes?',
    a: "Absolutely! Whether you're a small startup or a large enterprise, OmniConnect is built to scale, providing solutions that grow with your business and adapt to your needs."
  }
];

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>OmniConnect | Frequently Asked Questions | Wiremail</title>
        <meta name="description" content="Get quick answers about the OmniConnect omnichannel messaging platform. Learn about SMS, WhatsApp, RCS, pricing, and more in our FAQ." />
        <meta name="keywords" content="OmniConnect FAQ, Omnichannel messaging FAQs, OmniConnect troubleshooting, Omnichannel Communication FAQ." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wiremail.in/faq.php" />

        <meta property="og:title" content="OmniConnect | Frequently Asked Questions | Wiremail" />
        <meta property="og:description" content="Get quick answers about the OmniConnect omnichannel messaging platform. Learn about SMS, WhatsApp, RCS, pricing, and more in our FAQ." />
        <meta property="og:image" content="https://wiremail.in/images/logo-wiremail/wiremail-logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:url" content="https://wiremail.in/faq.php" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wiremail" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OmniConnect | Frequently Asked Questions | Wiremail" />
        <meta name="twitter:description" content="Get quick answers about the OmniConnect omnichannel messaging platform. Learn about SMS, WhatsApp, RCS, pricing, and more in our FAQ." />
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
              FAQ'S
            </h1>
          </div>
        </section>

      <main className="min-h-screen bg-white">
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="row">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-base md:text-lg text-gray-600 mt-3">Everything you need to know about using OmniConnect.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                {faqs.slice(0, 2).map((f, i) => (
                  <details key={i} className="mb-4 bg-white border rounded-lg shadow-sm">
                    <summary className="cursor-pointer px-4 py-3 text-lg font-medium text-gray-800">{f.q}</summary>
                    <div className="px-4 pb-4 text-gray-600">{f.a}</div>
                  </details>
                ))}
              </div>

              <div>
                {faqs.slice(2).map((f, i) => (
                  <details key={i} className="mb-4 bg-white border rounded-lg shadow-sm">
                    <summary className="cursor-pointer px-4 py-3 text-lg font-medium text-gray-800">{f.q}</summary>
                    <div className="px-4 pb-4 text-gray-600">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Cta
          title="See It in Action"
          subtitle="Request a demo to explore how OmniConnect transforms your workflows into a competitive advantage."
          primaryLabel="Request Demo"
          primaryTo="/contact"
          secondaryLabel="Learn More"
          secondaryTo="/about"
        />
      </main>

      <Footer />
    </>
  );
}
