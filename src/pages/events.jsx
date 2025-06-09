import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Search, Award, Utensils } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // const industries = [
  //   'Food & Foodtech', 'Agriculture & AgriTech', 'Education & EdTech', 'Advertisement & Adtech',
  //   'Health & MedTech', 'Environment & Climate Tech', 'Finance & FinTech', 'Manufacturing & MSMEs',
  //   'Tourism & Hospitality', 'Energy & CleanTech', 'Women Entrepreneurship', 'Web3, AI & Emerging Tech',
  //   'Disability & Inclusion', 'Rural Development', 'Policy & Governance', 'Real Estate & Urban Planning'
  // ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Bharat Economic Forum Industry Conclave 2025",
      subtitle: "A Grand Celebration of India's Future",
      date: "25th July 2025",
      time: "10:00 AM - 9:00 PM IST",
      venue: "Bharat Mandapam, New Delhi",
      theme: "Viksit Bharat by 2047: Innovate, Collaborate, Celebrate",
      type: "upcoming",
      industry: "Multi-Industry",
      description: "A spectacular, high-profile event bringing together India's brightest minds to pave the way for a Viksit Bharat by 2047.",
      schedule: [
        { time: "10:00 AM - 10:30 AM", event: "Opening Ceremony", description: "Keynote Speech, Welcome Address & Cultural Performance" },
        { time: "10:30 AM - 2:00 PM", event: "Viksit Bharat Dialogues", description: "16 parallel roundtable sessions across industries" },
        { time: "3:00 PM - 4:30 PM", event: "Viksit Bharat Awards Ceremony", description: "Honoring outstanding contributions across 16 industries" },
        { time: "4:30 PM - 9:00 PM", event: "Evening Dinner & Networking", description: "Gourmet dinner with unlimited cocktails & private networking" }
      ],
      highlights: [
        "16 Industry Roundtables",
        "Viksit Bharat Awards",
        "Gourmet Dining Experience",
        "Exclusive Networking",
        "Media Coverage"
      ],
      pricing: {
        standard: "₹35,000",
        vip: "₹55,000"
      },
      featured: true
    }
  ];

  const pastEvents = [
    {
      id: 2,
      title: "Digital India Summit 2024",
      date: "15th March 2024",
      venue: "India Expo Mart, Greater Noida",
      type: "past",
      industry: "Technology",
      description: "Exploring digital transformation across Indian industries.",
      attendees: "500+"
    },
    {
      id: 3,
      title: "Sustainable Finance Forum 2023",
      date: "22nd November 2023",
      venue: "Hotel Taj Palace, New Delhi",
      type: "past",
      industry: "Finance",
      description: "Focus on ESG investments and sustainable banking practices.",
      attendees: "300+"
    }
  ];

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    const matchesFilter = selectedFilter === 'all' || event.industry.toLowerCase().includes(selectedFilter.toLowerCase());
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <Header/>
      <div className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Bharat Economic Forum Events
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join India's most influential economic discussions and shape the future of Viksit Bharat by 2047
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select 
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Industries</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="multi-industry">Multi-Industry</option>
            </select>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-blue-800" />
            <h2 className="text-3xl font-bold text-gray-900 font-poppins">Upcoming Events</h2>
          </div>

          <div className="grid gap-8">
            {filteredUpcomingEvents.map((event) => (
              <div key={event.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${event.featured ? 'ring-2 ring-blue-500' : ''}`}>
                {event.featured && (
                  <div className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white px-6 py-2">
                    <span className="font-medium">Featured Event</span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Event Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {event.industry}
                        </span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Upcoming
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-poppins">
                        {event.title}
                      </h3>
                      
                      <p className="text-lg text-blue-600 font-medium mb-4">
                        {event.subtitle}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-blue-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-blue-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-500" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Theme</h4>
                        <p className="text-blue-800">{event.theme}</p>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{event.description}</p>
                      
                      {/* Event Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Event Highlights</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Pricing */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex-1 min-w-40">
                          <h5 className="font-medium text-gray-900 mb-1">Standard Delegate</h5>
                          <p className="text-2xl font-bold text-blue-600">{event.pricing.standard}</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4 flex-1 min-w-40">
                          <h5 className="font-medium text-gray-900 mb-1">VIP Delegate</h5>
                          <p className="text-2xl font-bold text-blue-600">{event.pricing.vip}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Schedule */}
                    <div className="lg:col-span-1">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-blue-500" />
                          Event Schedule
                        </h4>
                        <div className="space-y-4">
                          {event.schedule.map((item, index) => (
                            <div key={index} className="border-l-2 border-blue-200 pl-4 pb-4">
                              <div className="flex items-start gap-3">
                                <div className="bg-blue-500 w-3 h-3 rounded-full -ml-6 mt-1"></div>
                                <div>
                                  <p className="font-medium text-blue-600 text-sm">{item.time}</p>
                                  <p className="font-semibold text-gray-900 text-sm">{item.event}</p>
                                  <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200">
                    <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      Register Now
                    </button>
                    <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                      Download Brochure
                    </button>
                    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-gray-600" />
            <h2 className="text-3xl font-bold text-gray-900 font-poppins">Past Events</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      {event.industry}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      Past Event
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{event.attendees} Attendees</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    View Event Summary →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer/>
     
    </div>
  );
};

export default EventsPage;