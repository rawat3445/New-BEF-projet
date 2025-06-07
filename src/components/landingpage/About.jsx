import {ArrowRight} from 'lucide-react'

const About = ()=>{
    return(
        <>

            <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Think Tank Driving India's Future</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Bharat Economic Forum (BEF) is India's dynamic economic and policy think tank committed to building a sustainable, inclusive, and innovation-led Bharat. We work at the intersection of policy, entrepreneurship, technology, and communication — bringing together minds that matter to co-create India's 2047 vision.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a steadfast commitment to the dream of a developed nation by 2047, BEF instills the belief that every Indian's effort contributes to a bright, united future. Here, tradition meets modern excellence, a call to every citizen to be part of India's historic journey.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Discover the BEF Vision
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="scroll-animate">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                  alt="BEF Vision"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}


export default About;