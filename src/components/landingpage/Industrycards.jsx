import {ArrowRight } from 'lucide-react';

const Industrycards = ({industryCards,handleCardClick})=>{
    return (
        <>
         <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Initiatives</h2>
            <p className="text-xl text-gray-600">Empowering change through strategic programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCards.map((card) => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                onClick={() => handleCardClick(card)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(card);
                  }
                }}
                aria-label={`Navigate to ${card.title} page`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${card.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{card.description}</p>
                  <div className="flex items-center justify-between">
                    <button
                      className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center gap-2 group-hover:gap-3"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent double firing
                        handleCardClick(card);
                      }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-all duration-200" />
                    </button>
                  </div>
                </div>

                {/* Subtle click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
        </>
    );
}

export default Industrycards;