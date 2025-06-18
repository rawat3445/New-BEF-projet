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

const PolicyGovernanceSponsorship = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Trophy className="h-8 w-8" />,
      title: "Platinum Sponsor",
      subtitle: "Elite Wellness Partner",
      description: "Exclusive branding and premium presence at the foremost Policy & Governance expo.",
      features: [
        "Logo on all event materials & signage",
        "Keynote speaking opportunity (30 mins)",
        "Premium booth space (100 sq ft)",
        "VIP lounge access & networking dinner",
        "Feature in wellness influencer promotions",
        "Social media spotlight across platforms"
      ],
      price: "₹6,00,000",
      popular: true,
      color: "from-amber-400 to-amber-600"
    },
    {
      id: 2,
      icon: <Crown className="h-8 w-8" />,
      title: "Gold Sponsor",
      subtitle: "Beauty Icon Partner",
      description: "Showcase your brand's leadership in beauty trends and wellness innovations.",
      features: [
        "Stage branding and panel participation",
        "Booth space (70 sq ft)",
        "Exclusive product demo sessions",
        "Access to influencer meet & greet",
        "Email newsletter feature",
        "Post-event promotional video inclusion"
      ],
      price: "₹4,00,000",
      popular: false,
      color: "from-amber-500 to-amber-700"
    },
    {
      id: 3,
      icon: <Mic className="h-8 w-8" />,
      title: "Silver Sponsor",
      subtitle: "Wellness Advocate",
      description: "Connect with industry professionals through workshops and sessions.",
      features: [
        "Workshop hosting opportunity",
        "Logo on session materials",
        "Booth space (40 sq ft)",
        "Networking lunch invitation",
        "Inclusion in event brochure",
        "Photography and media rights"
      ],
      price: "₹2,75,000",
      popular: false,
      color: "from-slate-600 to-slate-700"
    },
    {
      id: 4,
      icon: <Network className="h-8 w-8" />,
      title: "Innovation Sponsor",
      subtitle: "Trendsetter",
      description: "Highlight your cutting-edge products and wellness tech innovations.",
      features: [
        "Innovation zone branding",
        "Product pitch sessions",
        "Coffee break sponsorship",
        "Startup mentoring sessions",
        "Social media campaign inclusion",
        "Event app featured sponsor"
      ],
      price: "₹2,25,000",
      popular: false,
      color: "from-amber-300 to-amber-500"
    },
    {
      id: 5,
      icon: <Users className="h-8 w-8" />,
      title: "Community Sponsor",
      subtitle: "Connection Builder",
      description: "Facilitate networking and community engagement for wellness professionals.",
      features: [
        "Networking session hosting",
        "Branded welcome desk",
        "Mobile app networking feature",
        "Evening mixer sponsorship",
        "Attendee contact list access",
        "Post-event follow-ups"
      ],
      price: "₹1,75,000",
      popular: false,
      color: "from-slate-500 to-slate-600"
    },
    {
      id: 6,
      icon: <Camera className="h-8 w-8" />,
      title: "Media Sponsor",
      subtitle: "Digital Amplifier",
      description: "Maximize your brand reach with exclusive media and digital coverage.",
      features: [
        "Event live-stream branding",
        "Social media content creation",
        "Press release mentions",
        "Event photography & video rights",
        "Podcast episode sponsorship",
        "Digital asset library access"
      ],
      price: "₹1,20,000",
      popular: false,
      color: "from-slate-700 to-slate-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200 mb-6">
            <Globe className="h-5 w-5 text-amber-600 mr-2" />
            <span className="text-amber-700 font-semibold">Viksit Bharat Conclave 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-700 via-slate-600 to-amber-600 bg-clip-text text-transparent mb-6">
           Partnership Opportunities
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Partner with India's premier policy and governance gathering. Elevate your brand while connecting with industry leaders, innovators, and governance enthusiasts.
          </p>
        </div>

        {/* Key Benefits Banner */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20 shadow-xl">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
    <div className="space-y-2">
      <div className="text-3xl font-bold text-amber-600">1000+</div>
      <div className="text-slate-600">Policy Experts</div>
    </div>
    <div className="space-y-2">
      <div className="text-3xl font-bold text-amber-700">70+</div>
      <div className="text-slate-600">Workshops & Trainings</div>
    </div>
    <div className="space-y-2">
      <div className="text-3xl font-bold text-slate-600">35+</div>
      <div className="text-slate-600">Government & NGO Partners</div>
    </div>
    <div className="space-y-2">
      <div className="text-3xl font-bold text-slate-700">15M+</div>
      <div className="text-slate-600">Community Outreach</div>
    </div>
  </div>
</div>


        {/* Sponsorship Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? 'ring-2 ring-amber-400 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-2 rounded-bl-2xl shadow-lg">
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
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${tier.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-3xl font-bold text-slate-800 mb-8 text-center">
                  {tier.price}
                  <div className="text-sm font-normal text-slate-500 mt-1">Investment Amount</div>
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
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Exclusive Partner Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Award className="h-12 w-12 text-amber-600 mx-auto" />
              <h4 className="text-xl font-semibold text-slate-800">Awards & Recognition</h4>
              <p className="text-slate-600">Special ceremonies and certificates celebrating your brand</p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="h-12 w-12 text-amber-700 mx-auto" />
              <h4 className="text-xl font-semibold text-slate-800">Business Growth</h4>
              <p className="text-slate-600">Access to exclusive networking and potential partnerships</p>
            </div>
            <div className="text-center space-y-4">
              <Globe className="h-12 w-12 text-slate-700 mx-auto" />
              <h4 className="text-xl font-semibold text-slate-800">Global Exposure</h4>
              <p className="text-slate-600">Showcase your brand to a worldwide audience through digital channels</p>
            </div>
          </div>
        </div>

         <div className="text-center mt-16">
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Ready to be part of India's transformation story? Let's discuss a custom partnership package tailored to your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-800 hover:to-slate-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border border-amber-600">
              Schedule Partnership Call
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-slate-800 hover:bg-white border-2 border-slate-200 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Download Partnership Deck
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PolicyGovernanceSponsorship;
