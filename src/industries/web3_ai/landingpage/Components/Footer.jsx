import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left - Copyright */}
        <div className="text-center md:text-left text-sm">
          <p>
            © <span className="text-pink-400">2025 Bharath Economic Forum</span>{" "}
            <br />
            All Rights Reserved
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-pink-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            Terms & Conditions
          </a>
        </div>

        {/* Right - Stay Connected */}
        <div className="text-center md:text-right">
          <p className="mb-2 text-sm text-pink-400 font-medium">
            Stay Connected
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
