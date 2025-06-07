import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronDown, ChevronRight, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Users, Target, Zap, Trophy, TrendingUp, Star, Tractor, ChevronsLeftRightEllipsis, UserCheck, Sprout, ShoppingCart, HeartPulse } from 'lucide-react';
import './landingPage.css';
import '../AboutSection';
import '../ContactSection';

import { useNavigate } from 'react-router-dom';
import './landingPage.css';
import AboutSection from '../AboutSection';
import ContactSection from '../ContactSection';
const LandingPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleSubscription = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };


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
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            BEF
          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a
                href="#home"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a
                href="#about"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>

            {/* Industries Dropdown */}
            {/* Industries Dropdown */}
            <li className="navbar-item dropdown">
              <a href="#industries" className="navbar-link">
                Initiatives
                <ChevronDown className="dropdown-chevron w-4 h-4" />
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-header">Our Industries</div>
                <div className="dropdown-content">
                  {industryItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      <div className="dropdown-item-title">{item.title}</div>
                      <div className="dropdown-item-description">{item.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* Events Dropdown */}
            <li className="navbar-item dropdown">
              <a href="#events" className="navbar-link">
                Events
                <ChevronDown className="dropdown-chevron w-4 h-4" />
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-header">Upcoming Events</div>
                <div className="dropdown-content">
                  {eventItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      <div className="dropdown-item-title">{item.title}</div>
                      <div className="dropdown-item-description">{item.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li className="navbar-item">
              <a
                href="#contact"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>

            <li className="navbar-item">
              <button className="navbar-cta">
                Join Our Movement
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu active">
            <a
              href="#home"
              className="mobile-menu-item"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="mobile-menu-item"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>

            {/* Mobile Industries */}
            <div style={{ borderBottom: '1px solid rgba(156, 163, 175, 0.1)' }}>
              <div style={{ padding: '0.5rem 2rem', fontSize: '0.9rem', fontWeight: '600', color: '#9ca3af' }}>
                INITIATIVES
              </div>
              {industryItems.slice(0, 6).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="mobile-menu-item"
                  style={{ paddingLeft: '3rem' }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Mobile Events */}
            <div style={{ borderBottom: '1px solid rgba(156, 163, 175, 0.1)' }}>
              <div style={{ padding: '0.5rem 2rem', fontSize: '0.9rem', fontWeight: '600', color: '#9ca3af' }}>
                EVENTS
              </div>
              {eventItems.slice(0, 4).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="mobile-menu-item"
                  style={{ paddingLeft: '3rem' }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="mobile-menu-item"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
            <button className="mobile-menu-cta">
              Join Our Movement
            </button>
          </div>
        )}
      </nav>

      {/* Hero Banner Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with BEF?</h2>
            <p className="text-xl text-gray-600">Building India's foundation for sustainable growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Thought Leadership", desc: "Delivering in-depth analysis and strategic insights on economic policies and trends that matter", icon: <Trophy className="w-8 h-8" /> },
              { title: "Policy Advocacy", desc: "Partnering with government bodies to cultivate reforms that mirror the heart and soul of our nation", icon: <TrendingUp className="w-8 h-8" /> },
              { title: "Networking & Mentorship", desc: "Connecting industry leaders, entrepreneurs, and policymakers to forge a robust ecosystem of progress", icon: <Users className="w-8 h-8" /> },
              { title: "Capacity Building", desc: "Hosting seminars, workshops, and training programs that empower citizens with tools for positive change", icon: <Zap className="w-8 h-8" /> }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Cards Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Initiatives</h2>
            <p className="text-xl text-gray-600">Empowering change through strategic programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCards.map((card) => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                onClick={() => handleCardClick(card)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(card);
                  }
                }}
                aria-label={`Navigate to ${card.title} page`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${card.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{card.description}</p>
                  <div className="flex items-center justify-between">
                    <button
                      className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center gap-2 group-hover:gap-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent double firing
                        handleCardClick(card);
                      }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-all duration-200" />
                    </button>
                  </div>
                </div>

                {/* Subtle click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Carousel Section */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-white mb-4">Celebrating Milestones of Success</h2>
            <p className="text-xl text-gray-300">Past events that have inspired change and brought together visionaries</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
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
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Bharat Economic Forum
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                An Independent Think Tank for accelerating the vision of achieving Viksit Bharat by 2047. We facilitate funding, collaboration, and innovation for self-economic development of individuals to collectively drive India's development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#industries" className="text-gray-300 hover:text-white transition-colors duration-200">Initiatives</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Leadership Awards</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">info@bharateconomicforum.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4">Join Our Movement</h3>
              <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates on BEF initiatives and be part of India's historic journey.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSubscription}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 mt-2 animate-fadeIn">Welcome to the movement for Viksit Bharat!</p>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Bharat Economic Forum. All rights reserved. | Building a legacy of strength, unity, and sustainable progress
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;