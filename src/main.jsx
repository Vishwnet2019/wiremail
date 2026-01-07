import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/Home.jsx'
import PlansPage from './pages/plan.jsx'
import AboutPage from './pages/About.jsx'
import HowItWorksPage from './pages/HowItWorks.jsx'
import PartnersPage from './pages/Partners.jsx'
import FAQPage from './pages/FAQ.jsx'
import IntegrationPage from './pages/Integration.jsx'
import ContactPage from './pages/Contact.jsx'
import LoginForm from './components/LoginForm.jsx'
import RegisterForm from './components/RegisterForm.jsx'
import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PlansPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/integration" element={<IntegrationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
