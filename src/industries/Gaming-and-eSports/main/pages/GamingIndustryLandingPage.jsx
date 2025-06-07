/**
 * Contributor: Ankit Sharma
 * Phone: 9262871237
 */

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CommunityStat from "../components/CommunityStat";
import FeatureSection from "../components/FeatureSection";
import UpcomingTournaments from "../components/UpcomingTournaments";
import CTASection from "../components/CTASection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const GamingIndustryLandingPage = () => {

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Community Stats */}
      <CommunityStat />

      {/* Upcoming Tournaments */}
     <UpcomingTournaments /> 

      {/* Social Proof */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CTASection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GamingIndustryLandingPage;
