import { useNavigate,useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, User, LogOut } from 'lucide-react';
import Logo from '../assets/beflogo.png';



const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  // Check authentication status on component mount and when localStorage changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      const userData = localStorage.getItem('user');
      
      if (authStatus === 'true' && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuthStatus();

    // Listen for storage changes (when user logs in/out in another tab)
    window.addEventListener('storage', checkAuthStatus);
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserDropdown && !event.target.closest('.relative')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('loginMethod');
    setIsAuthenticated(false);
    setUser(null);
    setShowUserDropdown(false);
    alert('You have been logged out successfully.');
  };

  const scrollToSection = (id) => {
  if (location.pathname !== '/home') {
    navigate('/home', { state: { scrollTo: id } });
  } else {
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100); // Give time for section to be mounted
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
  return (
    <>

      <nav className="navbar" id="home">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={Logo} className='object-contain h-28' alt="BEF" />
          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a
                href='#'
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
                href="/about"
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
            <li className="navbar-item dropdown">
              <a href="#industries" className="navbar-link" onClick={(e) => {
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
                <a 
                                  href="#events" 
                                  className="navbar-link"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    //handleNavigation('/events'); // This will navigate to the main Events page
                                  }}
                                >
                                  Events
                                  <ChevronDown 
                                    className="dropdown-chevron w-4 h-4" 
                                    onClick={(e) => {
                                      e.stopPropagation(); 
                                      
                                    }}
                                  />
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
                    {/* Add a link to view all events that goes to the EventsPage */}
                    <a
                      href="#"
                      className="dropdown-item view-all"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('/events');
                      }}
                    >
                      <div className="dropdown-item-title">View All Events</div>
                      <div className="dropdown-item-description">See all upcoming events</div>
                    </a>
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
              {isAuthenticated && user ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center gap-2 bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-soft-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105"
                  >
                    {user.image ? (
                      <img 
                        src={user.image} 
                        alt={user.name}
                        className="w-6 h-6 rounded-full object-cover border-2 border-white"
                      />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    <span className="max-w-[120px] truncate">{user.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* User Dropdown */}
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          {user.image ? (
                            <img 
                              src={user.image} 
                              alt={user.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-gray-500" />
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-dark-charcoal">{user.name}</p>
                            <p className="text-sm text-neutral-gray">{user.email}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors duration-200"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => navigate('/login')}
                  className="flex items-center gap-2 bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-soft-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105"
                >
                  <User className="w-4 h-4" />
                  Login
                </button>
              )}
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle md:mr-2 mr-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X color='blue' /> : <Menu color='blue' />}
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
            {isAuthenticated && user ? (
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  {user.image ? (
                    <img 
                      src={user.image} 
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-dark-charcoal">{user.name}</p>
                    <p className="text-sm text-neutral-gray">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-red-50 text-red-600 px-4 py-2 rounded-full font-medium hover:bg-red-100 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="mobile-menu-cta flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                Login
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;