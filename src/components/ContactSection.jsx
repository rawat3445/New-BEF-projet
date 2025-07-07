// Developer: Utibe Patrick - Food and Agriculture - Feature: Created reusable ContactSection component
// Developer: Manasa - Environment and Sustainability - Feature: Ensured responsiveness

import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
  formData.firstName &&
  formData.lastName &&
  formData.phone &&
  formData.email &&
  formData.subject &&
  formData.message
) {
  setIsSubmitted(true);
  setFormData({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  setTimeout(() => setIsSubmitted(false), 3000);
}

  };

  return (
    <div className="bg-soft-white">
      {/* Hero Section */}
      <section id="contact" className="pt-24 pb-20 bg-[linear-gradient(to_bottom_right,#E6F0FA,var(--soft-white),#E6F0FA)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-6">
            Get in Touch with{' '}
            <span className="bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] bg-clip-text text-transparent">
              Bharat Economic Forum
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto mb-8">
            We're here to answer your questions, explore collaboration opportunities, and support your journey toward Viksit Bharat 2047.
          </p>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-20 bg-[#E6F0FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-soft-white p-8 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-dark-charcoal">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 rounded-full border-neutral-gray focus:outline-none focus:border-[var(--accent-cyan)] bg-soft-white text-dark-charcoal placeholder:text-neutral-gray"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-dark-charcoal">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 rounded-full border-neutral-gray focus:outline-none focus:border-[var(--accent-cyan)] bg-soft-white text-dark-charcoal placeholder:text-neutral-gray"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-charcoal">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 rounded-full border-neutral-gray focus:outline-none focus:border-[var(--accent-cyan)] bg-soft-white text-dark-charcoal placeholder:text-neutral-gray"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-charcoal">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 rounded-full border-neutral-gray focus:outline-none focus:border-[var(--accent-cyan)] bg-soft-white text-dark-charcoal placeholder:text-neutral-gray"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-charcoal">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 rounded-full border-neutral-gray focus:outline-none focus:border-[var(--accent-cyan)] bg-soft-white text-dark-charcoal placeholder:text-neutral-gray"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-charcoal">Msg</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 rounded-lg border-neutral-gray focus:outline-none focus:border-[var(--accent-cyan)] bg-soft-white text-dark-charcoal placeholder:text-neutral-gray"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-[var(--soft-white)] px-6 py-3 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark-charcoal mb-6">Connect With Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-accent-cyan" />
                    <span className="text-neutral-gray">info@bharateconomicforum.org</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-accent-cyan" />
                    <span className="text-neutral-gray">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-accent-cyan" />
                    <span className="text-neutral-gray">New Delhi, India</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/bharateconomicforum" className="text-neutral-gray hover:text-accent-cyan transition-colors duration-200">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-neutral-gray hover:text-accent-cyan transition-colors duration-200">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/bharateconomicforum/posts/?feedView=all" className="text-neutral-gray hover:text-accent-cyan transition-colors duration-200">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/bharateconomicforum/" className="text-neutral-gray hover:text-accent-cyan transition-colors duration-200">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112067.57931546033!2d77.1024901!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b2eac6e4c7%3A0x8b6f9731572a9b65!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1686148055363!5m2!1sen!2sus"
                  width="100%"
                  height="256"
                  className="w-full h-64 border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;









