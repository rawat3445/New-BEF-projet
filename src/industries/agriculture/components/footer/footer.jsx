// src/industries/agriculture/components/footer/footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#sales' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ];

  const services = [
    { name: 'Precision Farming', href: '#precision' },
    { name: 'AgriTech Consulting', href: '#consulting' },
    { name: 'Sustainable Solutions', href: '#sustainability' },
    { name: 'Crop Monitoring', href: '#monitoring' },
    { name: 'IoT Integration', href: '#iot' },
  ];


  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent mb-4">
              AgriNxt
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering farmers with innovative agritech solutions to drive productivity, sustainability, and growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-300">Bengaluru, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-500-500 mr-2" />
                <span className="text-gray-300">+91 123 456 span7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-300">info@agrinxt.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-all duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest agritech updates and insights.
            </p>
            <div>
              <div className="flex mb-6">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-500 text-white"
                />
                <button className="bg-gradient-to-r from-green-500 to-teal-600 px-4 py-3 rounded-r-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300">
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div>
                <p className="text-gray-300 mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © {currentYear} AgriNxt. All rights reserved.
                </div>
                <div className="flex items-center space-x-6">
                  <a href="#privacy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                    Terms of Service
                  </a>
                  <a href="#cookies" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-600 text-white p-3 rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-32 h-32 border border-gray-700 rounded-full opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 border border-gray-700 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;