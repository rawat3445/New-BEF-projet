import { ArrowRight, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
    const navigate = useNavigate();

    return (
        <section id= "about" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Section Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-xl">
                        <Target className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bharat Economic Forum</span>
                    </h2>
                    
                    {/* Decorative line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    
                    {/* Brief Summary */}
                    <div className="max-w-4xl mx-auto mb-10">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                            An Independent Think Tank for accelerating the vision of achieving <span className="text-blue-600 font-semibold">Viksit Bharat by 2047</span>. We facilitate funding, collaboration, and innovation for self-economic development of individuals to collectively drive India's transformation.
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Empowering industries, communities, and innovators through inclusive dialogues and forward-thinking strategies that create sustainable opportunities for all citizens of Bharat.
                        </p>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => navigate('/about-full')}
                            className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 flex items-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10">Learn More About Us</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        <button
                            onClick={() => navigate('/contact')}
                            className="group relative border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500 transform hover:scale-105 flex items-center gap-3"
                        >
                            <span>Join the Movement</span>
                            <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;