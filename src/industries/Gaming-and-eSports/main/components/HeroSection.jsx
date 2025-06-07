
import { ArrowRight, Play } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>

    <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-20 w-full">
      <div className="mb-6 inline-block mt-5">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2 rounded-full font-semibold text-sm animate-pulse">
          🏆 #1 eSports Tournament Platform
        </span>
      </div>


      <div className="p-2">

      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          HOST PREMIER eSPORTS
        </span>
        <br />
        
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          TOURNAMENTS
        </span>
      </h1>
      </div>

      <div className="mt-2">
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Level up your brand with the ultimate gaming tournament platform.
        Connect with passionate gamers, drive massive engagement, and
        dominate the eSports arena.
      </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all flex items-center">
          Become a Sponsor
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all flex items-center">
          <Play className="mr-2 h-5 w-5" />
          Watch Highlights
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-4">
        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
          <div className="text-2xl font-bold text-cyan-400">$2M+</div>
          <div className="text-sm text-gray-400">Total Prize Pool</div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
          <div className="text-2xl font-bold text-purple-400">500K+</div>
          <div className="text-sm text-gray-400">Live Viewers</div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
          <div className="text-2xl font-bold text-pink-400">50+</div>
          <div className="text-sm text-gray-400">Major Events</div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
          <div className="text-2xl font-bold text-cyan-400">24/7</div>
          <div className="text-sm text-gray-400">Support</div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default HeroSection