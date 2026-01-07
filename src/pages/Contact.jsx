import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/Footer';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Contact Wiremail: Get in Touch for Omnichannel Solutions</title>
                <meta name="description" content="Contact the Wiremail team for SMS, WhatsApp, RCS, and voice API support. Get pricing, demos, and technical assistance quickly." />
                <meta name="keywords" content="Wiremail contact, Omnichannel messaging support, Wiremail technical support number, Wiremail demo request, API integration help." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://wiremail.in/contact.php" />

                <meta property="og:title" content="Contact Wiremail: Get in Touch for Omnichannel Solutions" />
                <meta property="og:description" content="Contact the Wiremail team for SMS, WhatsApp, RCS, and voice API support. Get pricing, demos, and technical assistance quickly." />
                <meta property="og:image" content="https://wiremail.in/images/logo-wiremail/wiremail-logo.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="500" />
                <meta property="og:url" content="https://wiremail.in/contact.php" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Wiremail" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="OmniConnect Pricing | Affordable Plans for Every Business Size" />
                <meta name="twitter:description" content="Contact the Wiremail team for SMS, WhatsApp, RCS, and voice API support. Get pricing, demos, and technical assistance quickly." />
                <meta name="twitter:image" content="https://wiremail.in/images/logo-wiremail/wiremail-logo.png" />
            </Helmet>

            <Header />

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
                        Contact Us
                    </h1>
                </div>
            </section>

            <main className="min-h-screen bg-gray-50">
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left: Contact Form (takes 2 cols on desktop) */}
                            <div className="lg:col-span-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Send us a message</h2>
                                <p className="text-gray-600 mb-8">Do you have a question? Or need any help to choose the right service from Wiremail? Feel free to contact us</p>

                                <form action="#" method="POST" className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                required
                                                placeholder="Enter your first name"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 placeholder-gray-400 transition"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                required
                                                placeholder="Enter your Last name"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 placeholder-gray-400 transition"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="Enter your email"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 placeholder-gray-400 transition"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Contact Details</label>
                                            <div className="flex gap-2">
                                                <select className="px-3 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 transition">
                                                    <option sele>+91</option>
                                                </select>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    placeholder="Enter your contact number"
                                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 placeholder-gray-400 transition"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            placeholder="Enter your message"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 placeholder-gray-400 transition"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold rounded-full shadow transition"
                                        >
                                            Send a Message
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Right: Info Card */}
                            <div className="lg:col-span-1">
                                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-6 md:p-8 text-white sticky top-32">
                                    <h3 className="text-2xl font-bold mb-6">Hi! We are always here to help you.</h3>

                                    {/* Hotline */}
                                    <div className="bg-blue-700/50 rounded-2xl p-4 mb-4">
                                        <div className="flex items-start gap-3">
                                            <Phone size={20} className="mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-blue-100">Hotline:</p>
                                                <a href="tel:+919355603311" className="text-lg font-semibold text-white hover:text-blue-100 transition">+91 9355603311</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SMS / WhatsApp */}
                                    <div className="bg-blue-700/50 rounded-2xl p-4 mb-4">
                                        <div className="flex items-start gap-3">
                                            <Mail size={20} className="mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-blue-100">SMS / WhatsApp:</p>
                                                <a href="tel:+919355603311" className="text-lg font-semibold text-white hover:text-blue-100 transition">+91 9355603311</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="bg-blue-700/50 rounded-2xl p-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <Mail size={20} className="mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-blue-100">Email:</p>
                                                <a href="mailto:info@wiremail.in" className="text-lg font-semibold text-white hover:text-blue-100 transition break-all">info@wiremail.in</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-blue-700 my-6" />

                                    {/* Social Links */}
                                    <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
                                    <div className="flex gap-4">
                                        <a href="https://facebook.com/wiremail" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">
                                            <Facebook size={24} />
                                        </a>
                                        <a href="https://instagram.com/wiremail" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="https://twitter.com/wiremail" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">
                                            <Twitter size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 pt-0 md:py-16 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6 lg:px-12">
                        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.063412491858!2d77.09088588848103!3d28.628811819855127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04a40374a3b5%3A0xa6c8b41ccb7bda71!2sShiv%20Nagar%2C%20Janakpuri%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1744023927713!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    );
}
