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
    number: "100K+",
    label: "Satisfied Drivers",
  },
  {
    icon: <Award className="h-8 w-8" />,
    number: "15+",
    label: "Years Innovating Mobility",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    number: "98%",
    label: "Customer Satisfaction",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    number: "24/7",
    label: "On-Road Assistance",
  },
];


const values = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description:
      "We drive the future of mobility by embracing smart technologies and sustainable transportation solutions.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Performance Focused",
    description:
      "Our commitment is to enhance vehicle performance and user experience through cutting-edge automotive advancements.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Customer First",
    description:
      "We prioritize your journey by providing reliable, user-centric mobility solutions tailored to your needs.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Safety & Quality",
    description:
      "Ensuring the highest safety standards and quality in every vehicle and mobility service we promote.",
  },
];


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About AutoMobility
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a next-generation mobility platform dedicated to redefining
              transportation through cutting-edge automotive solutions and
              sustainable innovations. Our mission is to bridge technology with
              mobility, making travel smarter, safer, and more efficient for
              everyone.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since our inception, we’ve been committed to showcasing the latest
              trends in smart vehicles, electric mobility, and future-forward
              automotive technologies.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  A Smart and connected vehicle solutions
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  Focus on electric and sustainable mobility
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  User-focused platform with expert analysis
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">
                  In-depth insights into the future of transportation
                </span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 via-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                 To revolutionize mobility by delivering innovative, sustainable,
      and smart automotive solutions that enhance travel experiences and
      drive the future of transportation.
              </p>
              <div className="bg-blue-400  bg-opacity-20 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">Why Choose Us?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300  rounded-full mr-3"></div>
                  Industry-leading expertise in smart vehicle technologies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300  rounded-full mr-3"></div>
                     Commitment to eco-friendly and sustainable mobility solutions.
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300  rounded-full mr-3"></div>
                     Dedicated team passionate about innovation and safety
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 "></div>
                    Customized mobility solutions tailored to your lifestyle
                  </li>
                </ul>
              </div>
            </div>

            {/* Decorative Elements */}
  <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-600 rounded-full opacity-20"></div>
  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-600 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-800 via-blue-600 to-purple-600 text-white p-4 rounded-2xl w-fit mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
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
              These fundamental principles guide everything we do and define who
              we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-800 via-blue-600 to-purple-600 text-white p-3 rounded-xl w-fit mb-4">
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
