import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import './salesPages.css';

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for startups focusing on sustainable growth',
      features: [
        'Up to 5 eco-friendly campaigns',
        'Basic sustainability analytics',
        'Email support with green tips',
        'Social media eco-integration',
        '1 green landing page'
      ],
      cta: 'Start Your Green Journey',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for growing businesses committed to sustainability',
      features: [
        'Unlimited eco-conscious campaigns',
        'Advanced green analytics & reporting',
        'Priority phone & email support',
        'Multi-platform green integration',
        '5 custom sustainable landing pages',
        'A/B testing for eco-optimized content',
        'Team collaboration with eco goals'
      ],
      cta: 'Go Green Now',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete sustainable marketing solution for large organizations',
      features: [
        'All Professional features included',
        'Dedicated green account manager',
        'Custom eco-integration support',
        'Unlimited sustainable landing pages',
        'White-label eco-solutions',
        'Advanced green security features',
        'Custom green reporting & insights'
      ],
      cta: 'Contact Green Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'EcoTech Inc.',
      role: 'Sustainability Director',
      content: 'Our eco-campaigns saw a 340% increase in impact in just three months. The platform makes sustainable marketing simple and effective.',
      rating: 5,
      avatar: '🌿'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'GreenGrowth Co.',
      role: 'CEO',
      content: 'The best green advertising platform we\'ve used. The detailed analytics and campaign tools helped us reduce our carbon footprint.',
      rating: 5,
      avatar: '🌱'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'SustainBoost Agency',
      role: 'Creative Director',
      content: 'Our clients love the white-label eco features. This platform helps us deliver campaigns that make a real environmental difference.',
      rating: 5,
      avatar: '🍃'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Eco-Conscious Clients' },
    { icon: TrendingUp, value: '450%', label: 'Average Impact Increase' },
    { icon: Award, value: '99.9%', label: 'Sustainability Uptime Guarantee' }
  ];

  const clientLogos = [
    'EcoCorp', 'GreenInnovate', 'SustainHub', 'LeafForce', 'MarketGreen', 'EcoVantage'
  ];

  return (
    <div className="sales-page green-theme">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🌍 Trusted by 10,000+ green businesses worldwide</span>
            </div>
            <h1 className="hero-title">
              Boost Your Environmental Impact with 
              <span className="gradient-text"> Data-Driven Green Marketing</span>
            </h1>
            <p className="hero-description">
              Join thousands of eco-conscious businesses using our platform to create, 
              manage, and optimize sustainable advertising campaigns that protect our planet.
            </p>
            <div className="hero-cta">
              <button className="cta-primary">
                Start Your Green Journey
                <ArrowRight className="cta-icon" />
              </button>
              <button className="cta-secondary">
                Watch Our Green Demo
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
            <h2 className="section-title">Choose Your Green Growth Plan</h2>
            <p className="section-description">
              Flexible, sustainable pricing that scales with your eco goals. Start free, upgrade anytime.
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
            <h2 className="section-title">What Our Eco Clients Say</h2>
            <p className="section-description">
              Don’t just take our word for it. See how industry leaders are making a green impact with us.
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
          <h3 className="clients-title">Trusted by Green Industry Leaders</h3>
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
              Ready to Grow Your Sustainable Advertising Strategy?
            </h2>
            <p className="final-cta-description">
              Join thousands of eco-conscious businesses. Start your free trial today and see green results in 30 days or your money back.
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
