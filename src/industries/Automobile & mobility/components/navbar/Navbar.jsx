import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, User, LogOut } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
    window.addEventListener('storage', checkAuthStatus);

    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('loginMethod');
    setIsAuthenticated(false);
    setUser(null);
    setShowUserDropdown(false);
    alert('You have logged out successfully.');
  };

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Pricing', href: '#sales', id: 'sales' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  const solutionsItems = [
    { name: 'Precision Farming', href: '#precision', icon: '🌾', description: 'Optimize yields with data-driven decisions' },
    { name: 'AgriTech Consulting', href: '#consulting', icon: '🧠', description: 'Tailored tech strategies for agri-businesses' },
    { name: 'Sustainable Solutions', href: '#sustainability', icon: '🌱', description: 'Eco-friendly practices & resource management' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-xl' : 'bg-white/95 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 group">
            <a href="#home">
              <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 logo-glow cursor-pointer">
                AgriNxt
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-green-500 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 hover:scale-105 ${activeSection === item.id ? 'text-green-600 bg-gradient-to-r from-green-50 to-teal-50 nav-item-active' : 'text-gray-700 hover:text-green-600'}`}
                >
                  {item.name}
                </a>
              ))}

              <div
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 hover:scale-105 ${dropdownOpen ? 'text-green-600 bg-gradient-to-r from-green-50 to-teal-50' : 'text-gray-700 hover:text-green-600'}`}>
                  Solutions
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 glass-effect rounded-2xl shadow-2xl ring-1 ring-black/5 animate-scale-in overflow-hidden">
                    <div className="p-2">
                      {solutionsItems.map((solution, index) => (
                        <a
                          key={index}
                          href={solution.href}
                          className="flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 transition-all duration-300 group"
                        >
                          <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                            {solution.icon}
                          </span>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                              {solution.name}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {solution.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 border-t border-gray-100">
                      <div className="text-xs text-gray-600 text-center">
                        Need custom solutions?
                        <a href="#contact" className="text-green-600 hover:text-teal-600 font-semibold ml-1 transition-colors duration-300">
                          Contact us →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-x-6 flex flex-row text-sm md:text-base">
                {isAuthenticated && user ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowUserDropdown(!showUserDropdown)}
                      className="flex items-center gap-2 bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-soft-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105"
                    >
                      {user.image ? (
                        <img src={user.image} alt={user.name} className="w-6 h-6 rounded-full object-cover border-2 border-white" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                      <span className="max-w-[120px] truncate">{user.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {showUserDropdown && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            {user.image ? (
                              <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
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
              </div>

              <div className="ml-4 flex items-center space-x-2">
                <a
                  href="#contact"
                  className="group relative bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <Phone className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 rounded-xl text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
