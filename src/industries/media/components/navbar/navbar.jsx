import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, User, LogOut } from 'lucide-react';
import LoginForm from '../../../../components/Auth/LoginForm';
import './navbar.css';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Categories', href: '#categories', id: 'categories' },
  { name: 'Originals', href: '#originals', id: 'originals' },
  { name: 'News', href: '#news', id: 'news' }
];

const solutionsItems = [
  { name: 'Film Production', href: '#film', icon: '🎬', description: 'Original movie content' },
  { name: 'Music Labels', href: '#music', icon: '🎵', description: 'Albums & audio streaming' },
  { name: 'Digital Media', href: '#digital', icon: '📺', description: 'OTT & Web Series' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

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

  useEffect(() => {
    checkAuthStatus();
    window.addEventListener('storage', checkAuthStatus);

    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
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

  const handleLoginSuccess = () => {
    setShowLogin(false);
    checkAuthStatus();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-xl' : 'bg-white/95 backdrop-blur-sm shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 logo-glow cursor-pointer">
                BEF Media & Entertainment
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-yellow-50 hover:scale-105 ${activeSection === item.id ? 'text-red-600 bg-gradient-to-r from-pink-50 to-yellow-50 nav-item-active' : 'text-gray-700 hover:text-red-600'}`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <button className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-yellow-50 hover:scale-105 ${dropdownOpen ? 'text-red-600 bg-gradient-to-r from-pink-50 to-yellow-50' : 'text-gray-700 hover:text-red-600'}`}>
                    Solutions
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-80 glass-effect rounded-2xl shadow-2xl ring-1 ring-black/5 animate-scale-in overflow-hidden">
                      <div className="p-2">
                        {solutionsItems.map((solution, index) => (
                          <a key={index} href={solution.href} className="flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-yellow-50 transition-all duration-300 group">
                            <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">{solution.icon}</span>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">{solution.name}</div>
                              <div className="text-sm text-gray-600 mt-1">{solution.description}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-yellow-50 p-4 border-t border-gray-100 text-xs text-gray-600 text-center">
                        Want to collaborate?
                        <a href="#contact" className="text-red-600 hover:text-yellow-600 font-semibold ml-1 transition-colors duration-300">
                          Contact us →
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="ml-4 flex items-center space-x-2">
                  <a
                    href="#contact"
                    className="group relative bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-full text-sm font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                  >
                    <span className="relative z-10 flex items-center">
                      Contact Us
                      <Phone className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
                <div className="hidden lg:flex items-center space-x-4 ml-6">
                  {isAuthenticated && user ? (
                    <div className="relative">
                      <button
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-soft-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105"
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
                        <div className="themed-user-dropdown">
                          <div className="dropdown-header">
                            <div className="user-info-container">
                              {user.image ? (
                                <img
                                  src={user.image}
                                  alt={user.name}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                              ) : (
                                <div className="user-avatar-placeholder">
                                  <User className="user-avatar-icon" />
                                </div>
                              )}
                              <div>
                                <p className="user-name text-black">{user.name}</p>
                                <p className="user-email text-black">{user.email}</p>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={handleLogout}
                            className="logout-button"
                          >
                            <LogOut className="w-4 h-4" />
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button onClick={() => setShowLogin(true)} className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 rounded-xl text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-yellow-50 transition-all duration-300 hover:scale-110">
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mobile-menu-slide">
              <div className="px-2 pt-2 pb-6 space-y-2 glass-effect border-t border-gray-100 rounded-b-2xl mt-2 mx-4 shadow-xl">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-yellow-50 hover:scale-105 ${activeSection === item.id ? 'text-red-600 bg-gradient-to-r from-pink-50 to-yellow-50' : 'text-gray-700 hover:text-red-600'}`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2 border-t border-gray-100 mt-4">
                  <div className="text-xs font-semibold text-gray-500 px-4 py-2 uppercase tracking-wider">Solutions</div>
                  {solutionsItems.map((solution, index) => (
                    <a
                      key={index}
                      href={solution.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-6 py-3 rounded-xl text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-yellow-50 transition-all duration-300 group"
                    >
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">{solution.icon}</span>
                      <div>
                        <div className="font-medium">{solution.name}</div>
                        <div className="text-xs text-gray-500">{solution.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg mx-2"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </a>
                </div>
                <div className="pt-4 border-t border-gray-100 mx-2">
                  <div className="flex flex-col space-y-2 text-sm text-gray-600">
                    <div className="flex items-center px-2">
                      <Mail className="h-4 w-4 mr-2 text-red-600" />
                      <span>media@befentertainment.com</span>
                    </div>
                    <div className="flex items-center px-2">
                      <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                      <span>Mumbai | Delhi | Hyderabad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {
        showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative">
              <button onClick={() => setShowLogin(false)} className="absolute z-20 top-4 right-9 text-white">
                <X size={24} color='blue' />
              </button>
              <LoginForm onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
