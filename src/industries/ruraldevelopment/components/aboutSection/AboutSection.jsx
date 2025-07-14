import React from 'react';
import { 
  Users, 
  Droplet, 
  Wifi, 
  BookOpen, 
  CheckCircle, 
  Lightbulb,
  Heart,
  Award 
} from 'lucide-react';

const RuralAboutSection = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Villages Impacted" },
    { icon: <Droplet className="h-8 w-8" />, number: "5,200+", label: "Water Projects" },
    { icon: <Wifi className="h-8 w-8" />, number: "2,400+", label: "Digital Villages" },
    { icon: <BookOpen className="h-8 w-8" />, number: "1M+", label: "Trained Individuals" }
  ];
/*
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Grassroots Innovation",
      description: "We believe the best solutions come from the communities themselves"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Sustainable Impact",
      description: "Programs designed for long-term generational change"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Transparent Execution",
      description: "Every rupee accounted for with public impact reports"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence in Implementation",
      description: "Award-winning projects recognized by NITI Aayog"
    }
  ];
*/
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Our Rural Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The Bharat Economic Forum's Rural Development Initiative is transforming India's villages through technology, sustainable practices, and community empowerment.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2015, we've partnered with 200+ organizations to implement scalable solutions across 12 states, directly impacting 5 million lives.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Recognized by UN Sustainable Development Goals",
                "Featured in NITI Aayog's Aspirational Districts Program",
                "Awarded Best Rural NGO 2023",
                "100% project completion rate"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Impact Report
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Our 2047 Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                To create self-reliant villages with urban-quality infrastructure, opportunities, and quality of life.
              </p>
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">Core Principles</h4>
                <ul className="space-y-2">
                  {[
                    "Community-led development",
                    "Technology as an enabler",
                    "Environmental sustainability",
                    "Women at the forefront"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-4 rounded-2xl w-fit mx-auto mb-4 shadow-lg">
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

        {/* Values Section 
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Guiding Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles shape every initiative we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-3 rounded-xl w-fit mb-4 shadow-md">
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

export default RuralAboutSection;