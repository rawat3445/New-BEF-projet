import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Menu, X } from 'lucide-react';


import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    // Sample industries and events for navigation (mirroring landing page)
    const industryItems = [
        { title: "Advertisement & Marketing", path: "/advertisement" },
        { title: "Beauty & Wellness", path: "/beauty-wellness" },
        { title: "Women Entrepreneurship", path: "/women-entrepreneurship" },
        { title: "Real Estate & Urban Planning", path: "/real-estate" },
        { title: "Media & Entertainment", path: "/media-entertainment" },
        { title: "Rural Development", path: "/rural-development" },
        { title: "Environment & Sustainability", path: "/environment" },
        { title: "Agriculture & Agritech", path: "/agriculture" },
        { title: "Retail & E-Commerce", path: "/retail" },
        { title: "Web 3.0, AI & DeepTech", path: "/web_ai" },
        { title: "Automobile & Mobility", path: "/automobile" },
        { title: "Health & Pharma", path: "/health-pharma" }
    ];

    const eventItems = [
        { title: "Industry Innovation Summit", path: "/events/innovation-summit" },
        { title: "Policy Makers Dialogue", path: "/events/policy-dialogue" },
        { title: "Technology Integration Forum", path: "/events/tech-forum" },
        { title: "Leadership Excellence", path: "/events/leadership" },
        { title: "Startup Pitch Competition", path: "/events/startup-pitch" },
        { title: "Women in Business Conference", path: "/events/women-business" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        BEF
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#home" className="text-gray-600 hover:text-blue-600" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                        <div className="relative group">
                            <a href="#industries" className="text-gray-600 hover:text-blue-600 flex items-center">
                                Initiatives
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-64">
                                <div className="px-4 py-2 text-sm font-semibold text-gray-400">Our Industries</div>
                                {industryItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <a href="#events" className="text-gray-600 hover:text-blue-600 flex items-center">
                                Events
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-64">
                                <div className="px-4 py-2 text-sm font-semibold text-gray-400">Upcoming Events</div>
                                {eventItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 font-semibold" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300">
                            Join Our Movement
                        </button>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg">
                        <div className="px-4 py-2">
                            <a href="#home" className="block py-2 text-gray-600 hover:text-blue-600" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                            <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                            <div className="py-2">
                                <div className="text-sm font-semibold text-gray-400">INITIATIVES</div>
                                {industryItems.slice(0, 6).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block py-2 pl-4 text-gray-600 hover:text-blue-600"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                            <div className="py-2">
                                <div className="text-sm font-semibold text-gray-400">EVENTS</div>
                                {eventItems.slice(0, 4).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="block py-2 pl-4 text-gray-600 hover:text-blue-600"
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                            <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mt-2 hover:shadow-xl transition-all duration-300">
                                Join Our Movement
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Contact Hero Section */}
            <section id="contact" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Get in Touch with{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Bharat Economic Forum
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        We're here to answer your questions, explore collaboration opportunities, and support your journey toward Viksit Bharat 2047.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                        rows="5"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                {isSubmitted && (
                                    <p className="text-green-500 text-center mt-4 animate-pulse">
                                        Thank you for your message! We'll get back to you soon.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                        <span className="text-gray-600">info@bharateconomicforum.org</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-6 h-6 text-blue-400" />
                                        <span className="text-gray-600">+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-6 h-6 text-blue-400" />
                                        <span className="text-gray-600">New Delhi, India</span>
                                    </div>
                                </div>
                            </div>
                            {/* Social Media Links */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                            {/* Map Embed for New Delhi, India */}
                            <div className="rounded-2xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112067.57931546033!2d77.1024901!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b2eac6e4c7%3A0x8b6f9731572a9b65!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1686148055363!5m2!1sen!2sus"
                                    width="100%"
                                    height="256"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-64"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                Bharat Economic Forum
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                An Independent Think Tank for accelerating the vision of achieving Viksit Bharat by 2047. We facilitate funding, collaboration, and innovation for self-economic development of individuals to collectively drive India's development.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    <Facebook className="w-6 h-6" />
                                </a>
                          
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
                                <li><a href="#industries" className="text-gray-300 hover:text-white transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>Initiatives</a></li>
                                <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Events</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Leadership Awards</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300">info@bharateconomicforum.org</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300">New Delhi, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Subscription */}
                    <div className="border-t border-gray-700 mt-12 pt-8">
                        <div className="max-w-md mx-auto text-center">
                            <h3 className="text-xl font-semibold mb-4">Join Our Movement</h3>
                            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates on BEF initiatives and be part of India's historic journey.</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                />
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2025 Bharat Economic Forum. All rights reserved. | Building a legacy of strength, unity, and sustainable progress
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;