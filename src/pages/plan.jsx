import { Helmet } from 'react-helmet';
import PlanCard from "../components/PlanCard"
import Header from "../components/header"
import Footer from "../components/Footer"

const plansData = [
    {
        id: 1,
        name: "A2p",
        status: "Draft",
        price: "₹1",
        priceUnit: "/month",
        components: 1,
        createdDate: "Dec 11, 2025",
        description: "this is dec",
    },
    {
        id: 2,
        name: "aNew Plan",
        status: "Active",
        price: "₹5",
        priceUnit: "/month",
        components: 3,
        createdDate: "Dec 6, 2025",
        description: "a",
    },
    {
        id: 3,
        name: "aplan",
        status: "Draft",
        price: "₹3",
        priceUnit: "/year",
        components: 2,
        createdDate: "Dec 6, 2025",
        description: "a plana ok ok",
    },
    {
        id: 4,
        name: "aSDSdsadsa",
        status: "Active",
        price: "₹10",
        priceUnit: "/month",
        components: 4,
        createdDate: "Dec 8, 2025",
        description: "premium plan",
    },
    {
        id: 5,
        name: "ashish test",
        status: "Draft",
        price: "₹2",
        priceUnit: "/month",
        components: 2,
        createdDate: "Dec 5, 2025",
        description: "test plan",
    },
    {
        id: 6,
        name: "basic info onetest",
        status: "Active",
        price: "₹5",
        priceUnit: "/month",
        components: 5,
        createdDate: "Dec 1, 2025",
        description: "basic plan with info",
    },
]

export default function PlansPage() {
    return (
        <>
            <Helmet>
                <title>Pricing Plans – Wiremail Omnichannel Messaging</title>
                <meta name="description" content="Explore Wiremail pricing plans and choose the perfect tier for your business needs." />
                <meta name="keywords" content="Wiremail pricing, omnichannel messaging plans, pricing tiers" />
                <meta name="author" content="Wiremail" />
                <meta name="publisher" content="Wiremail" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://wiremail.in/pricing" />
                <meta property="og:title" content="Pricing Plans – Wiremail" />
                <meta property="og:description" content="Explore Wiremail pricing plans and choose the perfect tier for your business." />
                <meta property="og:url" content="https://wiremail.in/pricing" />
                <meta name="twitter:title" content="Pricing Plans – Wiremail" />
                <meta name="twitter:description" content="Explore Wiremail pricing plans and choose the perfect tier for your business." />
            </Helmet>
            <Header />
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
                        Wiremail Pricing
                    </h1>
                </div>
            </section>
            <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
                <main className="px-6 py-12 md:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Page Title Section */}
                        <div className="mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-3">Plans</h1>
                            <p className="text-gray-600 text-lg">Manage your subscription plans and pricing tiers.</p>
                        </div>

                        {/* Plans Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plansData.map((plan) => (
                                <PlanCard key={plan.id} plan={plan} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}
