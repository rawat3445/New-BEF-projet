import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import TypingText from '../components/TypingText';
import './About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-intro fade-in">
        {/* Layered background images */}
        <img src={hero1} alt="" className="about-intro-bg-img" aria-hidden="true" />
        <img src={hero2} alt="" className="about-intro-bg-img img2" aria-hidden="true" />
        <img src={hero3} alt="" className="about-intro-bg-img img3" aria-hidden="true" />

        <h1>About Bharat Economic Forum</h1>
        <p>
          The Bharat Economic Forum (BEF) is an independent think tank dedicated to accelerating India's vision of becoming a developed nation—Viksit Bharat—by 2047. BEF serves as a global platform for discussing, debating, and shaping India's economic policies, business strategies, and development initiatives.
        </p>

        <div className="cta-buttons">
          <Link to="/register" className="primary-btn">Register Now</Link>
          <Link to="/learn-more" className="secondary-btn">Learn More</Link>
        </div>
      </div>

      <div className="about-initiatives fade-in delay-1">
        <h2>Our Initiatives</h2>
        <ul className="initiatives-list">
          <li className="initiative-card">
            <strong>Industry Conclave 2025</strong>
            <p>
              <TypingText text="A dynamic platform fostering thought-provoking discussions among Innovators, Influencers, and Investors to drive actionable strategies for India's development by 2047." />
            </p>
          </li>
          <li className="initiative-card">
            <strong>Sustainable Livelihood Venture Studio</strong>
            <p>
              <TypingText text="Focused on empowering communities through sustainable economic growth, fostering partnerships between startups, corporates, non-profits, and government bodies." />
            </p>
          </li>
          <li className="initiative-card">
            <strong>Viksit Bharat Dialogues & Awards</strong>
            <p>
              <TypingText text="Celebrating excellence through limited and exclusive awards for Innovation, Influence & Investment, aligning with PM Modi’s vision for a developed India." />
            </p>
          </li>
        </ul>
      </div>

      <div className="about-health fade-in delay-3">
        <h2>Focus on the Health & Pharma Industry</h2>
        <p>
          The Health & Pharma vertical at BEF is a cornerstone of India's developmental vision. As the nation works toward universal healthcare and advanced medical innovation, this industry plays a vital role in shaping accessible, affordable, and cutting-edge health solutions. 
        </p>
        <p>
          BEF champions innovation in MedTech, pharma R&D, health infrastructure, and wellness. Our initiatives bring together leaders from pharmaceutical companies, healthcare providers, insurance firms, and public health organizations to discuss key issues like digital health, AI in diagnostics, telemedicine, and sustainable healthcare financing.
        </p>
        <p>
          By offering sponsorship and partnership opportunities through the Industry Conclave 2025, BEF is fostering impactful dialogue, media visibility, and collaboration that can transform India’s healthcare landscape.
        </p>

        <div className="health-testimonial">
          <blockquote>
            "Partnering with BEF was a game-changer for our organization. It amplified our visibility and connected us with visionary leaders across India’s healthcare ecosystem."
            <footer>– Dr. Anjali Mehra, CEO of VitalCure Pharma</footer>
          </blockquote>
        </div>

        <div className="health-logos">
          <h3>Our Health Industry Collaborators</h3>
          <div className="logo-grid">
            <img src="/images/logo1.png" alt="Sponsor 1" />
            <img src="/images/logo2.png" alt="Sponsor 2" />
            <img src="/images/logo3.png" alt="Sponsor 3" />
            <img src="/images/logo4.png" alt="Sponsor 4" />
          </div>
        </div>

        <div className="health-media-kit">
          <h3>Media Kit for Health & Pharma Partners</h3>
          <a href="/downloads/BEF_Health_Media_Kit.pdf" className="media-kit-btn" target="_blank" rel="noopener noreferrer">Download Media Kit</a>
        </div>
      </div>
      
      <div className="about-gallery fade-in delay-4">
        <h2>Gallery: Highlights from Previous Events</h2>
        <div className="gallery-marquee">
          <div className="gallery-track">
            <img src={hero1} alt="BEF Event 1" />
            <img src={hero2} alt="BEF Event 2" />
            <img src={hero3} alt="BEF Event 3" />
            <img src={hero4} alt="BEF Event 4" />
            {/* Duplicate for seamless loop */}
            <img src={hero1} alt="BEF Event 1 duplicate" aria-hidden="true" />
            <img src={hero2} alt="BEF Event 2 duplicate" aria-hidden="true" />
            <img src={hero3} alt="BEF Event 3 duplicate" aria-hidden="true" />
            <img src={hero4} alt="BEF Event 4 duplicate" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
