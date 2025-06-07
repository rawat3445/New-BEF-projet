
import { ArrowRight } from "lucide-react";

function CTASection() {
    return (
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Ready to Dominate the Arena?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join the elite circle of brands that are winning in the eSports
          revolution. Your competitive advantage starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all flex items-center justify-center">
            Become a Sponsor Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all">
            Join Our Next Tournament
          </button>
        </div>
      </div>
    </section>

    );
  }

export default CTASection
  