import React, { useState } from "react";
import { ArrowLeft, DollarSign, Info } from "lucide-react";


// Import all components
import Navbar from './components/navbar/navbar';
import HeroCarousel from './components/herocarousel/carousel';
import ServiceCards from './components/servicecards/cards';
import AboutSection from './components/aboutSection/aboutSection';
import Footer from './components/footer/footer';
import ContactUs from './components/contactus/contactus';
// Import pages
import AboutPage from './pages/aboutPage/aboutPage';
import SalesPage from './pages/salesPage/salesPage';




import "./environment.css";

const EnvironmentIndustry = () => {
  const [currentView, setCurrentView] = useState("home");

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
              {currentView === "about"
                ? "About"
                : currentView === "sales"
                ? "Pricing"
                : ""}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Render Navbar only on home view */}
        {currentView === "home" && <Navbar setCurrentView={setCurrentView} />}
        {renderContent()}
      </main>
<ContactUs />
      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
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
