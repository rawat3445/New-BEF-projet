import { 
    ArrowRight, Trophy, TrendingUp, Users, Zap, Target, Eye, Calendar, 
    Award, Star, Quote, CheckCircle, Globe, Heart, Lightbulb, 
    Building, UserCheck, Mail, Phone, MapPin, Sparkles, Rocket,
    Shield, Network, Briefcase, GraduationCap, HandHeart, Compass
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AboutFullSection = () => {
    const navigate = useNavigate();

    useEffect(() => {
  // Immediately scroll to top BEFORE render
  window.scrollTo({ top: 0, behavior: 'auto' });

  // Delay rendering by one frame
  const timeout = setTimeout(() => {
    setIsReady(true);
  }, 0);

  // Optional: enable smooth scrolling after top is reached
  document.documentElement.style.scrollBehavior = 'smooth';

  return () => {
    clearTimeout(timeout);
    document.documentElement.style.scrollBehavior = 'auto';
  };
}, []);


    // Enhanced Timeline data with more visual elements
    const timelineData = [
        {
            year: "2015",
            title: "Forum Inception",
            description: "Launched to create inclusive economic opportunities across Bharat, establishing our foundation for transformative change.",
            icon: <Rocket className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-500",
            bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            year: "2017",
            title: "First 100 Startups Supported",
            description: "Achieved our first major milestone by supporting 100 startups with seed funding and comprehensive mentorship programs.",
            icon: <Trophy className="w-6 h-6" />,
            color: "from-emerald-500 to-teal-500",
            bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            year: "2020",
            title: "Digital Empowerment Program",
            description: "Rolled out digital tools to 25,000+ individuals in semi-urban areas, bridging the digital divide.",
            icon: <Network className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500",
            bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            year: "2022",
            title: "National Recognition",
            description: "Awarded for outstanding contribution to rural entrepreneurship and economic development initiatives.",
            icon: <Award className="w-6 h-6" />,
            color: "from-orange-500 to-red-500",
            bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            year: "2024",
            title: "Impact Beyond Borders",
            description: "Became a model for economic empowerment initiatives across South Asia, expanding our global footprint.",
            icon: <Globe className="w-6 h-6" />,
            color: "from-indigo-500 to-blue-500",
            bgImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
    ];

    // Enhanced Core values with richer descriptions
    const coreValues = [
        {
            title: "Innovation",
            description: "We stay ahead of industry trends and leverage cutting-edge technologies to deliver innovative solutions that transform lives and communities.",
            icon: <Lightbulb className="w-12 h-12" />,
            bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            title: "Inclusivity",
            description: "Every initiative is designed to create equitable opportunities for all citizens of Bharat, ensuring no one is left behind in our journey to prosperity.",
            icon: <Heart className="w-12 h-12" />,
            bgImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gradient: "from-pink-400 to-red-500"
        },
        {
            title: "Collaboration",
            description: "We build lasting partnerships based on trust, transparency, and mutual growth, creating a robust ecosystem of progress and shared success.",
            icon: <Users className="w-12 h-12" />,
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gradient: "from-blue-400 to-cyan-500"
        },
        {
            title: "Excellence",
            description: "We maintain the highest standards of quality in every project, ensuring excellence in every detail and delivering transformative outcomes.",
            icon: <Award className="w-12 h-12" />,
            bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gradient: "from-purple-400 to-indigo-500"
        }
    ];

    // Enhanced Impact statistics with descriptions
    const impactStats = [
        { 
            number: "50,000+", 
            label: "Lives Empowered",
            description: "Individuals transformed through our programs",
            icon: <HandHeart className="w-8 h-8" />,
            color: "from-emerald-500 to-teal-600"
        },
        { 
            number: "500+", 
            label: "Happy Partners",
            description: "Organizations collaborating with us",
            icon: <Building className="w-8 h-8" />,
            color: "from-blue-500 to-indigo-600"
        },
        { 
            number: "200+", 
            label: "Enterprises Supported",
            description: "Startups and businesses we've nurtured",
            icon: <Briefcase className="w-8 h-8" />,
            color: "from-purple-500 to-pink-600"
        },
        { 
            number: "12+", 
            label: "Years Experience",
            description: "Decades of expertise and impact",
            icon: <GraduationCap className="w-8 h-8" />,
            color: "from-orange-500 to-red-600"
        }
    ];

    // Enhanced Testimonials with more context
    const testimonials = [
        {
            quote: "Bharat Economic Forum has been a catalyst in driving innovative economic collaborations across India and Europe. Their platform empowered our business to expand globally and create sustainable impact.",
            author: "Ravi Kumar",
            position: "CEO, TechNex Solutions",
            category: "Technology Innovation",
            rating: 5
        },
        {
            quote: "Thanks to BEF's insights and networking opportunities, we successfully navigated complex markets and formed valuable international partnerships that transformed our business model.",
            author: "Neha Sharma",
            position: "Founder, GreenTech Innovators",
            category: "Sustainable Technology",
            rating: 5
        },
        {
            quote: "The forum helped me scale my small business into a thriving social enterprise by connecting me with mentors and capital, creating employment for hundreds in rural areas.",
            author: "Meera Joshi",
            position: "Founder, Rural Roots Collective",
            category: "Social Enterprise",
            rating: 5
        }
    ];



    return (
        <div className="bg-soft-white">
            {/* Hero Section with Enhanced Visual Design */}
            <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background with multiple layers */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    {/* Animated particles - optimized for performance */}
                    <div className="absolute inset-0 hidden lg:block">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white h-full flex flex-col justify-center py-8">
                    {/* Floating elements - optimized positioning */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse hidden xl:block"></div>
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse hidden xl:block" style={{animationDelay: '1s'}}></div>
                    
                    <div className="mb-4 md:mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-2 md:mb-3 shadow-2xl">
                            <Quote className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <p className="text-sm md:text-base lg:text-lg font-light italic max-w-3xl mx-auto mb-3 md:mb-4 leading-relaxed text-gray-100 px-4">
                            "Every Indian's effort contributes to a bright, united future. Here, tradition meets modern excellence—a call to every citizen to be part of India's historic journey."
                        </p>
                    </div>
                    
                    <div className="mb-4 md:mb-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 leading-tight max-w-5xl mx-auto">
                            <span className="block text-white mb-1">About</span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Bharat Economic Forum
                            </span>
                        </h1>
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-3 md:mb-4"></div>
                    </div>
                    
                    <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed font-light px-4">
                        An Independent Think Tank for accelerating the vision of achieving <span className="text-cyan-400 font-semibold">Viksit Bharat by 2047</span>. We facilitate funding, collaboration, and innovation for self-economic development of individuals to collectively drive India's transformation.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4 mb-6 md:mb-8">
                        <button
                            onClick={() => navigate('/about')}
                            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center max-w-xs"
                        >
                            <span className="relative z-10">Discover Our Vision</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="group relative border-2 border-cyan-400 text-cyan-400 px-6 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-500 transform hover:scale-105 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto justify-center max-w-xs"
                        >
                            <span>Join the Movement</span>
                            <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <div 
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer group"
                    onClick={() => {
                        const nextSection = document.querySelector('#about').nextElementSibling;
                        if (nextSection) {
                            nextSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    <div className="flex flex-col items-center space-y-2 animate-bounce">
                        {/* Scroll text */}
                        {/* <span className="text-white/70 text-xs font-medium tracking-wider uppercase hidden md:block group-hover:text-white transition-colors duration-300">
                            Scroll Down
                        </span> */}
                        
                        {/* Beautiful scroll indicator */}
                        <div className="relative">
                            {/* Outer ring */}
                            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center items-start p-1 group-hover:border-white/70 transition-colors duration-300">
                                {/* Inner dot */}
                                <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse group-hover:from-white group-hover:to-cyan-300 transition-colors duration-300"></div>
                            </div>
                            
                            {/* Animated arrow */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white/50 group-hover:border-t-white/80 transition-colors duration-300 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
                {/* Background with geometric patterns */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission & Vision</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Mission & Vision Cards */}
                        <div className="space-y-8">
                            {/* Mission Card */}
                            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        To foster inclusive growth by enabling individuals from every corner of Bharat to lead, innovate, and thrive economically. We work at the intersection of <span className="font-semibold text-blue-600">policy, entrepreneurship, technology, and communication</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                                            <Eye className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        To build a self-reliant Bharat where every citizen has the tools and confidence to turn ideas into impact, contributing to a <span className="font-semibold text-purple-600">developed nation by 2047</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Philosophy Statement */}
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-3xl text-white shadow-2xl">
                                <Quote className="w-12 h-12 mb-4 opacity-80" />
                                <p className="text-xl leading-relaxed font-light">
                                    The Bharat Economic Forum is a movement that embodies the spirit of a resilient and visionary India, bringing together minds that matter to co-create India's 2047 vision.
                                </p>
                            </div>
                        </div>

                        {/* Visual Elements */}
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="BEF Vision"
                                    className="rounded-3xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 rounded-3xl"></div>
                                
                                {/* Floating stats */}
                                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600">2047</div>
                                        <div className="text-sm text-gray-600">Viksit Bharat</div>
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600">50K+</div>
                                        <div className="text-sm text-gray-600">Lives Impacted</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -z-10 bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline / Our Journey Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                {/* Background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8 shadow-2xl">
                            <Calendar className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Key milestones shaping the landscape of economic innovation and empowerment in India.
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-8"></div>
                    </div>
                    
                    <div className="relative">
                        {/* Enhanced Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 hidden lg:block shadow-lg"></div>
                        
                        <div className="space-y-16">
                            {timelineData.map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16`}>
                                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                                        <div className="group relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                                            {/* Background image overlay */}
                                            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                                <img 
                                                    src={item.bgImage} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                            </div>
                                            
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg text-white`}>
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <span className="text-4xl font-bold text-white">{item.year}</span>
                                                        <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mt-1"></div>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                                <p className="text-gray-200 leading-relaxed text-lg">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Enhanced Timeline dot */}
                                    <div className="hidden lg:flex relative">
                                        <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-2xl z-10 animate-pulse`}></div>
                                        <div className={`absolute inset-0 w-8 h-8 bg-gradient-to-r ${item.color} rounded-full opacity-30 animate-ping`}></div>
                                    </div>
                                    
                                    <div className="w-full lg:w-1/2"></div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 shadow-2xl">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our Core <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Values</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            These fundamental principles guide everything we do and define who we are as an organization driving India's transformation.
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-8"></div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="group relative">
                                {/* Card */}
                                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-white/20 overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        <img 
                                            src={value.bgImage} 
                                            alt={value.title}
                                            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-700`}></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                                        {/* Icon */}
                                        <div className="mb-8 flex justify-center">
                                            <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center shadow-2xl text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                                                {value.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed text-center flex-grow group-hover:text-gray-800 transition-colors duration-300">
                                            {value.description}
                                        </p>
                                        
                                        {/* Decorative element */}
                                        <div className="mt-6 flex justify-center">
                                            <div className={`w-16 h-1 bg-gradient-to-r ${value.gradient} rounded-full transform group-hover:w-24 transition-all duration-500`}></div>
                                        </div>
                                    </div>
                                    
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                                </div>
                                
                                {/* Floating decorative elements */}
                                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 animate-bounce`} style={{animationDelay: `${index * 0.1}s`}}></div>
                                <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 animate-pulse`} style={{animationDelay: `${index * 0.2}s`}}></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom decorative section */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl">
                            <Sparkles className="w-6 h-6 text-purple-500" />
                            <span className="text-lg font-semibold text-gray-800">Driving Excellence Through Values</span>
                            <Sparkles className="w-6 h-6 text-pink-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
                {/* Background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-teal-900/80"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-8 shadow-2xl">
                            <TrendingUp className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Impact</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                            Transforming lives and building a sustainable, inclusive, and innovation-led Bharat through measurable outcomes.
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-8"></div>
                    </div>
                    
                    {/* Impact Statistics */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="group relative">
                                <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 text-center">
                                    {/* Icon */}
                                    <div className="mb-6 flex justify-center">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                                            {stat.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Number */}
                                    <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.number}
                                    </div>
                                    
                                    {/* Label */}
                                    <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-300 text-sm">{stat.description}</p>
                                    
                                    {/* Decorative line */}
                                    <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-4 rounded-full transform group-hover:w-24 transition-all duration-500`}></div>
                                </div>
                                
                                {/* Floating elements */}
                                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 animate-bounce`} style={{animationDelay: `${index * 0.1}s`}}></div>
                            </div>
                        ))}
                    </div>

                    {/* Impact Areas */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            {
                                title: "Thought Leadership",
                                desc: "Delivering in-depth analysis and strategic insights on economic policies and trends that matter to India's future.",
                                icon: <Trophy className="w-10 h-10" />,
                                gradient: "from-yellow-400 to-orange-500",
                                bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Policy Advocacy",
                                desc: "Partnering with government bodies to cultivate reforms that mirror the heart and soul of our nation.",
                                icon: <TrendingUp className="w-10 h-10" />,
                                gradient: "from-blue-400 to-indigo-500",
                                bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Networking & Mentorship",
                                desc: "Connecting industry leaders, entrepreneurs, and policymakers to forge a robust ecosystem of progress.",
                                icon: <Users className="w-10 h-10" />,
                                gradient: "from-purple-400 to-pink-500",
                                bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Capacity Building",
                                desc: "Hosting seminars, workshops, and training programs that empower citizens with tools for positive change.",
                                icon: <Zap className="w-10 h-10" />,
                                gradient: "from-emerald-400 to-cyan-500",
                                bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group relative">
                                <div className="relative h-full bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        <img 
                                            src={item.bgImage} 
                                            alt={item.title}
                                            className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                        
                                        {/* Decorative element */}
                                        <div className="mt-6">
                                            <div className={`w-12 h-1 bg-gradient-to-r ${item.gradient} rounded-full transform group-hover:w-20 transition-all duration-500`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl border border-white/20">
                            <Sparkles className="w-6 h-6 text-emerald-400" />
                            <span className="text-lg font-semibold text-white">Creating Lasting Impact Across India</span>
                            <Sparkles className="w-6 h-6 text-cyan-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 shadow-2xl">
                            <Quote className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Partners Say</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Real stories from entrepreneurs and leaders transformed by our initiatives and partnerships.
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-8"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="group relative">
                                <div className="relative h-full bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 overflow-hidden">
                                    {/* Background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Quote icon and rating */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                                                <Quote className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Category badge */}
                                        <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                            {testimonial.category}
                                        </div>
                                        
                                        {/* Quote */}
                                        <p className="text-lg text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                                            "{testimonial.quote}"
                                        </p>
                                        
                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                                <UserCheck className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg">{testimonial.author}</h4>
                                                <p className="text-gray-600">{testimonial.position}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Decorative line */}
                                        <div className="mt-6">
                                            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform group-hover:w-24 transition-all duration-500"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating elements */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 animate-bounce" style={{animationDelay: `${index * 0.1}s`}}></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom section */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl">
                            <Star className="w-6 h-6 text-yellow-500" />
                            <span className="text-lg font-semibold text-gray-800">Trusted by Industry Leaders</span>
                            <Star className="w-6 h-6 text-yellow-500" />
                        </div>
                    </div>
                </div>
            </section>



            {/* Partners Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8 shadow-2xl">
                            <Globe className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our Partnership <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Philosophy</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Building bridges between local innovation and global opportunities, fostering collaboration across borders and creating lasting impact.
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: "Global Reach",
                                description: "Expanding our impact beyond borders with strategic partnerships across South Asia and Europe, creating a worldwide network of change.",
                                icon: <Globe className="w-12 h-12" />,
                                gradient: "from-cyan-400 to-blue-500",
                                bgImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Industry Collaboration",
                                description: "Partnering with leading organizations to create sustainable economic ecosystems that drive innovation and growth across sectors.",
                                icon: <Building className="w-12 h-12" />,
                                gradient: "from-indigo-400 to-purple-500",
                                bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Proven Results",
                                description: "95% success rate in our initiatives with 24/7 support for all our partners and beneficiaries, ensuring sustainable outcomes.",
                                icon: <CheckCircle className="w-12 h-12" />,
                                gradient: "from-emerald-400 to-teal-500",
                                bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group relative">
                                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        <img 
                                            src={item.bgImage} 
                                            alt={item.title}
                                            className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10 p-8 text-center">
                                        {/* Icon */}
                                        <div className="mb-6 flex justify-center">
                                            <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-2xl text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                            {item.description}
                                        </p>
                                        
                                        {/* Decorative element */}
                                        <div className="mt-6">
                                            <div className={`w-16 h-1 bg-gradient-to-r ${item.gradient} rounded-full mx-auto transform group-hover:w-24 transition-all duration-500`}></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating elements */}
                                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 animate-bounce`} style={{animationDelay: `${index * 0.1}s`}}></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom section */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl">
                            <Network className="w-6 h-6 text-cyan-500" />
                            <span className="text-lg font-semibold text-gray-800">Building Global Partnerships</span>
                            <Network className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
                {/* Background with multiple layers */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    {/* Animated particles */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                    {/* Floating elements */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    
                    <div className="mb-12">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8 shadow-2xl">
                            <Rocket className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="block text-white mb-2">Join the</span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Movement
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto mb-12 leading-relaxed font-light">
                        Be part of India's historic journey towards <span className="text-cyan-400 font-semibold">Viksit Bharat 2047</span>. Together, we can build a sustainable, inclusive, and innovation-led future that transforms lives and communities.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <button
                            onClick={() => navigate('/contact')}
                            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-110 flex items-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10">Get Involved Today</span>
                            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                            onClick={() => navigate('/events')}
                            className="group relative border-2 border-cyan-400 text-cyan-400 px-12 py-6 rounded-full text-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-500 transform hover:scale-110 flex items-center gap-3 backdrop-blur-sm"
                        >
                            <span>Explore Events</span>
                            <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Contact Information */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: <Mail className="w-6 h-6" />, text: "connect@bharateconomicforum.org", gradient: "from-cyan-400 to-blue-500" },
                            { icon: <Phone className="w-6 h-6" />, text: "+91 98765 43210", gradient: "from-blue-400 to-purple-500" },
                            { icon: <MapPin className="w-6 h-6" />, text: "New Delhi, India", gradient: "from-purple-400 to-pink-500" }
                        ].map((contact, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className={`w-10 h-10 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center`}>
                                            {contact.icon}
                                        </div>
                                        <span className="text-lg font-medium">{contact.text}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom decorative element */}
                    <div className="mt-16">
                        <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl border border-white/20">
                            <Sparkles className="w-6 h-6 text-cyan-400" />
                            <span className="text-lg font-semibold">Transforming India Together</span>
                            <Sparkles className="w-6 h-6 text-purple-400" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutFullSection;