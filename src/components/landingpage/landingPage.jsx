import { useState, useEffect } from 'react';
import {Users, Target, Zap, Trophy, TrendingUp, Star, Tractor, ChevronsLeftRightEllipsis, UserCheck, Sprout, ShoppingCart, HeartPulse } from 'lucide-react';
import './landingPage.css';
import Footer from './Footer';
import About from './About';
import Navbar from './navbar';
import FeaturedSection from './FeaturedSection';
import Herobanner from './Herobanner';
import Industrycards from './Industrycards';
import Carouselgallery from './Carouselgallery';
import { useNavigate } from 'react-router-dom';
import './landingPage.css';
const LandingPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const eventItems = [
    {
      title: "Industry Innovation Summit",
      path: "/events/innovation-summit",
      description: "Annual technology and innovation conference"
    },
    {
      title: "Policy Makers Dialogue",
      path: "/events/policy-dialogue",
      description: "Strategic policy discussions"
    },
    {
      title: "Technology Integration Forum",
      path: "/events/tech-forum",
      description: "Tech integration workshops"
    },
    {
      title: "Leadership Excellence",
      path: "/events/leadership",
      description: "Leadership development programs"
    },
    {
      title: "Startup Pitch Competition",
      path: "/events/startup-pitch",
      description: "Showcase innovative startups"
    },
    {
      title: "Women in Business Conference",
      path: "/events/women-business",
      description: "Empowering women entrepreneurs"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };



  const industryItems = [
    {
      title: "Advertisement & Marketing",
      path: "/advertisement",
      description: "Shape the future of brand communication"
    },
    {
      title: "Beauty & Wellness",
      path: "/beauty-wellness",
      description: "Innovative beauty and wellness solutions"
    },
    {
      title: "Women Entrepreneurship",
      path: "/women-entrepreneurship",
      description: "Empowering women-led businesses"
    },
    {
      title: "Real Estate & Urban Planning",
      path: "/real-estate",
      description: "Urban development and planning"
    },
    {
      title: "Media & Entertainment",
      path: "/media-entertainment",
      description: "Content creation and distribution"
    },
    {
      title: "Rural Development",
      path: "/rural-development",
      description: "Building sustainable villages"
    },
    {
      title: "Environment & Sustainability",
      path: "/environment",
      description: "Green technology solutions"
    },
    {
      title: "Agriculture & Agritech",
      path: "/agriculture",
      description: "Smart farming solutions"
    },
    {
      title: "Retail & E-Commerce",
      path: "/retail",
      description: "Digital commerce innovation"
    },
    {
      title: "Web 3.0, AI & DeepTech",
      path: "/web_ai",
      description: "Next-generation technologies"
    },
    {
      title: "Automobile & Mobility",
      path: "/automobile",
      description: "Future of transportation"
    },
    {
      title: "Health & Pharma",
      path: "/health-pharma",
      description: "Healthcare innovation"
    }
  ];

  const carouselImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Industry Innovation Summit"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Policy Makers Dialogue"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Technology Integration Forum"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Leadership Excellence"
    }
  ];


  // Industry cards data
  const industryCards = [
    {
      id: 'advertisement',
      title: "Advertisement & Marketing",
      description: "Shape the future of brand communication and digital marketing strategies for Viksit Bharat.",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-blue-600 to-purple-600",
      path: `/industries/advertisement`
    },
    {
      id: 'beauty-wellness',
      title: "Beauty And Wellness",
      description: "Discover innovative beauty and wellness solutions shaping Viksit Bharat’s vibrant future.",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-pink-500 to-purple-600",
      path: `/industries/beauty-wellness`
    },
    {
      id: 'women-entrepreneurship',
      title: "Empowering Women Entrepreneurs",
      description: "Explore inspiring stories, resources, and opportunities fueling women-led businesses and innovation.",
      icon: <UserCheck className="w-8 h-8" />,
      gradient: "from-pink-600 to-purple-700",
      path: `/industries/women-entrepreneurship`
    },

    {
      id: 'real-estate',
      title: "Real Estate and Urban Planning",
      description: "Explore inspiring stories, resources, and opportunities fueling women-led businesses and innovation.",
      icon: <UserCheck className="w-8 h-8" />,
      gradient: "from-pink-600 to-purple-700",
      path: `/industries/women-entrepreneurship`
    },

    {
      id: 2,
      title: "Public Relations",
      description: "Build strategic communications that connect brands with India's evolving narrative.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Digital Innovation",
      description: "Pioneer the next wave of AdTech solutions and digital transformation initiatives.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 'media',
      title: "Media & Entertainment",
      description: "Revolutionize content creation and distribution across traditional and new media platforms.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-600"
    },
    {

      id: 'rural',
      title: "Rural Development",
      description: "Building sustainable, self-reliant villages through technology, community participation, and innovative solutions",
      icon: <Sprout className="w-8 h-8" />,
      gradient: "from-lime-400 to-green-700",
      path: `/rural-development`
    },
    {
      id: 'environment',
      title: "Environment & Sustainability Tech",
      description: "Shape the future of brand communication and digital marketing strategies for Viksit Bharat.",
      icon: <Sprout className="w-8 h-8" />,
      gradient: "from-lime-400 to-green-700",
      path: `/industries/environment`
    },
    {
      id: 5,
      title: "Brand Strategy",
      description: "Craft compelling brand stories that resonate with India's diverse and dynamic market.",

      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: 'agriculture',
      title: "Agriculture and Agritech",
      description: "Empower Indian agriculture with smart agritech solutions that boost productivity and drive sustainable growth.",
      icon: <Tractor className="w-8 h-8" />,
      gradient: "from-lime-400 to-green-700"
    },

    {
      id: 'retail',
      title: "Retail & E-Commerce",
      description: "To empower emerging retail and e-commerce startups across Bharat by providing the tools, insights, and infrastructure.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-cyan-600 to-blue-600",
      path: `/industries/retail`
    },




    {
      id: 'web3ai',
      title: "Web 3.0, AI and DeepTech",
      description: "Future-Proofing India with Next-Gen Tech Discover how Web3, AI, and Quantum Computing are transforming industries.",
      icon: <ChevronsLeftRightEllipsis className="w-8 h-8" />,
      gradient: "from-indigo-400 to-blue-700",
      path: `/industries/web3_ai`
    }
    ,
    {
      id: 'automobile',
      title: "Automobile & Mobility",
      description: "Explore the world of smart vehicles, sustainable transport, and the future of mobility.",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-blue-600 to-purple-600",
      path: `/industries/Automobile & mobilty/automobile`
    },
    {
      id: 'health-pharma',
      title: "Health & Pharma",
      description: "Advance healthcare innovation and pharmaceutical excellence for a healthier, resilient Bharat.",
      icon: <HeartPulse className="w-8 h-8" />,
      gradient: "from-green-500 to-blue-600",
      path: `/industries/health-pharma`
    },
  ];
  // Auto-slide carousel
 
  // Smooth scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  const handleCardClick = (card) => {
    switch (card.id) {
      case 'advertisement':
        navigate('/advertisement');
        break;
      case 'beauty-wellness':
        navigate('/beauty-wellness');
        break;
      case 'women-entrepreneurship':
        navigate('/women-entrepreneurship');
        break;
      case 'media':
        navigate('/media-entertainment');
        break;
      case 'environment':
        navigate('/environment');
        break;
      case 'agriculture':
        navigate('/agriculture');
        break;
      case 'health-pharma':
        navigate('/health-pharma');
        break;
      case 'retail':
        navigate('/retail');
        break;
      case 'web3ai':
        navigate('/web_ai');
        break;
      case 'automobile':
        navigate('/automobile');
        break;
      case 'real-estate':
        navigate('/real-estate');
        break;
      case 'rural':
        navigate(`/rural-development`);
        break;
      default:
        console.log(`Clicked on ${card.title} card`);
        alert(`This page ${card.title} is not assigned to any industry`);
        break;
    }
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar industryItems={industryItems} scrollToSection={scrollToSection} eventItems={eventItems} isMobileMenuOpen ={isMobileMenuOpen} handleNavigation = {handleNavigation} />


      {/* Hero Banner Section */}
      <Herobanner/>

      {/* Featured Section */}
      <FeaturedSection/>
      {/* Industries Cards Section */}
     
    <Industrycards  industryCards={industryCards} handleCardClick ={handleCardClick }/>
      {/* Carousel Section */}
      <Carouselgallery  carouselImages={carouselImages}/>

      {/* About Company Section */}
      <About/>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
};

export default LandingPage;