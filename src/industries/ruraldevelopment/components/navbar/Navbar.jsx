import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import './navbar.css';

const RuralNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'Resources', href: '#resources' }
  ];

  const solutionsItems = [
    { name: 'Water Projects', href: '#water', icon: '💧', description: 'Watershed management' },
    { name: 'Digital Literacy', href: '#digital', icon: '💻', description: 'Village tech hubs' },
    { name: 'AgriTech', href: '#agritech', icon: '🚜', description: 'Smart farming solutions' }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-xl' : 'bg-white/95 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <h1 className="text-2xl font-black bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
              BEF Rural Development
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-green-500 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-green-50 hover:text-green-600"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-green-50 hover:text-green-600">
                  Solutions
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden animate-scale-in">
                    <div className="p-2">
                      {solutionsItems.map((solution) => (
                        <a 
                          key={solution.name}
                          href={solution.href}
                          className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-all duration-300 group"
                        >
                          <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">{solution.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-green-600">{solution.name}</div>
                            <div className="text-xs text-gray-500">{solution.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="ml-4 bg-gradient-to-r from-green-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Partner With Us
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white rounded-b-2xl shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-2 border-t border-gray-100">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500">SOLUTIONS</div>
                {solutionsItems.map((solution) => (
                  <a
                    key={solution.name}
                    href={solution.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-6 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all"
                  >
                    <span className="text-xl mr-3">{solution.icon}</span>
                    <div>
                      <div className="font-medium">{solution.name}</div>
                      <div className="text-xs text-gray-500">{solution.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-4 px-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gradient-to-r from-green-600 to-teal-500 text-white text-center py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default RuralNavbar;