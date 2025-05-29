import { useState, useEffect } from 'react';

import { ChevronLeft, ChevronRight, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Users, Target, Zap, Trophy, TrendingUp ,Star , Tractor} from 'lucide-react';

import './landingPage.css';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Carousel images data
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
    }
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
    case 'media':
      navigate('/media-entertainment');
      break;
    case 'agriculture':
      navigate('/agriculture');
      break;
    default:
      console.log(`Clicked on ${card.title} card`);
      alert(`Navigate to ${card.title} page`);
      break;
  }
};



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BEF
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
                <a href="#industries" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Industries</a>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Gallery</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  Register Now
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#industries" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Industries</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
                Register Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Banner Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Where Brands Meet{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bharat's Vision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fadeInUp animation-delay-200">
              Step into the spotlight at the Bharat Economic Forum Industry Conclave 2025 — a one-day powerhouse event where creativity, policy, and innovation converge to shape India's journey to Viksit Bharat by 2047.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Become a Delegate
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore Sponsorships
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join BEF Conclave 2025?</h2>
            <p className="text-xl text-gray-600">Transform your agency into a national voice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Category Leadership", desc: "Be seen as the voice of India's AdTech & PR industry", icon: <Trophy className="w-8 h-8" /> },
              { title: "Massive Exposure", desc: "Real-time TV, print, podcast, and social coverage", icon: <TrendingUp className="w-8 h-8" /> },
              { title: "Client Magnet", desc: "Network with decision-makers across 16 industries", icon: <Users className="w-8 h-8" /> },
              { title: "Content Goldmine", desc: "Own the moment with branded assets from the event", icon: <Zap className="w-8 h-8" /> }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Focus Areas</h2>
            <p className="text-xl text-gray-600">Shaping the future across key sectors</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Event Highlights</h2>
            <p className="text-xl text-gray-300">Moments that define excellence</p>
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Think Tank Driving India's Future</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Bharat Economic Forum (BEF) is India's dynamic economic and policy think tank committed to building a sustainable, inclusive, and innovation-led Bharat. Much like NITI Aayog, BEF works at the intersection of policy, entrepreneurship, technology, and communication — bringing together minds that matter to co-create India's 2047 vision.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With flagship initiatives like the Industry Sprint and the Viksit Bharat Dialogues, we connect leaders, creators, and changemakers to spark actionable ideas and strategic partnerships.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Discover the BEF Vision
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="scroll-animate">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                  alt="BEF Vision"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Driving India's future through strategic partnerships, innovative dialogues, and transformative initiatives. Join us in shaping Viksit Bharat by 2047.
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
                <li><a href="#industries" className="text-gray-300 hover:text-white transition-colors duration-200">Industries</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Gallery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
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
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates on BEF initiatives and events.</p>
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
                <p className="text-green-400 mt-2 animate-fadeIn">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Bharat Economic Forum. All rights reserved. | Designed for Viksit Bharat 2047
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;