import React, { useState } from 'react';
import { ArrowLeft, Menu, X, Home, Info, BarChart2, PieChart, TrendingUp } from 'lucide-react';

// Import all components
import Navbar from './components/navbar/navbar';
import HeroCarousel from './components/herocarousel/carousel';
import ServiceCards from './components/servicecards/cards';
import AboutSection from './components/aboutsection/aboutsec';
import Footer from './components/footer/footer';
import ContactUs from './components/contactus/contactus';
// Import pages
import AboutPage from './pages/aboutPage/aboutPage';
import InvestmentPlansPage from './pages/salesPage/salesPage';


import './finance.css';

const Finance = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items with finance-appropriate icons and labels
  const navigationItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'plans', label: 'Investment Plans', icon: BarChart2 },
  ];

  const handleNavigation = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return <AboutPage onBack={() => setCurrentView('home')} />;
      case 'plans':
        return <InvestmentPlansPage />;
      case 'market':
        return (
          <div>
            {/* You can create a MarketInsightsPage or inline content here */}
            <h2>Market Insights</h2>
            <p>Latest trends, analysis, and forecasts to help you invest wisely.</p>
          </div>
        );
      case 'performance':
        return (
          <div>
            <h2>Portfolio Performance</h2>
            <p>Track your investment growth and returns over time.</p>
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <HeroCarousel />
            <ServiceCards />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="finance-industry">
      {/* Navigation Header */}
      <div className="industry-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo">
              <div className="logo-icon">B</div>
              <div className="brand-text">
                <h1>Bhartiya Economic Forum</h1>
                <span className="brand-tagline">Grow Your Wealth Intelligently</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                >
                  <IconComponent size={18} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="mobile-nav-content">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`mobile-nav-item ${currentView === item.id ? 'active' : ''}`}
                  >
                    <IconComponent size={20} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Breadcrumb for non-home views */}
      {currentView !== 'home' && (
        <div className="breadcrumb">
          <div className="breadcrumb-container">
            <button
              onClick={() => setCurrentView('home')}
              className="breadcrumb-back"
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
            <div className="breadcrumb-separator">/</div>
            <div className="breadcrumb-current">
              {navigationItems.find(item => item.id === currentView)?.label}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Render Navbar only on dashboard */}
        {currentView === 'home' && <Navbar />}
        
        {/* Render appropriate content */}
        {renderContent()}
      </main>
<ContactUs />
      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Quick Access */}
      {currentView === 'home' && (
        <div className="floating-actions">
          <button
            onClick={() => setCurrentView('plans')}
            className="fab-primary"
            title="View Investment Plans"
          >
            <BarChart2 size={20} />
          </button>
          <button
            onClick={() => setCurrentView('about')}
            className="fab-secondary"
            title="About Us"
          >
            <Info size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Finance;
