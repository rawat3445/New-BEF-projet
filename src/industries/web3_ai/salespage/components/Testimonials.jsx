import React from 'react';

const Testimonials = () => (
  <section className="bg-gray-100 py-10 px-6" id="testimonials">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">💬 What Attendees Say</h2>
    <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
      <blockquote className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700">“This is where India’s future is actually discussed and decided.”</p>
        <footer className="mt-2 text-sm text-gray-500">— CEO, Bharat TechGrid</footer>
      </blockquote>
      <blockquote className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700">“From policy to product, every conversation led to impact.”</p>
        <footer className="mt-2 text-sm text-gray-500">— Innovation Head, Mahindra Rise</footer>
      </blockquote>
    </div>
  </section>
);

export default Testimonials;