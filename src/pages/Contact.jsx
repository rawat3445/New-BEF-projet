// // Developer: Utibe Patrick - Food and Agriculture - Feature: Worked on the contact page
// // Developer: Manasa - Environment and Sustainability - Feature: Worked on the responsiveness

// import { useState } from 'react';
// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Menu, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import ContactSection from '../components/ContactSection';

// const Contact = () => {
//     const navigate = useNavigate();
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//         setIsMobileMenuOpen(false);
//     };

//     const handleNavigation = (path) => {
//         navigate(path);
//         setIsMobileMenuOpen(false);
//     };

//     const industryItems = [
//         { title: "Advertisement & Marketing", path: "/advertisement" },
//         { title: "Beauty & Wellness", path: "/beauty-wellness" },
//         { title: "Women Entrepreneurship", path: "/women-entrepreneurship" },
//         { title: "Real Estate & Urban Planning", path: "/real-estate" },
//         { title: "Media & Entertainment", path: "/media-entertainment" },
//         { title: "Rural Development", path: "/rural-development" },
//         { title: "Environment & Sustainability", path: "/environment" },
//         { title: "Agriculture & Agritech", path: "/agriculture" },
//         { title: "Retail & E-Commerce", path: "/retail" },
//         { title: "Web 3.0, AI & DeepTech", path: "/web_ai" },
//         { title: "Automobile & Mobility", path: "/automobile" },
//         { title: "Health & Pharma", path: "/health-pharma" }
//     ];

//     const eventItems = [
//         { title: "Industry Innovation Summit", path: "/events/innovation-summit" },
//         { title: "Policy Makers Dialogue", path: "/events/policy-dialogue" },
//         { title: "Technology Integration Forum", path: "/events/tech-forum" },
//         { title: "Leadership Excellence", path: "/events/leadership" },
//         { title: "Startup Pitch Competition", path: "/events/startup-pitch" },
//         { title: "Women in Business Conference", path: "/events/women-business" }
//     ];

//     return (
//         <div className="min-h-screen bg-soft-white">
//             {/* Navigation */}
//             <nav className="bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] fixed top-0 w-full z-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//                     <div className="text-3xl font-bold bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] bg-clip-text text-transparent">
//                         BEF
//                     </div>
//                     <div className="hidden md:flex space-x-6 items-center">
//                         <a href="#home" className="text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
//                         <a href="#about" className="text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
//                         <div className="relative group">
//                             <a href="#industries" className="text-primary-blue hover:text-accent-cyan flex items-center transition-colors duration-300">
//                                 Initiatives
//                                 <svg className="w-4 h-4 ml-1 stroke-[var(--primary-blue)] group-hover:stroke-[var(--accent-cyan)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </a>
//                             <div className="absolute hidden group-hover:block bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg mt-2 w-64">
//                                 <div className="px-4 py-2 text-sm font-semibold text-neutral-gray">Our Industries</div>
//                                 {industryItems.map((item, index) => (
//                                     <a
//                                         key={index}
//                                         href={item.path}
//                                         className="block px-4 py-2 text-primary-blue hover:bg-[#E6F0FA] hover:text-accent-cyan transition-colors duration-300"
//                                         onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
//                                     >
//                                         {item.title}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="relative group">
//                             <a href="#events" className="text-primary-blue hover:text-accent-cyan flex items-center transition-colors duration-300">
//                                 Events
//                                 <svg className="w-4 h-4 ml-1 stroke-[var(--primary-blue)] group-hover:stroke-[var(--accent-cyan)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </a>
//                             <div className="absolute hidden group-hover:block bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg mt-2 w-64">
//                                 <div className="px-4 py-2 text-sm font-semibold text-neutral-gray">Upcoming Events</div>
//                                 {eventItems.map((item, index) => (
//                                     <a
//                                         key={index}
//                                         href={item.path}
//                                         className="block px-4 py-2 text-primary-blue hover:bg-[#E6F0FA] hover:text-accent-cyan transition-colors duration-300"
//                                         onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
//                                     >
//                                         {item.title}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                         <a href="#contact" className="text-primary-blue hover:text-accent-cyan font-semibold transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
//                         <button className="bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105">
//                             Join Our Movement
//                         </button>
//                     </div>
//                     <button className="md:hidden text-primary-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                         {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden bg-soft-white shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
//                         <div className="px-4 py-2">
//                             <a href="#home" className="block py-2 text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
//                             <a href="#about" className="block py-2 text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
//                             <div className="py-2">
//                                 <div className="text-sm font-semibold text-neutral-gray">INITIATIVES</div>
//                                 {industryItems.slice(0, 6).map((item, index) => (
//                                     <a
//                                         key={index}
//                                         href={item.path}
//                                         className="block py-2 pl-4 text-primary-blue hover:text-accent-cyan transition-colors duration-300"
//                                         onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
//                                     >
//                                         {item.title}
//                                     </a>
//                                 ))}
//                             </div>
//                             <div className="py-2">
//                                 <div className="text-sm font-semibold text-neutral-gray">EVENTS</div>
//                                 {eventItems.slice(0, 4).map((item, index) => (
//                                     <a
//                                         key={index}
//                                         href={item.path}
//                                         className="block py-2 pl-4 text-primary-blue hover:text-accent-cyan transition-colors duration-300"
//                                         onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
//                                     >
//                                         {item.title}
//                                     </a>
//                                 ))}
//                             </div>
//                             <a href="#contact" className="block py-2 text-primary-blue hover:text-accent-cyan transition-colors duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
//                             <button className="w-full bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-6 py-2 rounded-full mt-2 font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105">
//                                 Join Our Movement
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Contact Content */}
//             <ContactSection />

//             {/* Footer */}
//             <footer className="bg-[var(--dark-charcoal)] text-[var(--soft-white)]">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <div className="lg:col-span-2">
//                             <div className="text-3xl font-bold bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] bg-clip-text text-transparent mb-4">
//                                 Bharat Economic Forum
//                             </div>
//                             <p className="text-gray-300 mb-6 leading-relaxed">
//                                 An Independent Think Tank for accelerating the vision of achieving Viksit Bharat by 2047. We facilitate funding, collaboration, and innovation for self-economic development of individuals to collectively drive India's development.
//                             </p>
//                             <div className="flex space-x-4">
//                                 <a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors duration-200">
//                                     <Facebook className="w-6 h-6" />
//                                 </a>
//                                 <a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors duration-200">
//                                     <Twitter className="w-6 h-6" />
//                                 </a>
//                                 <a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors duration-200">
//                                     <Linkedin className="w-6 h-6" />
//                                 </a>
//                                 <a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors duration-200">
//                                     <Instagram className="w-6 h-6" />
//                                 </a>
//                             </div>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-semibold text-[var(--soft-white)] mb-4">Quick Links</h3>
//                             <ul className="space-y-2">
//                                 <li>
//                                     <a href="#home" className="text-gray-300 hover:text-[var(--soft-white)] transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
//                                         Home
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#about" className="text-gray-300 hover:text-[var(--soft-white)] transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
//                                         About Us
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#industries" className="text-gray-300 hover:text-[var(--soft-white)] transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }}>
//                                         Initiatives
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#gallery" className="text-gray-300 hover:text-[var(--soft-white)] transition-colors duration-200" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
//                                         Events
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-gray-300 hover:text-[var(--soft-white)] transition-colors duration-200">
//                                         Leadership Awards
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-semibold text-[var(--soft-white)] mb-4">Connect With Us</h3>
//                             <div className="space-y-3">
//                                 <div className="flex items-center gap-3">
//                                     <Mail className="w-5 h-5 text-accent-cyan" />
//                                     <span className="text-gray-300">info@bharateconomicforum.org</span>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <Phone className="w-5 h-5 text-accent-cyan" />
//                                     <span className="text-gray-300">+91 98765 43210</span>
//                                 </div>
//                                 <div className="flex items-center gap-3">
//                                     <MapPin className="w-5 h-5 text-accent-cyan" />
//                                     <span className="text-gray-300">New Delhi, India</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="border-t border-gray-700 mt-12 pt-8">
//                         <div className="max-w-md mx-auto text-center">
//                             <h3 className="text-xl font-semibold text-[var(--soft-white)] mb-4">Join Our Movement</h3>
//                             <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates on BEF initiatives and be part of India's historic journey.</p>
//                             <div className="flex gap-2">
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-[var(--soft-white)] placeholder:text-neutral-gray focus:outline-none focus:border-[var(--accent-cyan)]"
//                                 />
//                                 <button className="bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-6 py-2 rounded-full hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-all duration-200 transform hover:scale-105">
//                                     Subscribe
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//                         <p className="text-gray-400">
//                             © 2025 Bharat Economic Forum. All rights reserved. | Building a legacy of strength, unity, and sustainable progress
//                         </p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Contact;
// Developer: Athulkrishna M - General (Main Website) - Feature: Standalone Contact Page UI for BEF main website
// Note: Standalone UI only, no routing or dynamic navigation included




import React, { useState } from 'react';

const Contact = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <span className="font-bold text-xl text-blue-700">BEF</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('events')} className="hover:text-blue-600">Events</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection('events')} className="block w-full text-left hover:text-blue-600">Events</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-blue-600">Contact</button>
          </div>
        )}
      </nav>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-700">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-10">
            Reach out to us for collaborations, partnerships, and inquiries related to the Bharat Economic Forum.
          </p>
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-left font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-left font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-left font-medium text-gray-700 mb-1">Msg</label>
              <textarea id="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Sen
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
