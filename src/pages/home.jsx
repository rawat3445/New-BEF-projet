import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
      {/* Header */}
      <header>
        <div className="container header-container">
          <Link to="/">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQEHtf3RKka4xw/company-logo_200_200/company-logo_200_200/0/1722955994963?e=2147483647&v=beta&t=0JUtylhPif5MozVJoL4mY1K65qI7XiIl2ov_D6rilJM"
              alt="Bharat Economic Forum"
              className="logo"
            />
          </Link>
          <nav>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
            <ul className={isMenuOpen ? 'show' : ''}>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/speakers">Speakers</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Shaping India's Economic Future</h1>
          <p>The Bharat Economic Forum is a premier platform bringing together global leaders, policymakers, and business executives to discuss and shape India's economic trajectory.</p>
          <div>
            <a href="#" className="btn">Register for Summit 2024</a>
            <a href="#" className="btn btn-light">Learn More</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About Bharat Economic Forum</h2>
          <div className="about-content">
            <div className="about-text">
              <p>The Bharat Economic Forum is dedicated to fostering dialogue and collaboration on India's economic growth, innovation, and global integration. Established in 2015, we have become the leading platform for meaningful discussions on India's economic future.</p>
              <p>Our annual summit attracts over 1,000 participants from 40+ countries, including government leaders, CEOs, investors, and thought leaders who are shaping India's economic landscape.</p>
              <p>Through our year-round initiatives, we provide insights, networking opportunities, and actionable strategies for businesses and policymakers engaged with India's dynamic economy.</p>
            </div>
            <div className="about-image">
              <img src="https://media.licdn.com/dms/image/v2/D560BAQEHtf3RKka4xw/company-logo_200_200/company-logo_200_200/0/1722955994963?e=2147483647&v=beta&t=0JUtylhPif5MozVJoL4mY1K65qI7XiIl2ov_D6rilJM" alt="Bharat Economic Forum Summit" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <h2 className="section-title">Our Purpose</h2>
          <div className="mv-container">
            <div className="mv-card">
              <h3>Mission</h3>
              <p>To accelerate India's economic growth by facilitating meaningful dialogue between government, business, and civil society. We aim to bridge the gap between policy and practice, fostering an ecosystem that supports innovation, investment, and inclusive development.</p>
            </div>
            <div className="mv-card">
              <h3>Vision</h3>
              <p>To establish India as the world's most dynamic and sustainable economy by 2047, through collaborative efforts that leverage technology, human capital, and global partnerships. We envision an India that leads in innovation while maintaining equitable growth across all sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Join the Conversation on India's Economic Future</h2>
          <p>Be part of the most influential gathering of economic leaders focused on India's growth story. Network with decision-makers, gain exclusive insights, and contribute to shaping policies that will drive India's economy forward.</p>
          <div>
            <a href="#" className="btn btn-light">Become a Member</a>
            <a href="#" className="btn">Register for Events</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Events</h3>
              <ul>
                <li><a href="#">Annual Summit 2024</a></li>
                <li><a href="#">Regional Conferences</a></li>
                <li><a href="#">Leadership Roundtables</a></li>
                <li><a href="#">Past Events</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Research Papers</a></li>
                <li><a href="#">Newsletters</a></li>
                <li><a href="#">Media Coverage</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <i className="fas fa-map-marker-alt"></i>
                <span>New Delhi, India</span>
              </div>
              <div className="contact-info">
                <i className="fas fa-phone"></i>
                <span>+91 11 1234 5678</span>
              </div>
              <div className="contact-info">
                <i className="fas fa-envelope"></i>
                <span>info@bharateconomicforum.org</span>
              </div>
              <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2024 Bharat Economic Forum. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 