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

const SponsorshipBenefits = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Trophy className="h-8 w-8" />,
      title: "Title Sponsor",
      subtitle: "Platinum Partnership",
      description: "Maximum visibility and exclusive branding opportunities at India's premier development conclave.",
      features: [
        "Logo on all official materials & banners",
        "Prime speaking slot (30 minutes)",
        "Dedicated exhibition booth (100 sq ft)",
        "VIP networking dinner access",
        "Media interview opportunities",
        "LinkedIn & social media promotion"
      ],
      price: "₹5,00,000",
      popular: true,
      color: "from-red-400 to-pink-500"  // Changed from yellow-orange to red-pink
    },
    {
      id: 2,
      icon: <Crown className="h-8 w-8" />,
      title: "Keynote Sponsor",
      subtitle: "Gold Partnership",
      description: "Establish thought leadership while connecting with key stakeholders and decision makers.",
      features: [
        "Keynote speaking opportunity (20 minutes)",
        "Logo placement on stage backdrop",
        "Exhibition space (50 sq ft)",
        "Welcome reception access",
        "Digital marketing campaign inclusion",
        "Post-event networking directory"
      ],
      price: "₹3,50,000",
      popular: false,
      color: "from-amber-400 to-yellow-500"  // Changed from blue-purple to amber-yellow
    },
    {
      id: 3,
      icon: <Mic className="h-8 w-8" />,
      title: "Panel Sponsor",
      subtitle: "Silver Partnership",
      description: "Engage in meaningful discussions and showcase expertise in specialized sessions.",
      features: [
        "Panel discussion participation",
        "Logo on session materials",
        "Booth space (25 sq ft)",
        "Lunch networking access",
        "Speaker bio in official program",
        "Event photography rights"
      ],
      price: "₹2,50,000",
      popular: false,
      color: "from-teal-400 to-cyan-500"  // Changed from green-teal to teal-cyan
    },
    {
      id: 4,
      icon: <Network className="h-8 w-8" />,
      title: "Innovation Sponsor",
      subtitle: "Startup Catalyst",
      description: "Support emerging entrepreneurs while showcasing your commitment to innovation.",
      features: [
        "Startup pitch session hosting",
        "Mentorship roundtable access",
        "Innovation zone branding",
        "Coffee break sponsorship",
        "Young entrepreneur networking",
        "Tech showcase participation"
      ],
      price: "₹2,00,000",
      popular: false,
      color: "from-purple-500 to-fuchsia-600"  // Changed from pink-rose to purple-fuchsia
    },
    {
      id: 5,
      icon: <Users className="h-8 w-8" />,
      title: "Networking Sponsor",
      subtitle: "Community Builder",
      description: "Facilitate meaningful connections and build lasting business relationships.",
      features: [
        "Networking session hosting",
        "Welcome desk branding",
        "Business card exchange app",
        "Evening reception access",
        "Delegate contact database",
        "Follow-up meeting facilitation"
      ],
      price: "₹1,50,000",
      popular: false,
      color: "from-lime-500 to-emerald-600"  // Changed from indigo-blue to lime-emerald
    },
    {
      id: 6,
      icon: <Camera className="h-8 w-8" />,
      title: "Media Sponsor",
      subtitle: "Digital Amplifier",
      description: "Maximize reach through comprehensive media coverage and digital presence.",
      features: [
        "Live streaming co-branding",
        "Social media content creation",
        "Press release mentions",
        "Event documentation rights",
        "Podcast episode sponsorship",
        "Digital asset library access"
      ],
      price: "₹1,00,000",
      popular: false,
      color: "from-sky-400 to-blue-400"  // Slightly lighter cyan-blue shades
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Globe className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Viksit Bharat Conclave 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-purple-700 to-blue-900 bg-clip-text text-transparent mb-6">
            Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Join India's most influential gathering of visionaries, policymakers, and innovators. 
            Showcase your commitment to building a developed India while unlocking unprecedented business opportunities.
          </p>
        </div>

        {/* Key Benefits Banner */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">500+</div>
              <div className="text-gray-600">Industry Leaders</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-700">50+</div>
              <div className="text-gray-600">Speakers & Panels</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-700">25+</div>
              <div className="text-gray-600">Media Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-700">10M+</div>
              <div className="text-gray-600">Digital Reach</div>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? 'ring-2 ring-red-400 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-2 rounded-bl-2xl shadow-lg">
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
                  Become a Partner
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
              <Award className="h-12 w-12 text-red-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Recognition & Awards</h4>
              <p className="text-gray-600">Special recognition ceremony and partnership certificates</p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="h-12 w-12 text-amber-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Business Opportunities</h4>
              <p className="text-gray-600">Access to exclusive business development sessions</p>
            </div>
            <div className="text-center space-y-4">
              <Globe className="h-12 w-12 text-teal-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">Global Exposure</h4>
              <p className="text-gray-600">International media and diplomatic coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipBenefits;
