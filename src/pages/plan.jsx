import { useState, useEffect } from 'react';
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

        <div className="p-6">
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

          <p className="text-xs text-gray-600 mb-5">
            By clicking "Next", you agree to the <a href="#" className="text-amber-800 hover:underline">Terms of Service</a>.
          </p>

          <div className="flex justify-end items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 text-sm bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors flex items-center gap-2"
            >
              Next: Choose Plan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PlansPage() {
  const [showTenantForm, setShowTenantForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('Monthly');
  const [planType, setPlanType] = useState('All Plans');
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const authToken = localStorage.getItem('authToken');
        
        const response = await fetch('https://localhost:53718/api/Plan/GetPlanList', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`,
          },
          credentials: 'include',
          body: JSON.stringify({}),
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch plans: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        let formattedPlans = [];
        
        if (data.Entities && Array.isArray(data.Entities)) {
          formattedPlans = data.Entities.map(plan => ({
            id: plan.PlanId || plan.Id,
            name: plan.PlanName || plan.Name,
            price: plan.Price || plan.BasePrice || plan.DisplayPrice || 0,
            period: `/${plan.BillingCycle || 'month'}`,
            description: plan.Description || 'No description available',
            type: plan.Type || 'general',
            billingCycle: plan.BillingCycle || 'Monthly',
            features: plan.Features || '',
            status: plan.Status
          }));
        } else if (Array.isArray(data)) {
          formattedPlans = data.map(plan => ({
            id: plan.PlanId || plan.Id,
            name: plan.PlanName || plan.Name,
            price: plan.Price || plan.BasePrice || plan.DisplayPrice || 0,
            period: `/${plan.BillingCycle || 'month'}`,
            description: plan.Description || 'No description available',
            type: plan.Type || 'general',
            billingCycle: plan.BillingCycle || 'Monthly',
            features: plan.Features || '',
            status: plan.Status
          }));
        }
        
        setPlans(formattedPlans);
        setError(null);
      } catch (err) {
        console.error('Error fetching plans:', err);
        setError(err.message || 'Failed to load plans. Please try again.');
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const filteredPlans = plans.filter(plan => {
    if (planType !== 'All Plans') {
      if (plan.type?.toLowerCase() !== planType.toLowerCase()) {
        return false;
      }
    }
    
    if (plan.billingCycle && plan.billingCycle !== billingCycle) {
      return false;
    }
    
    return true;
  });

  const handleSelectPlan = (plan) => {
    if (!plan) return;
    setSelectedPlan(plan);
    setShowTenantForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with plan:', selectedPlan, 'and data:', formData);
    setShowTenantForm(false);
    setSelectedPlan(null);
  };

  const handleFormBack = () => {
    setShowTenantForm(false);
    setSelectedPlan(null);
  };

  const handleRetry = () => {
    window.location.reload();
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
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Plan</h1>
                <p className="text-gray-600">Select a subscription plan to add to this tenant</p>
              </div>

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

              {loading && (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-amber-800"></div>
                  <p className="mt-4 text-gray-600">Loading plans...</p>
                </div>
              )}

              {error && !loading && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <h3 className="text-red-800 font-semibold mb-2">Error Loading Plans</h3>
                      <p className="text-red-600 text-sm mb-3">{error}</p>
                      <p className="text-red-600 text-xs mb-4">
                        If you're seeing a CORS or network error, make sure:
                        <br />The API server is running
                        <br />CORS is configured on the backend
                        <br />The SSL certificate is trusted for HTTPS
                      </p>
                      <button
                        onClick={handleRetry}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {!loading && !error && filteredPlans.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {filteredPlans.map((plan) => (
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
                        <span className="text-2xl font-bold text-gray-900">INR {plan.price}</span>
                        <span className="text-gray-600 text-sm">{plan.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
                      {plan.features && (
                        <p className="text-gray-500 text-xs">{plan.features}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {!loading && !error && plans.length > 0 && filteredPlans.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">No Plans Match Your Filters</h3>
                  <p className="mt-2 text-gray-500">Try selecting different billing cycle or plan type.</p>
                  <button
                    onClick={() => {
                      setPlanType('All Plans');
                      setBillingCycle('Monthly');
                    }}
                    className="mt-4 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition-colors text-sm"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {!loading && !error && plans.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">No Plans Available</h3>
                  <p className="mt-2 text-gray-500">There are no plans to display at the moment.</p>
                </div>
              )}

              {!loading && filteredPlans.length > 0 && (
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
              )}
            </div>
          </main>
        </div>

        <Footer />

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