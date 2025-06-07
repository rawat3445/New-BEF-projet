import React from "react";
import logo_path from "../assets/img/logo.png";
import Button from "@mui/material/Button";
// import Countdown from "./Countdown";
// import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

import MediaExposure from "./MediaExposure";
import CustomizedTimeline from "./CustomizedTimeline";
import HeroSection from "./HeroSection";
import MultiActionAreaCard from "./MultiActionAreaCard";
import Footer from "./footer";

import ContactSection from "./ContactSection";
import VantaBackground from "./VantaBackground";

import FeaturedSpeakers from "./FeaturedSpeakers";
import PastConclaves from "./PastConclaves";
import Testimonials from "./Testimonials";
import WhyAttend from "./WhyAttend";
import WhoShouldAttend from "./WhoShouldAttend";
import EventSchedule from "./EventSchedule";
import DelegatePasses from "./DelegatePasses";
import VenueInfo from "./VenueInfo";
import Partners from "./Partners";
import RegisterNow from "./RegisterNow";
import Header from "./Header";  // Removed this import

const Homepage = () => {
  return (
    <>
      <Header/>

      {/* Animated Banner */}
      <section id="banner-object" className="mb-12">
        <VantaBackground>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-6xl font-bold text-white text-center p-8"
          >
            Join the Bharat Economic Forum Industry Conclave 2025
          </motion.h1>
        </VantaBackground>
      </section>

      {/* Existing Components */}
      <CustomizedTimeline />
      <MediaExposure />
      <HeroSection />
      <MultiActionAreaCard />

      <FeaturedSpeakers />
      <PastConclaves />
      <Testimonials />
      <WhyAttend />
      <WhoShouldAttend />
      <EventSchedule />
      <section id="delegate">
        <DelegatePasses />
      </section>
      <section id="event">
        <VenueInfo />
      </section>
      <Partners />
      
      {/* Scroll to Top Button */}
      <section id="contact">
        <ContactSection />
      </section>
      <RegisterNow />
      <Footer />
    </>
  );
};

export default Homepage;
