import React from 'react';
import { 
  Crown, 
  Users, 
  Mic, 
  Camera, 
  Trophy,
  Network,
  ArrowRight,
  Star,
  Target,
  Award,
  Briefcase,
  Globe
} from 'lucide-react';

const RealEstateUrbanSponsorship = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Trophy className="h-8 w-8" />,
      title: "Platinum Sponsor",
      subtitle: "Premier Urban Development Partner",
      description: "Exclusive branding and premium presence at India’s leading real estate & urban planning summit.",
      features: [
        "Logo on all summit materials & signage",
        "Keynote speaking opportunity (30 mins)",
        "Prime exhibition space (100 sq ft)",
        "VIP lounge access & networking gala",
        "Feature in urban planning influencer campaigns",
        "Social media spotlight across platforms"
      ],
      price: "₹8,00,000",
      popular: true,
      color: "from-cyan-500 to-blue-700"
    },
    {
      id: 2,
      icon: <Crown className="h-8 w-8" />,
      title: "Gold Sponsor",
      subtitle: "Real Estate Visionary Partner",
      description: "Showcase your leadership in real estate innovation and urban infrastructure development.",
      features: [
        "Stage branding and panel participation",
        "Exhibition booth (70 sq ft)",
        "Exclusive project demo sessions",
        "Access to investor meet & greet",
        "Email newsletter feature",
        "Post-event promotional video inclusion"
      ],
      price: "₹5,50,000",
      popular: false,
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 3,
      icon: <Mic className="h-8 w-8" />,
      title: "Silver Sponsor",
      subtitle: "Urban Innovation Advocate",
      description: "Engage with industry professionals through workshops and panel discussions.",
      features: [
        "Workshop hosting opportunity",
        "Logo on session materials",
        "Booth space (40 sq ft)",
        "Networking lunch invitation",
        "Inclusion in event brochure",
        "Photography and media rights"
      ],
      price: "₹3,25,000",
      popular: false,
      color: "from-green-400 to-teal-500"
    },
    {
      id: 4,
      icon: <Network className="h-8 w-8" />,
      title: "Innovation Sponsor",
      subtitle: "Smart City Trendsetter",
      description: "Highlight your cutting-edge urban technologies and sustainable planning solutions.",
      features: [
        "Innovation zone branding",
        "Product pitch sessions",
        "Coffee break sponsorship",
        "Startup mentoring sessions",
        "Social media campaign inclusion",
        "Event app featured sponsor"
      ],
      price: "₹2,75,000",
      popular: false,
      color: "from-blue-400 to-indigo-600"
    },
    {
      id: 5,
      icon: <Users className="h-8 w-8" />,
      title: "Community Sponsor",
      subtitle: "Networking Catalyst",
      description: "Facilitate engagement and collaboration within real estate and urban planning communities.",
      features: [
        "Networking session hosting",
        "Branded welcome desk",
        "Mobile app networking feature",
        "Evening mixer sponsorship",
        "Attendee contact list access",
        "Post-event follow-ups"
      ],
      price: "₹2,00,000",
      popular: false,
      color: "from-indigo-600 to-blue-700"
    },
    {
      id: 6,
      icon: <Camera className="h-8 w-8" />,
      title: "Media Sponsor",
      subtitle: "Digital Outreach Partner",
      description: "Amplify your brand with exclusive media coverage and digital promotions.",
      features: [
        "Event live-stream branding",
        "Social media content creation",
        "Press release mentions",
        "Event photography & video rights",
        "Podcast episode sponsorship",
        "Digital asset library access"
      ],
      price: "₹1,50,000",
      popular: false,
      color: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-200 mb-6">
            <Globe className="h-5 w-5 text-cyan-600 mr-2" />
            <span className="text-cyan-700 font-semibold">Urban Growth Summit 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-6">
           Sponsorship & Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Partner with India’s premier real estate and urban planning summit. Elevate your brand while connecting with industry leaders, developers, and urban innovators.
          </p>
        </div>

        {/* Key Benefits Banner */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-700">1500+</div>
              <div className="text-gray-600">Real Estate Professionals</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">80+</div>
              <div className="text-gray-600">Workshops & Panels</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Industry & Media Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">20M+</div>
              <div className="text-gray-600">Digital & Social Reach</div>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-6 py-2 rounded-bl-2xl shadow-lg">
                  <div className="flex items-center font-semibold">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {tier.description}
                </p>

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
                  <div className="text-sm font-normal text-gray-500 mt-1">Investment Amount</div>
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${tier.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105`}>
                  Become a Sponsor
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`}></div>
              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${tier.color} opacity-10 rounded-tl-full`}></div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Exclusive Partner Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Award className="h-12 w-12 text-cyan-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Awards & Recognition</h4>
              <p className="text-gray-600">Special ceremonies and certificates celebrating your brand’s contribution to urban development</p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="h-12 w-12 text-blue-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Business Growth</h4>
              <p className="text-gray-600">Access to exclusive networking and potential partnerships in real estate</p>
            </div>
            <div className="text-center space-y-4">
              <Globe className="h-12 w-12 text-indigo-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Global Exposure</h4>
              <p className="text-gray-600">Showcase your brand to a worldwide audience through digital channels</p>
            </div>
          </div>
        </div>

         <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to be part of India's urban transformation? Let's discuss a custom partnership package tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Schedule Partnership Call
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white border-2 border-gray-200 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Download Partnership Deck
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RealEstateUrbanSponsorship;
