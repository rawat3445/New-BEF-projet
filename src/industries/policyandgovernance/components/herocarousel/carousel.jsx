import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Pause } from 'lucide-react';
import './carousel.css'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

const slides = [
  {
    id: 1,
    title: "Empower Leadership",
    subtitle: "Strategic Governance Solutions",
    description: "Discover policy frameworks and governance tools crafted to enhance transparency and empower communities.",
    buttonText: "Explore Now",
    background: "from-slate-700 via-slate-800 to-slate-900",
    accent: "from-amber-400 to-amber-600"
  },
  {
    id: 2,
    title: "Inclusive Policy",
    subtitle: "Engage & Collaborate",
    description: "Experience our curated range of governance programs and stakeholder engagement practices that strengthen leadership.",
    buttonText: "Learn More",
    background: "from-slate-900 via-black to-slate-900",
    accent: "from-amber-500 to-amber-700"
  },
  {
    id: 3,
    title: "Trusted Compliance",
    subtitle: "Integrity & Accountability",
    description: "Indulge in comprehensive policy reviews and governance consultations designed to ensure compliance and foster trust.",
    buttonText: "Book Appointment",
    background: "from-slate-600 via-slate-700 to-slate-800",
    accent: "from-amber-300 to-amber-500"
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
  }, [nextSlide, prevSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden ">
      {/* Background with smooth transition */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.background} transition-all duration-1000 ease-in-out`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-amber-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-60 right-32 w-24 h-24 border border-amber-400 rounded-full animate-float delay-200"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-amber-400 rounded-full animate-pulse-slow delay-300"></div>
          <div className="absolute bottom-60 right-1/3 w-20 h-20 border-2 border-amber-400 rounded-full animate-float delay-100"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-amber-400 rounded-full opacity-30 animate-float delay-400"></div>
          <div className="absolute top-1/3 right-20 w-8 h-8 bg-amber-400 rounded-full opacity-40 animate-pulse-slow delay-500"></div>
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
                <button className="group bg-white text-slate-900 hover:bg-slate-100 px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center shadow-2xl border border-amber-600">
                  {currentSlideData.buttonText}
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group glass-effect text-white hover:bg-amber-600 hover:bg-opacity-20 px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center shadow-2xl border border-amber-600">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
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
        className="absolute left-6 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-amber-600 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group border border-amber-600"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 glass-effect hover:bg-amber-600 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group border border-amber-600"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Auto-play control */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-8 right-8 glass-effect hover:bg-amber-600 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20 hover:scale-110 border border-amber-600"
        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </button>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 bg-opacity-30 z-20">
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
            className={`relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125 disabled:cursor-not-allowed border border-amber-600 ${
              index === currentSlide 
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
      <div className="absolute bottom-8 left-8 glass-effect text-white px-4 py-2 rounded-full text-sm font-medium z-20 border border-amber-600">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default HeroCarousel;
