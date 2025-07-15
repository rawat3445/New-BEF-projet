import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import "./Herobanner.css"; // optional custom CSS

const slides = [
  "/bef-web-deploy/hero/hero1.png",
  "/bef-web-deploy/hero/hero2.png",
  "/bef-web-deploy/hero/hero3.png",
  "/bef-web-deploy/hero/hero4.png",
  "/bef-web-deploy/hero/hero5.png",
  "/bef-web-deploy/hero/hero6.png",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInitiatives = () => {
    const section = document.getElementById("industries");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="w-full min-h-screen bg-black flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 py-20">
      {/* TEXT CONTENT */}
      <div className="sm:w-1/2 text-white space-y-6 max-w-xl z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Think Tank for{" "}
          <span className="gradient-text">Viksit Bharat 2047</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200">
          We are building a visionary and resilient India through innovation,
          collaboration, and a human-centric development model.
        </p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all flex items-center gap-2"
          >
            Join the Movement <ArrowRight size={20} />
          </button>

          <button
            onClick={scrollToInitiatives}
            className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all"
          >
            Explore Initiatives
          </button>
        </div>
      </div>

      {/* IMAGE SLIDER */}
      <div className="sm:w-1/2 w-full mt-10 sm:mt-0 relative">
        <img
          src={slides[currentSlide]}
          alt="hero-slide"
          className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[450px] object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
