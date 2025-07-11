import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventList.css';

const EventList = () => {
  const navigate = useNavigate();

  // Dummy array of events with dummy images
  const events = [
    { id: '1', title: 'Music Festival', image: 'https://picsum.photos/id/1015/600/400' },
    { id: '2', title: 'Art Exhibition', image: 'https://picsum.photos/id/1025/600/400' },
    { id: '3', title: 'Tech Conference', image: 'https://picsum.photos/id/1035/600/400' },
    { id: '4', title: 'Food Carnival', image: 'https://picsum.photos/id/1045/600/400' },
    { id: '5', title: 'Sports Meet', image: 'https://picsum.photos/id/1055/600/400' },
    { id: '6', title: 'Cultural Night', image: 'https://picsum.photos/id/1065/600/400' },
  ];

  const handleImageClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="event-grid">
      {events.map((event) => (
        <div
          key={event.id}
          className="event-card"
          onClick={() => handleImageClick(event.id)}
        >
          <div className="event-image-container">
            <img
              src={event.image}
              alt={event.title}
              className="event-image"
            />
          </div>
          <div className="event-content">
            <h2 className="event-title">{event.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;