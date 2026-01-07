import { Helmet } from 'react-helmet';
import { Mail, Zap, Users, BarChart3 } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';

export default function HowItWorksPage() {
  const features = [
    {
      icon: Mail,
      title: 'Centralized Omnichannel Messaging',
      description: 'Manage all your channels—email, SMS, WhatsApp, RCS, and chatbots—in one easy-to-use dashboard for maximum efficiency.'
    },
    {
      icon: Zap,
      title: 'Real-Time Engagement',
      description: 'Reach your audience instantly with personalized, automated messages that boost response rates and customer satisfaction.'
    },
    {
      icon: Users,
      title: 'Scalable for Any Business Size',
      description: "Whether you're growing fast or managing high volumes, OmniConnect adapts to your needs without compromising performance."
    },
    {
      icon: BarChart3,
      title: 'Actionable Insights & Analytics',
      description: 'Track every interaction with powerful analytics tools that help you optimize campaigns and make smarter business decisions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wiremail Gateway: Smart Messaging for Business Communication</title>
        <meta name="description" content="Wiremail: Manage all your communication channels in one place. Engage customers instantly and scale your messaging strategy." />
        <meta name="keywords" content="communication strategy, channels of communication, effective communication strategies, communication channels, message passing" />
        <meta name="author" content="Wiremail" />
        <meta name="publisher" content="Wiremail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wiremail.in/how-work" />

        {/* Open Graph */}
        <meta property="og:title" content="Wiremail Gateway: Smart Messaging for Business Communication" />
        <meta property="og:description" content="Wiremail: Manage all your communication channels in one place. Engage customers instantly and scale your messaging strategy." />
        <meta property="og:image" content="https://wiremail.in/images/wiremail-images/wiremail-working.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1307" />
        <meta property="og:image:height" content="421" />
        <meta property="og:url" content="https://wiremail.in/how-work" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wiremail" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wiremail Gateway: Smart Messaging for Business Communication" />
        <meta name="twitter:description" content="Wiremail: Manage all your communication channels in one place. Engage customers instantly and scale your messaging strategy." />
        <meta name="twitter:image" content="https://wiremail.in/images/wiremail-images/wiremail-working.webp" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Banner */}
        <section 
          className="py-16 md:py-20 bg-cover bg-center text-white"
          style={{
            backgroundImage: 'url(https://wiremail.in/images/wiremail-images/background-header-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-8">
              Wiremail: How Does It Work
            </h1>
          </div>
        </section>        

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <p className="text-center text-lg md:text-xl text-gray-700 max-w-full mx-auto mb-8">
              Wiremail Gateway serves as a communication hub between businesses and their customers. It streamlines both incoming and outgoing messages, ensuring smooth and efficient exchanges. By integrating with various platforms, it enables unified messaging, effectively connecting all parties involved.
            </p>

            <div className="mb-8 flex justify-center">
              <img src="https://wiremail.in/images/wiremail-images/wiremail-working.webp" alt="Wiremail Working" className="w-full max-w-full rounded-lg shadow-lg" />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <Icon size={36} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
                    <p className="text-gray-600">{f.description}</p>
                  </div>
                );
              })}
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
