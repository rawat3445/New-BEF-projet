// Developer: Utibe Patrick - Food and Agriculture - Feature: Worked on the contact page
// Developer: Manasa - Food and Agriculture - Feature: Worked on the responsiveness

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
        <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
            <nav style={{ backgroundColor: '#F9FAFB', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'fixed', top: 0, width: '100%', zIndex: 50 }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.875rem', fontWeight: 'bold', background: 'linear-gradient(to right, #1E3A8A, #06B6D4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                        BEF
                    </div>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="hidden md:flex">
                        <a href="#home" style={{ color: '#1E3A8A', textDecoration: 'none', transition: 'color 0.3s' }} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>Home</a>
                        <a href="#about" style={{ color: '#1E3A8A', textDecoration: 'none', transition: 'color 0.3s' }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>About</a>
                        <div style={{ position: 'relative' }}>
                            <a href="#industries" style={{ color: '#1E3A8A', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>
                                Initiatives
                                <svg style={{ width: '16px', height: '16px', marginLeft: '4px', stroke: '#1E3A8A', transition: 'stroke 0.3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" onMouseOver={(e) => e.currentTarget.style.stroke = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.stroke = '#1E3A8A'}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                            <div style={{ display: 'none', position: 'absolute', backgroundColor: '#F9FAFB', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginTop: '8px', width: '256px' }} onMouseOver={(e) => e.currentTarget.style.display = 'block'} onMouseOut={(e) => e.currentTarget.style.display = 'none'} className="group-hover:block">
                                <div style={{ padding: '8px 16px', fontSize: '0.875rem', fontWeight: '600', color: '#6B7280' }}>Our Industries</div>
                                {industryItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        style={{ display: 'block', padding: '8px 16px', color: '#1E3A8A', textDecoration: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#E6F0FA'; e.currentTarget.style.color = '#06B6D4'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1E3A8A'; }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <a href="#events" style={{ color: '#1E3A8A', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>
                                Events
                                <svg style={{ width: '16px', height: '16px', marginLeft: '4px', stroke: '#1E3A8A', transition: 'stroke 0.3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" onMouseOver={(e) => e.currentTarget.style.stroke = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.stroke = '#1E3A8A'}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                            <div style={{ display: 'none', position: 'absolute', backgroundColor: '#F9FAFB', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginTop: '8px', width: '256px' }} onMouseOver={(e) => e.currentTarget.style.display = 'block'} onMouseOut={(e) => e.currentTarget.style.display = 'none'} className="group-hover:block">
                                <div style={{ padding: '8px 16px', fontSize: '0.875rem', fontWeight: '600', color: '#6B7280' }}>Upcoming Events</div>
                                {eventItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        style={{ display: 'block', padding: '8px 16px', color: '#1E3A8A', textDecoration: 'none', transition: 'background-color 0.3s, color 0.3s' }}
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#E6F0FA'; e.currentTarget.style.color = '#06B6D4'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1E3A8A'; }}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <a href="#contact" style={{ color: '#1E3A8A', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>Contact</a>
                        <button style={{ background: 'linear-gradient(to right, #1E3A8A, #06B6D4)', color: '#F9FAFB', padding: '8px 24px', borderRadius: '9999px', fontWeight: '600', transition: 'box-shadow 0.3s, transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>Join Our Movement</button>
                    </div>
                    <button style={{ color: '#1E3A8A' }} className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div style={{ backgroundColor: '#F9FAFB', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} className="md:hidden">
                        <div style={{ padding: '8px 16px' }}>
                            <a href="#home" style={{ display: 'block', padding: '8px 0', color: '#1E3A8A', textDecoration: 'none', transition: 'color 0.3s' }} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>Home</a>
                            <a href="#about" style={{ display: 'block', padding: '8px 0', color: '#1E3A8A', textDecoration: 'none', transition: 'color 0.3s' }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>About</a>
                            <div style={{ padding: '8px 0' }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6B7280' }}>INITIATIVES</div>
                                {industryItems.slice(0, 6).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        style={{ display: 'block', padding: '8px 16px', color: '#1E3A8A', textDecoration: 'none', transition: 'color 0.3s' }}
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                        onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                            <div style={{ padding: '8px 0' }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6B7280' }}>EVENTS</div>
                                {eventItems.slice(0, 4).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        style={{ display: 'block', padding: '8px 16px', color: '#1E3A8A', textDecoration: 'none', transition: 'color 0.3s' }}
                                        onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
                                        onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'}
                                        onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                            <a href="#contact" style={{ display: 'block', padding: '8px 0', color: '#1E3A8A', textDecoration: 'none', transition: 'color 0.3s' }} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#1E3A8A'}>Contact</a>
                            <button style={{ width: '100%', background: 'linear-gradient(to right, #1E3A8A, #06B6D4)', color: '#F9FAFB', padding: '8px 24px', borderRadius: '9999px', marginTop: '8px', fontWeight: '600', transition: 'box-shadow 0.3s, transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>Join Our Movement</button>
                        </div>
                    </div>
                )}
            </nav>

            <section id="contact" style={{ paddingTop: '96px', paddingBottom: '80px', background: 'linear-gradient(to bottom right, #E6F0FA, #F9FAFB, #E6F0FA)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
                        Get in Touch with{' '}
                        <span style={{ background: 'linear-gradient(to right, #1E3A8A, #06B6D4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                            Bharat Economic Forum
                        </span>
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: '#6B7280', maxWidth: '768px', margin: '0 auto', marginBottom: '32px' }}>
                        We're here to answer your questions, explore collaboration opportunities, and support your journey toward Viksit Bharat 2047.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0', backgroundColor: '#E6F0FA' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gap: '48px' }} className="md:grid-cols-2">
                        <div style={{ backgroundColor: '#F9FAFB', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>Send Us a Message</h2>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        style={{ marginTop: '4px', width: '100%', padding: '12px 16px', borderRadius: '9999px', border: '1px solid #6B7280', outline: 'none', transition: 'border-color 0.3s', color: '#111827', backgroundColor: '#F9FAFB' }}
                                        placeholder="Your Name"
                                        required
                                        onFocus={(e) => e.currentTarget.style.borderColor = '#06B6D4'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = '#6B7280'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        style={{ marginTop: '4px', width: '100%', padding: '12px 16px', borderRadius: '9999px', border: '1px solid #6B7280', outline: 'none', transition: 'border-color 0.3s', color: '#111827', backgroundColor: '#F9FAFB' }}
                                        placeholder="Your Email"
                                        required
                                        onFocus={(e) => e.currentTarget.style.borderColor = '#06B6D4'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = '#6B7280'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        style={{ marginTop: '4px', width: '100%', padding: '12px 16px', borderRadius: '9999px', border: '1px solid #6B7280', outline: 'none', transition: 'border-color 0.3s', color: '#111827', backgroundColor: '#F9FAFB' }}
                                        placeholder="Subject"
                                        required
                                        onFocus={(e) => e.currentTarget.style.borderColor = '#06B6D4'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = '#6B7280'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        style={{ marginTop: '4px', width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #6B7280', outline: 'none', transition: 'border-color 0.3s', color: '#111827', backgroundColor: '#F9FAFB', minHeight: '120px' }}
                                        placeholder="Your Message"
                                        required
                                        onFocus={(e) => e.currentTarget.style.borderColor = '#06B6D4'}
                                        onBlur={(e) => e.currentTarget.style.borderColor = '#6B7280'}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    style={{ width: '100%', background: 'linear-gradient(to right, #1E3A8A, #06B6D4)', color: '#F9FAFB', padding: '12px 24px', borderRadius: '9999px', fontWeight: '600', transition: 'box-shadow 0.3s, transform 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
                                >
                                    Send Message
                                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                                </button>
                                {isSubmitted && (
                                    <p style={{ color: '#10B981', textAlign: 'center', marginTop: '16px', animation: 'pulse 1.5s infinite' }}>
                                        Thank you for your message! We'll get back to you soon.
                                    </p>
                                )}
                            </form>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div>
                                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>Connect With Us</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <Mail style={{ width: '24px', height: '24px', color: '#06B6D4' }} />
                                        <span style={{ color: '#6B7280' }}>info@bharateconomicforum.org</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <Phone style={{ width: '24px', height: '24px', color: '#06B6D4' }} />
                                        <span style={{ color: '#6B7280' }}>+91 98765 43210</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <MapPin style={{ width: '24px', height: '24px', color: '#06B6D4' }} />
                                        <span style={{ color: '#6B7280' }}>New Delhi, India</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Follow Us</h3>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <a href="#" style={{ color: '#6B7280', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}>
                                        <Facebook style={{ width: '24px', height: '24px' }} />
                                    </a>
                                  
                                    <a href="#" style={{ color: '#6B7280', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}>
                                        <Linkedin style={{ width: '24px', height: '24px' }} />
                                    </a>
                                    <a href="#" style={{ color: '#6B7280', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}>
                                        <Instagram style={{ width: '24px', height: '24px' }} />
                                    </a>
                                </div>
                            </div>
                            <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112067.57931546033!2d77.1024901!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b2eac6e4c7%3A0x8b6f9731572a9b65!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1686148055363!5m2!1sen!2sus"
                                    width="100%"
                                    height="256"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{ backgroundColor: '#111827', color: '#F9FAFB' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
                    <div style={{ display: 'grid', gap: '32px' }} className="md:grid-cols-2 lg:grid-cols-4">
                        <div style={{ gridColumn: 'span 2' }} className="lg:col-span-2">
                            <div style={{ fontSize: '1.875rem', fontWeight: 'bold', background: 'linear-gradient(to right, #1E3A8A, #06B6D4)', WebkitBackgroundClip: 'text', color: 'transparent', marginBottom: '16px' }}>
                                Bharat Economic Forum
                            </div>
                            <p style={{ color: '#D1D5DB', marginBottom: '24px', lineHeight: '1.75' }}>
                                An Independent Think Tank for accelerating the vision of achieving Viksit Bharat by 2047. We facilitate funding, collaboration, and innovation for self-economic development of individuals to collectively drive India's development.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <a href="#" style={{ color: '#D1D5DB', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                                    <Facebook style={{ width: '24px', height: '24px' }} />
                                </a>
                                <a href="#" style={{ color: '#D1D5DB', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                                    <Linkedin style={{ width: '24px', height: '24px' }} />
                                </a>
                                <a href="#" style={{ color: '#D1D5DB', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#06B6D4'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>
                                    <Instagram style={{ width: '24px', height: '24px' }} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#F9FAFB', marginBottom: '16px' }}>Quick Links</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li><a href="#home" style={{ color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} onMouseOver={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>Home</a></li>
                                <li><a href="#about" style={{ color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} onMouseOver={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>About Us</a></li>
                                <li><a href="#industries" style={{ color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }} onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }} onMouseOver={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>Initiatives</a></li>
                                <li><a href="#gallery" style={{ color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }} onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} onMouseOver={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>Events</a></li>
                                <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseOut={(e) => e.currentTarget.style.color = '#D1D5DB'}>Leadership Awards</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#F9FAFB', marginBottom: '16px' }}>Connect With Us</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Mail style={{ width: '20px', height: '20px', color: '#06B6D4' }} />
                                    <span style={{ color: '#D1D5DB' }}>info@bharateconomicforum.org</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Phone style={{ width: '20px', height: '20px', color: '#06B6D4' }} />
                                    <span style={{ color: '#D1D5DB' }}>+91 98765 43210</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <MapPin style={{ width: '20px', height: '20px', color: '#06B6D4' }} />
                                    <span style={{ color: '#D1D5DB' }}>New Delhi, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #374151', marginTop: '48px', paddingTop: '32px' }}>
                        <div style={{ maxWidth: '448px', margin: '0 auto', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#F9FAFB', marginBottom: '16px' }}>Join Our Movement</h3>
                            <p style={{ color: '#D1D5DB', marginBottom: '24px' }}>Subscribe to our newsletter for the latest updates on BEF initiatives and be part of India's historic journey.</p>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{ flex: 1, padding: '8px 16px', borderRadius: '9999px', backgroundColor: '#1F2937', border: '1px solid #374151', color: '#F9FAFB', outline: 'none', transition: 'border-color 0.3s' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#06B6D4'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#374151'}
                                />
                                <button style={{ background: 'linear-gradient(to right, #1E3A8A, #06B6D4)', color: '#F9FAFB', padding: '8px 24px', borderRadius: '9999px', transition: 'box-shadow 0.2s, transform 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #374151', marginTop: '32px', paddingTop: '32px', textAlign: 'center' }}>
                        <p style={{ color: '#D1D5DB' }}>
                            © 2025 Bharat Economic Forum. All rights reserved. | Building a legacy of strength, unity, and sustainable progress
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;

// Developer: Utibe Patrick - Food and Agriculture - Feature: Worked on the contact page
// Developer: Manasa - Food and Agriculture - Feature: Worked on the responsiveness