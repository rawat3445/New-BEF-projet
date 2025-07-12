import React, { useState } from 'react';
import { ArrowLeft, Menu, X, Home, Info, Film, Music, Tv, DollarSign, Users } from 'lucide-react';

import Navbar from './components/navbar/navbar';
import HeroCarousel from './components/herocarousel/carousel';
import ServiceCards from './components/serviceCards/cards';
import AboutSection from './components/aboutSection/aboutSection';
import Footer from './components/footer/footer';
import ContactUs from './components/contactus/contactus';
const MediaEntertainmentIndustry = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shows', label: 'Shows', icon: Tv },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'subscription', label: 'Subscription', icon: Film },
    { id: 'media', label: 'Media', icon: Users },
    { id: 'sales', label: 'Sales', icon: DollarSign },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavigation = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  // New Media Page Sections
  const MediaPage = () => (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      {/* 1. Event Details */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg border border-blue-200">
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 rounded-full p-3 mr-4">
            <Info className="text-white" size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800">Event Details</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Event Name</p>
            <p className="font-semibold text-gray-800">BEF Annual Media Gala 2025</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Date</p>
            <p className="font-semibold text-gray-800">August 15, 2025</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Venue</p>
            <p className="font-semibold text-gray-800">Grand Convention Center, Cityville</p>
          </div>
        </div>
      </section>

      {/* 2. About the Event */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-lg border border-purple-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-purple-600 rounded-full p-3 mr-4">
            <Film className="text-white" size={24} />
          </div>
          About the Event
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
            <p>A grand celebration highlighting innovation and excellence in media and entertainment.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Purpose</h3>
            <p>To connect industry leaders, foster collaboration, and showcase groundbreaking projects.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Agenda</h3>
            <p>Keynote speeches, panel discussions, workshops, networking sessions.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Attend */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg border border-green-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-green-600 rounded-full p-3 mr-4">
            <Users className="text-white" size={24} />
          </div>
          Why Attend
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Gain insights from top industry experts',
            'Discover new trends and technologies',
            'Network with professionals and partners',
            'Exclusive media coverage and exposure'
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Media & PR */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 shadow-lg border border-orange-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-orange-600 rounded-full p-3 mr-4">
            <Tv className="text-white" size={24} />
          </div>
          Media & PR
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Featured In</h3>
            <div className="flex flex-wrap gap-2">
              {['MediaDaily', 'Entertainment Weekly', 'Cityville News'].map((outlet, index) => (
                <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {outlet}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Official Partners</h3>
            <div className="flex flex-wrap gap-2">
              {['MediaCorp', 'StarEvents', 'Visionary Studios'].map((partner, index) => (
                <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {partner}
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
          <p className="text-gray-700 text-lg leading-relaxed">Media professionals, content creators, sponsors, advertisers, and enthusiasts.</p>
        </div>
      </section>

      {/* 6. Contact Us */}
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
            <p className="text-blue-600 font-medium">contact@befmedia.org</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-green-600 font-medium">+1 (555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* 7. About Us (BEF) */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-indigo-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="bg-indigo-600 rounded-full p-3 mr-4">
            <Home className="text-white" size={24} />
          </div>
          About BEF
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed">The Broadcast Excellence Foundation (BEF) is committed to advancing media quality and fostering industry collaboration worldwide.</p>
        </div>
      </section>
    </div>
  );

  // New Sales Page Sections
  const SalesPage = () => (
    <div className="max-w-6xl mx-auto space-y-12 py-8">
      {/* 1. Sponsor and Delegate Packages */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-violet-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <div className="bg-violet-600 rounded-full p-3 mr-4">
            <DollarSign className="text-white" size={24} />
          </div>
          Sponsor & Delegate Packages
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <DollarSign className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Platinum Sponsor</h3>
            <div className="text-3xl font-bold text-purple-600 mb-6">$25,000</div>
            <ul className="space-y-3 text-gray-700">
              {[
                'Premium booth space',
                'Logo on all event materials',
                'Speaking opportunity',
                '10 delegate passes'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Delegate Package</h3>
            <div className="text-3xl font-bold text-blue-600 mb-6">$500</div>
            <ul className="space-y-3 text-gray-700">
              {[
                'Access to all sessions',
                'Networking events',
                'Event materials'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Registration Links */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 shadow-lg border border-emerald-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Register Now</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg flex items-center"
          >
            <DollarSign className="mr-3" size={20} />
            Sponsor Registration
          </a>
          <a
            href="#"
            className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg flex items-center"
          >
            <Users className="mr-3" size={20} />
            Delegate Registration
          </a>
        </div>
      </section>

      {/* 3. Benefits for Participants */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 shadow-lg border border-orange-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <div className="bg-orange-600 rounded-full p-3 mr-4">
            <Users className="text-white" size={24} />
          </div>
          Benefits for Participants
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Enhanced brand visibility',
            'Exclusive networking opportunities',
            'Access to industry insights',
            'Participation in workshops and panels'
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm flex items-center hover:shadow-md transition-shadow">
              <div className="bg-orange-100 rounded-full p-3 mr-4">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Visual Tiles for Sponsor and Delegate Kits */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 shadow-lg border border-slate-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Sponsor & Delegate Kits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="cursor-pointer rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white flex flex-col items-center justify-center min-h-64"
            onClick={() => alert('Sponsor Kit Registration')}
          >
            <div className="bg-white/20 rounded-full p-4 mb-6">
              <DollarSign className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Sponsor Kit</h3>
            <p className="text-center text-purple-100 mb-6 leading-relaxed">Includes detailed sponsorship benefits and guidelines.</p>
            <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-lg">
              Register as Sponsor
            </button>
          </div>
          <div
            className="cursor-pointer rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white flex flex-col items-center justify-center min-h-64"
            onClick={() => alert('Delegate Kit Registration')}
          >
            <div className="bg-white/20 rounded-full p-4 mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Delegate Kit</h3>
            <p className="text-center text-blue-100 mb-6 leading-relaxed">Access to sessions, networking, and event materials.</p>
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Register as Delegate
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return <AboutSection />;
      case 'subscription':
        return (
          <div className="max-w-4xl mx-auto py-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12 shadow-lg text-center">
              <Film className="mx-auto mb-6 text-blue-600" size={48} />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscription Page</h2>
              <p className="text-gray-600">Coming Soon - Premium subscription features</p>
            </div>
          </div>
        );
      case 'shows':
        return (
          <div className="max-w-4xl mx-auto py-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-12 shadow-lg text-center">
              <Tv className="mx-auto mb-6 text-purple-600" size={48} />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Shows Page</h2>
              <p className="text-gray-600">Discover amazing shows and entertainment content</p>
            </div>
          </div>
        );
      case 'music':
        return (
          <div className="py-8 bg-gradient-to-br from-white via-purple-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Music className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Music Collection</h2>
                <p className="text-gray-600 text-lg">Discover the best in music entertainment</p>
              </div>
              <ServiceCards category="music" />
            </div>
          </div>
        );
      case 'media':
        return <MediaPage />;
      case 'sales':
        return <SalesPage />;
      case 'home':
      default:
        return (
          <div className="space-y-0">
            <HeroCarousel />
            <div className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
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
      <div className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 shadow-xl">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">M</div>
            <div>
              <h1 className="text-xl font-bold text-white">Media & Entertainment Hub</h1>
              <p className="text-sm text-purple-100">Experience the Best in Media</p>
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
                    ? 'bg-white text-purple-600 shadow-lg' 
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
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'}`}
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

export default MediaEntertainmentIndustry;