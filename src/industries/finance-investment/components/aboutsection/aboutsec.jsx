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
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Satisfied Investors" },
    { icon: <Award className="h-8 w-8" />, number: "12+", label: "Years of Expertise" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "95%", label: "Client Success Rate" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Dedicated Support" }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovative Strategies",
      description: "We employ data-driven and innovative investment strategies tailored to your financial goals."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results-Focused",
      description: "Our focus is on delivering consistent, measurable growth and maximizing your investment returns."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client-First Approach",
      description: "Building long-term relationships through trust, transparency, and personalized financial planning."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Integrity & Excellence",
      description: "We uphold the highest standards of ethics and professionalism in all our services."
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
              About Finance and Investment
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Finance and Investment, we are committed to helping you secure your financial future through expert investment management and personalized financial advice. Our seasoned professionals leverage market insights and proven strategies to grow and protect your wealth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Over the past decade, we've partnered with hundreds of clients, delivering tailored investment solutions designed to meet diverse financial goals with confidence and transparency.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Proven investment performance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Comprehensive portfolio management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Personalized financial planning</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Transparent and ethical advice</span>
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
                To empower investors with trustworthy, innovative financial solutions that foster sustainable wealth growth and secure futures.
              </p>
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-900">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Proven track record of consistent returns
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Advanced market analytics and tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Experienced certified financial advisors
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    Customized investment solutions
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
