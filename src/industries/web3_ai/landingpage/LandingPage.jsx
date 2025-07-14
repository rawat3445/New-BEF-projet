
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ContentSections from './Components/ContentSections';
import Footer from './Components/Footer';
import ContactUs from './Components/contactus/contactus';
import "./styles.css"



gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const globeRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "70% top",
          scrub: 2,
        },
      })
      .to(globeRef.current, {
        scale: 0.3,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-gray-950 text-white overflow-hidden">
      {/* ✅ Navbar: gradient background + sticky */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-800">
        <Navbar />
      </div>

      {/* Background Globe */}
      <div
        ref={globeRef}
        className="fixed top-1/2 left-0 w-full h-[105vh] -translate-y-1/2 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="absolute inset-0 bg-gray-950" />
        <div className="relative w-[600px] aspect-square rounded-full overflow-hidden">
          <video
            src="src/industries/web3_ai/landingpage/assets/Globe.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover mix-blend-screen opacity-70"
          />
        </div>
      </div>


      {/* Sections */}
      <HeroSection />
      <ContentSections />
      <ContactUs />
      <Footer />

      {/* Main Content */}
      <div className="pt-[80px]">
        {" "}
        {/* To push content below navbar height */}
        <HeroSection />
        <ContentSections />
        <Footer />
      </div>

    </div>
  );
}
