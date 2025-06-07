import {ArrowRight } from 'lucide-react';

const Herobanner = ()=>{
    return(
        <>
          <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp">
                      Independent Think Tank for{' '}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Viksit Bharat 2047
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fadeInUp animation-delay-200">
                      Standing as a beacon of innovation and national pride, The Bharat Economic Forum is a movement that embodies the spirit of a resilient and visionary India. We work on a human-centric development model by facilitating funding, collaboration, and innovation for self-economic development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        Join the Movement
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                        Explore Our Initiatives
                      </button>
                    </div>
                  </div>
                </div>
              </section></>
    );
}

export default Herobanner;