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
      label: "Happy Homeowners",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "20+",
      label: "Years of Experience",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "95%",
      label: "Project Success Rate",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Customer Support",
    },
  ];

  /** 
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovative Design",
      description: "We create smart, sustainable urban spaces that enhance quality of life."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Client-Centered Planning",
      description: "Every project is tailored to meet the unique goals of our clients and communities."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community Focus",
      description: "We prioritize inclusive developments that foster vibrant, connected neighborhoods."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "We uphold the highest standards in construction, materials, and service delivery."
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
              About UrbanVista Developments
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              UrbanVista Developments is committed to building sustainable and
              innovative real estate projects that shape the future of urban
              living.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over two decades of experience, we deliver personalized urban
              planning solutions and residential projects that enrich
              communities.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-800">
                  Award-winning architectural designs
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-800">
                  Sustainable urban planning solutions
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-800">
                  Eco-friendly building materials
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-800">
                  Experienced architects & planners
                </span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-green-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-600 to-blue-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To design and develop vibrant, sustainable urban communities
                that inspire growth, connection, and well-being.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">
                  Why Choose UrbanVista?
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Custom urban and residential planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Certified planning & construction experts
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Focus on sustainability and green spaces
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Commitment to community-driven design
                  </li>
                </ul>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-green-600 to-blue-700 text-white p-4 rounded-2xl w-fit mx-auto mb-4">
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
              These principles guide our commitment to creating exceptional
              urban spaces and quality homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-green-600 to-blue-700 text-white p-3 rounded-xl w-fit mb-4">
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
        </div>*/}
      </div>
    </section>
  );
};

export default AboutSection;
