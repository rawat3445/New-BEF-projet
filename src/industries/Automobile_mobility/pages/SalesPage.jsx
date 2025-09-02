import React, { useState } from "react";
import {
  Check,
  Star,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import "./SalesPages.css";

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

const plans = [
  {
    id: "starter",
    name: "Startup Mobility",
    price: "₹0.00",
    period: "/month",
    description: "Ideal for startups and small automotive service providers",
    features: [
      "EV consultation (up to 2 vehicles)",
      "Basic route optimization tools",
      "Email support",
      "Vehicle diagnostics dashboard",
      "Access to industry insights newsletter",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "pro",
    name: "FleetPro",
    price: "₹45,000",
    period: "/month",
    description: "Perfect for growing logistics and ride-sharing businesses",
    features: [
      "Fleet analytics and reporting",
      "Advanced route & fuel optimization",
      "Phone & priority email support",
      "IoT-based maintenance alerts",
      "5 smart dashboards for teams",
      "API access for ERP/CRM integration",
      "Driver behavior tracking tools",
    ],
    cta: "Subscribe Now",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Mobility Enterprise",
    price: "₹95,000",
    period: "/month",
    description: "End-to-end mobility solutions for OEMs and large enterprises",
    features: [
      "All features in FleetPro",
      "Dedicated mobility consultant",
      "Custom EV/charging infrastructure planning",
      "Smart city integration support",
      "White-label mobility app",
      "On-site team training",
      "Custom analytics and reporting suite",
    ],
    cta: "Request Demo",
    popular: false,
  },
];


const testimonials = [
  {
    id: 1,
    name: "Rajiv Mehta",
    company: "AutoNova",
    role: "Head of Strategy",
    content:
      "Participating in this platform has been a game-changer. We've connected with top-tier EV startups and mobility innovators.",
    rating: 5,
    avatar: "🚗",
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    company: "MobilityNext",
    role: "Founder & CEO",
    content:
      "The exposure and networking opportunities were exceptional. It’s the perfect launchpad for future-focused mobility solutions.",
    rating: 5,
    avatar: "🚀",
  },
  {
    id: 3,
    name: "Arun Verma",
    company: "GreenTorque",
    role: "CTO",
    content:
      "From investor meetings to showcasing our latest EV prototype, this initiative truly drives innovation at scale.",
    rating: 5,
    avatar: "🔋",
  },
];


  const stats = [
    { icon: Users,value: "200+",  label: "Leading Auto Brands" },
    { icon: TrendingUp, value: "10K+",label: "EV & Clean-Tech Startups"},
    { icon: Award, value: "99.9%", label: "Attendees & Delegates" },
  ];


const clientLogos = [
  "AutoNova",
  "EVolve Motors",
  "MobilityNext",
  "GreenTorque",
  "UrbanDrive",
  "TranspoTech",
];


  return (
    <div className="sales-page">
      {/* Hero Section */}
   <section className="sales-hero">
  <div className="sales-container">
    <div className="hero-content">
      <div className="hero-badge">
        <span>🚗 Empowering the Future of Mobility in India</span>
      </div>
      <h1 className="hero-title">
        Accelerate Innovation with
        <span className="gradient-text"> Sustainable & Smart Mobility</span>
      </h1>
      <p className="hero-description">
        Join the nation’s leading auto brands, startups, and visionaries shaping
        the future of transportation. From EVs to AI-driven mobility — explore, connect, and grow.
      </p>
      <div className="hero-cta">
        <button className="cta-primary">
          Register as a Partner
          <ArrowRight className="cta-icon" />
        </button>
        <button className="cta-secondary">Explore Event Highlights</button>
      </div>
      <div className="hero-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <stat.icon className="stat-icon" />
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="sales-container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Growth Plan</h2>
            <p className="section-description">
              Flexible pricing that scales with your business. Start free,
              upgrade anytime.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? "popular" : ""} ${
                  selectedPlan === plan.id ? "selected" : ""
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="plan-features">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <Check className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`plan-cta ${
                    plan.popular ? "primary" : "secondary"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
   <section className="testimonials-section">
  <div className="sales-container">
    <div className="section-header">
      <h2 className="section-title">Voices from the Mobility Ecosystem</h2>
      <p className="section-description">
        Hear what leading automotive innovators, startups, and partners are saying about our mobility initiative.
      </p>
    </div>

    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <div className="testimonial-rating">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="star-icon filled" />
            ))}
          </div>
          <p className="testimonial-content">"{testimonial.content}"</p>
          <div className="testimonial-author">
            <div className="author-avatar">{testimonial.avatar}</div>
            <div className="author-info">
              <div className="author-name">{testimonial.name}</div>
              <div className="author-role">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Client Logos Section */}
      <section className="clients-section">
        <div className="sales-container">
          <h3 className="clients-title">Trusted by Industry Leaders</h3>
          <div className="clients-grid">
            {clientLogos.map((logo, index) => (
              <div key={index} className="client-logo">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Final CTA Section */}
<section className="final-cta-section">
  <div className="sales-container">
    <div className="final-cta-content">
      <h2 className="final-cta-title">
        Ready to Drive the Future of Mobility?
      </h2>
      <p className="final-cta-description">
        Be part of India's leading platform for automotive innovation, electric vehicles, and smart mobility solutions.
        Reserve your spot now and accelerate your impact.
      </p>
      <div className="final-cta-buttons">
        <button className="cta-primary large">
          Become a Sponsor
          <ArrowRight className="cta-icon" />
        </button>
        <div className="cta-guarantee">
          <span>✅ Limited early-bird slots available</span>
          <span>✅ Maximum brand visibility</span>
          <span>✅ Connect with 500+ industry leaders</span>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default SalesPage;
