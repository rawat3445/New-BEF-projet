/**
 * Contributor: Ankit Sharma
 * Phone: 9262871237
 */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GamingIndustryLandingPage from './main/pages/GamingIndustryLandingPage';
import GamingIndustrySalesPage from './main/pages/GamingIndustrySalesPage';

const GamingIndustry = () => {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={<GamingIndustryLandingPage />} />
      <Route path="/sales" element={<GamingIndustrySalesPage />} />
      <Route path="/sponsors" element={<GamingIndustrySalesPage />} />
    </Routes>
  );
};

export default GamingIndustry;