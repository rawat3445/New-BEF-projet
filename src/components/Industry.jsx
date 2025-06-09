import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Trophy,
  TrendingUp,
  Star,
  Tractor,
  ChevronsLeftRightEllipsis,
  UserCheck,
  Sprout,
  ShoppingCart,
  HeartPulse,
} from "lucide-react";
import { useState } from "react";
// Industry cards data
const industryCard = [
  {
    id: "advertisement",
    title: "Advertisement & Marketing",
    description:
      "Shape the future of brand communication and digital marketing strategies for Viksit Bharat.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-blue-600 to-purple-600",
    path: `/industries/advertisement`,
  },
  {
    id: "beauty-wellness",
    title: "Beauty And Wellness",
    description:
      "Discover innovative beauty and wellness solutions shaping Viksit Bharat’s vibrant future.",
    icon: <Star className="w-8 h-8" />,
    gradient: "from-pink-500 to-purple-600",
    path: `/industries/beauty-wellness`,
  },
  {
    id: "women-entrepreneurship",
    title: "Empowering Women Entrepreneurs",
    description:
      "Explore inspiring stories, resources, and opportunities fueling women-led businesses and innovation.",
    icon: <UserCheck className="w-8 h-8" />,
    gradient: "from-pink-600 to-purple-700",
    path: `/industries/women-entrepreneurship`,
  },

  {
    id: "real-estate",
    title: "Real Estate and Urban Planning",
    description:
      "Explore inspiring stories, resources, and opportunities fueling women-led businesses and innovation.",
    icon: <UserCheck className="w-8 h-8" />,
    gradient: "from-pink-600 to-purple-700",
    path: `/industries/women-entrepreneurship`,
  },

  {
    id: 2,
    title: "Public Relations",
    description:
      "Build strategic communications that connect brands with India's evolving narrative.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Digital Innovation",
    description:
      "Pioneer the next wave of AdTech solutions and digital transformation initiatives.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "media",
    title: "Media & Entertainment",
    description:
      "Revolutionize content creation and distribution across traditional and new media platforms.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: "rural",
    title: "Rural Development",
    description:
      "Building sustainable, self-reliant villages through technology, community participation, and innovative solutions",
    icon: <Sprout className="w-8 h-8" />,
    gradient: "from-lime-400 to-green-700",
    path: `/rural-development`,
  },
  {
    id: "environment",
    title: "Environment & Sustainability Tech",
    description:
      "Shape the future of brand communication and digital marketing strategies for Viksit Bharat.",
    icon: <Sprout className="w-8 h-8" />,
    gradient: "from-lime-400 to-green-700",
    path: `/industries/environment`,
  },
  {
    id: 5,
    title: "Brand Strategy",
    description:
      "Craft compelling brand stories that resonate with India's diverse and dynamic market.",

    icon: <Trophy className="w-8 h-8" />,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "agriculture",
    title: "Agriculture and Agritech",
    description:
      "Empower Indian agriculture with smart agritech solutions that boost productivity and drive sustainable growth.",
    icon: <Tractor className="w-8 h-8" />,
    gradient: "from-lime-400 to-green-700",
  },

  {
    id: "retail",
    title: "Retail & E-Commerce",
    description:
      "To empower emerging retail and e-commerce startups across Bharat by providing the tools, insights, and infrastructure.",
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: "from-cyan-600 to-blue-600",
    path: `/industries/retail`,
  },
  {
    id: "web3ai",
    title: "Web 3.0, AI and DeepTech",
    description:
      "Future-Proofing India with Next-Gen Tech Discover how Web3, AI, and Quantum Computing are transforming industries.",
    icon: <ChevronsLeftRightEllipsis className="w-8 h-8" />,
    gradient: "from-indigo-400 to-blue-700",
    path: `/industries/web3_ai`,
  },
  {
    id: "automobile",
    title: "Automobile & Mobility",
    description:
      "Explore the world of smart vehicles, sustainable transport, and the future of mobility.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-blue-600 to-purple-600",
    path: `/industries/Automobile & mobilty/automobile`,
  },
  {
    id: "health-pharma",
    title: "Health & Pharma",
    description:
      "Advance healthcare innovation and pharmaceutical excellence for a healthier, resilient Bharat.",
    icon: <HeartPulse className="w-8 h-8" />,
    gradient: "from-green-500 to-blue-600",
    path: `/industries/health-pharma`,
  },
];

const Industry = () => {
  const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);

  const HandleCardClick = (card) => {
    switch (card.id) {
      case "advertisement":
        navigate("/advertisement");
        break;
      case "beauty-wellness":
        navigate("/beauty-wellness");
        break;
      case "women-entrepreneurship":
        navigate("/women-entrepreneurship");
        break;
      case "media":
        navigate("/media-entertainment");
        break;
      case "environment":
        navigate("/environment");
        break;
      case "agriculture":
        navigate("/agriculture");
        break;
      case "health-pharma":
        navigate("/health-pharma");
        break;
      case "retail":
        navigate("/retail");
        break;
      case "web3ai":
        navigate("/web_ai");
        break;
      case "automobile":
        navigate("/automobile");
        break;
      case "real-estate":
        navigate("/real-estate");
        break;
      case "rural":
        navigate(`/rural-development`);
        break;
      default:
        console.log(`Clicked on ${card.title} card`);
        alert(`This page ${card.title} is not assigned to any industry`);
        break;
    }
  };

 const visibleCards = showAll ? industryCard : industryCard.slice(0, 3); // 👁️ Show first 3 or all

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Strategic Initiatives
          </h2>
          <p className="text-xl text-gray-600">
            Empowering change through strategic programs
          </p>
        </div>
        <div
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[500px] overflow-y-auto pr-2 p-2"
>

          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
              onClick={() => HandleCardClick(card)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  HandleCardClick(card);
                }
              }}
              aria-label={`Navigate to ${card.title} page`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="p-8">
                <div
                  className={`inline-flex p-3 rounded-full bg-gradient-to-br ${card.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center gap-2 group-hover:gap-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      HandleCardClick(card);
                    }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-all duration-200" />
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔘 Toggle Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-purple-600 text-white font-medium rounded-full transition-all duration-300"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industry;
