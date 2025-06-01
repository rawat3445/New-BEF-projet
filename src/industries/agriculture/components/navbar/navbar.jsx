import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import './navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting (mock implementation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial active section

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' }
  ];

  const solutionsItems = [
  {
    name: 'Precision Farming',
    href: '#precision',
    icon: '🌾',
    description: 'Optimize yields with data-driven decisions'
  },
  {
    name: 'AgriTech Consulting',
    href: '#consulting',
    icon: '🧠',
    description: 'Tailored tech strategies for agri-businesses'
  },
  {
    name: 'Sustainable Solutions',
    href: '#sustainability',
    icon: '🌱',
    description: 'Eco-friendly practices & resource management'
  }
];


  return (
 


      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-effect shadow-xl'
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0 group">
              <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 logo-glow cursor-pointer">
                BEF Agriculture and Food
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 ${activeSection === item.id
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 nav-item-active'
                        : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Enhanced Solutions Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 ${dropdownOpen ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50' : 'text-gray-700 hover:text-blue-600'
                    }`}>
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
                            className="flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                          >
                            <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                              {solution.icon}
                            </span>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {solution.name}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {solution.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-t border-gray-100">
                        <div className="text-xs text-gray-600 text-center">
                          Need custom solutions?
                          <a href="#contact" className="text-blue-600 hover:text-purple-600 font-semibold ml-1 transition-colors duration-300">
                            Contact us →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced Contact Button */}
                <div className="ml-4 flex items-center space-x-2">
                  <a
                    href="#contact"
                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <span className="relative z-10 flex items-center">
                      Contact Us
                      <Phone className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-110"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mobile-menu-slide">
              <div className="px-2 pt-2 pb-6 space-y-2 glass-effect border-t border-gray-100 rounded-b-2xl mt-2 mx-4 shadow-xl">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 ${activeSection === item.id
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                        : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-2 border-t border-gray-100 mt-4">
                  <div className="text-xs font-semibold text-gray-500 px-4 py-2 uppercase tracking-wider">
                    Solutions
                  </div>
                  {solutionsItems.map((solution, index) => (
                    <a
                      key={index}
                      href={solution.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-6 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                    >
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        {solution.icon}
                      </span>
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
                    className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg mx-2"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </a>
                </div>

                {/* Quick Contact Info */}
                <div className="pt-4 border-t border-gray-100 mx-2">
                  <div className="flex flex-col space-y-2 text-sm text-gray-600">
                    <div className="flex items-center px-2">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <span>info@befadvertising.com</span>
                    </div>
                    <div className="flex items-center px-2">
                      <Phone className="h-4 w-4 mr-2 text-purple-600" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center px-2">
                      <MapPin className="h-4 w-4 mr-2 text-indigo-600" />
                      <span>New York, NY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;