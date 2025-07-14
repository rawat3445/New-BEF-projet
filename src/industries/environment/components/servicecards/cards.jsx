import React from "react";
import {
  Leaf,
  Recycle,
  Wind,
  Sun,
  Droplet,
  TreeDeciduous,
  Globe,
  Star,
  Award,
  Briefcase,
  Target,
  ArrowRight,
} from "lucide-react";

const SponsorshipBenefits = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Leaf className="h-8 w-8" />,
      title: "Green Visionary",
      subtitle: "Platinum Sustainability Partner",
      description:
        "Lead the movement toward a greener future by driving large-scale impact initiatives.",
      features: [
        "Mainstage branding and keynote speaking opportunity",
        "Sustainable zone naming rights",
        "Eco-awareness video feature",
        "VIP roundtable with environmental leaders",
        "Social media & press coverage",
        "Logo on all event collateral",
      ],
      price: "₹5,00,000",
      popular: true,
      color: "from-green-400 to-lime-500",
    },
    {
      id: 2,
      icon: <Recycle className="h-8 w-8" />,
      title: "Circular Economy Sponsor",
      subtitle: "Gold Eco Partner",
      description:
        "Champion the principles of reuse, recycling, and regeneration at the event.",
      features: [
        "Panel speaking slot on circular practices",
        "Branding on recycling stations",
        "Eco-awareness kit inclusion",
        "Networking dinner with climate innovators",
        "Post-event digital feature",
        "Logo on promotional banners",
      ],
      price: "₹3,50,000",
      popular: false,
      color: "from-cyan-500 to-green-600",
    },
    {
      id: 3,
      icon: <Wind className="h-8 w-8" />,
      title: "Clean Energy Advocate",
      subtitle: "Silver Climate Partner",
      description:
        "Support and promote clean, renewable energy solutions to a wide audience.",
      features: [
        "Participation in clean energy panel",
        "Co-branded solar/wind exhibit zone",
        "Logo on session backdrop",
        "Sustainability networking lunch",
        "Speaker spotlight in program",
        "Event photography access",
      ],
      price: "₹2,50,000",
      popular: false,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 4,
      icon: <Sun className="h-8 w-8" />,
      title: "Climate Action Sponsor",
      subtitle: "Innovation Enabler",
      description:
        "Back breakthrough ideas and startups working on climate resilience.",
      features: [
        "Climate pitch session host",
        "Mentor-led green innovation roundtable",
        "Booth in sustainability showcase zone",
        "Refreshment break sponsor",
        "Young innovator interaction",
        "Recognition in event film",
      ],
      price: "₹2,00,000",
      popular: false,
      color: "from-orange-400 to-yellow-500",
    },
    {
      id: 5,
      icon: <Droplet className="h-8 w-8" />,
      title: "Water Steward Sponsor",
      subtitle: "Eco Impact Partner",
      description:
        "Support sustainable water practices and conservation awareness campaigns.",
      features: [
        "Hydration station branding",
        "Water policy dialogue participant",
        "Community engagement space",
        "Event access for environmental NGOs",
        "Inclusion in impact report",
        "Custom partner badge",
      ],
      price: "₹1,50,000",
      popular: false,
      color: "from-cyan-600 to-blue-500",
    },
    {
      id: 6,
      icon: <TreeDeciduous className="h-8 w-8" />,
      title: "Nature Conservation Sponsor",
      subtitle: "Eco Ally",
      description:
        "Protect natural ecosystems and educate attendees about biodiversity.",
      features: [
        "Tree planting co-sponsorship",
        "Conservation video screening rights",
        "Eco-merchandise co-branding",
        "Wildlife photography exhibition space",
        "Logo on biodiversity campaign assets",
        "Recognition in closing ceremony",
      ],
      price: "₹1,00,000",
      popular: false,
      color: "from-emerald-500 to-green-700",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50"
    >
      <div className="container mx-auto px-4">
        {/* Header
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 mb-6">
            <Globe className="h-5 w-5 text-green-700 mr-2" />
            <span className="text-green-800 font-semibold">Sustainability Summit 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-800 via-emerald-600 to-teal-700 bg-clip-text text-transparent mb-6">
            Eco Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Align your brand with India’s largest green initiative and inspire impactful environmental change while enhancing your ESG goals.
          </p>
        </div>

        {/* Impact Stats 
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-800">10,000+</div>
              <div className="text-gray-600">Trees Committed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-700">200+</div>
              <div className="text-gray-600">Green Champions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-700">100+</div>
              <div className="text-gray-600">Eco Exhibits</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-700">5M+</div>
              <div className="text-gray-600">Digital Impressions</div>
            </div>
          </div>
        </div>  */}

        {/* Sponsorship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? "ring-2 ring-green-400 scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-lime-500 text-white px-6 py-2 rounded-bl-2xl shadow-lg">
                  <div className="flex items-center font-semibold">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Impactful
                  </div>
                </div>
              )}

              <div className="p-8">
                <div
                  className={`bg-gradient-to-br ${tier.color} text-white p-4 rounded-2xl w-fit mb-6 shadow-lg`}
                >
                  {tier.icon}
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {tier.subtitle}
                  </p>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {tier.description}
                </p>
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
                <div className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {tier.price}
                  <div className="text-sm font-normal text-gray-500 mt-1">
                    Contribution
                  </div>
                </div>
                <button
                  className={`w-full bg-gradient-to-r ${tier.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105`}
                >
                  Support the Cause
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`}
              ></div>
              <div
                className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${tier.color} opacity-10 rounded-tl-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* Partner Benefits
        <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Partner With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Award className="h-12 w-12 text-green-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">
                Green Recognition
              </h4>
              <p className="text-gray-600">
                Receive special honors for your sustainable contributions
              </p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="h-12 w-12 text-blue-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">
                Eco Market Access
              </h4>
              <p className="text-gray-600">
                Connect with buyers and partners in green industries
              </p>
            </div>
            <div className="text-center space-y-4">
              <Target className="h-12 w-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">
                ESG Impact
              </h4>
              <p className="text-gray-600">
                Boost your Environmental, Social & Governance goals
              </p>
            </div>
          </div>
        </div>  */}

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Want to leave a lasting environmental legacy? Let’s tailor a
            partnership for your sustainability mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-lime-500 to-green-500 text-white hover:from-lime-600 hover:to-green-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Book Sustainability Call
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white border-2 border-gray-200 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Download Green Partnership Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipBenefits;
