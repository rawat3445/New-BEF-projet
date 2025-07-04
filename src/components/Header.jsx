import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../assets/beflogo.png'
const Header = ()=>{

      const navigate = useNavigate();

        // const [email, setEmail] = useState('');

        // const [isSubscribed, setIsSubscribed] = useState(false);
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//       const handleSubscription = () => {
//     if (email) {
//       setIsSubscribed(true);
//       setEmail('');
//       setTimeout(() => setIsSubscribed(false), 3000);
//     }
//   };




      const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };


      const handleNavigation = (path) => {
        navigate(path);
    setIsMobileMenuOpen(false);
  };



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
    return(
        <>

          <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={Logo} className='object-contain h-28' alt="BEF" />
          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a
                href= '#'
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
              <a href="#industries" className="navbar-link"  onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('industries');
                }}>
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
              {/* <button className="navbar-cta">
                Join Our Movement
              </button> */}
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
        
        </>
    );
}

export default Header;