import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Pause } from 'lucide-react';
import './carousel.css'
import { useNavigate } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Revolutionize Retail",
      subtitle: "Seamless omnichannel solutions",
      description: "Empower your brand with unified online and offline experiences that build loyalty, increase engagement, and boost customer satisfaction across every touchpoint.",
      buttonText: "Explore More",
      background: "from-blue-600 via-purple-600 to-indigo-700",
      accent: "from-blue-400 to-purple-400"
    },
    {
      id: 2,
      title: "Bring Local to Global",
      subtitle: "Digital visibility for every store",
      description: "From neighborhood retailers to niche D2C brands, our solutions ensure your business gets discovered, sells smarter, and scales faster in the digital marketplace.",
      buttonText: "Explore More",
      background: "from-purple-600 via-pink-600 to-red-600",
      accent: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      title: "Fulfillment That Delivers",
      subtitle: "Smart logistics for growing demand",
      description: "Cut delays, reduce costs, and delight your customers with real-time inventory sync, fast delivery, and optimized last-mile operations tailored for retail.",
      buttonText: "Explore More",
      background: "from-emerald-600 via-teal-600 to-cyan-600",
      accent: "from-emerald-400 to-teal-400"
    },
    {
      id: 3,
      title: "AI-powered personalization",
      subtitle: "Sell Smarter with Data",
      description: "Turn every customer interaction into insight. Use real-time analytics and behavior-driven targeting to increase conversions, boost AOV, and win loyal buyers.",
      buttonText: "Explore More",
      background: "from-yellow-600 via-orange-600 to-red-600",
      accent: "from-emerald-400 to-teal-400"
    }
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextSlide, prevSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">


      {/* Background with smooth transition */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.background} transition-all duration-1000 ease-in-out`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse-slow"></div>
          <div className="absolute top-60 right-32 w-24 h-24 border border-white rounded-full animate-float delay-200"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse-slow delay-300"></div>
          <div className="absolute bottom-60 right-1/3 w-20 h-20 border-2 border-white rounded-full animate-float delay-100"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-white rounded-full opacity-30 animate-float delay-400"></div>
          <div className="absolute top-1/3 right-20 w-8 h-8 bg-white rounded-full opacity-40 animate-pulse-slow delay-500"></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0  bg-opacity-20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <div key={currentSlide} className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-shadow animate-slide-up opacity-0">
                {currentSlideData.title}
              </h1>
              <div className={`w-24 h-1 bg-gradient-to-r ${currentSlideData.accent} mx-auto animate-fade-in opacity-0 delay-200`}></div>
              <h2 className="text-2xl md:text-4xl font-light mb-8 text-shadow animate-slide-up opacity-0 delay-100">
                {currentSlideData.subtitle}
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-shadow animate-slide-up opacity-0 delay-200">
                {currentSlideData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-right opacity-0 delay-300">
                <button
                  onClick={() => navigate('/about')}
                  className="group bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center shadow-2xl"
                >
                  {currentSlideData.buttonText}
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-white hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-white hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Auto-play control */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-8 right-8 glass-effect hover:bg-white hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20 hover:scale-110"
        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </button>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black bg-opacity-30 z-20">
        <div
          className={`h-full bg-gradient-to-r ${currentSlideData.accent} transition-all duration-1000 ease-linear`}
          style={{
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'progress 6s linear infinite' : 'none'
          }}
        ></div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125 disabled:cursor-not-allowed ${index === currentSlide
                ? 'w-12 h-4 bg-white'
                : 'w-4 h-4 bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.accent} animate-pulse-slow`}></div>
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-8 glass-effect text-white px-4 py-2 rounded-full text-sm font-medium z-20">
        {currentSlide + 1} / {slides.length}
      </div>


    </section>
  );
};

export default HeroCarousel;