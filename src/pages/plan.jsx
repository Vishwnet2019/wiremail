import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/header"
import Footer from "../components/Footer"

const TenantForm = ({ selectedPlan, onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    botAgent: 'Jio',
    brand: '',
    agentName: '',
    logo: null,
    banner: null,
    email: '',
    hostingRegion: '',
    billingCategory: '',
    useCase: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 flex items-stretch justify-end z-50"
      onClick={onBack}
    >
      <div 
        className="bg-white w-full max-w-lg h-full overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-amber-900 text-white p-5 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">Create New RCS Tenant</h2>
            <p className="text-amber-100 text-xs mt-1">Step 1 of 2: Agent Details</p>
          </div>
          <button onClick={onBack} className="text-white hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* BotAgent */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-700 mb-2">BotAgent</label>
            <div className="flex gap-4">
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="botAgent"
                  value="Jio"
                  checked={formData.botAgent === 'Jio'}
                  onChange={(e) => setFormData({...formData, botAgent: e.target.value})}
                  className="mr-2"
                />
                Jio
              </label>
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="botAgent"
                  value="Google"
                  checked={formData.botAgent === 'Google'}
                  onChange={(e) => setFormData({...formData, botAgent: e.target.value})}
                  className="mr-2"
                />
                Google
              </label>
            </div>
          </div>

          {/* Brand */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Brand <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.brand}
              onChange={(e) => setFormData({...formData, brand: e.target.value})}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select a brand</option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
              <option value="brand3">Brand 3</option>
            </select>
          </div>

          {/* Agent Name */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Agent Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              maxLength={40}
              value={formData.agentName}
              onChange={(e) => setFormData({...formData, agentName: e.target.value})}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">40 characters left</p>
          </div>

          {/* Logo and Banner */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Logo <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({...formData, logo: e.target.files[0]})}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md"
              />
              <p className="text-xs text-gray-500 mt-1">Max: 2MB</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Banner <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({...formData, banner: e.target.files[0]})}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md"
              />
              <p className="text-xs text-gray-500 mt-1">Max: 2MB</p>
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="example@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Hosting Region and Billing Category */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Hosting Region <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.hostingRegion}
                onChange={(e) => setFormData({...formData, hostingRegion: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select region</option>
                <option value="us-east">US East</option>
                <option value="us-west">US West</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Can't change later</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Billing Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.billingCategory}
                onChange={(e) => setFormData({...formData, billingCategory: e.target.value})}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="prepaid">Prepaid</option>
                <option value="postpaid">Postpaid</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Can't change later</p>
            </div>
          </div>

          {/* Use Case */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Use Case <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.useCase}
              onChange={(e) => setFormData({...formData, useCase: e.target.value})}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select use case</option>
              <option value="marketing">Marketing</option>
              <option value="support">Customer Support</option>
              <option value="sales">Sales</option>
              <option value="notifications">Notifications</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Can't change later</p>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-600 mb-5">
            By clicking "Next", you agree to the <a href="#" className="text-amber-800 hover:underline">Terms of Service</a>.
          </p>

          {/* Buttons */}
          <div className="flex justify-end items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors flex items-center gap-2"
            >
              Next: Choose Plan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function PlansPage() {
  const [showTenantForm, setShowTenantForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('Monthly');
  const [planType, setPlanType] = useState('All Plans');

  const allPlans = [
    { id: 1, name: "A2p", price: "$1", period: "/month", description: "this is dec" },
    { id: 2, name: "aNew Plan", price: "$5", period: "/month", description: "a" },
    { id: 3, name: "aplan", price: "$3", period: "/month", description: "a plana ok ok" },
    { id: 4, name: "aSDSdsadsa", price: "$1111", period: "/month", description: "sdadaSD" },
    { id: 5, name: "ashish test", price: "$3", period: "/month", description: "aa" },
    { id: 6, name: "basic info onetest", price: "$0", period: "/month", description: "this" },
    { id: 7, name: "basic info plan comp", price: "$1", period: "/month", description: "this is" },
    { id: 8, name: "Basic Inform NePlan", price: "$4", period: "/month", description: "Basic Information" },
    { id: 9, name: "Basic Plan", price: "$167.66", period: "/month", description: "Perfect for individuals and small teams getting started." },
    { id: 10, name: "New Planaaaa", price: "$2.04", period: "/month", description: "hhhhh" },
    { id: 11, name: "New Planok", price: "$0", period: "/month", description: "hjj" },
    { id: 12, name: "plan billing page", price: "$6", period: "/month", description: "this is billing" },
    { id: 13, name: "plan components one", price: "$6", period: "/month", description: "plan components one" },
    { id: 14, name: "preview testing", price: "$7", period: "/month", description: "this" },
    { id: 15, name: "rome plan", price: "$3", period: "/month", description: "this is" },
    { id: 16, name: "testing 101", price: "$11233", period: "/month", description: "this is description" },
    { id: 17, name: "testing 3", price: "$59.36", period: "/month", description: "this is des" },
    { id: 18, name: "testings one", price: "$1553.58", period: "/month", description: "this is description" },
    { id: 19, name: "testings two", price: "$108.75", period: "/month", description: "this is description" },
    { id: 20, name: "testinh ashish 01", price: "$20", period: "/month", description: "kk" },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowTenantForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with plan:', selectedPlan, 'and data:', formData);
    setShowTenantForm(false);
    setSelectedPlan(null);
    // Add your logic here to handle the final submission
  };

  const handleFormBack = () => {
    setShowTenantForm(false);
    setSelectedPlan(null);
  };

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
      
      <div className="bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="min-h-screen">
          <main className="px-6 py-12 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Plan</h1>
                <p className="text-gray-600">Select a subscription plan to add to this tenant</p>
              </div>

              {/* Billing Cycle Toggle */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Billing Cycle</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setBillingCycle('Monthly')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      billingCycle === 'Monthly'
                        ? 'bg-amber-800 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('Annual')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                      billingCycle === 'Annual'
                        ? 'bg-amber-800 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Annual
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">Save 20%</span>
                  </button>
                </div>
              </div>

              {/* Plan Type Filter */}
              <div className="mb-8 flex justify-end gap-2">
                <button
                  onClick={() => setPlanType('All Plans')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    planType === 'All Plans'
                      ? 'bg-amber-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  All Plans
                </button>
                <button
                  onClick={() => setPlanType('Prepaid')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    planType === 'Prepaid'
                      ? 'bg-amber-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Prepaid
                </button>
                <button
                  onClick={() => setPlanType('Postpaid')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    planType === 'Postpaid'
                      ? 'bg-amber-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Postpaid
                </button>
              </div>

              {/* Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {allPlans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={`bg-white border rounded-lg p-5 cursor-pointer transition-all ${
                      selectedPlan?.id === plan.id
                        ? 'border-amber-800 shadow-lg ring-2 ring-amber-800'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{plan.name}</h3>
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 sticky bottom-6">
                <button
                  onClick={() => window.history.back()}
                  className="px-8 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSelectPlan(selectedPlan)}
                  disabled={!selectedPlan}
                  className={`px-8 py-3 rounded-md font-medium transition-colors ${
                    selectedPlan
                      ? 'bg-amber-800 text-white hover:bg-amber-900 shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Assign Plan
                </button>
              </div>
            </div>
          </main>
        </div>

        <Footer />

        {/* Tenant Form */}
        {showTenantForm && (
          <TenantForm
            selectedPlan={selectedPlan}
            onBack={handleFormBack}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </>
  );
}