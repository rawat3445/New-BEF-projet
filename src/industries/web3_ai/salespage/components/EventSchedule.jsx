
import React, { useEffect, useState } from 'react';
import { Clock, Award, Users, Calendar, Coffee, Mic, Star, Sparkles } from 'lucide-react';

const EventSchedule = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scheduleItems = [
    {
      icon: Mic,
      time: '10:00 AM – 10:30 AM',
      title: 'Morning Kickoff',
      description: 'Inaugural address by national leaders + Cultural performances',
      emoji: '☀️',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50/80 via-orange-50/60 to-yellow-50/80',
      glowColor: 'amber-500/20',
      accent: 'amber'
    },
    {
      icon: Users,
      time: '10:30 AM – 2:00 PM',
      title: 'Industry Roundtables',
      description: 'AI, FinTech, Energy, MSME, HealthTech + Networking breaks',
      emoji: '🔍',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50/80 via-indigo-50/60 to-slate-50/80',
      glowColor: 'blue-500/20',
      accent: 'blue'
    },
    {
      icon: Award,
      time: '3:00 PM – 4:30 PM',
      title: 'Viksit Bharat Awards',
      description: 'Honors for leaders + Press coverage',
      emoji: '🏆',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50/80 via-pink-50/60 to-rose-50/80',
      glowColor: 'purple-500/20',
      accent: 'purple'
    },
    {
      icon: Coffee,
      time: '4:30 PM – 9:00 PM',
      title: 'Gala Dinner',
      description: "Networking with India's elite",
      emoji: '🥂',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50/80 via-teal-50/60 to-cyan-50/80',
      glowColor: 'emerald-500/20',
      accent: 'emerald'
    }
  ];

  const FloatingElement = ({ delay, size, position, color, blur = false }) => (
    <div 
      className={`absolute ${position} ${size} ${blur ? 'blur-sm' : ''}`}
      style={{
        background: `linear-gradient(135deg, ${color})`,
        borderRadius: '50%',
        opacity: 0.1,
        animation: `float 15s ease-in-out infinite ${delay}s, pulse 5s ease-in-out infinite ${delay * 0.5}s`
      }}
    />
  );

  const TimelineConnector = ({ index, total, isHovered }) => (
    index < total - 1 && (
      <div className="absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-slate-300 via-purple-300 to-blue-300 opacity-40">
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-purple-500 to-blue-500 transition-all duration-700 ${
            isHovered ? 'opacity-80 scale-x-[2]' : 'opacity-0'
          }`}
          style={{ transformOrigin: 'center' }}
        />
      </div>
    )
  );

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(3deg); }
            50% { transform: translateY(-8px) rotate(-2deg); }
            75% { transform: translateY(-12px) rotate(1deg); }
          }
          
          @keyframes meshMove {
            0%, 100% { transform: rotate(0deg) scale(1) translate(0, 0); }
            25% { transform: rotate(0.5deg) scale(1.01) translate(10px, -5px); }
            50% { transform: rotate(-0.3deg) scale(0.99) translate(-5px, 10px); }
            75% { transform: rotate(0.8deg) scale(1.02) translate(8px, -8px); }
          }
          
          @keyframes shimmerLine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.2; }
          }
          
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
      
      <section className="relative py-16 px-4 overflow-hidden" id="schedule">
       
        <div className="absolute inset-0">
         
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-indigo-50"></div>
          
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 60%),
                radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.10) 0%, transparent 60%),
                radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.11) 0%, transparent 60%)
              `,
              animation: 'meshMove 25s ease-in-out infinite'
            }}
          />

          <div 
            className="absolute inset-0 opacity-15"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(147, 51, 234, 0.08) 60deg, transparent 120deg, rgba(59, 130, 246, 0.06) 180deg, transparent 240deg, rgba(236, 72, 153, 0.07) 300deg, transparent 360deg)',
              animation: 'spin 40s linear infinite'
            }}
          />

          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <FloatingElement delay={0} size="w-16 h-16" position="top-12 left-[10%]" color="rgba(99, 102, 241, 0.08), rgba(147, 197, 253, 0.04)" />
        <FloatingElement delay={2} size="w-12 h-12" position="top-32 right-[15%]" color="rgba(168, 85, 247, 0.06), rgba(196, 181, 253, 0.03)" blur />
        <FloatingElement delay={1} size="w-14 h-14" position="bottom-24 left-[65%]" color="rgba(236, 72, 153, 0.07), rgba(251, 207, 232, 0.04)" />
        <FloatingElement delay={3} size="w-10 h-10" position="top-48 right-[70%]" color="rgba(59, 130, 246, 0.09), rgba(165, 180, 252, 0.05)" blur />

        <div className="relative max-w-4xl mx-auto">
        
          <div className={`text-center mb-12 transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-blue-600/10 blur-xl rounded-full"></div>
                <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg">
                  <Calendar className="w-8 h-8 text-slate-700" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight relative">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Event
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 bg-clip-text text-transparent">
                  Schedule
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                A meticulously crafted agenda designed to inspire, connect, and drive India's future forward
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="relative">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div 
                  className="absolute inset-0 w-32 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60"
                  style={{ 
                    animation: 'shimmerLine 3s ease-in-out infinite',
                    background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8), transparent)',
                    backgroundSize: '200% 100%'
                  }}
                />
              </div>
            </div>
          </div>

          <div className="relative">
            {scheduleItems.map((item, index) => (
              <div 
                key={item.title}
                className={`relative mb-10 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                style={{ 
                  transitionDelay: `${600 + index * 300}ms`,
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
               
                <TimelineConnector index={index} total={scheduleItems.length} isHovered={hoveredItem === index} />
                
                <div 
                  className={`relative backdrop-blur-xl bg-gradient-to-r ${item.bgGradient} rounded-2xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${
                    hoveredItem === index ? 'shadow-2xl scale-[1.02] -translate-y-1' : ''
                  }`}
                >
                 
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} opacity-0 transition-all duration-700 blur-lg rounded-2xl ${
                    hoveredItem === index ? 'opacity-20' : ''
                  }`}></div>
                  
                 
                  <div className="relative z-10 p-6">
                    <div className="flex items-start gap-6">
                     
                      <div className="flex flex-col items-center">
                        <div 
                          className={`relative p-3 bg-gradient-to-br ${item.gradient} rounded-xl text-white shadow-lg transition-all duration-700 ${
                            hoveredItem === index ? 'shadow-xl scale-110 -rotate-3' : ''
                          }`}
                        >
                          <div className={`absolute inset-0 bg-white/20 rounded-xl opacity-0 transition-opacity duration-500 ${
                            hoveredItem === index ? 'opacity-100' : ''
                          }`}></div>
                          <item.icon size={24} strokeWidth={1.5} className="relative z-10" />
                          
                          <div 
                            className={`absolute -top-2 -right-2 text-xl transition-all duration-500 ${
                              hoveredItem === index ? 'scale-125 rotate-12' : ''
                            }`}
                          >
                            {item.emoji}
                          </div>
                        </div>
                        
                        <div className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full mt-4 shadow-md transition-all duration-500 ${
                          hoveredItem === index ? 'animate-pulse scale-150' : 'animate-pulse'
                        }`}>
                          <div className="absolute inset-0.5 bg-white rounded-full opacity-60"></div>
                        </div>
                      </div>

                      <div className="flex-1">
                       
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-1.5 bg-${item.accent}-50 rounded-lg`}>
                            <Clock className={`w-4 h-4 text-${item.accent}-600`} strokeWidth={2} />
                          </div>
                          <span className={`text-${item.accent}-700 font-bold text-base tracking-wide`}>
                            {item.time}
                          </span>
                        </div>
                        
                        <h3 className={`text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight transition-all duration-300 ${
                          hoveredItem === index ? 'text-slate-800 translate-x-1' : ''
                        }`}>
                          {item.title}
                        </h3>
                        
                        <p className={`text-slate-700 text-base leading-relaxed font-light transition-all duration-300 ${
                          hoveredItem === index ? 'text-slate-800' : ''
                        }`}>
                          {item.description}
                        </p>

                        <div className={`flex gap-1.5 mt-4 transition-all duration-500 ${
                          hoveredItem === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}>
                          {[...Array(3)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 text-${item.accent}-400 transition-all duration-300`}
                              style={{ 
                                animationDelay: `${i * 100}ms`,
                                animation: hoveredItem === index ? 'float 2s ease-in-out infinite' : 'none'
                              }}
                              strokeWidth={2}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '1600ms' }}>
            <div className="backdrop-blur-lg bg-white/60 rounded-2xl p-8 border border-white/40 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Secure Your Premium Experience
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light">
                Join India's most distinguished leaders for an unforgettable journey of innovation and excellence.
              </p>
              
              <div className="relative inline-block">
                <div className="absolute -inset-3 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 blur-lg rounded-full animate-pulse"></div>
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden text-base">
                 
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <Sparkles size={20} strokeWidth={2} className="group-hover:rotate-180 transition-transform duration-700 relative z-10" />
                  <span className="relative z-10 tracking-wide">Reserve Your Seat</span>
                  <Star size={20} strokeWidth={2} className="group-hover:scale-125 transition-transform duration-500 relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default EventSchedule;

