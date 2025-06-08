import React from 'react';
import './TestimonialCarousel.css';

const testimonials = [
  {
    quote: "Bharat Economic Forum has been a catalyst in driving innovative economic collaborations across India and Europe. Their platform empowered our business to expand globally.",
    author: "Ravi Kumar",
    role: "CEO, TechNex Solutions",
    image: "https://ui-avatars.com/api/?name=Ravi+Kumar&background=007bff&color=fff"
  },
  {
    quote: "Thanks to BEF's insights and networking opportunities, we successfully navigated complex markets and formed valuable international partnerships.",
    author: "Neha Sharma",
    role: "Founder, GreenTech Innovators",
    image: "https://ui-avatars.com/api/?name=Neha+Sharma&background=007bff&color=fff"
  },
  {
    quote: "The Bharat Economic Forum is a game changer for startups seeking to scale beyond borders. Their support and expertise made a huge difference for us.",
    author: "Arjun Mehta",
    role: "CTO, FinEdge",
    image: "https://ui-avatars.com/api/?name=Arjun+Mehta&background=007bff&color=fff"
  },
  {
    quote: "BEF’s industry sprint initiatives are unmatched in fostering collaboration and accelerating innovation between Indian and European tech ecosystems.",
    author: "Priya Desai",
    role: "Head of Strategy, InnovateNow",
    image: "https://ui-avatars.com/api/?name=Priya+Desai&background=007bff&color=fff"
  }
];

const TestimonialCard = () => {
  return (
    <div className="testimonial-page">
      <h2 className="heading">What Our Partners Say</h2>
      <div className="card-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.author} className="avatar" />
            <p className="quote">“{t.quote}”</p>
            <h4 className="author">{t.author}</h4>
            <p className="role">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
