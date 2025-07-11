// src/components/EventCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './EventCarousel.css';

const events = [
  {
    title: "Viksit Bharat Dialogues",
    description: "Roundtable discussions between founders and policymakers shaping India’s tech vision.",
  },
  {
    title: "Awards & Recognition",
    description: "Honoring digital innovators and tech pioneers leading the transformation.",
  },
  {
    title: "Tech Showcase",
    description: "Explore AI, Web3, and emerging tech demos from India’s top startups.",
  },
  {
    title: "Networking Dinner",
    description: "A premium networking opportunity with investors, VCs, and thought leaders.",
  },
];

const EventCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">🌐 Event Highlights</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="carousel"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <h3 className="slide-title">{event.title}</h3>
            <p className="slide-description">{event.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
