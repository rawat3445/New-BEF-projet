import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUp
} from 'lucide-react';

const RuralFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Our Programs', href: '#programs' },
    { name: 'Impact Stories', href: '#stories' },
    { name: 'Get Involved', href: '#involve' },
    { name: 'Resources', href: '#resources' },
    { name: 'Newsroom', href: '#news' },
    { name: 'Careers', href: '#careers' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Organization Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-4">
              BEF Rural Development
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building sustainable, self-reliant villages through technology, community participation, and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">Bharat Mandapam, New Delhi 110001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">rural@befindia.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
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

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold mb-6">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Get monthly updates on rural transformation initiatives across India.
            </p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-400 text-white"
              />
              <button className="bg-gradient-to-r from-green-500 to-teal-500 px-4 py-3 rounded-r-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Bharat Economic Forum. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#transparency" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Transparency Report
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white p-3 rounded-full shadow-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default RuralFooter;