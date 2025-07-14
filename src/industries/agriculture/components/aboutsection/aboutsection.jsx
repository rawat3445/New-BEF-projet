import React from "react";
import {
  Award,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Leaf,
  Cpu,
  ShieldCheck,
  Sun,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "1,000+",
      label: "Farmers Empowered",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "10+",
      label: "Years of Innovation",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Agri Support",
    },
  ];
/*
  const values = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Smart Farming",
      description:
        "We integrate technology with tradition to maximize agricultural productivity efficiently.",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Sustainability",
      description:
        "We promote eco-friendly practices that protect soil, water, and future food security.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Reliability",
      description:
        "Farmers trust us for timely, consistent solutions tailored to their local needs.",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Growth-Focused",
      description:
        "We nurture growth — of crops, communities, and agricultural businesses alike.",
    },
  ];
*/
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About AgriNxt
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are on a mission to revolutionize Indian agriculture through
              cutting-edge technology and farmer-first solutions. Our platform
              bridges the gap between traditional farming wisdom and modern
              innovation to drive better yields, smarter decisions, and
              sustainable outcomes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From precision tools to real-time analytics, we empower rural
              communities to thrive in a changing climate and dynamic market.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">AI-driven crop monitoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Real-time agri advisory</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Eco-friendly farming solutions
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Farmer-first customer support
                </span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To empower Indian agriculture through smart technologies,
                data-driven insights, and sustainable solutions that uplift
                farming communities and ensure food security.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">Why Choose Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Trusted by thousands of farmers nationwide
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Cutting-edge agritech tools and analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Deep roots in agricultural communities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Committed to climate-smart agriculture
                  </li>
                </ul>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-4 rounded-2xl w-fit mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section 
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our work is grounded in principles that reflect the heart of
              agriculture — innovation, trust, and care for the land and its
              people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-3 rounded-xl w-fit mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default AboutSection;
