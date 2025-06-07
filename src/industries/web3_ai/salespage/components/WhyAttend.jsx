import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';
import { FaHandshake, FaAward, FaBroadcastTower, FaUtensils } from 'react-icons/fa';
import 'keen-slider/keen-slider.min.css';

const whyItems = [
  {
    icon: <FaHandshake className="text-4xl text-purple-700" />,
    title: '16 Industry Roundtables',
    description: 'On AI, Web3, FinTech, MedTech, and Energy.',
  },
  {
    icon: <FaAward className="text-4xl text-yellow-600" />,
    title: 'Viksit Bharat Awards',
    description: 'For Innovation, Leadership & Sustainability.',
  },
  {
    icon: <FaBroadcastTower className="text-4xl text-red-600" />,
    title: 'Media Buzz',
    description: 'Appear on national TV, press & social platforms.',
  },
  {
    icon: <FaUtensils className="text-4xl text-green-600" />,
    title: 'Elite Experience',
    description: 'Unlimited gourmet cuisine, cocktails & VIP lounges.',
  },
];

const WhyAttend = () => {
  const sliderRef = useRef(null);
  const timer = useRef();
  const [refCallback, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
    },
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (!slider) return;

    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3000);

    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">🔥 Why You Should Attend</h2>
      </div>
      <div
        ref={(node) => {
          refCallback(node);
          sliderRef.current = node;
        }}
        onMouseEnter={() => clearInterval(timer.current)}
        onMouseLeave={() => {
          timer.current = setInterval(() => {
            slider.current?.next();
          }, 3000);
        }}
        className="keen-slider"
      >
        {whyItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="keen-slider__slide"

          >
            <div className="bg-white rounded-2xl shadow-md p-6 mx-2 h-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105">
              {item.icon}
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;
