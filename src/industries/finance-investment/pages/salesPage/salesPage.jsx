import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import './salesPage.css';

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Basic Portfolio',
      price: '$49',
      period: '/month',
      description: 'Ideal for individual investors starting out',
      features: [
        'Access to curated investment portfolios',
        'Basic market insights and reports',
        'Email support',
        'Monthly portfolio review',
        'Mobile app access'
      ],
      cta: 'Start Investing Today',
      popular: false
    },
    {
      id: 'pro',
      name: 'Growth Investor',
      price: '$199',
      period: '/month',
      description: 'Designed for active investors seeking growth',
      features: [
        'Advanced portfolio customization',
        'Real-time market analytics',
        'Priority phone & email support',
        'Exclusive investment webinars',
        'Tax-efficient investment strategies',
        'Automated portfolio rebalancing',
        'Dedicated investment advisor'
      ],
      cta: 'Get Started Now',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Institutional',
      price: '$999',
      period: '/month',
      description: 'Comprehensive solutions for financial institutions',
      features: [
        'Everything in Growth Investor',
        'Custom investment solutions',
        'Dedicated account management',
        'White-label reporting tools',
        'Advanced risk management',
        'API access and integrations',
        'Exclusive market intelligence'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'James Reynolds',
      company: 'Capital Ventures',
      role: 'Chief Investment Officer',
      content: 'Our portfolio performance improved by 25% within six months thanks to the platform’s actionable insights and tools.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Lisa Wong',
      company: 'WealthWise Advisors',
      role: 'Financial Planner',
      content: 'The custom analytics and automated rebalancing features have streamlined our investment process immensely.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Carlos Martinez',
      company: 'Global Asset Management',
      role: 'Portfolio Manager',
      content: 'The institutional solutions offer unmatched flexibility and control over complex investment strategies.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  const stats = [
    { icon: Users, value: '15,000+', label: 'Active Investors' },
    { icon: TrendingUp, value: '18%', label: 'Average Annual ROI' },
    { icon: Award, value: '99.95%', label: 'Platform Uptime' }
  ];

  const clientLogos = [
    'Vanguard', 'BlackRock', 'Fidelity', 'Charles Schwab', 'Morgan Stanley', 'Goldman Sachs'
  ];

  return (
    <div className="sales-page">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>💼 Trusted by 15,000+ investors worldwide</span>
            </div>
            <h1 className="hero-title">
              Empower Your Financial Future with 
              <span className="gradient-text"> Smart Investment Solutions</span>
            </h1>
            <p className="hero-description">
              Join thousands of investors using our platform to build, manage, and optimize portfolios for lasting wealth.
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
            <h2 className="section-title">Choose Your Investment Plan</h2>
            <p className="section-description">
              Flexible pricing tailored for investors at every stage. Start free, upgrade anytime.
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
            <h2 className="section-title">What Our Investors Say</h2>
            <p className="section-description">
              Hear from finance professionals and investors who trust our platform.
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
          <h3 className="clients-title">Trusted by Financial Leaders</h3>
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
              Ready to Grow Your Wealth with Confidence?
            </h2>
            <p className="final-cta-description">
              Join thousands of successful investors. Start your free trial today and watch your portfolio thrive.
            </p>
            <div className="final-cta-buttons">
              <button className="cta-primary large">
                Start Free Trial - No Credit Card Required
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
