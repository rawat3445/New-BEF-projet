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
      name: "Dr. Maya Patel",
      position: "Chief Sustainability Officer",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      bio: "Leading expert in environmental policy and sustainable innovation with a passion for creating lasting impact."
    },
    {
      id: 2,
      name: "Liam Nguyen",
      position: "Renewable Energy Engineer",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&crop=face",
      bio: "Designs and implements cutting-edge solar and wind solutions that help reduce carbon footprints globally."
    },
    {
      id: 3,
      name: "Sara Ahmed",
      position: "Environmental Data Analyst",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
      bio: "Transforms environmental data into actionable insights to guide strategic decisions and policy advocacy."
    },
    {
      id: 4,
      name: "Carlos Mendoza",
      position: "Community Outreach Coordinator",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Bridges the gap between EcoSphere and local communities to promote sustainable living and awareness."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jessica Lee",
      company: "Green Future Initiative",
      position: "Founder",
      content: "EcoSphere’s innovative solutions have empowered our projects to achieve true sustainability with measurable results.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      company: "Clean Energy Corp.",
      position: "CEO",
      content: "Partnering with EcoSphere helped us drastically improve our renewable energy systems and reduce emissions by 40%.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Silva",
      company: "Global Conservation Network",
      position: "Program Director",
      content: "The EcoSphere team’s dedication and expertise made a significant impact on our community conservation efforts.",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2010", event: "EcoSphere Founded", description: "Started with a mission to promote sustainable technology worldwide" },
    { year: "2014", event: "First Renewable Project", description: "Launched first solar microgrid in rural communities" },
    { year: "2017", event: "International Recognition", description: "Awarded 'Green Tech Innovator of the Year'" },
    { year: "2020", event: "Global Expansion", description: "Expanded operations to 15 countries across 3 continents" },
    { year: "2025", event: "Carbon Neutral Goal", description: "Committed to becoming fully carbon neutral by 2030" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-500 via-green-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About EcoSphere
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Driving innovation in environmental sustainability to create a cleaner, greener future for all.
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
                Founded in 2010, EcoSphere started as a grassroots movement to integrate sustainable technologies into everyday life.
                Over time, we grew into a global leader advocating for renewable energy and eco-friendly innovations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our dedicated team works tirelessly to empower communities, corporations, and governments to embrace sustainability and protect our planet for future generations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">300+</div>
                  <div className="text-gray-600">Projects Implemented</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600">Countries Reached</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-lime-500 via-green-500 to-teal-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mission</h4>
                  <p>To innovate and implement sustainable technologies that protect our planet and improve quality of life globally.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vision</h4>
                  <p>To lead the world toward a sustainable future through innovation, education, and community engagement.</p>
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
              Important milestones that have driven our commitment to sustainability.
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working passionately to make the world more sustainable.
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from organizations that have benefited from our sustainable initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 relative">
                <Quote className="h-8 w-8 text-green-500 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-green-600">{testimonial.position}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-500 via-green-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Creating a Sustainable Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with EcoSphere to innovate and implement sustainable solutions for a healthier planet.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
