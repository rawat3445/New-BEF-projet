import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import './salesPage.css';

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Basic Glow',
      price: '$79',
      period: '/month',
      description: 'Ideal for small salons and personal trainers starting out',
      features: [
        'Manage up to 5 clients per day',
        'Basic appointment scheduling',
        'Email & chat support',
        'Social media promotion tools',
        '1 custom wellness program'
      ],
      cta: 'Try for Free',
      popular: false
    },
    {
      id: 'pro',
      name: 'Radiance Pro',
      price: '$249',
      period: '/month',
      description: 'Perfect for growing spas and wellness centers',
      features: [
        'Unlimited client bookings',
        'Advanced scheduling & reminders',
        'Priority phone & email support',
        'Multi-platform social media integration',
        '5 customizable wellness plans',
        'Online payment processing',
        'Team management tools'
      ],
      cta: 'Get Started Today',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Ultimate Wellness',
      price: '$499',
      period: '/month',
      description: 'All-in-one solution for large beauty and wellness enterprises',
      features: [
        'Everything in Radiance Pro',
        'Dedicated wellness consultant',
        'Custom integrations & APIs',
        'Unlimited wellness plans & staff accounts',
        'White-label branding options',
        'Enhanced security & compliance',
        'Detailed health & performance reports'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Jessica Lee',
      company: 'Glow Spa',
      role: 'Founder',
      content: 'Our client retention increased by 250% thanks to the streamlined booking system and personalized wellness plans.',
      rating: 5,
      avatar: '💆‍♀️'
    },
    {
      id: 2,
      name: 'David Park',
      company: 'Zen Fitness',
      role: 'Wellness Coach',
      content: 'The platform’s analytics helped us tailor our services, resulting in happier clients and higher revenue.',
      rating: 5,
      avatar: '🏋️‍♂️'
    },
    {
      id: 3,
      name: 'Monica Gomez',
      company: 'Beauty Bliss',
      role: 'Spa Manager',
      content: 'White-label features and custom branding allowed us to maintain our unique style while scaling up efficiently.',
      rating: 5,
      avatar: '💅'
    }
  ];

  const stats = [
    { icon: Users, value: '8,000+', label: 'Active Salons & Wellness Centers' },
    { icon: TrendingUp, value: '320%', label: 'Average Client Growth' },
    { icon: Award, value: '99.8%', label: 'Platform Uptime' }
  ];

  const clientLogos = [
    'Glow Spa', 'Zen Fitness', 'Beauty Bliss', 'Pure Wellness', 'Fresh Face', 'Viva Salon'
  ];

  return (
    <div className="sales-page">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨ Trusted by 8,000+ beauty & wellness businesses worldwide</span>
            </div>
            <h1 className="hero-title">
              Elevate Your Beauty Business with 
              <span className="gradient-text"> Personalized Wellness Solutions</span>
            </h1>
            <p className="hero-description">
              Empower your salon or wellness center to deliver seamless booking, client management, 
              and targeted wellness programs that drive growth and customer loyalty.
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
            <h2 className="section-title">Choose Your Wellness Plan</h2>
            <p className="section-description">
              Flexible pricing designed to support your growth and client needs.
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
            <h2 className="section-title">Hear From Our Beauty & Wellness Clients</h2>
            <p className="section-description">
              Discover how our platform has helped salons and wellness centers grow.
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
          <h3 className="clients-title">Trusted by Leading Beauty & Wellness Brands</h3>
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
              Ready to Glow Up Your Business?
            </h2>
            <p className="final-cta-description">
              Join thousands of beauty and wellness professionals. Start your free trial now and transform your client experience.
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
