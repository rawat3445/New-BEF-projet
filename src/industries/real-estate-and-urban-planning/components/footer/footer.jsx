import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp,
  Send
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Urban Planning', href: '#urban-planning' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Get a Quote', href: '#quote' }
  ];

  const services = [
    { name: 'Residential Developments', href: '#residential' },
    { name: 'Commercial Properties', href: '#commercial' },
    { name: 'Master Planning', href: '#master-planning' },
    { name: 'Sustainability Consulting', href: '#sustainability' },
    { name: 'Zoning Analysis', href: '#zoning' },
    { name: 'Urban Design', href: '#urban-design' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-tr from-blue-900 via-green-900 to-blue-800 text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
              UrbanEstate Planning & Development
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Shaping sustainable communities through innovative real estate development and urban planning solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">123 Skyline Ave, Metropolis, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">+1 (212) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">info@urbanestate.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Subscribe for latest real estate news, planning insights, and exclusive offers.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-blue-900 border border-blue-800 rounded-l-lg focus:outline-none focus:border-green-400 text-white"
              />
              <button className="bg-gradient-to-r from-green-500 to-blue-600 px-4 py-3 rounded-r-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                <Send className="h-5 w-5" />
              </button>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-blue-900 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} UrbanEstate Planning & Development. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-blue-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-blue-700 rounded-full opacity-20"></div>
      </div>
    </footer>
  );
};

export default Footer;
