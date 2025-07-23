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
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "12+",
      label: "Years Experience",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "95%",
      label: "Success Rate",
    },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Support" },
  ];

  /**   const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description:
        "We stay ahead of industry trends and leverage cutting-edge technologies to deliver innovative solutions.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results-Driven",
      description:
        "Every campaign is meticulously planned and executed to achieve measurable results and exceed expectations.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships based on trust, transparency, and mutual growth.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of quality in every project, ensuring excellence in every detail.",
    },
  ];*/
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About RECommerce Connect
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are the driving force behind India’s retail and e-commerce
              transformation — blending tradition with innovation to shape a
              connected, inclusive, and future-ready marketplace. RECommerce
              Connect is where local meets global, digital meets physical, and
              consumers meet convenience.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since inception, we've brought together retailers of every scale —
              from homegrown artisans to national chains — to forge
              collaborations, reimagine commerce, and build a resilient, modern
              India.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Pan-India reach from metros to villages
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Tech-first commerce with human connection
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Enabling MSMEs and startups through digital retail
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Trusted by millions of Indian consumers daily
                </span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                Our mission is to empower India’s vast network of kiranas,
                startups, D2C brands, and digital marketplaces by showcasing how
                retail can lead the charge towards a Viksit Bharat. We combine
                market reach, customer-centric innovation, and technology-led
                scalability to create sustainable and inclusive growth.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">Why Choose Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Cutting-edge technology and tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Experienced team of professionals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Customized solutions for every client
                  </li>
                </ul>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-2xl w-fit mx-auto mb-4">
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
              These fundamental principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-3 rounded-xl w-fit mb-4">
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
