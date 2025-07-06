import { useState } from 'react';
import './Eventspage.css';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Industry Innovation Summit",
      path: "innovation-summit",
      description: "Annual technology and innovation conference"
    },
    {
      title: "Policy Makers Dialogue",
      path: "policy-dialogue",
      description: "Strategic policy discussions"
    },
    {
      title: "Technology Integration Forum",
      path: "tech-forum",
      description: "Tech integration workshops"
    },
    {
      title: "Leadership Excellence",
      path: "leadership",
      description: "Leadership development programs"
    },
    {
      title: "Startup Pitch Competition",
      path: "startup-pitch",
      description: "Showcase innovative startups"
    },
    {
      title: "Women in Business Conference",
      path: "women-business",
      description: "Empowering women entrepreneurs"
    }
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEventClick = (path) => {
    setSelectedEvent(path);
  };

  const handleBack = () => {
    setSelectedEvent(null);
  };

  // Content for Industry Innovation Summit
  const InnovationSummitContent = () => (
    <div className="event-card">
        {/* Banner Image */}
        <img 
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
        alt="Industry Innovation Summit" 
        style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '1.5rem' }}
        />

        {/* Title and Info */}
        <h2 className="section-title">Industry Innovation Summit</h2>
        <p className="event-description" style={{ fontWeight: 'bold' }}>
        📅 October 15-17, 2023 | 📍 Bangalore International Convention Center
        </p>
        
        {/* About */}
        <p className="event-description" style={{ marginTop: '1rem' }}>
        The Industry Innovation Summit brings together thought leaders, entrepreneurs, and policymakers to explore cutting-edge technologies and disruptive business models shaping India's economic future.
        </p>

        {/* Agenda */}
        <h3 className="featured-title" style={{ marginTop: '2rem' }}>Agenda</h3>
        <ul className="event-description" style={{ paddingLeft: '1.5rem' }}>
        <li><strong>09:00 - 10:30:</strong> Opening Keynote – The Future of Indian Innovation</li>
        <li><strong>11:00 - 12:30:</strong> Panel Discussion – Bridging the Gap Between Startups and Corporates</li>
        </ul>

        {/* Speakers */}
        <h3 className="featured-title" style={{ marginTop: '2rem' }}>Key Speakers</h3>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center', maxWidth: '150px' }}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Aisha Gupta" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <p className="event-title" style={{ margin: '0.5rem 0 0 0' }}>Dr. Aisha Gupta</p>
            <p className="event-description">CTO, TechNova Solutions</p>
            <p className="event-description" style={{ fontSize: '0.85rem' }}>Expert in AI-driven business transformation</p>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '150px' }}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahul Mehta" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <p className="event-title" style={{ margin: '0.5rem 0 0 0' }}>Rahul Mehta</p>
            <p className="event-description">Founder, GreenTech Innovations</p>
            <p className="event-description" style={{ fontSize: '0.85rem' }}>Pioneer in sustainable technology solutions</p>
        </div>
    </div>

    {/* Registration Link */}
    <div style={{ marginTop: '2rem' }}>
      <a href="/register/innovation-summit" className="featured-link">
        👉 Register Now
      </a>
    </div>

    {/* Back Button */}
    <button onClick={handleBack} className="search-input" style={{ marginTop: '2rem', cursor: 'pointer' }}>
      ← Back to Events
    </button>
  </div>
);



  return (
    <div className="events-page">
      {/* Hero Section */}
      <div className="events-hero">
        <h1 className="events-title">Bharat Economic</h1>
        <p className="events-subtitle">Join India's most influential economic discussions by 2047</p>
      </div>

      <div className="events-container">
        {!selectedEvent ? (
          <>
            <h2 className="section-title">UPCOMING EVENTS</h2>

            {/* Search Bar */}
            <div className="events-search">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Events Grid */}
            <div className="events-grid">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="event-card"
                  onClick={() => handleEventClick(event.path)}
                >
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>

            {/* Featured Event */}
            <div className="featured-event">
              <h3 className="featured-title">Featured Event</h3>
              <p className="featured-description">Multi industry Upcoming</p>
              <a
                href="https://hasanhashemi.github.io/net-wab-deploy/eventEvents"
                className="featured-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </>
        ) : selectedEvent === 'innovation-summit' ? (
          <InnovationSummitContent />
        ) : (
          <div className="event-card">
            <h2 className="section-title">Coming Soon</h2>
            <p className="event-description">Details for this event will be available shortly.</p>
            <button onClick={handleBack} className="search-input" style={{ marginTop: '1.5rem', cursor: 'pointer' }}>
              ← Back to Events
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
