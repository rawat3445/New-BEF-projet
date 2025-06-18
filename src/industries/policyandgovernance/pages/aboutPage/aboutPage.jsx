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
    name: "Sarah Johnson",
    position: "Governance Director",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
    bio: "Committed to promoting transparent governance and ethical leadership through innovative policy frameworks."
  },
  {
    id: 2,
    name: "Penelope Adams",
    position: "Policy Manager",
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
    bio: "Focuses on developing inclusive policies that foster civic participation and enhance public accountability."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Community Engagement Consultant",
    experience: "7+ years",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    bio: "Works to empower communities through strategic outreach and tailored governance education programs."
  },
  {
    id: 4,
    name: "Sasha Thompson",
    position: "Governance Analyst",
    experience: "5+ years",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop&crop=face",
    bio: "Analyzes policy effectiveness and advocates for data-driven reforms to improve government transparency."
  }
];

  const testimonials = [
    {
      id: 1,
      name: "Jessica Martinez",
      company: "Civic Action Network",
      position: "Executive Director",
      content: "Their approach to governance reform is transformative — our community is more engaged and empowered after collaborating with them.",
      rating: 5
    },
    {
      id: 2,
      name: "Robert Kim",
      company: "Transparency Initiative",
      position: "Policy Analyst",
      content: "A truly professional team with a deep understanding of effective policy development and stakeholder engagement.",
      rating: 5
    },
    {
      id: 3,
      name: "Amanda Foster",
      company: "Good Governance Alliance",
      position: "Program Manager",
      content: "Their expert guidance and tailored strategies helped us enhance accountability and build public trust.",
      rating: 5
    }
    
  ];

  const milestones = [
  { year: "2010", event: "Policy & Governance Founded", description: "Started with a mission to promote transparent and accountable governance" },
  { year: "2013", event: "First Governance Award", description: "Recognized for excellence in community engagement and policy innovation" },
  { year: "2017", event: "Expanded Programs", description: "Introduced civic education and leadership development initiatives" },
  { year: "2020", event: "Policy Impact Summit", description: "Hosted the inaugural summit to foster cross-sector collaboration" },
  { year: "2024", event: "Regional Leader", description: "Acknowledged as a leading organization in governance reform and public trust" }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Policy & Governance
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We foster civic empowerment and community resilience through inclusive policies, informed leadership, and a transparent, supportive environment.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Journey</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
  Since our founding in 2010, Policy & Governance has been dedicated to advancing transparent leadership, civic engagement, and inclusive policymaking. Our approach combines time-tested principles with innovative strategies to strengthen democratic institutions and public trust.
</p>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
  We believe that effective governance is built on accountability, equity, and collaboration, which is why we tailor our initiatives to meet the unique needs of every community we serve.
</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">700+</div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">14+</div>
                  <div className="text-slate-600">Years of Care</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
             <div className="space-y-6">
  <div>
    <h4 className="text-xl font-semibold mb-2 text-amber-300">Mission</h4>
    <p>To uphold transparent, ethical, and accountable governance practices that ensure sustainable development, inclusive decision-making, and public trust.</p>
  </div>
  <div>
    <h4 className="text-xl font-semibold mb-2 text-amber-300">Vision</h4>
    <p>To be a leading model of effective policy implementation and good governance that empowers communities and fosters equitable growth.</p>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Milestones</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Highlights of our dedication to strong governance and responsible policies that uphold integrity, transparency, and long-term trust.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-600">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-slate-800 mb-2">{milestone.event}</div>
                      <div className="text-slate-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full">
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Experts</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A team of committed leaders and professionals dedicated to upholding the highest standards of governance, ethics, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-amber-600">
                <div className="aspect-square bg-slate-200 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <div className="text-amber-600 font-semibold mb-1">{member.position}</div>
                  <div className="text-sm text-slate-500 mb-4">{member.experience}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear the stories of transformation and renewal from our cherished clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 relative border-l-4 border-slate-700">
                <Quote className="h-8 w-8 text-amber-600 mb-4" />
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="font-bold text-slate-900">{testimonial.name}</div>
                <div className="text-amber-600 font-medium">{testimonial.position} at {testimonial.company}</div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
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