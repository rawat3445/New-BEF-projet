// developer: Athulkrishna(GamingAndEsports) work:done a contact section pge

import { Mail, Phone, HelpCircle, ArrowRight, MapPin } from 'lucide-react';

const ContactSection2= () => {
  return (
    <div className="bg-soft-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[linear-gradient(to_right,#f8fbff,#e6f0fa)] text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-4">How can we help?</h1>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
            Our team is here every day to assist you. Have questions, suggestions, or partnership inquiries? Choose the best way to get in touch!
          </p>
          <div className="mt-6">
            <a
              href="#contact-options"
              className="inline-flex items-center px-6 py-3 bg-[var(--primary-blue)] text-white rounded-full font-semibold hover:shadow-lg transition hover:scale-105"
            >
              Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section id="contact-options" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-dark-charcoal mb-2">Contact Us</h2>
            <p className="text-neutral-gray text-sm">Choose how you'd like to reach us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f5f9ff] p-6 rounded-xl shadow-sm text-center">
              <HelpCircle className="mx-auto text-primary-blue w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Support Center</h3>
              <p className="text-neutral-gray text-sm mb-4">Quick answers to common questions.</p>
              <button className="text-primary-blue font-medium hover:underline">Find Answers</button>
            </div>

            <div className="bg-[#f5f9ff] p-6 rounded-xl shadow-sm text-center">
              <Mail className="mx-auto text-primary-blue w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-neutral-gray text-sm mb-4">We'll reply to you as quickly as we can.</p>
              <button className="text-primary-blue font-medium hover:underline">Email Us</button>
            </div>

            <div className="bg-[#f5f9ff] p-6 rounded-xl shadow-sm text-center">
              <Phone className="mx-auto text-primary-blue w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Call or Text</h3>
              <p className="text-neutral-gray text-sm mb-4">Reach out to us at +91 98765 43210</p>
              <button className="text-primary-blue font-medium hover:underline">Call Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Send Message + Connect Section */}

    <section className="bg-[#f2f8ff] py-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10">
    
    {/* Contact Info (nudged right using padding) */}
    <div className="md:col-span-6 pl-6 md:pl-10 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>

      <div className="space-y-4 text-neutral-dark text-sm">
        <div className="flex items-center space-x-3">
          <Mail className="text-primary-blue w-5 h-5" />
          <span>info@bharateconomicforum.org</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-primary-blue w-5 h-5" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="text-primary-blue w-5 h-5" />
          <span>New Delhi, India</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mt-6 mb-2">Follow Us</h3>
        <div className="flex space-x-4 text-primary-blue text-xl">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>

    {/* Map */}
    <div className="md:col-span-6 rounded overflow-hidden">
      <iframe
        className="w-full h-64 md:h-full rounded-lg border"
        src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactSection2;