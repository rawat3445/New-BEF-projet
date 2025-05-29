import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Heart,      // replaced Target with Heart for wellness
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Wellness Director",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about holistic beauty and wellness, focusing on mindful self-care and natural therapies."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Spa Manager",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated to creating serene and rejuvenating experiences with expert spa management and guest care."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Beauty Consultant",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Helps clients find their natural glow through personalized beauty regimens and product recommendations."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Holistic Therapist",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop&crop=face",
      bio: "Combines traditional healing practices with modern wellness techniques for mind-body balance."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      company: "Health & Glow Spa",
      position: "CEO",
      content: "Their approach to wellness is transformative — I feel rejuvenated and more balanced after every session.",
      rating: 5
    },
    {
      id: 2,
      name: "Robert Kim",
      company: "Pure Beauty Clinic",
      position: "Marketing Director",
      content: "A truly professional team with a deep understanding of natural beauty and wellness products.",
      rating: 5
    },
    {
      id: 3,
      name: "Amanda Foster",
      company: "Holistic Living",
      position: "Owner",
      content: "Their expert advice and personalized care helped me rediscover my confidence and inner peace.",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2010", event: "Beauty & Wellness Founded", description: "Started with a mission to inspire holistic self-care" },
    { year: "2013", event: "First Wellness Award", description: "Recognized for excellence in spa services and client care" },
    { year: "2017", event: "Expanded Services", description: "Introduced organic skincare and therapeutic massage offerings" },
    { year: "2020", event: "Wellness Retreat Launch", description: "Started hosting immersive wellness retreats and workshops" },
    { year: "2024", event: "Community Leader", description: "Acknowledged as a top wellness center in the region" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Beauty & Wellness
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We nurture your inner glow and outer beauty through holistic wellness practices, 
            expert care, and a serene environment.
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
                Since our founding in 2010, Beauty & Wellness has been dedicated to empowering 
                individuals to look and feel their best naturally. Our approach blends traditional 
                wisdom with modern techniques to foster beauty from within.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that true beauty is a reflection of balance, care, and confidence, 
                which is why we personalize every experience for lasting wellness.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">700+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">14+</div>
                  <div className="text-gray-600">Years of Care</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mission</h4>
                  <p>To promote holistic beauty and wellness by offering personalized treatments that nurture mind, body, and spirit.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vision</h4>
                  <p>To be the most trusted beauty and wellness sanctuary that inspires and transforms lives through natural care.</p>
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
              Highlights of our growth and commitment to beauty and wellness excellence.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-pink-500 mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full">
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
              A team of passionate beauty and wellness professionals dedicated to your care.
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
                  <div className="text-pink-500 font-semibold mb-1">{member.position}</div>
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
              Hear the stories of transformation and renewal from our cherished clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 relative">
                <Quote className="h-8 w-8 text-pink-500 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-pink-500">{testimonial.position} at {testimonial.company}</div>
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
