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
      name: "Dr. Neha Verma",
      position: "Agritech Innovations Lead",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in sustainable agricultural practices and the application of IoT and AI in precision farming."
    },
    {
      id: 2,
      name: "Ravi Deshmukh",
      position: "Agro-Ecosystem Analyst",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Focuses on optimizing agricultural yield through data-driven insights and crop behavior modeling."
    },
    {
      id: 3,
      name: "Meera Iyer",
      position: "Rural Outreach Coordinator",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Connects small-scale farmers with modern agritech tools, ensuring accessibility and inclusion in rural areas."
    },
    {
      id: 4,
      name: "Arjun Patel",
      position: "Farm Data Specialist",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Converts on-ground sensor data into real-time insights for better farm decision-making and resource planning."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Kulkarni",
      company: "GreenRoots Farms",
      position: "Founder",
      content: "Thanks to this platform, our farm has improved water usage by 40% and yields have never been better.",
      rating: 5
    },
    {
      id: 2,
      name: "Amit Singh",
      company: "HarvestTech India",
      position: "Operations Head",
      content: "The insights we receive help us proactively respond to crop stress and market demand.",
      rating: 5
    },
    {
      id: 3,
      name: "Sneha Reddy",
      company: "AgroNova Cooperative",
      position: "Managing Partner",
      content: "With their data solutions, even our smallest member farmers have seen meaningful growth.",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2012", event: "Founded in AgriTech", description: "Started with a mission to transform agriculture with modern technology." },
    { year: "2015", event: "Pilot Projects Launched", description: "Implemented precision farming techniques across 10+ test farms." },
    { year: "2018", event: "Connected 1000+ Farmers", description: "Scaled rural outreach and introduced mobile-based advisory tools." },
    { year: "2021", event: "AI-Powered Insights", description: "Rolled out AI-driven crop health monitoring and yield prediction systems." },
    { year: "2024", event: "National AgriTech Recognition", description: "Honored for innovation in sustainable and scalable agri solutions." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-lime-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About AgriNova
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We're not just transforming agriculture—we're cultivating the future through innovation, sustainability, and farmer-first solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Roots</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2012, AgriNova began as a research-driven initiative to bridge the gap between traditional farming and modern technology. Our vision: to empower farmers with tools that increase productivity while preserving the environment.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Over the years, we’ve grown into a trusted partner for agribusinesses, cooperatives, and rural innovators looking to thrive in an increasingly climate-aware and tech-forward world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1200+</div>
                  <div className="text-gray-600">Farms Digitized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                  <div className="text-gray-600">Years of Impact</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mission</h4>
                  <p>To revolutionize agriculture by integrating data, science, and sustainability into everyday farming practices.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vision</h4>
                  <p>To be the most trusted agritech partner for farmers globally, driving food security through smart agriculture.</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Growth Story</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our journey in reshaping agriculture with technology.
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
              A multidisciplinary team working at the intersection of agriculture, technology, and impact.
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Farmer & Partner Voices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear how AgriNova has helped transform operations for farms and cooperatives.
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Grow Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to elevate your agricultural practices with smart technology? Let’s make it happen.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;