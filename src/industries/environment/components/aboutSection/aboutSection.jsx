import React from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Lightbulb,
  Target,
  Heart
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "1000+", label: "Community Members" },
    { icon: <Award className="h-8 w-8" />, number: "10+", label: "Years of Impact" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "80%", label: "Carbon Footprint Reduced" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Volunteer Support" }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Sustainability",
      description: "We champion long-term solutions that protect our planet for future generations."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Action-Oriented",
      description: "From planting trees to climate education, we take real-world action to drive change."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community Focus",
      description: "We empower local communities to lead environmental change through education and support."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Transparency",
      description: "We maintain open, honest communication and report our environmental progress clearly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Environment and Sustainability
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Environment and Sustainability is a dedicated environmental organization working towards a greener, cleaner, and more sustainable world. We believe that small actions, when multiplied, can lead to powerful results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through awareness programs, eco-projects, and collaborative initiatives, we aim to drive meaningful environmental impact and nurture a culture of sustainability across communities.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Grassroots environmental initiatives</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Eco-awareness and education programs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Tree planting & clean-up drives</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Global collaboration for climate action</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-lime-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
              Join Our Movement
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lime-500 to-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To inspire, educate, and mobilize people worldwide to protect nature and combat climate change through sustainable practices and collective action.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-gray-600">
                <h4 className="text-xl font-semibold mb-3">Why Support Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Impact-driven environmental programs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Science-backed climate strategies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Community engagement and training
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Transparent and sustainable operations
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
              <div className="bg-gradient-to-br from-lime-500 to-green-600 text-white p-4 rounded-2xl w-fit mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values shape our mission and guide every action we take to protect our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-lime-500 to-green-500 text-white p-3 rounded-xl w-fit mb-4">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
