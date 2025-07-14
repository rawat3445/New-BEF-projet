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
    { icon: <Users className="h-8 w-8" />, number: "1,000+", label: "Satisfied Clients" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Years of Expertise" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "98%", label: "Client Retention" },
    { icon: <Clock className="h-8 w-8" />, number: "Open Daily", label: "Flexible Hours" }
  ];
/*
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We use the latest beauty technologies and wellness trends to keep you radiant and refreshed."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Care",
      description: "Every treatment is tailored to your unique needs for optimal results and lasting wellness."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client Focused",
      description: "Your comfort and satisfaction are our top priorities. We build lasting relationships through trust and care."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Commitment",
      description: "We use only premium products and maintain the highest standards in every service we provide."
    }
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
              About Beauty & Wellness
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Radiance Beauty & Wellness is dedicated to enhancing your natural beauty and promoting holistic well-being. Our expert team blends the art of beauty with science-backed wellness techniques to help you look and feel your best.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, we've been providing personalized treatments and luxurious experiences that nurture your mind, body, and soul.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-700">Award-winning beauty treatments</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-700">Customized wellness programs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-700">Natural and organic products</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-700">Expert therapists and consultants</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Learn More About Us
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To inspire confidence and well-being through innovative beauty treatments and holistic wellness, creating radiant, healthy lifestyles.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">Why Choose Radiance?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Personalized beauty & wellness plans
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Certified and caring professionals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Use of natural, cruelty-free products
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Luxurious, relaxing atmosphere
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-4 rounded-2xl w-fit mx-auto mb-4">
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
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide us to provide exceptional care and beauty services that make you shine inside and out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-xl w-fit mb-4">
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
        */}
      </div>
    </section>
  );
};

export default AboutSection;
