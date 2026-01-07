export type Environment = 'development' | 'production';

export interface ApiEndpoints {
  auth: {
    login: string;
  };
  templates: {
    listData: string;
    verify: string;
    approve: string;
  };
  agents: {
    getAgents: string;
    saveDetails: string;
  };
  plans: {
    list: string;
    details: string;
    save: string;
    delete:string;
  };
  components: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  tenantPlans: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  wallets: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  paymentTransactions: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  planComponentDetails: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  rechargePackages: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  subscriptionComponentUsage: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  subscriptions: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  walletTransactions: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  planComponents: {
    list: string;
    details: string;
    save: string;
  };
  googleRcs: {
    update: string;
    brand: string;
    create: string;
    sync: string;
    getBrands: string;
     submitVerification: string;
    getVerificationStatus: string;
    updateVerificationInfo: string;
  };
  invoices: {
    list: string;
    details: string;
    save: string;
    delete: string;
  };
  paymentGateway: {
    initiate: string;
    callback: string;
    cancel: string;
    transactions: string;  
    verify: string;
    balance: string;
  };
}

export interface ApiConfig {
  environment: Environment;
  baseUrl: string;
  endpoints: ApiEndpoints;
}

const environments: Record<Environment, ApiConfig> = {
  development: {
    environment: 'development',
    baseUrl: 'https://localhost:53718',
    endpoints: {
      auth: { login: '/Account/Login' },

      templates: {
        listData: '/api/Templates/ListData',
        verify: '/api/Templates/Verify',
        approve: '/api/Templates/Approve',
      },

      agents: {
        getAgents: '/Api/Agent/GetAgents',
        saveDetails: '/Api/Agent/SaveDetails',
      },

      plans: {
        list: '/api/Plan/GetPlanList',
        details: '/api/Plan/GetPlanDetails',
        save: '/api/Plan/SaveDetails',
        delete: '/Services/Administration/Plans/Delete',
      },

      components: {
        list: '/api/Components/GetComponentList',
        details: '/api/Components/GetComponentDetails',
        save: '/api/Components/SaveDetails',
        delete: '/Services/Tenant/TenantPlans/Delete'
      },

      tenantPlans: {
        list: '/api/TenantPlans/GetTenantPlansList',
        details: '/api/TenantPlans/GetTenantPlanById',
        save: '/api/TenantPlans/SaveDetails',
        delete: '/api/TenantPlans/DeleteDetails',
      },

      wallets: {
        list: '/api/Wallets/GetWalletsList',
        details: '/api/Wallets/GetWalletById',
        save: '/api/Wallets/SaveDetails',
        delete: '/api/Wallets/DeleteDetails',
      },

      paymentTransactions: {
        list: '/api/PaymentTransactions/GetPaymentTransactionsList',
        details: '/api/PaymentTransactions/GetPaymentTransactionById',
        save: '/api/PaymentTransactions/SaveDetails',
        delete: '/api/PaymentTransactions/DeleteDetails',
      },

      planComponentDetails: {
        list: '/api/PlanComponentDetails/GetPlanComponentDetailsList',
        details: '/api/PlanComponentDetails/GetPlanComponentDetailById',
        save: '/api/PlanComponentDetails/SaveDetails',
        delete: '/api/PlanComponentDetails/DeleteDetails',
      },

      rechargePackages: {
        list: '/api/RechargePackages/GetRechargePackagesList',
        details: '/api/RechargePackages/GetRechargePackageById',
        save: '/api/RechargePackages/SaveDetails',
        delete: '/api/RechargePackages/DeleteDetails',
      },

      subscriptionComponentUsage: {
        list: '/api/SubscriptionComponentUsage/GetSubscriptionComponentUsageList',
        details: '/api/SubscriptionComponentUsage/GetSubscriptionComponentUsageById',
        save: '/api/SubscriptionComponentUsage/SaveDetails',
        delete: '/api/SubscriptionComponentUsage/DeleteDetails',
      },

      subscriptions: {
        list: '/api/Subscriptions/GetSubscriptionsList',
        details: '/api/Subscriptions/GetSubscriptionById',
        save: '/api/Subscriptions/SaveDetails',
        delete: '/api/Subscriptions/DeleteDetails',
      },

      walletTransactions: {
        list: '/api/WalletTransactions/GetWalletTransactionsList',
        details: '/api/WalletTransactions/GetWalletTransactionById',
        save: '/api/WalletTransactions/SaveDetails',
        delete: '/api/WalletTransactions/DeleteDetails',
      },

      planComponents: {
        list: '/api/PlanComp/GetPlanComponentList',
        details: '/api/PlanComp/GetPlanComponentDetails',
        save: '/api/PlanComp/SavePlanComponent',
      },

      invoices: {
        list: '/api/Invoices/List',
        details: '/api/Invoices/Get',
        save: '/api/Invoices/Save',
        delete: '/api/Invoices/Delete',
      },

      paymentGateway: {
        initiate: '/api/payment/initiate',   
        callback: '/api/payment/callback',   
        cancel: '/api/payment/cancel',
        transactions: '/api/payment/transactions', 
        verify: '/api/payment/verify',
        balance: '/api/payment/balance',
      },

      googleRcs: {
        update: 'http://localhost:5000/api/update-google-rcs',
        brand: 'http://localhost:5000/api/create-brand',
        create: 'http://localhost:5000/api/create-google-rcs',
        sync: 'http://localhost:5000/api/sync-agents',
        getBrands: 'http://localhost:5000/api/get-brands',
        submitVerification: 'http://localhost:5000/api/submit-verification',
      getVerificationStatus: 'http://localhost:5000/api/get-verification-status',
      updateVerificationInfo: 'http://localhost:5000/api/update-verification-info',
      }
    },
  },

  production: {
    environment: 'production',
    baseUrl: 'https://app.wiremail.in',
    endpoints: {
      auth: { login: '/Account/Login' },

      templates: {
        listData: '/api/Templates/ListData',
        verify: '/api/Templates/Verify',
        approve: '/api/Templates/Approve',
      },

      agents: {
        getAgents: '/Api/Agent/GetAgents',
        saveDetails: '/Api/Agent/SaveDetails',
      },

      plans: {
        list: '/api/Plan/GetPlanList',
        details: '/api/Plan/GetPlanDetails',
        save: '/api/Plan/SaveDetails',
        delete:'/api/Plan/Delete'
      },

      components: {
        list: '/api/Components/GetComponentList',
        details: '/api/Components/GetComponentDetails',
        save: '/api/Components/SaveDetails',
        delete: '/Services/Administration/Components/Delete',
      },

      tenantPlans: {
        list: '/api/TenantPlans/GetTenantPlansList',
        details: '/api/TenantPlans/GetTenantPlanById',
        save: '/api/TenantPlans/SaveDetails',
        delete: '/api/TenantPlans/DeleteDetails',
      },

      wallets: {
        list: '/api/Wallets/GetWalletsList',
        details: '/api/Wallets/GetWalletById',
        save: '/api/Wallets/SaveDetails',
        delete: '/api/Wallets/DeleteDetails',
      },

      paymentTransactions: {
        list: '/api/PaymentTransactions/GetPaymentTransactionsList',
        details: '/api/PaymentTransactions/GetPaymentTransactionById',
        save: '/api/PaymentTransactions/SaveDetails',
        delete: '/api/PaymentTransactions/DeleteDetails',
      },

      planComponentDetails: {
        list: '/api/PlanComponentDetails/GetPlanComponentDetailsList',
        details: '/api/PlanComponentDetails/GetPlanComponentDetailById',
        save: '/api/PlanComponentDetails/SaveDetails',
        delete: '/api/PlanComponentDetails/DeleteDetails',
      },

      rechargePackages: {
        list: '/api/RechargePackages/GetRechargePackagesList',
        details: '/api/RechargePackages/GetRechargePackageById',
        save: '/api/RechargePackages/SaveDetails',
        delete: '/api/RechargePackages/DeleteDetails',
      },

      subscriptionComponentUsage: {
        list: '/api/SubscriptionComponentUsage/GetSubscriptionComponentUsageList',
        details: '/api/SubscriptionComponentUsage/GetSubscriptionComponentUsageById',
        save: '/api/SubscriptionComponentUsage/SaveDetails',
        delete: '/api/SubscriptionComponentUsage/DeleteDetails',
      },

      subscriptions: {
        list: '/api/Subscriptions/GetSubscriptionsList',
        details: '/api/Subscriptions/GetSubscriptionById',
        save: '/api/Subscriptions/SaveDetails',
        delete: '/api/Subscriptions/DeleteDetails',
      },

      walletTransactions: {
        list: '/api/WalletTransactions/GetWalletTransactionsList',
        details: '/api/WalletTransactions/GetWalletTransactionById',
        save: '/api/WalletTransactions/SaveDetails',
        delete: '/api/WalletTransactions/DeleteDetails',
      },

      planComponents: {
        list: '/api/PlanComp/GetPlanComponentList',
        details: '/api/PlanComp/GetPlanComponentDetails',
        save: '/api/PlanComp/SavePlanComponent',
      },

      invoices: {
        list: '/api/Invoices/List',
        details: '/api/Invoices/Get',
        save: '/api/Invoices/Save',
        delete: '/api/Invoices/Delete',
      },

      paymentGateway: {
        initiate: '/api/payment/initiate',    
        callback: '/api/payment/callback', 
        cancel: '/api/payment/cancel',
        transactions: '/api/payment/transactions',  
        verify: '/api/payment/verify',
        balance: '/api/payment/balance',
      },

      googleRcs: {
        update: 'https://backend.wiremail.in/api/update-google-rcs',
        brand: 'https://backend.wiremail.in/api/create-brand',
        create: 'https://backend.wiremail.in/api/create-google-rcs',
        sync: 'https://backend.wiremail.in/api/sync-agents',
        getBrands: 'https://backend.wiremail.in/api/get-brands',
         submitVerification: 'https://backend.wiremail.in/api/submit-verification',
      getVerificationStatus: 'https://backend.wiremail.in/api/get-verification-status',
      updateVerificationInfo: 'https://backend.wiremail.in/api/update-verification-info',
      }
    },
  },
};

const getCurrentEnvironment = (): Environment => {
  if (import.meta.env.DEV) return 'development';

  const env = import.meta.env.VITE_ENVIRONMENT as Environment;
  if (env && environments[env]) return env;

  if (window.location.hostname.includes('wiremail')) {
    return 'production';
  }

  return 'development';
};

export const currentEnvironment = getCurrentEnvironment();
export const apiConfig = environments[currentEnvironment];

const buildEndpointUrls = <T extends Record<string, string>>(endpoints: T): T => {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(endpoints)) {
    result[key] = `${apiConfig.baseUrl}${value}`;
  }
  return result as T;
};

export const authEndpoints = buildEndpointUrls(apiConfig.endpoints.auth);
export const templateEndpoints = buildEndpointUrls(apiConfig.endpoints.templates);
export const agentEndpoints = buildEndpointUrls(apiConfig.endpoints.agents);
export const planEndpoints = buildEndpointUrls(apiConfig.endpoints.plans);
export const componentEndpoints = buildEndpointUrls(apiConfig.endpoints.components);
export const tenantPlanEndpoints = buildEndpointUrls(apiConfig.endpoints.tenantPlans);
export const walletEndpoints = buildEndpointUrls(apiConfig.endpoints.wallets);
export const paymentTransactionEndpoints = buildEndpointUrls(apiConfig.endpoints.paymentTransactions);
export const planComponentDetailEndpoints = buildEndpointUrls(apiConfig.endpoints.planComponentDetails);
export const rechargePackageEndpoints = buildEndpointUrls(apiConfig.endpoints.rechargePackages);
export const subscriptionComponentUsageEndpoints = buildEndpointUrls(apiConfig.endpoints.subscriptionComponentUsage);
export const subscriptionEndpoints = buildEndpointUrls(apiConfig.endpoints.subscriptions);
export const planComponentEndpoints = buildEndpointUrls(apiConfig.endpoints.planComponents);
export const googleRcsEndpoints = apiConfig.endpoints.googleRcs;
export const invoiceEndpoints = buildEndpointUrls(apiConfig.endpoints.invoices);
export const paymentGatewayEndpoints = buildEndpointUrls(
  apiConfig.endpoints.paymentGateway
);
export const walletTransactionEndpoints = buildEndpointUrls(apiConfig.endpoints.walletTransactions);

if (currentEnvironment === 'development') {
  console.log('API Configuration Loaded', {
    environment: currentEnvironment,
    baseUrl: apiConfig.baseUrl,
  });
}

export const getMediaUrl = (path: string) => {
  if (!path) return '';
  
  if (path.startsWith('data:image')) {
    return path;
  }
  
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  const cleanPath = path.startsWith('upload/') ? path.substring(7) : path;
  const uploadFolder = currentEnvironment === 'production' ? 'uploads' : 'upload';
  
  if (!cleanPath.includes('/')) {
    return `${apiConfig.baseUrl}/${uploadFolder}/temporary/Tenant/${cleanPath}`;
  }
  
  return `${apiConfig.baseUrl}/${uploadFolder}/${cleanPath}`;
};

export const getBaseUrl = () => apiConfig.baseUrl;