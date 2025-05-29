import React from 'react';
import {
  Film,
  Music,
  Users,
  Calendar,
  CheckCircle,
  Lightbulb,
  Heart,
  Star
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10M+", label: "Viewers Reached" },
    { icon: <Film className="h-8 w-8" />, number: "1,200+", label: "Projects Delivered" },
    { icon: <Music className="h-8 w-8" />, number: "500+", label: "Artists Collaborated" },
    { icon: <Calendar className="h-8 w-8" />, number: "24/7", label: "Live Support" }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Creative Excellence",
      description: "We bring ideas to life with stunning visuals, powerful narratives, and immersive experiences."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Talent-Driven",
      description: "We collaborate with top-tier creators, artists, and storytellers to produce memorable content."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Audience Focused",
      description: "We tailor experiences that deeply resonate with diverse audiences across platforms."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Production",
      description: "From script to screen, we ensure the highest standards of production and storytelling."
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
              About MediaVerse
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MediaVerse is a dynamic media & entertainment agency delivering engaging content, cinematic productions, and next-gen storytelling experiences. We bridge creativity and technology to entertain, inform, and inspire.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From digital films and ad campaigns to live shows and streaming content — we help brands and creators shine across all screens.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-700">Award-winning productions & series</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-700">Multi-platform content expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-700">Top-tier artist collaborations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-indigo-500 mr-3" />
                <span className="text-gray-700">Interactive & immersive storytelling</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Discover Our World
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                To redefine entertainment through powerful stories and unforgettable media experiences that leave lasting impressions.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">Why Work With Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Trusted by global brands & creators
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Creative minds with technical mastery
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Full-spectrum production services
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Deep understanding of modern audiences
                  </li>
                </ul>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-indigo-500 to-pink-600 text-white p-4 rounded-2xl w-fit mx-auto mb-4">
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
              What We Stand For
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values shape our creative direction and ensure excellence in every production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500 to-pink-600 text-white p-3 rounded-xl w-fit mb-4">
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
