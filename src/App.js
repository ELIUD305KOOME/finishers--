import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/Home'));
const ServicesList = lazy(() => import('./pages/service'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));
const CustomerSupportPage = lazy(() => import('./pages/CustomerS'));
const CareersPage = lazy(() => import('./pages/careerpage'));
const Donations = lazy(() => import('./pages/about-donate'));
const MentalHealthPage = lazy(() => import('./pages/MentalHealthPage'));
const CybersecurityPage = lazy(() => import('./pages/CybersecurityPage'));
const DepiEstatesPage = lazy(() => import('./pages/DepiEstatesPage'));
const LemcoInsurancePage = lazy(() => import('./pages/LemcoInsurancePage'));
const PrudentialInsurancePage = lazy(() => import('./pages/PrudentialInsurancePage'));
const AdminDashboard = lazy(() => import('./pages/admin'));
const Login = lazy(() => import('./pages/Login'));

const blogRoutes = [
  { path: '/blog/customer-support', component: <CustomerSupportPage /> },
  { path: '/blog/employment-opportunities', component: <CareersPage /> },
  { path: '/blog/donations-impact', component: <Donations /> },
  { path: '/blog/mental-health-awareness', component: <MentalHealthPage /> },
  { path: '/blog/cybersecurity-tips', component: <CybersecurityPage /> },
  { path: '/blog/depi-estates', component: <DepiEstatesPage /> },
  { path: '/blog/lemco-insurance', component: <LemcoInsurancePage /> },
  { path: '/blog/prudential-insurance', component: <PrudentialInsurancePage /> },
];

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/donate" element={<DonatePage />} />
          {blogRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.component} />
          ))}
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;