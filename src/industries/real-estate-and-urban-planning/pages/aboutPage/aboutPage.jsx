import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Heart,      
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Anita Verma",
      position: "Urban Planner",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in sustainable city planning and smart infrastructure design."
    },
    {
      id: 2,
      name: "Rahul Mehta",
      position: "Real Estate Analyst",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
      bio: "Specializes in market trends and investment opportunities in urban areas."
    },
    {
      id: 3,
      name: "Priya Singh",
      position: "Architect",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Designs innovative residential and commercial spaces with a focus on green architecture."
    },
    {
      id: 4,
      name: "Vikram Joshi",
      position: "Project Manager",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop&crop=face",
      bio: "Leads urban development projects ensuring timely delivery and quality standards."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sunita Rao",
      company: "GreenCity Developers",
      position: "CEO",
      content: "Their urban planning expertise helped us deliver sustainable housing projects ahead of schedule.",
      rating: 5
    },
    {
      id: 2,
      name: "Amit Desai",
      company: "Metropolitan Realty",
      position: "Head of Sales",
      content: "Professional and insightful analysis that guided our investments for maximum ROI.",
      rating: 5
    },
    {
      id: 3,
      name: "Neha Kapoor",
      company: "Urban Innovators",
      position: "Founder",
      content: "Innovative design and thoughtful project management have transformed our urban landscape.",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2012", event: "Company Founded", description: "Started with a vision to innovate urban spaces." },
    { year: "2015", event: "First Major Project", description: "Completed a sustainable housing development in Mumbai." },
    { year: "2018", event: "Award for Urban Design", description: "Received recognition for excellence in urban planning." },
    { year: "2021", event: "Expanded Services", description: "Added real estate analytics and investment consulting." },
    { year: "2024", event: "Industry Leader", description: "Acknowledged as a leading real estate and urban planning firm." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Real Estate & Urban Planning
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Shaping sustainable cities and thriving communities through expert planning and innovative real estate solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception in 2012, we have been committed to transforming urban landscapes with sustainable and forward-thinking development.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach integrates innovative architecture, smart infrastructure, and data-driven real estate insights to build better cities for tomorrow.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-green-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mission</h4>
                  <p>To design and develop sustainable urban environments that enhance quality of life and foster economic growth.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vision</h4>
                  <p>To be the leading force in urban planning and real estate development, pioneering innovative and eco-friendly solutions.</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Milestones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key achievements that mark our commitment to excellence in real estate and urban planning.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A dedicated team of professionals driving innovation in real estate and urban development.
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
                  <div className="text-green-600 font-semibold mb-1">{member.position}</div>
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
              Hear success stories from our partners and clients shaping urban futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 relative">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-green-600">{testimonial.position} at {testimonial.company}</div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
