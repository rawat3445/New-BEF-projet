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
      position: "Creative Director",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in brand strategy and creative campaign development with a passion for innovative design solutions."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Digital Marketing Manager",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Specializes in data-driven marketing strategies and performance optimization across digital platforms."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Strategist",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Helps brands find their unique voice and position in the market through comprehensive strategic planning."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Analytics Specialist",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Transforms complex data into actionable insights that drive marketing performance and business growth."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      company: "Tech Startup Inc.",
      position: "CEO",
      content: "AdVantage transformed our brand presence completely. Their strategic approach and creative execution exceeded all our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Robert Kim",
      company: "Fashion Forward",
      position: "Marketing Director",
      content: "Working with AdVantage has been a game-changer. Our ROI improved by 300% within the first quarter of our partnership.",
      rating: 5
    },
    {
      id: 3,
      name: "Amanda Foster",
      company: "Local Restaurant Chain",
      position: "Owner",
      content: "The team's dedication and expertise helped us reach new customers and grow our business significantly. Highly recommended!",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2011", event: "RECommerce Connect Founded", description: "Started with a vision to revolutionize retail and E-commerece" },
    { year: "2015", event: "First Major Award", description: "Won 'Best Creative Campaign' at Industry Awards" },
    { year: "2018", event: "100+ Clients Milestone", description: "Reached over 100 satisfied clients across various industries" },
    { year: "2021", event: "Digital Transformation", description: "Expanded services to include comprehensive digital solutions" },
    { year: "2024", event: "Industry Leadership", description: "Recognized as top advertising agency in the region" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About RECommerce Connect
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            committed to enabling scalable solutions for startups that are rewriting the rules of commerce.
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
                Founded in 2011, RECommerce Connect began as a bold initiative to bridge traditional Indian retail with the evolving digital economy. What started as a movement to empower local sellers soon transformed into a nationwide force—championing inclusive commerce, digital adoption, and consumer empowerment.
                </p>
              {/* <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we’ve grown into a collaborative ecosystem uniting kiranas, modern retailers, D2C brands, and digital marketplaces to reimagine how India shops, sells, and scales. 
              </p> */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we proudly support thousands of retail and e-commerce players across India in navigating the dynamic landscape, enhancing customer experiences, and building a self-reliant economy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8000+</div>
                  <div className="text-gray-600">Retailers Onboarded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years of Collective Impact</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mission</h4>
                  <p>To empower emerging retail and e-commerce startups across Bharat by providing the tools, insights, and infrastructure they need to scale sustainably—enabling seamless omnichannel experiences, smarter logistics, digital reach, and data-driven growth.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vision</h4>
                  <p>To accelerate the rise of a resilient, inclusive, and tech-driven retail ecosystem that transforms every Indian seller—urban or rural—into a global commerce powerhouse by 2047, in alignment with the Viksit Bharat mission.</p>
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
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
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
              Our talented team of professionals brings diverse expertise and passion to every project.
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
                  <div className="text-blue-600 font-semibold mb-1">{member.position}</div>
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
              Don't just take our word for it—hear from some of our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 relative">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-blue-600">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow and achieve its goals.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;