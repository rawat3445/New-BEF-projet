import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ContentSections from './Components/ContentSections';
import Footer from './Components/Footer';
import "./styles.css"

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const globeRef = useRef();
  const navbarRef = useRef();

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '70% top',
        scrub: 2,
      },
    }).to(globeRef.current, {
      scale: 0.3,
      ease: 'power2.inOut',
    });

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        gsap.to(navbarRef.current, { y: 0, duration: 0.3 });
      } else {
        gsap.to(navbarRef.current, { y: -200, duration: 0.3 });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-gray-950 text-white overflow-hidden">
      {/* Navbar */}
      <div
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-30 bg-gray-900 bg-opacity-90 shadow-md transform -translate-y-full"
      >
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
      <Footer />
    </div>
  );
}
