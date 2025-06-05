import './Footer.css';

export default function Footer() {
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
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/details">Event Details</a></li>
            
            <li><a href="/pricing">Pricing</a></li>
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