import React from "react";
import {
  Camera,
  Film,
  Mic2,
  Tv,
  Music2,
  Globe,
  Star,
  Award,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const MediaEntertainmentCards = () => {
  const sponsorshipTiers = [
    {
      id: 1,
      icon: <Tv className="h-8 w-8" />,
      title: "Headline Partner",
      subtitle: "Platinum Sponsorship",
      description:
        "Lead the stage at the industry's most anticipated entertainment summit of the year.",
      features: [
        "Branding on all main stage panels & events",
        "Exclusive backstage access & meet & greet",
        "Prime-time speaking slot (25 mins)",
        "Feature on official after-movie",
        "Premium exhibition zone (100 sq ft)",
        "Co-branded social media campaign",
      ],
      price: "₹6,00,000",
      popular: true,
      color: "from-pink-500 to-red-500",
    },
    {
      id: 2,
      icon: <Camera className="h-8 w-8" />,
      title: "Content Sponsor",
      subtitle: "Gold Sponsorship",
      description:
        "Showcase your original IP and creative works to thousands of professionals and fans.",
      features: [
        "Content screening slots",
        "Co-branded panel appearance",
        "Logo on event livestream overlay",
        "60-second ad placement",
        "Green room access",
        "Social media featurette",
      ],
      price: "₹4,00,000",
      popular: false,
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: 3,
      icon: <Mic2 className="h-8 w-8" />,
      title: "Podcast Studio Sponsor",
      subtitle: "Silver Sponsorship",
      description:
        "Capture conversations with influencers, producers, and talent on-site.",
      features: [
        "On-site branded podcast booth",
        "Featured podcast guest slots",
        "Event podcast co-branding",
        "Audio promotion on Spotify/Apple",
        "Team backstage passes",
        "Mention in daily newsletter",
      ],
      price: "₹3,00,000",
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      icon: <Music2 className="h-8 w-8" />,
      title: "Streaming Partner",
      subtitle: "Digital Distribution",
      description:
        "Amplify event reach through exclusive digital distribution and co-streaming.",
      features: [
        "Livestream co-host rights",
        "Logo in streaming watermark",
        "Custom intro/outro branding",
        "Shoutouts during breaks",
        "Behind-the-scenes footage access",
        "Exclusive interview rights",
      ],
      price: "₹2,50,000",
      popular: false,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      icon: <Film className="h-8 w-8" />,
      title: "Indie Film Showcase Partner",
      subtitle: "Creative Sponsor",
      description:
        "Support emerging filmmakers and promote diverse storytelling on the big screen.",
      features: [
        "Branding in indie showcase",
        "Panel hosting opportunity",
        "Short film screening slot",
        "Delegate Q&A moderation",
        "Brand shoutout in film catalog",
        "Meet & greet with creators",
      ],
      price: "₹2,00,000",
      popular: false,
      color: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header 
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 mb-6">
            <Globe className="h-5 w-5 text-pink-600 mr-2" />
            <span className="text-pink-700 font-semibold">India Media & Entertainment Summit 2025</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Sponsorship Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Partner with the biggest celebration of cinema, OTT, music, and digital content. Elevate your brand at the intersection of creativity and commerce.
          </p>
        </div> */}

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20 ${
                tier.popular ? "ring-2 ring-pink-400 scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-400 to-red-500 text-white px-6 py-2 rounded-bl-2xl shadow-lg">
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
                    Sponsorship Investment
                  </div>
                </div>

                {/* CTA */}
                <button
                  className={`w-full bg-gradient-to-r ${tier.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105`}
                >
                  Become a Sponsor
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

        {/* Additional Benefits 
        <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Additional Sponsor Privileges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Award className="h-12 w-12 text-pink-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">
                Spotlight Recognition
              </h4>
              <p className="text-gray-600">
                Trophy & feature at the closing gala + media spotlight
              </p>
            </div>
            <div className="text-center space-y-4">
              <Briefcase className="h-12 w-12 text-red-600 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">
                B2B Connect
              </h4>
              <p className="text-gray-600">
                One-on-one curated networking with industry leaders
              </p>
            </div>
            <div className="text-center space-y-4">
              <Users className="h-12 w-12 text-orange-500 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-800">
                Audience Engagement
              </h4>
              <p className="text-gray-600">
                Interactive contests, live polls, and branded audience zones
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default MediaEntertainmentCards;
