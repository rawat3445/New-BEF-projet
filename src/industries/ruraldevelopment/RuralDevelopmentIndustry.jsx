import React, { useState } from 'react';
import { ArrowLeft, Menu, X, Home, Info, Users, Globe, Leaf, Wrench, Award, Book } from 'lucide-react';
import Navbar from './components/navbar/Navbar';
import HeroCarousel from './components/herocarousel/HeroCarousel';
import ServiceCards from './components/serviceCards/cards';
import AboutSection from './components/aboutSection/AboutSection';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactus/ContactUs';
const RuralDevelopmentIndustry = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Globe },
    { id: 'education', label: 'Education', icon: Book },
    { id: 'technology', label: 'Tech', icon: Wrench },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavigation = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  // Rural Development Page Sections
  const RuralDevelopmentPage = () => (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      {/* 1. Event Details */}
      <section className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-lg border border-green-200">
        <div className="flex items-center mb-6">
          <div className="bg-green-600 rounded-full p-3 mr-4">
            <Info className="text-white" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800">BEF Rural Development Summit 2025</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Event Name</p>
            <p className="font-semibold text-gray-800">Viksit Bharat Rural Conclave</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Date</p>
            <p className="font-semibold text-gray-800">25th July 2025</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Venue</p>
            <p className="font-semibold text-gray-800">Bharat Mandapam, New Delhi</p>
          </div>
        </div>
      </section>

      {/* 2. About the Event */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-amber-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-amber-600 rounded-full p-3 mr-4">
            <Leaf className="text-white" size={24} />
          </div>
          About the Summit
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Mission</h3>
            <p>To bridge the urban-rural divide through sustainable development, technology, and community empowerment.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Focus Areas</h3>
            <p>Agriculture modernization, digital literacy, healthcare access, infrastructure, and women-led initiatives.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Expected Outcomes</h3>
            <p>Actionable policies, public-private partnerships, and grassroots innovation showcases.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Attend */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 shadow-lg border border-blue-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-blue-600 rounded-full p-3 mr-4">
            <Users className="text-white" size={24} />
          </div>
          Why Attend?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Connect with 500+ rural development leaders',
            'Discover scalable solutions for village transformation',
            'Access government funding opportunities',
            'Learn from successful case studies',
            'Network with CSR heads and impact investors',
            'Showcase your rural innovation'
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Key Themes */}
      <section className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 shadow-lg border border-purple-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-purple-600 rounded-full p-3 mr-4">
            <Wrench className="text-white" size={24} />
          </div>
          Key Themes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Technology for Villages</h3>
            <div className="flex flex-wrap gap-2">
              {['AgriTech', 'Digital Literacy', 'Telemedicine', 'Renewable Energy'].map((theme, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {theme}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Sustainable Practices</h3>
            <div className="flex flex-wrap gap-2">
              {['Organic Farming', 'Water Conservation', 'Waste Management', 'Eco-Tourism'].map((theme, index) => (
                <span key={index} className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Who Should Attend */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 shadow-lg border border-teal-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-teal-600 rounded-full p-3 mr-4">
            <Users className="text-white" size={24} />
          </div>
          Who Should Attend
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed">
            Government officials, NGOs, AgriTech startups, CSR leaders, rural entrepreneurs, academics, and policymakers committed to transforming rural India.
          </p>
        </div>
      </section>

      {/* 6. Contact */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-gray-600 rounded-full p-3 mr-4">
            <Info className="text-white" size={24} />
          </div>
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-green-600 font-medium">rural@befindia.org</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-blue-600 font-medium">+91-9876543210</p>
          </div>
        </div>
      </section>
    </div>
  );

  // Awards Page
  const AwardsPage = () => (
    <div className="max-w-6xl mx-auto space-y-12 py-8">
      <section className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8 shadow-lg border border-yellow-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <div className="bg-amber-600 rounded-full p-3 mr-4">
            <Award className="text-white" size={24} />
          </div>
          Gramin Samriddhi Awards 2025
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Award Categories */}
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Leaf className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Agriculture</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                'Best Organic Farming Initiative',
                'Innovative Irrigation Solution',
                'Women-Led Agri Enterprise',
                'Climate-Resilient Practices'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-amber-100 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Wrench className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Rural Technology</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                'Best Digital Literacy Program',
                'Telemedicine Innovation',
                'Renewable Energy Solution',
                'Low-Cost Housing Tech'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-green-100 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nomination Process */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg border border-blue-200">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Nomination Process</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: 1, title: 'Submit Online Form', detail: 'Before 15th June 2025' },
            { step: 2, title: 'Document Verification', detail: 'By 30th June 2025' },
            { step: 3, title: 'Field Evaluation', detail: '1st-10th July 2025' },
            { step: 4, title: 'Jury Decision', detail: '15th July 2025' }
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold">
                {item.step}
              </div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return <AboutSection />;
      case 'awards':
        return <AwardsPage />;
      case 'community':
        return (
          <div className="max-w-4xl mx-auto py-12">
            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-12 shadow-lg text-center">
              <Users className="mx-auto mb-6 text-green-600" size={48} />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Initiatives</h2>
              <p className="text-gray-600">Grassroots programs driving change across 10,000+ villages</p>
            </div>
          </div>
        );
      case 'home':
      default:
        return (
          <div className="space-y-0">
            <HeroCarousel />
            <div className="py-16 bg-gradient-to-br from-white via-green-50 to-blue-50">
              <ServiceCards />
            </div>
            <AboutSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900">
      {/* Top Navbar */}
      <div className="w-full bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 shadow-xl">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">R</div>
            <div>
              <h1 className="text-xl font-bold text-white">BEF Rural Development</h1>
              <p className="text-sm text-teal-100">Building Viksit Bharat by 2047</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavigation(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105
                  ${currentView === id 
                    ? 'bg-white text-green-600 shadow-lg' 
                    : 'text-white hover:bg-white/20 hover:backdrop-blur-sm'}`}
                aria-label={`Navigate to ${label}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavigation(id)}
                className={`flex items-center space-x-3 px-6 py-4 w-full text-left transition-all duration-200
                  ${currentView === id 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'}`}
                aria-label={`Navigate to ${label}`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Main Content */}
      <main className="min-h-screen">
        {renderContent()}
      </main>
     <ContactUs />
      <Footer />
    </div>
  );
};

export default RuralDevelopmentIndustry;