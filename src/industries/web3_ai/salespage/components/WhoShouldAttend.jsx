// components/WhoShouldAttend.jsx
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { FaUserTie, FaUniversity, FaRocket, FaBalanceScale } from 'react-icons/fa';


const cards = [
  { icon: <FaUserTie size={32} />, title: 'For Founders', desc: 'Build strategic partnerships' },
  { icon: <FaRocket size={32} />, title: 'For Investors', desc: 'Spot future unicorns' },
  { icon: <FaUniversity size={32} />, title: 'For Students & Innovators', desc: 'Learn, pitch & grow' },
  { icon: <FaBalanceScale size={32} />, title: 'For Policymakers', desc: 'Shape national digital priorities' },
];

// Auto-slide plugin (no manual interaction)
function AutoSlidePlugin(slider) {
  let timeout;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  }

  slider.on('created', () => {
    nextTimeout();
  });

  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

const WhoShouldAttend = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      drag: false, // ❌ disables manual sliding
      breakpoints: {
        '(min-width: 768px)': { slides: { perView: 2, spacing: 16 } },
        '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
      },
      slides: { perView: 1, spacing: 12 },
    },
    [AutoSlidePlugin] // ✅ plugin for automatic sliding
  );

  return (
    <div className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6"> Who Should Attend</h2>
      <div ref={sliderRef} className="keen-slider">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide"
          
    
          >
            <div className="bg-white hover:bg-gray-200 transition-all rounded-xl shadow-lg p-6 text-center h-full">
              <div className="mb-4 text-indigo-800">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhoShouldAttend;
