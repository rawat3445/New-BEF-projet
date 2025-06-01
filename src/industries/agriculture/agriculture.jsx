// src/industries/agriculture/agriculture.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Info } from 'lucide-react';
import HeroCarousel from './components/herocarousel/herocarousel';
import AboutSection from './components/aboutsection/aboutsection';
import SalesSection from './components/salessection/salessection';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import './agriculture.css';

const AgricultureIndustry = () => {
  return (
    <div className="agriculture-industry">
      <Navbar />
      <main className="main-content">
        <HeroCarousel />
        <AboutSection />
        <SalesSection />
      </main>
      <Footer />
      <div className="floating-actions">
        <Link to="/agriculture/sales" className="fab-primary" title="View Pricing">
          <DollarSign size={20} />
        </Link>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="fab-secondary"
          title="Learn More"
        >
          <Info size={20} />
        </button>
      </div>
    </div>
  );
};

export default AgricultureIndustry;