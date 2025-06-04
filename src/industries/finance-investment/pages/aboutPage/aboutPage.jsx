import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Target,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Investment Officer",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in portfolio management and risk assessment, dedicated to maximizing client returns with a strategic approach."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Financial Analyst",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Specializes in market research and data-driven investment strategies to optimize asset allocation."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Wealth Management Advisor",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Works closely with clients to design personalized investment plans tailored to their financial goals."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Quantitative Analyst",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Develops algorithmic trading models and financial simulations to drive efficient market strategies."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      company: "Capital Growth Partners",
      position: "CEO",
      content: "Their investment strategies have consistently delivered outstanding returns and helped us navigate market volatility with confidence.",
      rating: 5
    },
    {
      id: 2,
      name: "Robert Kim",
      company: "WealthWise Advisors",
      position: "Managing Director",
      content: "Partnering with this team transformed our client portfolios, delivering superior growth and risk management.",
      rating: 5
    },
    {
      id: 3,
      name: "Amanda Foster",
      company: "Family Trust Fund",
      position: "Trustee",
      content: "Thanks to their expert advice, our family’s assets are well-protected and steadily growing for future generations.",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2010", event: "Firm Established", description: "Launched with a vision to provide personalized investment solutions" },
    { year: "2013", event: "First $100M AUM", description: "Reached $100 million assets under management" },
    { year: "2017", event: "Expanded Services", description: "Added wealth management and financial planning divisions" },
    { year: "2020", event: "Technology Integration", description: "Implemented advanced analytics and AI-driven investment tools" },
    { year: "2024", event: "Top 10 Regional Firm", description: "Recognized among the top investment firms in the region" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-teal-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Finvest Partners
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in wealth management, investment strategy, and financial growth.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, Finvest Partners began as a boutique investment firm focused on personalized financial solutions.
                Over the years, we have grown into a full-service wealth management company combining expert insights with innovative technologies.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we proudly manage billions in assets, helping individuals and institutions achieve their long-term financial goals with confidence and integrity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">1B+</div>
                  <div className="text-gray-600">Assets Under Management</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">14+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mission</h4>
                  <p>To empower our clients with intelligent investment strategies and personalized financial planning that secure and grow their wealth sustainably.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vision</h4>
                  <p>To be a leading investment firm known for innovation, trustworthiness, and delivering consistent, long-term financial success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and commitment to client success.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-green-700 mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-green-700 rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced finance professionals dedicated to your financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className="text-green-700 font-semibold mb-1">{member.position}</div>
                  <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from our clients about their financial growth journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 relative">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-green-700">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Financial Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to create a tailored investment plan that works for you.
          </p>
          <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
