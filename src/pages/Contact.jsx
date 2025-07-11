
// Developer: Utibe Patrick - Food and Agriculture - Feature: Worked on the contact page
// Developer: Manasa - Environment and Sustainability - Feature: Worked on the responsiveness

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Menu, X } from 'lucide-react';

import ContactSection from '../components/ContactSection';

const Contact = () => {



    return (
        <>
        <Header/>
        <div className="min-h-screen bg-soft-white">
            {/* Navigation */}
            {/* <nav className="bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] fixed top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-3xl font-bold bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] bg-clip-text text-transparent">
                        BEF
                    </div>
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#home" className="text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                        <a href="#about" className="text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                        <div className="relative group">
                            <a href="#industries" className="text-primary-blue hover:text-accent-cyan flex items-center transition-colors duration-300">
                                Initiatives
                                <svg className="w-4 h-4 ml-1 stroke-[var(--primary-blue)] group-hover:stroke-[var(--accent-cyan)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div className="absolute hidden group-hover:block bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg mt-2 w-64">
                                <div className="px-4 py-2 text-sm font-semibold text-neutral-gray">Our Industries</div>
                                {industryItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block px-4 py-2 text-primary-blue hover:bg-[#E6F0FA] hover:text-accent-cyan transition-colors duration-300"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <a href="#events" className="text-primary-blue hover:text-accent-cyan flex items-center transition-colors duration-300">
                                Events
                                <svg className="w-4 h-4 ml-1 stroke-[var(--primary-blue)] group-hover:stroke-[var(--accent-cyan)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div className="absolute hidden group-hover:block bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg mt-2 w-64">
                                <div className="px-4 py-2 text-sm font-semibold text-neutral-gray">Upcoming Events</div>
                                {eventItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block px-4 py-2 text-primary-blue hover:bg-[#E6F0FA] hover:text-accent-cyan transition-colors duration-300"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <a href="#contact" className="text-primary-blue hover:text-accent-cyan font-semibold transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                        <button className="bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105">
                            Join Our Movement
                        </button>
                    </div>
                    <button className="md:hidden text-primary-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                        <div className="px-4 py-2">
                            <a href="#home" className="block py-2 text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                            <a href="#about" className="block py-2 text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                            <div className="py-2">
                                <div className="text-sm font-semibold text-neutral-gray">INITIATIVES</div>
                                {industryItems.slice(0, 6).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block py-2 pl-4 text-primary-blue hover:text-accent-cyan transition-colors duration-300"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                            <div className="py-2">
                                <div className="text-sm font-semibold text-neutral-gray">EVENTS</div>
                                {eventItems.slice(0, 4).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block py-2 pl-4 text-primary-blue hover:text-accent-cyan transition-colors duration-300"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                            <a href="#contact" className="block py-2 text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                            <button className="w-full bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-6 py-2 rounded-full mt-2 font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105">
                                Join Our Movement
                            </button>
                        </div>
                    </div>
                )}
            </nav> */}

            

            {/* Contact Content */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </div>
        </>
    );
};

export default Contact;

