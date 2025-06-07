import { useState, useEffect } from 'react';
import {  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram} from 'lucide-react';
const Footer = ()=>{

      const [email, setEmail] = useState('');
        const [isSubscribed, setIsSubscribed] = useState(false);

          const handleSubscription = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };


    return(

        <>

         <footer id="contact" className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        Bharat Economic Forum
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        An Independent Think Tank for accelerating the vision of achieving Viksit Bharat by 2047. We facilitate funding, collaboration, and innovation for self-economic development of individuals to collectively drive India's development.
                      </p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                          <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                          <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                          <Instagram className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
        
                    {/* Quick Links */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
                        <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                        <li><a href="#industries" className="text-gray-300 hover:text-white transition-colors duration-200">Initiatives</a></li>
                        <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Leadership Awards</a></li>
                      </ul>
                    </div>
        
                    {/* Contact Info */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">info@bharateconomicforum.org</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">New Delhi, India</span>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* Email Subscription */}
                  <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="max-w-md mx-auto text-center">
                      <h3 className="text-xl font-semibold mb-4">Join Our Movement</h3>
                      <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates on BEF initiatives and be part of India's historic journey.</p>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <button
                          onClick={handleSubscription}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                        >
                          Subscribe
                        </button>
                      </div>
                      {isSubscribed && (
                        <p className="text-green-400 mt-2 animate-fadeIn">Welcome to the movement for Viksit Bharat!</p>
                      )}
                    </div>
                  </div>
        
                  {/* Copyright */}
                  <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                      © 2025 Bharat Economic Forum. All rights reserved. | Building a legacy of strength, unity, and sustainable progress
                    </p>
                  </div>
                </div>
              </footer>
        </>


    );
}

export default Footer;