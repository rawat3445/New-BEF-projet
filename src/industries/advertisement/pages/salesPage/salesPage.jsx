import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import './salesPage.css';

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 ad campaigns',
        'Basic analytics dashboard',
        'Email support',
        'Social media integration',
        '1 landing page'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Best for growing businesses and agencies',
      features: [
        'Unlimited ad campaigns',
        'Advanced analytics & reporting',
        'Priority phone & email support',
        'Multi-platform integration',
        '5 custom landing pages',
        'A/B testing tools',
        'Team collaboration features'
      ],
      cta: 'Get Started Now',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integration support',
        'Unlimited landing pages',
        'White-label solutions',
        'Advanced security features',
        'Custom reporting & insights'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'Our ROI increased by 340% within the first quarter. The platform is incredibly intuitive and the results speak for themselves.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'GrowthCo',
      role: 'CEO',
      content: 'The best advertising platform we\'ve used. The analytics are detailed and the campaign management is seamless.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'BrandBoost Agency',
      role: 'Creative Director',
      content: 'Client satisfaction has never been higher. The white-label features are exactly what our agency needed.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Clients' },
    { icon: TrendingUp, value: '450%', label: 'Average ROI Increase' },
    { icon: Award, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const clientLogos = [
    'TechCorp', 'InnovateLab', 'GrowthHub', 'BrandForce', 'MarketPro', 'AdVantage'
  ];

  return (
    <div className="sales-page">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🚀 Trusted by 10,000+ businesses worldwide</span>
            </div>
            <h1 className="hero-title">
              Transform Your Advertising ROI with 
              <span className="gradient-text"> Data-Driven Insights</span>
            </h1>
            <p className="hero-description">
              Join thousands of successful businesses using our platform to create, 
              manage, and optimize high-converting advertising campaigns across all channels.
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
            <h2 className="section-title">Choose Your Growth Plan</h2>
            <p className="section-description">
              Flexible pricing that scales with your business. Start free, upgrade anytime.
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
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Don't just take our word for it. See what industry leaders are saying about our platform.
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
              Ready to Transform Your Advertising Strategy?
            </h2>
            <p className="final-cta-description">
              Join thousands of successful businesses. Start your free trial today and see results in 30 days or your money back.
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