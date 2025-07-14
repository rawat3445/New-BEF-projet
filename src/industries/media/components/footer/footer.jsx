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
    { name: 'Home', href: '#home' },
    { name: 'Shows', href: '#shows' },
    { name: 'Movies', href: '#movies' },
    { name: 'Newsroom', href: '#news' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Content Production', href: '#production' },
    { name: 'OTT Distribution', href: '#ott' },
    { name: 'Celebrity Management', href: '#celebs' },
    { name: 'Event Coverage', href: '#events' },
    { name: 'Music Licensing', href: '#music' },
    { name: 'PR & Marketing', href: '#pr' }
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

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
              MediaVerse
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your all-access pass to captivating entertainment, original storytelling, and immersive media experiences worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-pink-400 mr-3" />
                <span className="text-gray-300">456 Studio Lane, Film City, Mumbai 400065</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-pink-400 mr-3" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-pink-400 mr-3" />
                <span className="text-gray-300">info@mediaverse.in</span>
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
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">What We Do</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Socials */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Subscribe for behind-the-scenes content, exclusive trailers, and the latest entertainment buzz.
            </p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-pink-400 text-white"
              />
              <button className="bg-gradient-to-r from-pink-500 to-red-500 px-4 py-3 rounded-r-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300">
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-300 mb-4">Follow us on</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
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
              © {currentYear} MediaVerse Studios. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-gray-700 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-gray-700 rounded-full opacity-20"></div>
      </div>
    </footer>
  );
};

export default Footer;
