import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo_path from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header-wrapper">
      {/* Main Navigation */}
      <div className="industry-nav bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-800 shadow-md">
        <div className="nav-container px-4 py-3 flex flex-col md:flex-row justify-between items-center w-full">
          {/* Brand Logo Only */}
          <div className="nav-brand">
            <img src={logo_path} alt="BEF Logo" className="w-24 h-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="desktop-nav flex gap-4 mt-4 md:mt-0">
            <RouterLink
              to="/web_ai"
              className="nav-item text-white hover:text-yellow-200 font-medium"
            >
              Home
            </RouterLink>

            {/*  <ScrollLink
              to="event"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-item text-white hover:text-yellow-200 font-medium cursor-pointer"
            >
               Event 
            </ScrollLink>*/}

            {/*  <ScrollLink
              to="delegate"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-item text-white hover:text-yellow-200 font-medium cursor-pointer"
            >
               Delegate 
            </ScrollLink>*/}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
