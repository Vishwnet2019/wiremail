import { Helmet } from 'react-helmet';
import { BarChart3, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import RcsDashboard from '../components/RcsDashboard';
import Backend from '../components/Backend';

export default function HomePage() {
    const benefits = [
        {
            icon: BarChart3,
            title: 'Real-Time Data Integration',
            description: 'With Communications Platform as a Service (CPaaS) solutions, companies have access to centralized dashboards and analytics that offer a 360-degree view of the customer experience. Data is synchronized across all channels, improving decision-making.'
        },
        {
            icon: MessageSquare,
            title: 'Improved Customer Experience',
            description: 'When a customer starts a conversation on one channel and continues on another, they expect the context to be preserved. Omnichannel platforms unify conversations through message-oriented middleware that keeps every touchpoint aligned.'
        },
        {
            icon: TrendingUp,
            title: 'Higher Sales Conversion Rates',
            description: 'With personalized, context-aware interactions, your messaging hits the mark more often. Whether it\'s automated cart recovery messages via SMS or tailored recommendations on social media, omnichannel communication increases conversions.'
        },
        {
            icon: Zap,
            title: 'Operational Efficiency',
            description: 'By integrating various tools into one communication middleware system, companies eliminate redundancy and streamline workflows. Support teams work faster, marketing campaigns are more targeted.'
        }
    ];

    const trustedLogos = [
        { src: 'https://wiremail.in/images/logo-wiremail/logo1.png', alt: 'CarePay' },
        { src: 'https://wiremail.in/images/logo-wiremail/logo3.png', alt: 'Community Health' },
        { src: 'https://wiremail.in/images/logo-wiremail/logo4.png', alt: 'PayCare' },
        { src: 'https://wiremail.in/images/logos/policy.png', alt: 'Policy.online' },
        { src: 'https://wiremail.in/images/logo-wiremail/logo2.webp', alt: 'eSign.Digital' }
    ];

    return (
        <>
            <Helmet>
                <title>Wiremail – AI-Powered Omnichannel Messaging Platform</title>
                <meta name="description" content="Wiremail – AI-powered messaging platform for seamless omnichannel communication across email, SMS, WhatsApp, RCS, and more." />
                <meta name="keywords" content="Wiremail, omnichannel communication, messaging platform, WhatsApp business, chatbot, RCS, email marketing, SMS marketing" />
                <meta name="author" content="Wiremail" />
                <meta name="publisher" content="Wiremail" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#2563eb" />
                <link rel="canonical" href="https://wiremail.in/" />

                {/* Open Graph */}
                <meta property="og:title" content="Wiremail – AI-Powered Omnichannel Messaging Platform" />
                <meta property="og:description" content="Wiremail – AI-powered messaging platform for seamless omnichannel communication across email, SMS, WhatsApp, RCS, and more." />
                <meta property="og:image" content="https://wiremail.in/assets/images/default-og.webp" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://wiremail.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Wiremail" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wiremail – AI-Powered Omnichannel Messaging" />
                <meta name="twitter:description" content="Wiremail – AI-powered messaging platform for seamless omnichannel communication." />
                <meta name="twitter:image" content="https://wiremail.in/assets/images/default-og.webp" />
                <meta name="twitter:site" content="@wiremail" />
                <meta name="twitter:creator" content="@wiremail" />
            </Helmet>

            <Header />

            <main>
                {/* Desktop Hero Section */}
                <section className="hidden lg:block bg-gradient-to-b from-amber-50 to-amber-100 py-16">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="py-8">
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    CUSTOMER ENGAGE PLATFORM
                                </span>

                                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                    What is Omnichannel Communication?
                                </h1>

                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Omnichannel communication is a strategic approach to customer engagement that ensures seamless interactions across various communication channels—whether it's email, SMS, Google RCS, WhatsApp Business, social media, live chat, or voice.
                                </p>

                                <a href="/about" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow duration-200">
                                    Know More
                                </a>
                            </div>

                            {/* Right Image */}
                            <div className="flex justify-center items-center">
                                <img
                                    src="https://wiremail.in/images/banner/omnichannel.webp"
                                    alt="Omnichannel Communication"
                                    className="w-full h-auto object-contain max-w-md"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mobile/Tablet Hero Section */}
                <section className="lg:hidden bg-gradient-to-b from-amber-50 to-amber-100 py-12">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                CUSTOMER ENGAGE PLATFORM
                            </span>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What is Omnichannel Communication?
                            </h1>
                        </div>

                        {/* Image Section */}
                        <div className="mb-8">
                            <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://wiremail.in/images/banner/omnichannel.webp"
                                    alt="Omnichannel Communication"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Info Box */}
                            <div className="bg-white rounded-lg p-4 mt-6 shadow-md">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <i className="fas fa-network-wired text-2xl text-blue-600"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Redundant Communication Infra
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-center">
                            <p className="text-base text-gray-700 mb-8 leading-relaxed">
                                Omnichannel communication is a strategic approach to customer engagement that ensures seamless interactions across various communication channels.
                            </p>

                            <a href="/about" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow duration-200">
                                Know More
                            </a>
                        </div>
                    </div>
                </section>

                {/* Trusted By Section */}
                <section className="py-12 md:py-16 bg-gradient-to-r from-purple-300 to-gray-200">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Trusted by Industry Leaders
                            </h2>
                            <p className="text-gray-700 px-4 md:px-12">
                                Join over 2,000 businesses worldwide who rely on Wiremail to power their communication strategies.
                            </p>
                        </div>

                        {/* Logo Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
                            {trustedLogos.map((logo, idx) => (
                                <div key={idx} className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="w-24 h-16 md:w-32 md:h-20 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                                Benefits of Omnichannel Communication
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {benefits.map((benefit, idx) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div key={idx} className="p-6 md:p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
                                        <div className="mb-4">
                                            <IconComponent size={40} className="text-blue-600" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <RcsDashboard />
                <Backend />

                {/* Omnichannel vs Multichannel Section */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Image */}
                            <div className="order-2 lg:order-1">
                                <img
                                    src="https://wiremail.in/images/banner/omnichannel-vs-multichannel.webp"
                                    alt="Omnichannel vs Multichannel"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    What is the difference between omnichannel vs. multichannel?
                                </h2>

                                <p className="text-gray-600 mb-6">
                                    Though often used interchangeably, multichannel and omnichannel communication differ significantly in both philosophy and execution.
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Multichannel Communication
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        With a multichannel strategy, an organization provides multiple communication channels—email, SMS, social media, etc.—but the different channels function autonomously. There is no inherent continuity or context between them. A customer must repeat themselves while changing channels, which results in friction and disappointment.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Omnichannel Communication
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Omnichannel communication ties all channels into a unified system. No matter where a conversation starts or gets picked up, all the right information comes with it. One brand, one voice, one message—each time. This integration is facilitated through communication middleware.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Omnichannel Working Graphic */}
                <section className="py-12 md:py-16 bg-gradient-to-r from-purple-500 to-purple-600">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <img
                            src="https://wiremail.in/images/banner/omnichannel-working.png"
                            alt="Seamless Omnichannel Communication With Wiremail"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </section>

                <Cta
                    title="Get Started Today"
                    subtitle="Ready to revolutionize how you connect? Sign up for a free trial and experience the Wiremail difference."
                    primaryLabel="Know More"
                    primaryTo="/contact"
                    secondaryLabel="About"
                    secondaryTo="/about"
                />
            </main>

            <Footer />
        </>
    );
}

<Footer />
