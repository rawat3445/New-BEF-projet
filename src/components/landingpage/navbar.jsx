// Developer: Aaradhya – Team Lead, Web3, AI & DeepTech
// Feature: Designed and implemented the responsive Navbar with dropdown support

import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
  rel="stylesheet"
/>;
const Navbar = ({
  industryItems,
  scrollToSection,
  eventItems,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleNavigation,

}) => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#1E3A8Acc] text-[#F9FAFB] font-['Inter','Poppins','Roboto','sans-serif'] shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Left side: Logo + Title */}
          <div className="flex items-center space-x-4 whitespace-nowrap">
            <div className="navbar-logo group cursor-pointer">
              <img
                src={logo}
                alt="BEF Logo"
                className="h-15 w-18 transition duration-300 ease-in-out group-hover:shadow-[0_0_12px_#06B6D4]"
              />
            </div>
            <span
              className="text-2xl font-extrabold tracking-wide uppercase text-white"
              style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
            >
              BHARAT ECONOMIC FORUM
            </span>
          </div>

          {/* Right side: Navigation links + button */}
          <ul className="hidden md:flex items-center gap-2 text-sm font-medium">
            {/* Simple Links */}
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative px-6 py-2 rounded-full border border-transparent hover:border-[#06B6D4] text-white hover:shadow-[0_0_12px_#06B6D4] transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Initiatives Dropdown */}
            <li className="relative group">
              <a
                href="#initiatives"
                className="relative flex items-center gap-1 px-6 py-2 rounded-full border border-transparent text-white hover:border-[#06B6D4] hover:shadow-[0_0_12px_#06B6D4] transition-all duration-300"
              >
                Initiatives
                <ChevronDown className="w-4 h-4 text-white" />
              </a>
              <div className="absolute hidden group-hover:block top-10 left-0 mt-1 bg-white text-[#111827] rounded-xl shadow-xl w-96 z-20 transition-all duration-300 p-4">
                <div className="px-2 pb-3 font-semibold text-[#1E3A8A] border-b border-gray-200">
                  Our Industries
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3 max-h-64 overflow-y-auto">
                  {industryItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block p-2 rounded hover:bg-gray-100 transition cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-[#6B7280]">
                        {item.description}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* Events Dropdown */}
            <li className="relative group">
              <a
                href="#events"
                className="relative flex items-center gap-1 px-6 py-2 rounded-full border border-transparent text-white hover:border-[#06B6D4] hover:shadow-[0_0_12px_#06B6D4] transition-all duration-300"
              >
                Events
                <ChevronDown className="w-4 h-4 text-white" />
              </a>
              <div className="absolute hidden group-hover:block top-10 left-0 mt-1 bg-white text-[#111827] rounded-xl shadow-xl w-72 z-20 transition-all duration-300">
                <div className="px-4 py-2 font-semibold text-[#1E3A8A] border-b border-gray-200">
                  Upcoming Events
                </div>
                <div className="py-2">
                  {eventItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-[#6B7280]">
                        {item.description}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* CTA Button */}
            <li>
              <button className="bg-[#06B6D4] hover:bg-cyan-500 text-white px-5 py-2 rounded-full transition duration-300 shadow-md hover:shadow-[0_0_15px_#06B6D4] whitespace-nowrap">
                Join Our Movement
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1E3A8Acc] backdrop-blur-xl text-[#F9FAFB] px-4 py-6 space-y-4 shadow-lg">
            {["home", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="block text-base font-medium hover:text-[#06B6D4] transition"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            <div>
              <div className="text-[#9ca3af] text-xs font-semibold mb-2">
                INITIATIVES
              </div>
              {industryItems.slice(0, 6).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block pl-4 text-sm hover:text-[#06B6D4] transition"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div>
              <div className="text-[#9ca3af] text-xs font-semibold mb-2">
                EVENTS
              </div>
              {eventItems.slice(0, 4).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block pl-4 text-sm hover:text-[#06B6D4] transition"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <button className="bg-[#06B6D4] text-white w-full py-2 rounded-full hover:bg-cyan-500 hover:shadow-[0_0_15px_#06B6D4] transition">
              Join Our Movement
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

// Updated by - Aaradhya
