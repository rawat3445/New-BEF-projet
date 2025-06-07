import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

function UpcomingTournaments() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const tournaments = [
        {
          title: "League of Legends Championship",
          prize: "$50K Prize Pool",
          date: "July 15-20, 2025",
          image: "🎮",
          status: "Registration Open",
        },
        {
          title: "CS:GO Masters Tournament",
          prize: "$75K Prize Pool",
          date: "August 5-12, 2025",
          image: "🔫",
          status: "Coming Soon",
        },
        {
          title: "Valorant Pro Series",
          prize: "$40K Prize Pool",
          date: "June 28-30, 2025",
          image: "⚡",
          status: "Live Now",
        },
      ];

      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % tournaments.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide(
          (prev) => (prev - 1 + tournaments.length) % tournaments.length
        );
      };
  return (
    <div>
            <section
        id="tournaments"
        className="py-20 bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Upcoming Battles
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Don't miss out on the action
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {tournaments.map((tournament, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 mx-2">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-8xl">{tournament.image}</div>
                        <div className="flex-1 text-center md:text-left">
                          <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            {tournament.status}
                          </div>
                          <h3 className="text-3xl font-bold mb-2 text-white">
                            {tournament.title}
                          </h3>
                          <p className="text-xl text-cyan-400 font-semibold mb-2">
                            {tournament.prize}
                          </p>
                          <p className="text-gray-300 mb-6">
                            {tournament.date}
                          </p>
                          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {tournaments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-cyan-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpcomingTournaments
