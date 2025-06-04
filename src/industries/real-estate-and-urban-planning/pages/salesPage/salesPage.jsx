import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import './salesPage.css';

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plot',
      price: '$129',
      period: '/month',
      description: 'Ideal for small urban developers and individual investors',
      features: [
        'Manage up to 3 projects',
        'Basic property listing management',
        'Email & chat support',
        'Local zoning & planning insights',
        'Community outreach tools'
      ],
      cta: 'Explore Plans',
      popular: false
    },
    {
      id: 'pro',
      name: 'Urban Pro',
      price: '$399',
      period: '/month',
      description: 'Perfect for growing real estate firms and planning agencies',
      features: [
        'Unlimited project management',
        'Advanced scheduling & resource allocation',
        'Priority phone & email support',
        'GIS mapping & land use analytics',
        'Environmental impact tools',
        'Online client & stakeholder portals',
        'Team collaboration features'
      ],
      cta: 'Get Started Today',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Master Plan',
      price: '$899',
      period: '/month',
      description: 'All-in-one solution for large urban planning and real estate enterprises',
      features: [
        'Everything in Urban Pro',
        'Dedicated planning consultant',
        'Custom API integrations',
        'Unlimited users & projects',
        'White-label branding options',
        'Advanced security & compliance',
        'Comprehensive urban analytics reports'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Arjun Mehta',
      company: 'Metro Developments',
      role: 'CEO',
      content: 'The platform’s urban analytics dramatically improved our planning accuracy and project delivery speed.',
      rating: 5,
      avatar: '🏙️'
    },
    {
      id: 2,
      name: 'Sonia Patel',
      company: 'Green City Planners',
      role: 'Lead Planner',
      content: 'Collaboration and stakeholder engagement tools transformed how we manage complex urban projects.',
      rating: 5,
      avatar: '🌳'
    },
    {
      id: 3,
      name: 'Rahul Desai',
      company: 'Prime Realty',
      role: 'Managing Director',
      content: 'Our property listings and client communications have never been smoother thanks to this platform.',
      rating: 5,
      avatar: '🏢'
    }
  ];

  const stats = [
    { icon: Users, value: '12,000+', label: 'Active Urban Projects Managed' },
    { icon: TrendingUp, value: '410%', label: 'Average Project Growth' },
    { icon: Award, value: '99.9%', label: 'Platform Uptime' }
  ];

  const clientLogos = [
    'Metro Developments', 'Green City Planners', 'Prime Realty', 'Urban Vision', 'Blue Sky Estates', 'EcoBuild'
  ];

  return (
    <div className="sales-page real-estate-theme">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🏘️ Trusted by 12,000+ real estate & urban planning professionals worldwide</span>
            </div>
            <h1 className="hero-title">
              Transform Your Urban Planning with
              <span className="gradient-text"> Smart Real Estate Solutions</span>
            </h1>
            <p className="hero-description">
              Empower your real estate firm or planning agency with cutting-edge tools for project management,
              property analysis, and sustainable urban development.
            </p>
            <div className="hero-cta">
              <button className="cta-primary">
                Start Your Free Trial
                <ArrowRight className="cta-icon" />
              </button>
              <button className="cta-secondary">
                Watch Demo
              </button>
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
            <h2 className="section-title">Choose Your Plan for Real Estate & Urban Planning</h2>
            <p className="section-description">
              Flexible pricing designed to support your projects and client demands.
            </p>
          </div>
          
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
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

                <button className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
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
            <h2 className="section-title">Hear From Our Real Estate & Urban Planning Clients</h2>
            <p className="section-description">
              Discover how our platform has helped projects and firms succeed.
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
          <h3 className="clients-title">Trusted by Leading Real Estate & Planning Firms</h3>
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
              Ready to Build the Future of Cities?
            </h2>
            <p className="final-cta-description">
              Join thousands of real estate and urban planning professionals. Start your free trial today and revolutionize your projects.
            </p>
            <div className="final-cta-buttons">
              <button className="cta-primary large">
                Start Free Trial - No Credit Card Needed
                <ArrowRight className="cta-icon" />
              </button>
              <div className="cta-guarantee">
                <span>✅ 30-day money-back guarantee</span>
                <span>✅ No setup fees</span>
                <span>✅ Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;
