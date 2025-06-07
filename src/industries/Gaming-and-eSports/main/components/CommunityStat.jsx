
import { Award, Play, Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";

function CommunityStat() {

  const [stats, setStats] = useState({
      players: 0,
      viewers: 0,
      tournaments: 0,
      partners: 0,
    });


      useEffect(() => {
        const animateStats = () => {
          const targets = {
            players: 10000,
            viewers: 50000,
            tournaments: 150,
            partners: 100,
          };
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
    
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            setStats({
              players: Math.floor(targets.players * progress),
              viewers: Math.floor(targets.viewers * progress),
              tournaments: Math.floor(targets.tournaments * progress),
              partners: Math.floor(targets.partners * progress),
            });
    
            if (step >= steps) clearInterval(interval);
          }, stepDuration);
        };
    
        animateStats();
      }, []);

  return (
    <section id="community" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Join the Revolution
          </span>
        </h2>
        <p className="text-xl text-gray-300">
          Our community speaks for itself
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center group">
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-700/30 border border-cyan-600/50 rounded-2xl p-8 group-hover:border-cyan-400 transition-all">
            <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-cyan-400 mb-2">
              {stats.players.toLocaleString()}+
            </div>
            <div className="text-gray-300 font-semibold">
              Players Registered
            </div>
          </div>
        </div>

        <div className="text-center group">
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 border border-purple-600/50 rounded-2xl p-8 group-hover:border-purple-400 transition-all">
            <Play className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {stats.viewers.toLocaleString()}+
            </div>
            <div className="text-gray-300 font-semibold">Live Viewers</div>
          </div>
        </div>

        <div className="text-center group">
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-700/30 border border-pink-600/50 rounded-2xl p-8 group-hover:border-pink-400 transition-all">
            <Trophy className="h-12 w-12 text-pink-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-pink-400 mb-2">
              {stats.tournaments}+
            </div>
            <div className="text-gray-300 font-semibold">
              Tournaments Hosted
            </div>
          </div>
        </div>

        <div className="text-center group">
          <div className="bg-gradient-to-br from-green-900/30 to-green-700/30 border border-green-600/50 rounded-2xl p-8 group-hover:border-green-400 transition-all">
            <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <div className="text-4xl font-bold text-green-400 mb-2">
              {stats.partners}+
            </div>
            <div className="text-gray-300 font-semibold">
              Tournament Partners
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default CommunityStat