import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Quote } from 'lucide-react';
import SalesSection from '../../components/salessection/salessection';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const SalesPage = () => {
    const benefits = [
        {
            title: 'Maximize Yields',
            description: 'Leverage AI-driven insights to optimize crop production and reduce waste.',
            icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        },
        {
            title: 'Sustainable Farming',
            description: 'Adopt eco-friendly practices with our tailored sustainability solutions.',
            icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        },
        {
            title: 'Real-Time Data',
            description: 'Access weather, soil, and crop data instantly to make informed decisions.',
            icon: <CheckCircle className="h-6 w-6 text-green-500" />,
        },
    ];

    const testimonials = [
        {
            quote: 'AgriNxt\'s Pro Plan transformed our farm\'s efficiency. The predictive analytics helped us boost yields by 20%!',
            author: 'Ravi Sharma, Farmer',
        },
        {
            quote: 'The Enterprise Plan\'s custom solutions were a game-changer for our cooperative. Highly recommend!',
            author: 'Anita Patel, Agribusiness Owner',
        },
    ];

    return (
        <div className="agriculture-industry">
            {/* Navigation */}
            {/* <Navbar /> */}

            {/* Breadcrumb */}
            {/* <div className="breadcrumb">
                <div className="breadcrumb-container">
                    <Link to="/agriculture" className="breadcrumb-back">
                        <ArrowLeft size={16} />
                        <span>Back to Agriculture</span>
                    </Link>
                    <div className="breadcrumb-separator">/</div>
                    <div className="breadcrumb-current">Pricing</div>
                </div>
            </div> */}

            {/* Main Content */}
            <main className="main-content">
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Empower Your Farm with AgriNxt
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Discover pricing plans designed to scale with your agricultural needs, from small farms to large agribusinesses.
                        </p>
                        <a
                            href="mailto:sales@agrinxt.com"
                            className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started Today
                        </a>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                            Why Choose AgriNxt?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section (Reusing SalesSection) */}
                <SalesSection />

                {/* Testimonials Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                            What Our Customers Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Quote className="h-6 w-6 text-green-500 mb-4" />
                                    <p className="text-gray-600 mb-4 leading-relaxed">{testimonial.quote}</p>
                                    <p className="text-sm font-semibold text-gray-800">{testimonial.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-green-500 to-teal-600 text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            Contact our sales team for a personalized demo or to discuss custom enterprise solutions.
                        </p>
                        <a
                            href="mailto:sales@agrinxt.com"
                            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >

                            Talk to Sales
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default SalesPage;