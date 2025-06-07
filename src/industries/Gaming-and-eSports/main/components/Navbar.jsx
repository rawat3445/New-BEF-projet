
/**
 * Contributor: Ankit Sharma
 * Phone: 9262871237
 */


import { Gamepad2, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSponsorsClick = () => {
    navigate('sponsors'); // This will navigate to /gaming-and-eSports/sales
  };


  return (
    <div>
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                GameForge
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#tournaments"
                className="hover:text-cyan-400 transition-colors"
              >
                Tournaments
              </a>
              <a
                href="#community"
                className="hover:text-cyan-400 transition-colors"
              >
                Community
              </a>
              <button
                onClick={handleSponsorsClick}
                className="hover:text-cyan-400 transition-colors bg-transparent border-none text-white cursor-pointer"
              >
                Sponsors
              </button>
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all">
                Join Tournament
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#tournaments"
                className="block px-3 py-2 hover:bg-gray-800 rounded-md"
              >
                Tournaments
              </a>
              <a
                href="#community"
                className="block px-3 py-2 hover:bg-gray-800 rounded-md"
              >
                Community
              </a>
              <a
                href="#sponsors"
                className="block px-3 py-2 hover:bg-gray-800 rounded-md"
              >
                Sponsors
              </a>
              <a
                href="#about"
                className="block px-3 py-2 hover:bg-gray-800 rounded-md"
              >
                About
              </a>
              <button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-lg font-semibold">
                Join Tournament
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
