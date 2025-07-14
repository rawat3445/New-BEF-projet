import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Users,
  Target,
  Zap,
  Trophy,
  TrendingUp,
  Star,
  Tractor,
  ChevronsLeftRightEllipsis,
  UserCheck,
  Sprout,
  ShoppingCart,
  HeartPulse,
} from "lucide-react";
import "./landingPage.css";
import Navbar from "../Header";
import ContactSection from "./ContactSection2";
import Hero from '../Herobanner';
import FeaturedSection from "../FeaturedSection";
import Industry from '../Industry';
import Footer from '../Footer';
import AboutSection from '../AboutSection/AboutSection';
const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId && sectionId !== 'home') {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }

    window.history.replaceState({}, document.title);
  }, [location]);


  const [currentSlide, setCurrentSlide] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check on first render
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);



  const carouselImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Industry Innovation Summit",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Policy Makers Dialogue",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Technology Integration Forum",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Leadership Excellence",
    },
  ];

  


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Smooth scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };


  // const handleCardClick = (card) => {
  //   switch (card.id) {
  //     case 'advertisement':
  //       navigate('/advertisement');
  //       break;
  //     case 'beauty-wellness':
  //       navigate('/beauty-wellness');
  //       break;
  //     case 'women-entrepreneurship':
  //       navigate('/women-entrepreneurship');
  //       break;
  //     case 'media':
  //       navigate('/media-entertainment');
  //       break;
  //     case 'environment':
  //       navigate('/environment');
  //       break;
  //     case 'agriculture':
  //       navigate('/agriculture');
  //       break;
  //     case 'health-pharma':
  //       navigate('/health-pharma');
  //       break;
  //     case 'retail':
  //       navigate('/retail');
  //       break;
  //     case 'web3ai':
  //       navigate('/web_ai');
  //       break;
  //     case 'automobile':
  //       navigate('/automobile');
  //       break;
  //     case 'real-estate':
  //       navigate('/real-estate');
  //       break;
  //     case 'rural':
  //       navigate(`/rural-development`);
  //       break;
  //       case 'policy-and-governance':
  //       navigate('/policy-and-governance');
  //       break;
  //     default:
  //       console.log(`Clicked on ${card.title} card`);
  //       alert(`This page ${card.title} is not assigned to any industry`);
  //       break;
  //   }
  // };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />


      
      <FeaturedSection />

      <section id="industries">
      <Industry />
      </section>

      {/* Carousel Section */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-white mb-4">
              Celebrating Milestones of Success
            </h2>
            <p className="text-xl text-gray-300">
              Past events that have inspired change and brought together
              visionaries
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image) => (
                <div key={image.id} className="w-full  flex-shrink-0 relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full blur-xs h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-1 flex items-center justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            {!isMobile && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <ContactSection />

      <Footer />

    </div>
  );
};

export default LandingPage;
