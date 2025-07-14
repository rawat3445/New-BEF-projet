import React from "react";
// import logo_path from "../assets/img/logo.png";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

import CustomizedTimeline from "./CustomizedTimeline";
import HeroSection from "./HeroSection";
import MultiActionAreaCard from "./MultiActionAreaCard";
import Footer from "./footer";

import VantaBackground from "./VantaBackground";

// import EventSchedule from "./EventSchedule"; // ← Commented
import DelegatePasses from "./DelegatePasses";
import PastConclaves from "./PastConclaves";
import WhyAttend from "./WhyAttend";
import WhoShouldAttend from "./WhoShouldAttend";
// import VenueInfo from "./VenueInfo"; // ← Commented
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
            className="text-6xl font-bold text-white text-center p-8"
          >
            Join the Viksit Bharat Economic Forum Industry Conclave 2025
          </motion.h1>
        </VantaBackground>
      </section>

      <HeroSection />

      {/* Delegate Passes placed after HeroSection */}
      <section id="delegate">
        <DelegatePasses />
      </section>

      <MultiActionAreaCard />
      <PastConclaves />
      <WhyAttend />
      <WhoShouldAttend />

      {/* <EventSchedule /> — Temporarily commented out */}

      {/* <section id="event">
        <VenueInfo />
      </section> */}

      <Footer />
    </>
  );
};

export default Homepage;
