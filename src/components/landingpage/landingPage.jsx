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
//import Header from '../Header';
// import { useNavigate } from 'react-router-dom';
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

    // Optional: clear scroll state after scroll (prevent repeated scrolls)
    window.history.replaceState({}, document.title);
  }, [location]);


  // const navigate = useNavigate();
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

  // const industryItems = [
  //   {
  //     title: "Advertisement & Marketing",
  //     path: "/advertisement",
  //     description: "Shape the future of brand communication"
  //   },
  //   {
  //     title: "Beauty & Wellness",
  //     path: "/beauty-wellness",
  //     description: "Innovative beauty and wellness solutions"
  //   },
  //   {
  //     title: "Women Entrepreneurship",
  //     path: "/women-entrepreneurship",
  //     description: "Empowering women-led businesses"
  //   },
  //   {
  //     title: "Real Estate & Urban Planning",
  //     path: "/real-estate",
  //     description: "Urban development and planning"
  //   },
  //   {
  //     title: "Media & Entertainment",
  //     path: "/media-entertainment",
  //     description: "Content creation and distribution"
  //   },
  //   {
  //     title: "Rural Development",
  //     path: "/rural-development",
  //     description: "Building sustainable villages"
  //   },
  //   {
  //     title: "Environment & Sustainability",
  //     path: "/environment",
  //     description: "Green technology solutions"
  //   },
  //   {
  //     title: "Agriculture & Agritech",
  //     path: "/agriculture",
  //     description: "Smart farming solutions"
  //   },
  //   {
  //     title: "Retail & E-Commerce",
  //     path: "/retail",
  //     description: "Digital commerce innovation"
  //   },
  //   {
  //     title: "Web 3.0, AI & DeepTech",
  //     path: "/web_ai",
  //     description: "Next-generation technologies"
  //   },
  //   {
  //     title: "Automobile & Mobility",
  //     path: "/automobile",
  //     description: "Future of transportation"
  //   },
  //   {
  //     title: "Health & Pharma",
  //     path: "/health-pharma",
  //     description: "Healthcare innovation"
  //   },
  //   {
  //     title: "Policy & Governance",
  //     path: "/policy-and-governance",
  //     description: "Strategic policy development"
  //   }
  // ];

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

  // Industry cards data
  // const industryCards = [
  //   {
  //     id: 'advertisement',
  //     title: "Advertisement & Marketing",
  //     description: "Shape the future of brand communication and digital marketing strategies for Viksit Bharat.",
  //     icon: <Target className="w-8 h-8" />,
  //     gradient: "from-blue-600 to-purple-600",
  //     path: `/industries/advertisement`
  //   },
  //   {
  //     id: 'beauty-wellness',
  //     title: "Beauty And Wellness",
  //     description: "Discover innovative beauty and wellness solutions shaping Viksit Bharat’s vibrant future.",
  //     icon: <Star className="w-8 h-8" />,
  //     gradient: "from-pink-500 to-purple-600",
  //     path: `/industries/beauty-wellness`
  //   },
  //   {
  //     id: 'women-entrepreneurship',
  //     title: "Empowering Women Entrepreneurs",
  //     description: "Explore inspiring stories, resources, and opportunities fueling women-led businesses and innovation.",
  //     icon: <UserCheck className="w-8 h-8" />,
  //     gradient: "from-pink-600 to-purple-700",
  //     path: `/industries/women-entrepreneurship`
  //   },

  //   {
  //     id: 'real-estate',
  //     title: "Real Estate and Urban Planning",
  //     description: "Explore inspiring stories, resources, and opportunities fueling women-led businesses and innovation.",
  //     icon: <UserCheck className="w-8 h-8" />,
  //     gradient: "from-pink-600 to-purple-700",
  //     path: `/industries/women-entrepreneurship`
  //   },

  //   {
  //     id: 2,
  //     title: "Public Relations",
  //     description: "Build strategic communications that connect brands with India's evolving narrative.",
  //     icon: <Users className="w-8 h-8" />,
  //     gradient: "from-green-500 to-teal-600"
  //   },
  //   {
  //     id: 3,
  //     title: "Digital Innovation",
  //     description: "Pioneer the next wave of AdTech solutions and digital transformation initiatives.",
  //     icon: <Zap className="w-8 h-8" />,
  //     gradient: "from-orange-500 to-red-600"
  //   },
  //   {
  //     id: 'media',
  //     title: "Media & Entertainment",
  //     description: "Revolutionize content creation and distribution across traditional and new media platforms.",
  //     icon: <TrendingUp className="w-8 h-8" />,
  //     gradient: "from-indigo-500 to-blue-600"
  //   },
  //   {

  //     id: 'rural',
  //     title: "Rural Development",
  //     description: "Building sustainable, self-reliant villages through technology, community participation, and innovative solutions",
  //     icon: <Sprout className="w-8 h-8" />,
  //     gradient: "from-lime-400 to-green-700",
  //     path: `/rural-development`
  //   },
  //   {
  //     id: 'environment',
  //     title: "Environment & Sustainability Tech",
  //     description: "Shape the future of brand communication and digital marketing strategies for Viksit Bharat.",
  //     icon: <Sprout className="w-8 h-8" />,
  //     gradient: "from-lime-400 to-green-700",
  //     path: `/industries/environment`
  //   },
  //   {
  //     id: 5,
  //     title: "Brand Strategy",
  //     description: "Craft compelling brand stories that resonate with India's diverse and dynamic market.",

  //     icon: <Trophy className="w-8 h-8" />,
  //     gradient: "from-pink-500 to-rose-600"
  //   },
  //   {
  //     id: 'agriculture',
  //     title: "Agriculture and Agritech",
  //     description: "Empower Indian agriculture with smart agritech solutions that boost productivity and drive sustainable growth.",
  //     icon: <Tractor className="w-8 h-8" />,
  //     gradient: "from-lime-400 to-green-700"
  //   },

  //   {
  //     id: 'retail',
  //     title: "Retail & E-Commerce",
  //     description: "To empower emerging retail and e-commerce startups across Bharat by providing the tools, insights, and infrastructure.",
  //     icon: <ShoppingCart className="w-8 h-8" />,
  //     gradient: "from-cyan-600 to-blue-600",
  //     path: `/industries/retail`
  //   },

  //   {
  //     id: 'web3ai',
  //     title: "Web 3.0, AI and DeepTech",
  //     description: "Future-Proofing India with Next-Gen Tech Discover how Web3, AI, and Quantum Computing are transforming industries.",
  //     icon: <ChevronsLeftRightEllipsis className="w-8 h-8" />,
  //     gradient: "from-indigo-400 to-blue-700",
  //     path: `/industries/web3_ai`
  //   }
  //   ,
  //   {
  //     id: 'automobile',
  //     title: "Automobile & Mobility",
  //     description: "Explore the world of smart vehicles, sustainable transport, and the future of mobility.",
  //     icon: <Target className="w-8 h-8" />,
  //     gradient: "from-blue-600 to-purple-600",
  //     path: `/industries/Automobile & mobilty/automobile`
  //   },
  //   {
  //     id: 'health-pharma',
  //     title: "Health & Pharma",
  //     description: "Advance healthcare innovation and pharmaceutical excellence for a healthier, resilient Bharat.",
  //     icon: <HeartPulse className="w-8 h-8" />,
  //     gradient: "from-green-500 to-blue-600",
  //     path: `/industries/health-pharma`
  //   },
  //   {
  //     id: 'policy-and-governance',
  //     title: "Policy & Governance",
  //     description: "Strategic policy development and governance solutions for a prosperous Bharat.",
  //     icon: <Trophy className="w-8 h-8" />,
  //     gradient: "from-blue-600 to-purple-600",
  //     path: `/policyandgovernance`
  //   }
  // ];
  // Auto-slide carousel
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
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner Section */}
      <Hero />


      {/* <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Independent Think Tank for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Viksit Bharat 2047
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fadeInUp animation-delay-200">
              Standing as a beacon of innovation and national pride, The Bharat Economic Forum is a movement that embodies the spirit of a resilient and visionary India. We work on a human-centric development model by facilitating funding, collaboration, and innovation for self-economic development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Join the Movement
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore Our Initiatives
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Section */}
      <FeaturedSection />
      {/* Industries Cards Section */}
      <Industry />

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
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <AboutSection />

      {/* Contact Company Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default LandingPage;
