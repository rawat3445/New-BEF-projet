import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import './salesPage.css';

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'StartHer Kit',
      price: '$79',
      period: '/month',
      description: 'Perfect for women-led startups and early-stage ventures',
      features: [
        'Manage up to 5 clients or projects',
        'Basic scheduling and goal tracking',
        'Community support group access',
        'Social media branding toolkit',
        '1 personalized business roadmap'
      ],
      cta: 'Try for Free',
      popular: false
    },
    {
      id: 'pro',
      name: 'Empower Pro',
      price: '$249',
      period: '/month',
      description: 'Best for scaling women entrepreneurs and growing teams',
      features: [
        'Unlimited client/project management',
        'Advanced scheduling & reminders',
        'Dedicated email & priority chat support',
        'Multi-platform brand tools & analytics',
        '5 personalized growth plans',
        'Online payments & invoices',
        'Team collaboration dashboard'
      ],
      cta: 'Get Started Today',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Legacy Builder',
      price: '$499',
      period: '/month',
      description: 'Comprehensive tools for women-led enterprises and organizations',
      features: [
        'Everything in Empower Pro',
        'Dedicated business consultant',
        'API & CRM integrations',
        'Unlimited plans & team members',
        'White-label brand solutions',
        'Enterprise-grade compliance & security',
        'Detailed reports & growth forecasts'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ayesha Khan',
      company: 'HerBal Wellness',
      role: 'Founder & CEO',
      content: 'Thanks to this platform, I scaled from a local store to a national brand. The planning tools gave me clarity and confidence.',
      rating: 5,
      avatar: '🌿'
    },
    {
      id: 2,
      name: 'Priya Verma',
      company: 'Craftique India',
      role: 'Creative Director',
      content: 'Being a solo entrepreneur was tough, but the support system and features here helped me streamline operations and grow consistently.',
      rating: 5,
      avatar: '🎨'
    },
    {
      id: 3,
      name: 'Meera Patel',
      company: 'SheTech Solutions',
      role: 'Co-founder',
      content: 'The branding toolkit and CRM integrations helped us position our tech firm with a powerful narrative. Highly recommend!',
      rating: 5,
      avatar: '💻'
    }
  ];

  const stats = [
    { icon: Users, value: '5,000+', label: 'Women Entrepreneurs Empowered' },
    { icon: TrendingUp, value: '300%', label: 'Average Business Growth' },
    { icon: Award, value: '98%', label: 'Satisfaction Rate' }
  ];

  const clientLogos = [
    'HerBal Wellness', 'Craftique India', 'SheTech Solutions', 'PinkLeap', 'Grace & Grit', 'Empower Hub'
  ];

  return (
    <div className="sales-page">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🌟 Empowering 5,000+ women-led businesses globally</span>
            </div>
            <h1 className="hero-title">
              Power Your Vision with 
              <span className="gradient-text"> Tools for Women Entrepreneurs</span>
            </h1>
            <p className="hero-description">
              Build, manage, and scale your business with confidence. From client handling to growth strategies, we’ve got your back.
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
            <h2 className="section-title">Choose Your Growth Path</h2>
            <p className="section-description">
              Flexible plans built for women entrepreneurs at every stage of their journey.
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
            <h2 className="section-title">Real Stories from Women Founders</h2>
            <p className="section-description">
              See how our platform is helping women-led businesses flourish.
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
          <h3 className="clients-title">Trusted by Leading Women-Led Brands</h3>
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
              Start Your Entrepreneurial Journey with Confidence
            </h2>
            <p className="final-cta-description">
              Join thousands of women changing the world through business. Begin your free trial and build your legacy today.
            </p>
            <div className="final-cta-buttons">
              <button className="cta-primary large">
                Start Free Trial - No Credit Card Needed
                <ArrowRight className="cta-icon" />
              </button>
              <div className="cta-guarantee">
                <span>✅ 30-day money-back guarantee</span>
                <span>✅ Zero onboarding fees</span>
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
