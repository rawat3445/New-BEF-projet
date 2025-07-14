import React from "react";
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
  Globe,
} from "lucide-react";

const WomenEntrepreneurshipSponsorship = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Trophy className="h-8 w-8" />,
      title: "Platinum Sponsor",
      subtitle: "Empowerment Partner",
      description:
        "Exclusive branding and premier presence at the leading Women Entrepreneurship Summit.",
      features: [
        "Logo on all summit materials & signage",
        "Keynote speaking opportunity (30 mins)",
        "Premium booth space (100 sq ft)",
        "VIP lounge access & networking gala",
        "Feature in women entrepreneur influencer campaigns",
        "Social media spotlight across platforms",
      ],
      price: "₹6,00,000",
      popular: true,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 2,
      icon: <Crown className="h-8 w-8" />,
      title: "Gold Sponsor",
      subtitle: "Leadership Partner",
      description:
        "Showcase your brand’s commitment to fostering women-led innovation and business growth.",
      features: [
        "Stage branding and panel participation",
        "Booth space (70 sq ft)",
        "Exclusive product/service demo sessions",
        "Access to women leader meet & greet",
        "Email newsletter feature",
        "Post-event promotional video inclusion",
      ],
      price: "₹4,00,000",
      popular: false,
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: 3,
      icon: <Mic className="h-8 w-8" />,
      title: "Silver Sponsor",
      subtitle: "Growth Advocate",
      description:
        "Engage directly with women entrepreneurs through workshops and panel discussions.",
      features: [
        "Workshop hosting opportunity",
        "Logo on session materials",
        "Booth space (40 sq ft)",
        "Networking lunch invitation",
        "Inclusion in event brochure",
        "Photography and media rights",
      ],
      price: "₹2,75,000",
      popular: false,
      color: "from-teal-400 to-cyan-500",
    },
    {
      id: 4,
      icon: <Network className="h-8 w-8" />,
      title: "Innovation Sponsor",
      subtitle: "Trailblazer",
      description:
        "Highlight your cutting-edge solutions supporting women entrepreneurs and startups.",
      features: [
        "Innovation zone branding",
        "Product pitch sessions",
        "Coffee break sponsorship",
        "Startup mentoring sessions",
        "Social media campaign inclusion",
        "Event app featured sponsor",
      ],
      price: "₹2,25,000",
      popular: false,
      color: "from-yellow-400 to-orange-500", // keeping this orange as a bright accent
    },
    {
      id: 5,
      icon: <Users className="h-8 w-8" />,
      title: "Community Sponsor",
      subtitle: "Connector",
      description:
        "Facilitate networking and community building for women entrepreneurs and allies.",
      features: [
        "Networking session hosting",
        "Branded welcome desk",
        "Mobile app networking feature",
        "Evening mixer sponsorship",
        "Attendee contact list access",
        "Post-event follow-ups",
      ],
      price: "₹1,75,000",
      popular: false,
      color: "from-indigo-500 to-blue-700",
    },
    {
      id: 6,
      icon: <Camera className="h-8 w-8" />,
      title: "Media Sponsor",
      subtitle: "Visibility Partner",
      description:
        "Amplify your brand reach through exclusive media and digital coverage focusing on women entrepreneurship.",
      features: [
        "Event live-stream branding",
        "Social media content creation",
        "Press release mentions",
        "Event photography & video rights",
        "Podcast episode sponsorship",
        "Digital asset library access",
      ],
      price: "₹1,20,000",
      popular: false,
      color: "from-cyan-400 to-blue-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        {/* Header 
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Globe className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">
              Viksit Bharat Conclave 2025
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-800 bg-clip-text text-transparent mb-6">
            Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Partner with India’s leading summit for Women Entrepreneurship.
            Empower women leaders, foster innovation, and grow your brand by
            connecting with entrepreneurs, investors, and change-makers.
          </p>
        </div> 

        {/* Key Benefits Banner 
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">1500+</div>
              <div className="text-gray-600">Women Entrepreneurs</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-700">80+</div>
              <div className="text-gray-600">Workshops & Panels</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">50+</div>
              <div className="text-gray-600">Investor & Mentor Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">20M+</div>
              <div className="text-gray-600">Social Media Reach</div>
            </div>
          </div>
        </div> */}

        {/* Sponsorship Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? "ring-2 ring-blue-400 scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-2 rounded-bl-2xl shadow-lg">
                  <div className="flex items-center font-semibold">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`bg-gradient-to-br ${tier.color} text-white p-4 rounded-2xl w-fit mb-6 shadow-lg`}
                >
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
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${tier.color} rounded-full mr-3 mt-2 flex-shrink-0`}
                      ></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {tier.price}
                  <div className="text-sm font-normal text-gray-500 mt-1">
                    Investment Amount
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full bg-gradient-to-r ${tier.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105`}
                >
                  Become a Sponsor
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`}
              ></div>
              <div
                className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${tier.color} opacity-10 rounded-tl-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section 
        <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Exclusive Partner Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Award className="h-12 w-12 text-blue-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Awards & Recognition</h4>
              <p className="text-gray-600">Special ceremonies and certificates honoring your commitment to women entrepreneurs</p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="h-12 w-12 text-indigo-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Business Matchmaking</h4>
              <p className="text-gray-600">Connect with startups, investors, and corporate partners for mutual growth</p>
            </div>
            <div className="text-center space-y-4">
              <Target className="h-12 w-12 text-teal-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Targeted Outreach</h4>
              <p className="text-gray-600">Customized campaigns to highlight your brand across diverse entrepreneurial ecosystems</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WomenEntrepreneurshipSponsorship;
