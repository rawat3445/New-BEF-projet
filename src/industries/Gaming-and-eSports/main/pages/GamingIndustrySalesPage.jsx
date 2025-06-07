/**
 * Contributor: Ankit Sharma
 * Phone: 9262871237
 */

import React, { useState } from 'react';
import { Check, Star, Users, Trophy, Zap, Target, ArrowRight, Menu, X, Gamepad2, Play, ChevronDown, ChevronUp, Phone, Mail, Calendar, TrendingUp, Award, Eye, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GamingIndustrySalesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('gold');
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const sponsorshipTiers = [
    {
      id: 'bronze',
      name: 'Bronze',
      subtitle: 'Perfect for emerging brands',
      price: '$5,000',
      period: 'per tournament',
      color: 'from-orange-600 to-yellow-600',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-400',
      features: [
        'Logo placement in tournament materials',
        'Social media mentions (5 posts)',
        'Website logo placement',
        'Tournament recap inclusion',
        'Basic analytics report',
        'Community access'
      ],
      stats: {
        impressions: '25K+',
        reach: '15K+',
        engagement: '2K+'
      }
    },
    {
      id: 'silver',
      name: 'Silver',
      subtitle: 'Great for growing companies',
      price: '$12,000',
      period: 'per tournament',
      color: 'from-gray-400 to-gray-600',
      borderColor: 'border-gray-400',
      textColor: 'text-gray-300',
      features: [
        'Everything in Bronze',
        'Stream overlay logo placement',
        'Dedicated social media campaign',
        'Pre-tournament promotional content',
        'Booth space at live events',
        'Player interview opportunities',
        'Detailed analytics dashboard'
      ],
      stats: {
        impressions: '75K+',
        reach: '45K+',
        engagement: '8K+'
      }
    },
    {
      id: 'gold',
      name: 'Gold',
      subtitle: 'Most Popular Choice',
      price: '$25,000',
      period: 'per tournament',
      color: 'from-yellow-400 to-orange-500',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-400',
      popular: true,
      features: [
        'Everything in Silver',
        'Title sponsor naming rights',
        'Custom branded tournament segments',
        'Exclusive player partnerships',
        'VIP hospitality package',
        'Press release distribution',
        'Dedicated account manager',
        'Post-event content creation'
      ],
      stats: {
        impressions: '150K+',
        reach: '100K+',
        engagement: '20K+'
      }
    },
    {
      id: 'platinum',
      name: 'Platinum',
      subtitle: 'Ultimate brand dominance',
      price: '$50,000',
      period: 'per tournament',
      color: 'from-purple-400 to-pink-500',
      borderColor: 'border-purple-400',
      textColor: 'text-purple-400',
      features: [
        'Everything in Gold',
        'Exclusive tournament naming rights',
        'Custom stage/arena branding',
        'Celebrity endorsements',
        'Multi-platform content creation',
        'Influencer collaboration campaigns',
        'Executive speaking opportunities',
        'Year-round brand partnership',
        'ROI guarantee program'
      ],
      stats: {
        impressions: '500K+',
        reach: '300K+',
        engagement: '75K+'
      }
    }
  ];

  const caseStudies = [
    {
      company: 'TechGear Pro',
      tier: 'Gold Package',
      results: [
        '200% increase in brand awareness',
        '150K+ social media impressions',
        '50+ qualified leads generated',
        '15% boost in quarterly sales'
      ],
      quote: "GameForge delivered beyond our expectations. The ROI was incredible and we're already planning our next partnership.",
      author: 'Sarah Chen, Marketing Director'
    },
    {
      company: 'StreamCore',
      tier: 'Platinum Package',
      results: [
        '500K+ tournament stream views',
        '25K+ new social followers',
        '300+ partnership inquiries',
        '40% increase in product demos'
      ],
      quote: "The exposure we got from the championship tournament was worth every penny. Our brand is now synonymous with eSports excellence.",
      author: 'Marcus Rodriguez, CEO'
    },
    {
      company: 'EliteGaming',
      tier: 'Silver Package',
      results: [
        '100K+ targeted impressions',
        '75+ qualified leads',
        '20% increase in website traffic',
        '10K+ social media engagements'
      ],
      quote: "Perfect entry point into eSports marketing. Professional execution and measurable results.",
      author: 'Alex Thompson, Brand Manager'
    }
  ];

  const faqs = [
    {
      question: 'What demographics does your audience include?',
      answer: 'Our audience is 65% male, 35% female, with 70% aged 18-34. Primary locations include North America (45%), Europe (30%), and Asia-Pacific (25%). Average household income is $50K+, with 80% having college education or higher.'
    },
    {
      question: 'How do you measure ROI for sponsors?',
      answer: 'We provide comprehensive analytics including brand mention tracking, social media impressions, website traffic attribution, lead generation metrics, and post-event surveys. Each sponsor receives a detailed ROI report within 48 hours of event completion.'
    },
    {
      question: 'Can we customize sponsorship packages?',
      answer: 'Absolutely! While we offer standard tiers, we regularly create custom packages tailored to specific brand objectives, budget requirements, and activation preferences. Our team works closely with you to design the perfect sponsorship solution.'
    },
    {
      question: 'What is your event production quality?',
      answer: 'We maintain broadcast-quality standards with professional cameras, lighting, and audio equipment. Our production team has worked with major networks and streaming platforms, ensuring your brand is represented with the highest quality visuals and audio.'
    },
    {
      question: 'How far in advance should we book?',
      answer: 'We recommend booking 60-90 days in advance for standard packages. For custom activations or major tournaments, 120+ days notice ensures optimal planning and execution. Early booking also provides better rates and premium placement opportunities.'
    },
    {
      question: 'Do you offer multi-tournament discounts?',
      answer: 'Yes! We offer 10% discount for 3-tournament packages, 15% for 6-tournament packages, and 20% for annual partnerships. Multi-tournament sponsors also receive priority placement and additional marketing benefits.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOnclick = ( ) => {
    navigate('/gaming-and-eSports')
  }

  return (
    <>
    
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
              <button onClick={handleOnclick} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                GameForge
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#packages" className="hover:text-cyan-400 transition-colors">Packages</a>
              <a href="#benefits" className="hover:text-cyan-400 transition-colors">Benefits</a>
              <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 cursor-pointer rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all">
                Contact Sales
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#packages" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Packages</a>
              <a href="#benefits" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Benefits</a>
              <a href="#case-studies" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Case Studies</a>
              <a href="#faq" className="block px-3 py-2 hover:bg-gray-800 rounded-md">FAQ</a>
              <button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-lg font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-20">
          <div className="mb-6 inline-block">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2 rounded-full font-semibold text-sm animate-pulse">
              🚀 Amplify Your Brand in eSports
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DOMINATE
            </span>
            <br />
            <span className="text-white">THE GAMING</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              UNIVERSE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Partner with the premier eSports tournament platform and reach millions of passionate gamers. 
            <span className="text-cyan-400 font-semibold">ROI-driven sponsorship packages</span> that deliver 
            measurable results for your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all flex items-center">
              View Sponsorship Packages
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2M+</div>
              <div className="text-gray-300">Monthly Audience Reach</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300">Sponsor Retention Rate</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section id="packages" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Sponsorship Packages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package to amplify your brand and engage the global gaming community
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {sponsorshipTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' : tier.borderColor
                } ${selectedPlan === tier.id ? 'ring-2 ring-cyan-400' : ''}`}
                onClick={() => setSelectedPlan(tier.id)}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`text-center mb-6`}>
                    <h3 className={`text-2xl font-bold ${tier.textColor} mb-2`}>{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tier.subtitle}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 text-sm">/{tier.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className={`h-5 w-5 ${tier.textColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-6 mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Expected Reach:</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className={`text-lg font-bold ${tier.textColor}`}>{tier.stats.impressions}</div>
                        <div className="text-xs text-gray-400">Impressions</div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${tier.textColor}`}>{tier.stats.reach}</div>
                        <div className="text-xs text-gray-400">Reach</div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold ${tier.textColor}`}>{tier.stats.engagement}</div>
                        <div className="text-xs text-gray-400">Engagement</div>
                      </div>
                    </div>
                  </div>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600'
                      : `bg-gradient-to-r ${tier.color} text-white hover:opacity-90`
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg mb-4">Need a custom package?</p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all">
              Contact Our Sales Team
            </button>
          </div>
        </div>
      </section>

      {/* Package Benefits & ROI */}
      <section id="benefits" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Why Sponsor with GameForge?
              </span>
            </h2>
            <p className="text-xl text-gray-300">Every package delivers measurable ROI and brand growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Massive Brand Exposure</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Logo placement in official stream overlays</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Featured in 100K+ social media impressions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Website homepage feature placement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Press release and media distribution</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Engaged Community Access</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Direct access to passionate gamers aged 18-34</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>High-income demographic with disposable income</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Global reach across major gaming markets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Booth space and networking opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Measurable ROI</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive analytics and reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Lead generation and conversion tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Brand sentiment analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Post-event performance summary</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Targeted Marketing</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Demographic-specific audience targeting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Game-specific community engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Influencer and streamer partnerships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Custom content creation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Premium Production</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Broadcast-quality streaming production</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Professional commentary and hosting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Multi-camera setup and graphics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Live audience interaction features</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Exclusive Access</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>VIP hospitality and networking events</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Player meet-and-greet opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Behind-the-scenes tournament access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Executive speaking opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}

      <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Proven Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300">Brands that crushed their marketing goals with GameForge</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 transform transition-all hover:scale-[1.02] hover:border-cyan-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-14 h-14 rounded-lg flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {study.tier}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <p className="italic text-gray-400 mb-4">"{study.quote}"</p>
                    <p className="text-cyan-400 font-semibold">{study.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-xl text-gray-300">Everything you need to know about sponsoring with GameForge</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-xl font-semibold">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-cyan-400" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="p-6 pt-0 border-t border-gray-700">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
                  <h2 className="text-4xl font-bold mb-6">Ready to Level Up Your Brand?</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Our sponsorship team will create a custom package that delivers measurable results for your business.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm">Call us anytime</h3>
                        <p className="text-xl font-semibold">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm">Email us</h3>
                        <p className="text-xl font-semibold">sponsorships@gameforge.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm">Schedule a meeting</h3>
                        <p className="text-xl font-semibold">Book a 30-min consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-12">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-300 mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Company Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-gray-300 mb-2">Budget Range</label>
                      <select
                        id="budget"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000+</option>
                      </select>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all"
                    >
                      Contact Sales Team
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Gamepad2 className="h-8 w-8 text-cyan-400" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    GameForge
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  Connecting brands with the global gaming community through premier eSports experiences.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Tournaments</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Partners</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Sponsorship Guide</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Media Kit</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Sponsor Agreement</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} GameForge. All rights reserved. Designed for brands to thrive in eSports.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GamingIndustrySalesPage;