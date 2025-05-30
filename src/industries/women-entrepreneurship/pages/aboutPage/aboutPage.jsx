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
      name: "Anita Sharma",
      position: "Founder & Social Entrepreneur",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated to empowering rural women through financial literacy and access to micro-enterprise opportunities."
    },
    {
      id: 2,
      name: "Rina Desai",
      position: "Innovation Lead",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "Pioneers scalable, tech-driven models to uplift women entrepreneurs in tier-2 and tier-3 cities."
    },
    {
      id: 3,
      name: "Farheen Qureshi",
      position: "Training & Outreach Coordinator",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Conducts nationwide workshops to support skill development, digital onboarding, and mentorship for women-led startups."
    },
    {
      id: 4,
      name: "Neha Varma",
      position: "Policy Advocate",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop&crop=face",
      bio: "Drives policy reforms to create inclusive economic frameworks supporting women entrepreneurs in Bharat."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Meera Joshi",
      company: "Rural Roots Collective",
      position: "Founder",
      content: "The forum helped me scale my small business into a thriving social enterprise by connecting me with mentors and capital.",
      rating: 5
    },
    {
      id: 2,
      name: "Lakshmi Devi",
      company: "Crafted by Her",
      position: "Artisan & Entrepreneur",
      content: "For the first time, I felt truly seen and supported as a woman innovator from a rural village. Life-changing support!",
      rating: 5
    },
    {
      id: 3,
      name: "Nazia Khan",
      company: "Digital Saheli",
      position: "Digital Trainer",
      content: "The forum equipped me with the tools to train 500+ women in my district in e-commerce and digital payments.",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2015", event: "Forum Inception", description: "Launched to create inclusive economic opportunities for women across Bharat." },
    { year: "2017", event: "First 100 Startups Supported", description: "Women-led ventures gained seed funding and mentorship." },
    { year: "2020", event: "Digital Empowerment Program", description: "Rolled out digital tools to 25,000+ women in semi-urban areas." },
    { year: "2022", event: "National Recognition", description: "Awarded for outstanding contribution to rural entrepreneurship." },
    { year: "2024", event: "Impact Beyond Borders", description: "Became a model for women-led microenterprises in South Asia." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Women Entrepreneurship
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Empowering women across Bharat through innovation, access, and community-led economic transformation.
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
                Since 2015, the Bharat Economic Forum has led the charge in nurturing women-led ventures in both rural and urban India. From grassroots artisans to tech-enabled founders, we have enabled thousands of women to become job creators.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our work is rooted in inclusion, sustainability, and economic independence. Every initiative is a step toward equitable opportunity for all women of Bharat.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Women Empowered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
                  <div className="text-gray-600">Enterprises Supported</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mission</h4>
                  <p>To foster inclusive growth by enabling women from every corner of Bharat to lead, innovate, and thrive economically.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vision</h4>
                  <p>To build a self-reliant Bharat where every woman has the tools and confidence to turn ideas into impact.</p>
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
              Key achievements shaping the landscape of women-led innovation in India.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Changemakers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Women leaders driving economic innovation, inclusion, and empowerment across Bharat.
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
                  <div className="text-indigo-600 font-semibold mb-1">{member.position}</div>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from women entrepreneurs transformed by our forum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <Quote className="text-teal-600 w-8 h-8 mb-3" />
                  <p className="text-gray-700 italic">{`"${t.content}"`}</p>
                </div>
                <div>
                  <h3 className="font-bold text-indigo-600">{t.name}</h3>
                  <div className="text-sm text-gray-500">{t.position} @ {t.company}</div>
                  <div className="flex mt-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-indigo-600" />
                    ))}
                  </div>
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
