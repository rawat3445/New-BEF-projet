import React from 'react';
import {
  Home,
  Sun,
  TreePine,
  Wifi,
  School,
  HeartPulse,
  Handshake,
  Award,
  Users,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const RuralDevelopmentCards = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Home className="h-8 w-8" />,
      title: "Title Sponsor",
      subtitle: "Platinum Sponsorship",
      description: "Lead the Rural Development initiatives at this prestigious conclave shaping India's future.",
      features: [
        "Exclusive 'Title Sponsor' branding across all event materials",
        "5-minute speaking slot at Opening Ceremony",
        "Access to all roundtable sessions for 5 representatives",
        "10 VIP Delegate passes with premium access",
        "Dedicated booth in networking area",
        "Multi-channel media coverage (TV, print, digital)"
      ],
      price: "₹25,00,000",
      popular: true,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 2,
      icon: <TreePine className="h-8 w-8" />,
      title: "Powered By Sponsor",
      subtitle: "Gold Sponsorship",
      description: "Showcase your commitment to sustainable rural development and infrastructure.",
      features: [
        "'Powered By' branding on event materials",
        "Logo on stage backdrop and delegate kits",
        "Access to all sessions for 3 representatives",
        "5 VIP Delegate passes",
        "Shared booth in networking area",
        "Mention in press releases and media coverage"
      ],
      price: "₹10,00,000",
      popular: false,
      color: "from-amber-600 to-yellow-600"
    },
    {
      id: 3,
      icon: <Wifi className="h-8 w-8" />,
      title: "Rural Tech Sponsor",
      subtitle: "Digital Infrastructure",
      description: "Highlight your digital solutions bridging the urban-rural divide.",
      features: [
        "Exclusive branding as Rural Tech sponsor",
        "Logo on rural development session materials",
        "Access to rural development roundtable",
        "3 VIP Delegate passes",
        "Social media shoutouts",
        "Mention in industry podcasts"
      ],
      price: "₹5,00,000",
      popular: false,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 4,
      icon: <School className="h-8 w-8" />,
      title: "Education Partner",
      subtitle: "Skill Development",
      description: "Promote your rural education and skilling initiatives to key stakeholders.",
      features: [
        "Branding on education-related materials",
        "Participation in rural education discussions",
        "2 VIP Delegate passes",
        "Logo in delegate kits",
        "Feature in Viksit Bharat Awards coverage",
        "Networking with policymakers"
      ],
      price: "₹3,00,000",
      popular: false,
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 5,
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Healthcare Partner",
      subtitle: "Rural Wellness",
      description: "Showcase your rural healthcare solutions to influencers and decision-makers.",
      features: [
        "Branding on healthcare-related materials",
        "Participation in rural health discussions",
        "2 Standard Delegate passes",
        "Social media mentions",
        "Inclusion in press releases",
        "Networking opportunities"
      ],
      price: "₹2,00,000",
      popular: false,
      color: "from-red-600 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header 
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 mb-6">
            <Sun className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 font-semibold">Bharat Economic Forum Industry Conclave 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-6">
            Rural Development Sponsorships
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Partner with India's premier platform for rural transformation. Align your brand with the vision of a Viksit Bharat by 2047 through infrastructure, technology, and community development.
          </p>
        </div>
*/}
        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? 'ring-2 ring-green-400 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-bl-2xl shadow-lg">
                  <div className="flex items-center font-semibold">
                    <Award className="h-4 w-4 mr-1 fill-current" />
                    Most Impactful
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${tier.color} text-white p-4 rounded-2xl w-fit mb-6 shadow-lg`}>
                  {tier.icon}
                </div>

                {/* Title & Subtitle */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.title}</h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{tier.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${tier.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {tier.price}
                  <div className="text-sm font-normal text-gray-500 mt-1">Sponsorship Investment</div>
                </div>

                {/* CTA */}
                <button className={`w-full bg-gradient-to-r ${tier.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105`}>
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`}></div>
              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${tier.color} opacity-10 rounded-tl-full`}></div>
            </div>
          ))}
        </div>

        {/* Additional Benefits 
        <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">All Sponsors Receive</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Handshake className="h-12 w-12 text-green-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Policy Maker Access</h4>
              <p className="text-gray-600">Networking with government officials shaping rural policies</p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="h-12 w-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Media Visibility</h4>
              <p className="text-gray-600">Coverage in newspapers, TV, social media, and podcasts</p>
            </div>
            <div className="text-center space-y-4">
              <Users className="h-12 w-12 text-teal-500 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Community Impact</h4>
              <p className="text-gray-600">Recognition for contributing to India's rural transformation</p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default RuralDevelopmentCards;