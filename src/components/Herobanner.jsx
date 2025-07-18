import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, ArrowRightCircle } from "lucide-react";

// Made carousel images responsive
const bgImages = [
  "/bef-web-deploy/hero/hero1.png",
  "/bef-web-deploy/hero/hero2.png",
  "/bef-web-deploy/hero/hero3.png",
  "/bef-web-deploy/hero/hero4.png",
  "/bef-web-deploy/hero/hero5.png",
  "/bef-web-deploy/hero/hero6.png",
];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % bgImages.length);
  };

  const prevSlide = () => {
    setCurrentBg((prev) => (prev === 0 ? bgImages.length - 1 : prev - 1));
  };

  // Scroll to contact section
  const handleJoinMovement = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to initiatives section
  const handleExploreInitiatives = () => {
    const initiativesSection = document.getElementById("industries");
    if (initiativesSection) {
      initiativesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // 10-second delay
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="/home" className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {bgImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-4000 ease-in-out ${
            idx === currentBg ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${idx}`}
            className="w-full h-[80vh] sm:h-screen object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl text-white mb-6 animate-fadeInUp">
          Independent Think Tank for{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            Viksit Bharat 2047
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl">
          Standing as a beacon of innovation and national pride, The Bharat
          Economic Forum is a movement that embodies the spirit of a resilient
          and visionary India. We work on a human-centric development model by
          facilitating funding, collaboration, and innovation for self-economic
          development.
        </p>
        {/* Updated CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 transform transition-all duration-700 ease-out delay-400">
          <button
            onClick={handleJoinMovement}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Join the Movement"
          >
            Join the Movement
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleExploreInitiatives}
            className="border-2 border-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Explore Our Initiatives"
          >
            Explore Our Initiatives
          </button>
        </div>

        {/* Conditional Arrow Buttons */}
        {/* Removed arrows from smaller screens */}
        {!isMobile && (
          <>
            <div className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="p-3 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ArrowLeft className="text-blue-600 w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                className="p-3 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ArrowRight className="text-blue-600 w-6 h-6" />
              </button>
            </div>
          </>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {bgImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBg(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentBg
                  ? "bg-blue-600 scale-125"
                  : "bg-white bg-opacity-60 hover:bg-opacity-80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
