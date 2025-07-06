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

  const EventTemplate = ({ title, date, location, description, agenda, speakers, link }) => (
    <div className="event-card expanded">
      <img src={link.image} alt={title} className="event-banner" />
      <h2 className="section-title">{title}</h2>
      <p className="event-meta">{date} | {location}</p>
      <p className="event-description detailed">{description}</p>
      <h3 className="featured-title">Agenda</h3>
      <ul className="agenda-list">
        {agenda.map((item, idx) => (
          <li key={idx}><strong>{item.time}:</strong> {item.topic}</li>
        ))}
      </ul>
      <h3 className="featured-title">Key Speakers</h3>
      <div className="speakers-grid">
        {speakers.map((spk, idx) => (
          <div key={idx} className="speaker-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={spk.img} alt={spk.name} className="speaker-img" />
            <p className="speaker-name" style={{ fontSize: '1.2rem', fontWeight: '700', marginTop: '0.5rem' }}>{spk.name}</p>
            <p className="speaker-title">{spk.title}</p>
            <p className="speaker-detail">{spk.detail}</p>
          </div>
        ))}
      </div>
      <div className="register-btn-container">
        <a href={link.url} className="register-btn">Register Now</a>
      </div>
      <button onClick={handleBack} className="back-btn">← Back to Events</button>
    </div>
  );


  const contentMap = {
    'innovation-summit': <EventTemplate
      title="Industry Innovation Summit"
      date="🗓 October 15-17, 2023"
      location="📍 Bangalore International Convention Center"
      description="The Industry Innovation Summit brings together thought leaders, entrepreneurs, and policymakers to explore cutting-edge technologies and disruptive business models shaping India's economic future."
      agenda={[
        { time: "09:00 - 10:30", topic: "Opening Keynote – The Future of Indian Innovation" },
        { time: "11:00 - 12:30", topic: "Panel Discussion – Bridging the Gap Between Startups and Corporates" }
      ]}
      speakers={[
        { name: "Dr. Aisha Gupta", img: "https://randomuser.me/api/portraits/women/44.jpg", title: "CTO, TechNova Solutions", detail: "Expert in AI-driven business transformation" },
        { name: "Rahul Mehta", img: "https://randomuser.me/api/portraits/men/32.jpg", title: "Founder, GreenTech Innovations", detail: "Pioneer in sustainable technology solutions" }
      ]}
      link={{ url: "/register/innovation-summit", image: "https://giid.org/app/uploads/2025/05/18-1.png" }}
    />,
    'policy-dialogue': <EventTemplate
      title="Policy Makers Dialogue"
      date="🗓 November 5, 2023"
      location="📍 India Habitat Centre, New Delhi"
      description="The Policy Makers Dialogue brings together government officials, economists, and stakeholders for a series of strategic discussions on policy reforms and economic frameworks aligned with India's Vision 2047."
      agenda={[
        { time: "10:00 - 11:30", topic: "Inaugural Address by Chief Economic Advisor" },
        { time: "12:00 - 13:30", topic: "Panel: Fiscal Policy Trends in a Changing World" }
      ]}
      speakers={[
        { name: "Dr. Ramesh Varma", img: "https://randomuser.me/api/portraits/men/45.jpg", title: "Economic Advisor, NITI Aayog", detail: "Expert in macroeconomic policy formulation" },
        { name: "Meera Iyer", img: "https://randomuser.me/api/portraits/women/29.jpg", title: "Senior Policy Analyst, IMF", detail: "Focus on fiscal innovation and reforms" }
      ]}
      link={{ url: "/register/policy-dialogue", image: "https://www.detroitchamber.com/wp-content/uploads/2025/01/DPC25-Sound-Board-Stage-Feature.jpg" }}
    />,
    'tech-forum': <EventTemplate
      title="Technology Integration Forum"
      date="🗓 December 2, 2023"
      location="📍 T-Hub, Hyderabad"
      description="Focused on exploring the practical integration of emerging technologies in legacy industries."
      agenda={[
        { time: "10:00 - 11:15", topic: "AI + Industry 4.0 Use Cases" },
        { time: "11:30 - 13:00", topic: "IoT + Cloud: Implementation Lab" }
      ]}
      speakers={[
        { name: "Neeraj Pandey", img: "https://randomuser.me/api/portraits/men/85.jpg", title: "CTO, SmartEdge Labs", detail: "IoT for smart infrastructure" },
        { name: "Sonal Verma", img: "https://randomuser.me/api/portraits/women/12.jpg", title: "AI Researcher, Microsoft India", detail: "AI model deployment" }
      ]}
      link={{ url: "/register/tech-forum", image: "https://images.unsplash.com/photo-1581091870622-2d5f87a3f34b" }}
    />,
    'leadership': <EventTemplate
      title="Leadership Excellence"
      date="🗓 January 20, 2024"
      location="📍 ISB Hyderabad"
      description="Hands-on leadership workshops with India's top business mentors."
      agenda={[
        { time: "09:30 - 11:00", topic: "Masterclass: Leading with Empathy" },
        { time: "11:30 - 13:00", topic: "Fireside Chat with Unicorn Founders" }
      ]}
      speakers={[
        { name: "Karan Malhotra", img: "https://randomuser.me/api/portraits/men/77.jpg", title: "CEO, NextGen Ltd.", detail: "Leadership coach & entrepreneur" },
        { name: "Riya Sharma", img: "https://randomuser.me/api/portraits/women/62.jpg", title: "COO, BharatX", detail: "Team-building strategist" }
      ]}
      link={{ url: "/register/leadership", image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg" }}
    />,
    'startup-pitch': <EventTemplate
      title="Startup Pitch Competition"
      date="🗓 February 10, 2024"
      location="📍 IIM Bangalore"
      description="Watch India's top 20 startups pitch to investors live."
      agenda={[
        { time: "10:00 - 11:30", topic: "Seed Stage Round" },
        { time: "11:45 - 13:15", topic: "Series A Round & Award Ceremony" }
      ]}
      speakers={[
        { name: "Ankit Rao", img: "https://randomuser.me/api/portraits/men/27.jpg", title: "VC, Elevate Partners", detail: "Startup investments in South Asia" },
        { name: "Sneha Das", img: "https://randomuser.me/api/portraits/women/39.jpg", title: "Founder, DwellSpace", detail: "Award-winning startup founder" }
      ]}
      link={{ url: "/register/startup-pitch", image: "https://static.mobileye.com/website/us/corporate/images/1fbc54899406499ef56105747d30bfbf_1734381310020.jpg" }}
    />,
    'women-business': <EventTemplate
      title="Women in Business Conference"
      date="🗓 March 8, 2024"
      location="📍 FICCI Auditorium, Delhi"
      description="Empowering women in business and tech to lead the next wave of change."
      agenda={[
        { time: "09:00 - 10:30", topic: "Keynote: Resilience in Leadership" },
        { time: "11:00 - 12:30", topic: "Panel: Funding Women-led Startups" }
      ]}
      speakers={[
        { name: "Nandita Rao", img: "https://randomuser.me/api/portraits/women/50.jpg", title: "CEO, FemTech India", detail: "Entrepreneurship advocate" },
        { name: "Asmita Paul", img: "https://randomuser.me/api/portraits/women/73.jpg", title: "Angel Investor", detail: "Gender lens investing" }
      ]}
      link={{ url: "/register/women-business", image: "https://images.pexels.com/photos/8344905/pexels-photo-8344905.jpeg" }}
    />
  };

  return (
    <div className="events-page">
      <div className="events-hero">
        <h1 className="events-title">Bharat Economic</h1>
        <p className="events-subtitle">Join India's most influential economic discussions by 2047</p>
      </div>
      <div className="events-container">
        {!selectedEvent ? (
          <>
            <h2 className="section-title">UPCOMING EVENTS</h2>
            <div className="events-search">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="events-grid">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="event-card preview"
                  onClick={() => handleEventClick(event.path)}
                >
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          contentMap[selectedEvent] || <div className="event-card">Event Not Found</div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;

