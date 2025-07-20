import React, { useState } from "react";
import { ArrowLeft, Menu, X, Home, Info, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
// Import all components
import Navbar from "./components/navbar/navbar";
import HeroCarousel from "./components/herocarousel/carousel";
import ServiceCards from "./components/servicecards/cards";
import AboutSection from "./components/aboutsection.jsx/aboutsec";
import Footer from "./components/footer/footer";

// Import pages
import AboutPage from "./pages/aboutPage/aboutPage";
import SalesPage from "./pages/salesPage/salesPage";

import "./index.css";

const RealEstateIndustry = () => {
  const [currentView, setCurrentView] = useState("home");
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About Urban Planning", icon: Info },
    { id: "sales", label: "Development Plans", icon: DollarSign },
  ];

  {
    /* const handleNavigation = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  }; */
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
    <div
      className="realestate-industry"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2C3E50",
        backgroundColor: "#F5F7FA",
      }}
    >
      {/* Navigation Header
      <div className="industry-nav" style={{ backgroundColor: '#34495E', color: '#ECF0F1' }}>
        <div className="nav-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="nav-brand" >
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="logo-icon" style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  backgroundColor: '#1ABC9C',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 6,
                  color: 'white',
                  userSelect: 'none'
                }}>R</div>
                <div className="brand-text" style={{ lineHeight: 1 }}>
                  <h1 style={{ fontSize: 20, margin: 0, fontWeight: '700' }}>Urban Realty Hub</h1>
                  <span className="brand-tagline" style={{ fontSize: 12, fontWeight: '400', color: '#1ABC9C' }}>
                    Shaping Sustainable Cities
                  </span>
                </div>
              </div>
            </Link>
          </div>  */}

      {/* Desktop Navigation 
          <nav className="desktop-nav" style={{ display: 'flex', gap: 20 }}>
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    backgroundColor: currentView === item.id ? '#1ABC9C' : 'transparent',
                    color: currentView === item.id ? '#fff' : '#ECF0F1',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 14,
                    transition: 'background-color 0.3s'
                  }}
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
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ECF0F1',
              cursor: 'pointer',
              display: 'none'  */}

      {/* Mobile Navigation 
        {isMobileMenuOpen && (
          <div className="mobile-nav" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000
          }}>
            <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)} style={{ position: 'absolute', inset: 0 }} />
            <div className="mobile-nav-content" style={{
              position: 'relative',
              backgroundColor: '#34495E',
              width: 250,
              height: '100%',
              paddingTop: 48,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              color: '#ECF0F1'
            }}>
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`mobile-nav-item ${currentView === item.id ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '12px 20px',
                      backgroundColor: currentView === item.id ? '#1ABC9C' : 'transparent',
                      border: 'none',
                      borderRadius: 4,
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: 16,
                      color: '#ECF0F1',
                      textAlign: 'left'
                    }}
                  >
                    <IconComponent size={20} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div> */}

      {/* Breadcrumb for non-home views */}
      {currentView !== "home" && (
        <div
          className="breadcrumb"
          style={{
            backgroundColor: "#E0F2F1",
            padding: "0.75rem 1rem",
            fontSize: 14,
            color: "#00796B",
          }}
        >
          <div
            className="breadcrumb-container"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <button
              onClick={() => setCurrentView("home")}
              className="breadcrumb-back"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                backgroundColor: "transparent",
                border: "none",
                color: "#00796B",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            <div className="breadcrumb-separator">/</div>
            <div className="breadcrumb-current" style={{ fontWeight: "700" }}>
              {navigationItems.find((item) => item.id === currentView)?.label}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main
        className="main-content"
        style={{ maxWidth: 1200, margin: "2rem auto", padding: "0 1rem" }}
      >
        {/* Render Navbar only on home page */}
        {currentView === "home" && <Navbar />}

        {/* Render appropriate content */}
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Quick Access */}
      {currentView === "home" && (
        <div
          className="floating-actions"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            zIndex: 100,
          }}
        >
          <button
            onClick={() => setCurrentView("sales")}
            className="fab-primary"
            title="View Development Plans"
            style={{
              backgroundColor: "#1ABC9C",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 8px rgba(26,188,156,0.3)",
              transition: "background-color 0.3s",
            }}
          >
            <DollarSign size={20} />
          </button>
          <button
            onClick={() => setCurrentView("about")}
            className="fab-secondary"
            title="Learn More About Urban Planning"
            style={{
              backgroundColor: "#00796B",
              border: "none",
              borderRadius: "50%",
              width: 48,
              height: 48,
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 8px rgba(0,121,107,0.3)",
              transition: "background-color 0.3s",
            }}
          >
            <Info size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default RealEstateIndustry;
