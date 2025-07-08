
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
    Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
    ArrowRight, Menu, X
} from 'lucide-react';

import AboutFullSection from '../components/AboutSection/AboutFullSection';

const About = () => {

   
    return (
        <div className="min-h-screen bg-soft-white">
            {/* Navigation */}

            {/* About Content */}
            <AboutFullSection />

            {/* Footer */}
            {/* <footer className="bg-[var(--dark-charcoal)] text-[var(--soft-white)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-2">
                            <div className="text-3xl font-bold bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] bg-clip-text text-transparent mb-4">
                                Bharat Economic Forum
                            </div>
                            <p className="text-gray-400">Empowering industries, communities, and innovators through inclusive dialogues and forward-thinking strategies.</p>
                        </div>
                    </div>
                </div>
            </footer> */}


        </div>
    );
};

export default About;
