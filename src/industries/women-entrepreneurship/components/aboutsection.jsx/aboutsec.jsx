import React from "react";
import {
  Award,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Lightbulb,
  Target,
  Heart,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "5,000+",
      label: "Women Entrepreneurs Empowered",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "10+",
      label: "Years of Impact",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "85%",
      label: "Business Growth Rate",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Ongoing Support",
    },
  ];

  /**   const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We empower women to develop innovative business ideas and solutions that transform communities."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Mentorship",
      description: "Tailored guidance to meet the unique challenges and goals of every woman entrepreneur."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community Driven",
      description: "Building a supportive network that fosters collaboration, learning, and growth."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Commitment",
      description: "Dedicated to delivering impactful programs and resources that drive sustainable success."
    }
  ];*/
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Women Entrepreneurship
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our Women Entrepreneurship Initiative is dedicated to empowering
              women through education, resources, and mentorship to build
              thriving businesses and create economic independence.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              For over a decade, we have been supporting women entrepreneurs
              with tools and networks that help them overcome challenges and
              unlock their full potential.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-cyan-600 mr-3" />
                <span className="text-gray-800">
                  Access to funding and resources
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-cyan-600 mr-3" />
                <span className="text-gray-800">
                  Personalized business mentoring
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-cyan-600 mr-3" />
                <span className="text-gray-800">
                  Skill-building workshops and training
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-cyan-600 mr-3" />
                <span className="text-gray-800">
                  Strong, supportive community networks
                </span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105">
              Learn More About Our Impact
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To inspire and equip women entrepreneurs with the tools,
                mentorship, and community support needed to build sustainable
                businesses and lead economic change.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">Why Join Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Access to expert mentorship and coaching
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Networking opportunities with industry leaders
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Resources for funding and business development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Supportive environment encouraging growth and innovation
                  </li>
                </ul>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white p-4 rounded-2xl w-fit mx-auto mb-4 shadow">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These principles guide us in nurturing the success, creativity,
              and independence of women entrepreneurs worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-60 rounded-2xl p-8 shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white p-3 rounded-xl w-fit mb-4 shadow">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
