import React from "react";
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
  ArrowRight,
} from "lucide-react";

const RuralDevelopmentCards = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Home className="h-8 w-8" />,
      title: "Title Sponsor",
      subtitle: "Platinum Sponsorship",
      description:
        "Lead the Rural Development initiatives at this prestigious conclave shaping India's future.",
      features: [
        "Exclusive 'Title Sponsor' branding across all event materials",
        "5-minute speaking slot at Opening Ceremony",
        "Access to all roundtable sessions for 5 representatives",
        "10 VIP Delegate passes with premium access",
        "Dedicated booth in networking area",
        "Multi-channel media coverage (TV, print, digital)",
      ],
      price: "₹25,00,000",
      popular: true,
      color: "from-green-600 to-emerald-600",
    },
    {
      id: 2,
      icon: <TreePine className="h-8 w-8" />,
      title: "Powered By Sponsor",
      subtitle: "Gold Sponsorship",
      description:
        "Showcase your commitment to sustainable rural development and infrastructure.",
      features: [
        "'Powered By' branding on event materials",
        "Logo on stage backdrop and delegate kits",
        "Access to all sessions for 3 representatives",
        "5 VIP Delegate passes",
        "Shared booth in networking area",
        "Mention in press releases and media coverage",
      ],
      price: "₹10,00,000",
      popular: false,
      color: "from-amber-600 to-yellow-600",
    },
    {
      id: 3,
      icon: <Wifi className="h-8 w-8" />,
      title: "Rural Tech Sponsor",
      subtitle: "Digital Infrastructure",
      description:
        "Highlight your digital solutions bridging the urban-rural divide.",
      features: [
        "Exclusive branding as Rural Tech sponsor",
        "Logo on rural development session materials",
        "Access to rural development roundtable",
        "3 VIP Delegate passes",
        "Social media shoutouts",
        "Mention in industry podcasts",
      ],
      price: "₹5,00,000",
      popular: false,
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 4,
      icon: <School className="h-8 w-8" />,
      title: "Education Partner",
      subtitle: "Skill Development",
      description:
        "Promote your rural education and skilling initiatives to key stakeholders.",
      features: [
        "Branding on education-related materials",
        "Participation in rural education discussions",
        "2 VIP Delegate passes",
        "Logo in delegate kits",
        "Feature in Viksit Bharat Awards coverage",
        "Networking with policymakers",
      ],
      price: "₹3,00,000",
      popular: false,
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: 5,
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Healthcare Partner",
      subtitle: "Rural Wellness",
      description:
        "Showcase your rural healthcare solutions to influencers and decision-makers.",
      features: [
        "Branding on healthcare-related materials",
        "Participation in rural health discussions",
        "2 Standard Delegate passes",
        "Social media mentions",
        "Inclusion in press releases",
        "Networking opportunities",
      ],
      price: "₹2,00,000",
      popular: false,
      color: "from-red-600 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? "ring-2 ring-green-400 scale-105" : ""
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
                    Sponsorship Investment
                  </div>
                </div>

                <button
                  className={`w-full bg-gradient-to-r ${tier.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105`}
                >
                  Partner With Us
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to lead India's rural transformation? Let's craft a
            sponsorship plan that aligns with your goals and impact vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Schedule Partnership Call
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white border-2 border-gray-200 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Download Sponsorship Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RuralDevelopmentCards;
