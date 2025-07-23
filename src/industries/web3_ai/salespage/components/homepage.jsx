import React from "react";
import { motion } from "framer-motion";

// Removed: import MediaExposure from "./MediaExposure";
// Removed: import EventSchedule from "./EventSchedule";
// Removed: import VenueInfo from "./VenueInfo";
// Removed: import ContactSection from "./ContactSection";
// Removed: import RegisterNow from "./RegisterNow";

import CustomizedTimeline from "./CustomizedTimeline";
import HeroSection from "./HeroSection";
import MultiActionAreaCard from "./MultiActionAreaCard";
import Footer from "./footer";

import FeaturedSpeakers from "./FeaturedSpeakers";
import PastConclaves from "./PastConclaves";
import Testimonials from "./Testimonials";
import WhyAttend from "./WhyAttend";
import WhoShouldAttend from "./WhoShouldAttend";
import DelegatePasses from "./DelegatePasses";
import VantaBackground from "./VantaBackground";
import Header from "./Header";

const Homepage = () => {
  return (
    <>
      <Header />

      {/* Animated Banner */}
      <section id="banner-object" className="mb-12">
        <VantaBackground>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-6xl font-bold text-white text-center p-8 "
          >
            Join the Viksit Bharat Economic Forum Industry Conclave 2025
          </motion.h1>
        </VantaBackground>
      </section>

      {/* Existing Components */}
      {/* <CustomizedTimeline /> */}
      {/* <MediaExposure /> - Removed */}
      <HeroSection />
      <MultiActionAreaCard />
      {/* <FeaturedSpeakers /> */}
      <PastConclaves />
      <Testimonials />
      <WhyAttend />
      <WhoShouldAttend />
      {/* <EventSchedule /> - Removed */}
      <section id="delegate">
        <DelegatePasses />
      </section>
      {/* <section id="event">
        <VenueInfo /> - Removed
      </section> */}

      {/* <section id="contact">
        <ContactSection /> - Removed
      </section> */}

      {/* <RegisterNow /> - Removed */}

      <Footer />
    </>
  );
};

export default Homepage;
