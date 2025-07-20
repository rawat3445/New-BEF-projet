import React, { useState } from "react";
import { ArrowLeft, Menu, X, Home, Info, DollarSign } from "lucide-react";

// Import all components
import Navbar from "./components/navbar/navbar";
import HeroCarousel from "./components/herocarousel/carousel";
import ServiceCards from "./components/servicecards/cards";
import AboutSection from "./components/aboutSection/aboutSection";
import Footer from "./components/footer/footer";

// Import pages
import AboutPage from "./pages/aboutPage/aboutPage";
import SalesPage from "./pages/salesPage/salesPage";

import "./environment.css";

const EnvironmentIndustry = () => {
  const [currentView, setCurrentView] = useState("home");
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "sales", label: "Pricing", icon: DollarSign },
  ];

  {
    /* const handleNavigation = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };  */
  }

  const renderContent = () => {
    switch (currentView) {
      case "about":
        return <AboutPage onBack={() => setCurrentView("home")} />;
      case "sales":
        return <SalesPage />;
      case "home":
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
    <div className="advertisement-industry">
      {/* Navigation Header
      <div className="industry-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo">
              <div className="logo-icon">B</div>
              <div className="brand-text">
                <h1>Bhartiya Economic Forum</h1>
                <span className="brand-tagline">Transform Your Environment</span>
              </div>
            </div>
          </div>  */}

      {/* Desktop Navigation 
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
          </nav> */}

      {/* Mobile Menu Toggle 
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> */}

      {/* Mobile Navigation
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
      </div>  */}

      {/* Breadcrumb for non-home views */}
      {currentView !== "home" && (
        <div className="breadcrumb">
          <div className="breadcrumb-container">
            <button
              onClick={() => setCurrentView("home")}
              className="breadcrumb-back"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            <div className="breadcrumb-separator">/</div>
            <div className="breadcrumb-current">
              {navigationItems.find((item) => item.id === currentView)?.label}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Render Navbar only on home page */}
        {currentView === "home" && <Navbar />}

        {/* Render appropriate content */}
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Quick Access */}
      {currentView === "home" && (
        <div className="floating-actions">
          <button
            onClick={() => setCurrentView("sales")}
            className="fab-primary"
            title="View Pricing"
          >
            <DollarSign size={20} />
          </button>
          <button
            onClick={() => setCurrentView("about")}
            className="fab-secondary"
            title="Learn More"
          >
            <Info size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EnvironmentIndustry;
