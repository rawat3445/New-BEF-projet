// Developer: Aaradhya – Team Lead, Web3, AI & DeepTech
// Feature: Designed and implemented the modern Footer with newsletter, contact, and social links

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

// Make sure to import Inter font in your HTML/CSS:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#111827] text-[#F9FAFB] font-inter transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Info Section */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-4 text-[#1E3A8A] tracking-wide">
              Bharat Economic Forum
            </h2>
            <p className="text-[#6B7280] max-w-xl leading-relaxed">
              An Independent Think Tank for Viksit Bharat 2047. We facilitate
              funding, collaboration, and innovation for self-economic
              development to collectively drive India’s progress.
            </p>

            <div className="flex space-x-5 mt-6">
              <a
                href="https://www.facebook.com/bharateconomicforum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#06B6D4] transition hover:drop-shadow-[0_0_10px_#06B6D4]"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/bharateconomicforum/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#06B6D4] transition hover:drop-shadow-[0_0_10px_#06B6D4]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/bharateconomicforum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#06B6D4] transition hover:drop-shadow-[0_0_10px_#06B6D4]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#06B6D4]">
              Connect With Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#06B6D4]" />
                <a
                  href="mailto:info@bharateconomicforum.org"
                  className="group-hover:text-[#06B6D4] transition hover:drop-shadow-[0_0_10px_#06B6D4]"
                >
                  info@bharateconomicforum.org
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#06B6D4]" />
                <a
                  href="tel:+919876543210"
                  className="group-hover:text-[#06B6D4] transition hover:drop-shadow-[0_0_10px_#06B6D4]"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#06B6D4]" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="border-t border-[#374151] mt-12 pt-10 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#1E3A8A]">
            Join Our Movement
          </h3>
          <p className="text-[#6B7280] mb-6">
            Subscribe for updates on our latest initiatives.
          </p>
          <div className="flex max-w-md mx-auto overflow-hidden rounded-full shadow-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-[#1F2937] text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={handleSubscription}
              className="px-6 py-3 font-medium text-white bg-gradient-to-r from-[#06B6D4] to-[#1E3A8A] hover:scale-105 hover:drop-shadow-[0_0_12px_#06B6D4] transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
          {isSubscribed && (
            <p className="text-green-400 mt-4 animate-fadeIn">
              Welcome to the movement for Viksit Bharat!
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 text-center border-t border-[#374151] text-sm text-[#6B7280]">
          <p>
            © 2025 Bharat Economic Forum. All rights reserved. | United for
            Sustainable Progress.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Updated by - Aaradhya
