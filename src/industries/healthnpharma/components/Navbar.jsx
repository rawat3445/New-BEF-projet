import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Name - clickable, refreshes page */}
        <Link to="/" className="navbar-logo" onClick={() => window.location.reload()}>
          <img src={logo} alt="Health and Pharma Logo" className="logo-icon" />
          <span className="logo-name">Health and Pharma</span>
        </Link>
        {/* Hamburger menu for mobile view */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        {/* Navigation Links */}
        <div className={`navbar-links${menuOpen ? " open" : ""}`}>
          <Link to="/healthnpharma" className={`nav-link${location.pathname === '/healthnpharma' ? ' active' : ''}`} onClick={handleLinkClick}>Home</Link>
          <Link to="/healthnpharma/about" className={`nav-link${location.pathname === '/healthnpharma/about' ? ' active' : ''}`} onClick={handleLinkClick}>About Us</Link>
          <Link to="/healthnpharma/details" className={`nav-link${location.pathname === '/healthnpharma/details' ? ' active' : ''}`} onClick={handleLinkClick}>Event Details</Link>
          <Link to="/healthnpharma/pricing" className={`nav-link pricing-btn${location.pathname === '/healthnpharma/pricing' ? ' active' : ''}`} onClick={handleLinkClick}>Pricing</Link>
        </div>
      </div>
    </nav>
  );
}