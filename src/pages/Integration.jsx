import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import { Mail, Laptop, BarChart, MessageSquare } from 'lucide-react';

export default function IntegrationPage() {
    return (
        <>
            <Helmet>
                <title>OmniConnect Integration | Automate Business Communications</title>
                <meta name="description" content="Need WhatsApp Business API or bulk email and SMS integration? Wiremail connects seamlessly to boost customer engagement." />
                <meta name="keywords" content="Wiremail integrations, OmniConnect API integration, Email API integration, WhatsApp Business API integration. SMS API integration." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://wiremail.in/integration.php" />

                <meta property="og:title" content="OmniConnect Integration | Automate Business Communications" />
                <meta property="og:description" content="Need WhatsApp Business API or bulk email and SMS integration? Wiremail connects seamlessly to boost customer engagement." />
                <meta property="og:image" content="https://wiremail.in/images/logo-wiremail/wiremail-logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="500" />
                <meta property="og:url" content="https://wiremail.in/integration.php" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Wiremail" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="OmniConnect Integration | Automate Business Communications" />
                <meta name="twitter:description" content="Need WhatsApp Business API or bulk email and SMS integration? Wiremail connects seamlessly to boost customer engagement." />
                <meta name="twitter:image" content="https://wiremail.in/images/logo-wiremail/wiremail-logo.png" />
            </Helmet>

            <Header />


            <main className="min-h-screen bg-white">
                {/* Hero Banner Section */}
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
                            Integration
                        </h1>
                    </div>
                </section>
                {/* Why Choose Wiremail Features Section */}
                <section className="py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Why Choose Wiremail?</h2>
                            <p className="text-lg text-gray-600">Flexible, scalable, and built for developers and businesses alike.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Reliable Email Delivery */}
                            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow hover:shadow-lg transition-all">
                                <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full mb-6">
                                    <Mail className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Email Delivery</h3>
                                <p className="text-gray-600">
                                    Wiremail ensures your emails land in the inbox, not the spam folder, using advanced deliverability tools and clean IP reputation.
                                </p>
                            </div>

                            {/* User-Friendly Interface */}
                            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow hover:shadow-lg transition-all">
                                <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full mb-6">
                                    <Laptop className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">User-Friendly Interface</h3>
                                <p className="text-gray-600">
                                    The platform is simple and intuitive, making it easy to create, send, and track email campaigns—even for beginners.
                                </p>
                            </div>

                            {/* Scalable for Any Business Size */}
                            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow hover:shadow-lg transition-all">
                                <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full mb-6">
                                    <BarChart className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable for Any Business Size</h3>
                                <p className="text-gray-600">
                                    Whether you're a startup or an enterprise, Wiremail grows with you, offering flexible plans and robust performance at every level.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Integrations Section */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
                        <div className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Global</h2>
                                <hr className="border-gray-300" />

                            {/* Instant Messenger Section */}
                            <h3 className="text-3xl font-semibold text-gray-900 mt-8 mb-6">Instant Messenger</h3>
                            <div className="flex flex-wrap gap-6">
                                {/* WhatsApp */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-md hover:shadow-lg transition-shadow">
                                        <MessageSquare className="w-10 h-10 text-white" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900">WhatsApp</span>
                                </div>

                                {/* Google RCS */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-md hover:shadow-lg transition-shadow">
                                        <MessageSquare className="w-10 h-10 text-white" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900">Google RCS</span>
                                </div>
                            </div>

                            {/* Email Section */}
                            <h3 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">Email</h3>
                            <div className="flex flex-wrap gap-6">
                                {/* Gmail */}
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4 shadow-md hover:shadow-lg transition-shadow">
                                        <Mail className="w-10 h-10 text-white" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900">Gmail</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Trusted Partners Section */}
                <section className="py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Our Trusted Partners</h2>
                        <p className="text-center text-lg text-gray-600 mb-12">Together, we empower businesses worldwide to connect, engage, and grow through unified messaging solutions that drive real results.</p>

                        <div className="bg-gradient-to-r from-purple-300 via-purple-200 to-gray-100 rounded-xl py-12 md:py-16">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center justify-center px-4 md:px-8">
                                {/* Partner 1 */}
                                <div className="flex justify-center">
                                    <img 
                                        src="https://www.wiremail.in/images/logo-wiremail/logo1.png" 
                                        alt="Wiremail company logo brand"
                                        className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform"
                                    />
                                </div>

                                {/* Partner 2 */}
                                <div className="flex justify-center">
                                    <img 
                                        src="https://www.wiremail.in/images/logo-wiremail/logo2.webp" 
                                        alt="Wiremail company logo brand"
                                        className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform"
                                    />
                                </div>

                                {/* Partner 3 */}
                                <div className="flex justify-center">
                                    <img 
                                        src="https://www.wiremail.in/images/logo-wiremail/logo3.png" 
                                        alt="Wiremail company logo brand"
                                        className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform"
                                    />
                                </div>

                                {/* Partner 4 */}
                                <div className="flex justify-center">
                                    <img 
                                        src="https://www.wiremail.in/images/logo-wiremail/logo4.png" 
                                        alt="Wiremail company logo brand"
                                        className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Cta
                    title="Become a Partner"
                    subtitle="Join forces with Wiremail and unlock new opportunities in the world of omnichannel communication. As a partner, you'll gain access to a powerful platform."
                    primaryLabel="Request Demo"
                    primaryTo="/contact"
                    secondaryLabel="Contact Sales"
                    secondaryTo="/contact"
                />

                {/* Get Started Section */}
                <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Started</h2>
                        <p className="text-xl text-gray-600 mb-10">
                            Check out our developer portal for docs, tutorials, and support to kick off your integration.
                        </p>
                        <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            Request Demo
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
