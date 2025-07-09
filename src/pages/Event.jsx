// Developer: Utibe Patrick - Food and Agriculture - Feature: Worked on the contact page
// Developer: Manasa - Environment and Sustainability - Feature: Worked on the responsiveness


import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Menu, X } from 'lucide-react';

import ContactSection from '../components/ContactSection';
import Header from '../components/Header'
import EventsPage from './events';
const Event = () => {


    return (
        <>
        <Header />
        <div className="min-h-screen bg-soft-white">
           <EventsPage/>
        </div>
        </>
    );
};

export default Event;