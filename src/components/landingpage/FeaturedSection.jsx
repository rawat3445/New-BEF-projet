import { Users, Zap, Trophy, TrendingUp} from 'lucide-react';
const FeaturedSection= ()=>{

    return (
        <>
          <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with BEF?</h2>
            <p className="text-xl text-gray-600">Building India's foundation for sustainable growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Thought Leadership", desc: "Delivering in-depth analysis and strategic insights on economic policies and trends that matter", icon: <Trophy className="w-8 h-8" /> },
              { title: "Policy Advocacy", desc: "Partnering with government bodies to cultivate reforms that mirror the heart and soul of our nation", icon: <TrendingUp className="w-8 h-8" /> },
              { title: "Networking & Mentorship", desc: "Connecting industry leaders, entrepreneurs, and policymakers to forge a robust ecosystem of progress", icon: <Users className="w-8 h-8" /> },
              { title: "Capacity Building", desc: "Hosting seminars, workshops, and training programs that empower citizens with tools for positive change", icon: <Zap className="w-8 h-8" /> }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        </>
    );
}

export default FeaturedSection;