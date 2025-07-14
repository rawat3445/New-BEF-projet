import React, { useState } from "react";
import { ArrowLeft, Home, Info, DollarSign } from "lucide-react";

// Import all components

import Navbar from './components/navbar/Navbar';
// import HeroCarousel from './components/herosection/HeroSection';
import ServiceCards from './servicesCard/Card';
import AboutSection from './components/aboutsection/About';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactus/ContactUs';

import AutoMobilityHero from "./components/herosection/Hero";


// Import pages
import AboutPage from "./pages/Aboutpage";
import SalesPage from "./pages/SalesPage";

import "./automobile.css";

const AutomobileIndustry = () => {
  const [currentView, setCurrentView] = useState("home");

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "sales", label: "Pricing", icon: DollarSign },
  ];

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
          <AutoMobilityHero />
          <ServiceCards />
          <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="advertisement-industry">
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
        {currentView === "home" && <Navbar setCurrentView={setCurrentView} />}

        {/* Render appropriate content */}
        {renderContent()}
      </main>
<ContactUs />
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

export default AutomobileIndustry;
