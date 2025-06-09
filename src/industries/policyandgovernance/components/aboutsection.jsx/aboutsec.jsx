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

const values = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description: "We apply cutting-edge governance models and data-driven insights to create effective policy solutions."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Personalized Approach",
    description: "Every policy and program is tailored to the unique needs of communities and stakeholders for maximum impact."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Community Focused",
    description: "We prioritize transparency, engagement, and trust-building to strengthen relationships with all stakeholders."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Integrity & Quality",
    description: "We uphold the highest standards of ethical governance and accountability in every initiative we undertake."
  }
];


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Policy & Governance
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
  BEF Policy & Governance is dedicated to fostering transparent leadership and promoting inclusive community development. Our expert team combines best practices with data-driven strategies to help you achieve impactful governance.
</p>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
  For over 15 years, we've been delivering tailored policy solutions and strategic guidance that empower organizations and strengthen public trust.
</p>

            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
  <div className="flex items-center">
    <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
    <span className="text-slate-700">Award-winning governance initiatives</span>
  </div>
  <div className="flex items-center">
    <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
    <span className="text-slate-700">Customized policy development programs</span>
  </div>
  <div className="flex items-center">
    <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
    <span className="text-slate-700">Ethical and transparent practices</span>
  </div>
  <div className="flex items-center">
    <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
    <span className="text-slate-700">Expert analysts and governance consultants</span>
  </div>
</div>


            <button className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 border border-amber-600">
                Learn More About Us
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
  To inspire trust and effective leadership through innovative governance strategies and inclusive policy development, creating resilient and empowered communities.
</p>
<div className="bg-slate-600 bg-opacity-20 rounded-2xl p-6">
  <h4 className="text-xl font-semibold mb-3 text-amber-300">Why Choose BEF Policy & Governance?</h4>
  <ul className="space-y-2">
    <li className="flex items-center">
      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
      Personalized Policy & Governance plans tailored to your needs
    </li>
    <li className="flex items-center">
      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
      Certified and dedicated governance professionals
    </li>
    <li className="flex items-center">
      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
      Commitment to ethical, transparent, and inclusive practices
    </li>
    <li className="flex items-center">
      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
      Supportive and collaborative organizational culture
    </li>
  </ul>


              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white p-4 rounded-2xl w-fit mx-auto mb-4 border-2 border-amber-600">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide us to deliver transparent, accountable, and inclusive governance that empowers communities and drives meaningful change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-amber-600">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white p-3 rounded-xl w-fit mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
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