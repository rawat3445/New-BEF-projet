import './Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            Bharat Economic Forum<br />
            123 Innovation Avenue,<br />
            New Delhi, India<br />
            <a href="mailto:dialogues@bharateconomicforum.org">dialogues@bharateconomicforum.org</a><br />
            +91 98765 43210
          </p>
        </div>
        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/home');
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#industries"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/home', { state: { scrollTo: 'industries' } });
                }}
              >
                Initiatives
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/events');
                  window.scrollTo(0, 0);
                }}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/leadership-awards');
                  window.scrollTo(0, 0);
                }}
              >
                Leadership Awards
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/feedback');
                  window.scrollTo(0, 0);
                }}
              >
                Feedback Form
              </a>
            </li>
          </ul>
        </div>
        {/* Stay Connected */}
        <div className="footer-col">
          <h3>Stay Connected</h3>
          <form className="footer-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="footer-social">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          &copy; {new Date().getFullYear()} Bharat Economic Forum. All rights reserved.
        </div>
        <div className="footer-policies">
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
          <button>Cookies Policy</button>
        </div>
      </div>
    </footer>
  );
}