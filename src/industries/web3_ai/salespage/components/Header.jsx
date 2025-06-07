import React from 'react';
import { Link } from 'react-scroll';
import logo_path from '../assets/img/logo.png'; // adjust path as needed

const Header = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="contactheader flex flex-col md:flex-row items-center justify-between h-auto md:h-10 w-full bg-purple-950 px-4 py-2 md:py-0">
        <p className="text-lime-50 text-center md:text-left">
          <span className="text-base font-semibold">Viksit Bharat by 2047 </span>
          <span className="text-sm font-normal">Innovate 💡, Collaborate 🤝, Celebrate 🎉</span>
        </p>

        <div className="contact-us flex items-center mt-2 md:mt-0">
          <i className="bx bx-envelope text-white mr-2"></i>
          <Link
            className="text-lime-50 text-sm md:text-base"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Header with Logo and Menu */}
      <div id="header-div" className="flex flex-col md:flex-row justify-between items-center w-full bg-white px-4 py-3 shadow-md">
        {/* Logo */}
        <div className="logo w-28 h-auto mb-2 md:mb-0">
          <img src={logo_path} alt="BEF Logo" className="w-full h-auto" />
        </div>

        {/* Navigation */}
        <nav className="menu flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <Link
            className="cursor-pointer text-gray-800 hover:text-purple-700 font-medium"
            activeClass="active"
            to="event"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Event
          </Link>
          <Link
            className="cursor-pointer text-gray-800 hover:text-purple-700 font-medium"
            activeClass="active"
            to="delegate"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Delegate
          </Link>
          <Link
            className="cursor-pointer text-gray-800 hover:text-purple-700 font-medium"
            activeClass="active"
            to="/web_ai"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
