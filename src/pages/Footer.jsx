// Footer.jsx
// Prepared by Riddhi Chakraborty

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bef-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/India_Inc_Logo.svg/2560px-India_Inc_Logo.svg.png"
            alt="BEF Logo"
            className="footer-logo"
          />
          <div className="footer-taglines">
            <span>ENGAGING LEADERS</span>
            <span>INCISIVE CONTENT</span>
            <span>IMPACTFUL EVENTS</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Useful Links</h4>
          <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
          <button onClick={() => navigate('/terms-and-conditions')}>Terms & Conditions</button>
          <button disabled>Executive Circle Member Terms & Conditions</button>
          <button disabled>Cookie Policy</button>
          <button disabled>GDPR Policy</button>
          <button disabled>IGF Fellowship Programme</button>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>812, ABC Tower, Sec-135, Noida</p>
          <p><a href="https://www.bharateconomicforum.org" target="_blank" rel="noreferrer">www.bharateconomicforum.org</a></p>
          <p>+91-9266114256, +91-8744089014</p>
          <p><a href="mailto:contact@bharateconomicforum.org">contact@bharateconomicforum.org</a></p>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://x.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Copyright: All content © Bharat Economic Forum. All rights reserved.</p>
        <a href="#top" className="footer-back-to-top">⬆ Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;
