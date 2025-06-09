import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import './salesPage.css';

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

 const plans = [
  {
    id: 'starter',
    name: 'Foundation Plan',
    price: '$79',
    period: '/month',
    description: 'Ideal for small nonprofits and local advocacy groups starting their governance journey',
    features: [
      'Manage up to 5 projects or initiatives',
      'Basic policy scheduling and tracking',
      'Email & chat support',
      'Community engagement tools',
      '1 custom governance program'
    ],
    cta: 'Try for Free',
    popular: false
  },
  {
    id: 'pro',
    name: 'Impact Pro',
    price: '$249',
    period: '/month',
    description: 'Perfect for growing organizations and civic coalitions',
    features: [
      'Unlimited project and stakeholder management',
      'Advanced scheduling & automated reminders',
      'Priority phone & email support',
      'Multi-platform community outreach integration',
      '5 customizable governance programs',
      'Online grant and funding management',
      'Team collaboration tools'
    ],
    cta: 'Get Started Today',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Leadership Enterprise',
    price: '$499',
    period: '/month',
    description: 'Comprehensive solution for large organizations and government agencies',
    features: [
      'Everything in Impact Pro',
      'Dedicated governance consultant',
      'Custom integrations & APIs',
      'Unlimited governance programs & staff accounts',
      'White-label branding options',
      'Enhanced security & compliance',
      'Detailed impact & performance reports'
    ],
    cta: 'Contact Us',
    popular: false
  }
];


 const testimonials = [
  {
    id: 1,
    name: 'Jessica Lee',
    organization: 'Civic Glow Institute',
    role: 'Founder',
    content: 'Our stakeholder engagement increased by 250% thanks to the streamlined communication tools and tailored governance programs.',
    rating: 5,
    avatar: '📊'
  },
  {
    id: 2,
    name: 'David Park',
    organization: 'Zen Governance Group',
    role: 'Policy Advisor',
    content: 'The platform’s data analytics helped us refine policy implementation, resulting in more effective community outcomes.',
    rating: 5,
    avatar: '📈'
  },
  {
    id: 3,
    name: 'Monica Gomez',
    organization: 'Policy Bliss Partners',
    role: 'Program Manager',
    content: 'Customizable features and comprehensive support enabled us to maintain our organizational identity while expanding our impact.',
    rating: 5,
    avatar: '🤝'
  }
];

  const stats = [
  { icon: Users, value: '8,000+', label: 'Active Organizations & Civic Groups' },
  { icon: TrendingUp, value: '320%', label: 'Average Policy Adoption' },
  { icon: Award, value: '99.8%', label: 'Platform Uptime' }
];

const clientLogos = [
  'Civic Glow Institute',
  'Zen Governance Group',
  'Policy Bliss Partners',
  'Pure Governance Solutions',
  'Fresh Perspectives Council',
  'Viva Leadership Forum'
];

  return (
    <div className="sales-page">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="sales-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨ Trusted by 8,000+ Policy & Governance businesses worldwide</span>
            </div>
           <h1 className="hero-title">
  Elevate Your Governance Impact with 
  <span className="gradient-text"> Tailored Policy and Engagement Solutions</span>
</h1>
<p className="hero-description">
  Empower your organization or community to implement effective policies, enhance stakeholder engagement, 
  and drive sustainable social impact through customized governance strategies.
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
            <h2 className="section-title">Choose Your Policy Plan</h2>
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
            <h2 className="section-title">Hear From Our Policy & Governance Clients</h2>
            <p className="section-description">
             Discover how our platform has empowered organizations and communities to strengthen governance and drive meaningful policy change.
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
          <h3 className="clients-title">Trusted by Leading Policy & Governance Brands</h3>
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
              Join thousands of policy and governance professionals. Start your free trial now and transform your client experience.
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
