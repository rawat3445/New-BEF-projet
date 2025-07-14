import React, { useState } from "react";
import { ArrowLeft, DollarSign, Info } from "lucide-react";

// Components
import Navbar from "./components/navbar/navbar";
import HeroCarousel from "./components/herocarousel/carousel";
import ServiceCards from "./components/servicecards/cards";
import AboutSection from "./components/aboutsection.jsx/aboutsec";
import Footer from "./components/footer/footer";

// Pages
import AboutPage from "./pages/aboutPage/aboutPage";
import SalesPage from "./pages/salesPage/salesPage";

import "./index.css";

const WomenEntrepreneurship = () => {
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
    <div className="women-entrepreneurship">
      {/* Breadcrumb */}
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
        {currentView === "home" && <Navbar />}
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      {currentView === "home" && (
        <div className="floating-actions">
          <button
            onClick={() => setCurrentView("sales")}
            className="fab-primary"
            title="Explore Opportunities"
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

export default WomenEntrepreneurship;
