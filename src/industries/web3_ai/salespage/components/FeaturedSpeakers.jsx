import React from 'react';

const FeaturedSpeakers = () => {
  return (
    <section className="bg-gray-100 py-10 px-6" id="speakers">
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">🎤 Featured Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            name: 'Dr. Nandan Mehta',
            title: 'Chief Data Officer, NITI Aayog'
          },
          {
            name: 'Neha Kulkarni',
            title: 'VP, Global Blockchain Alliance'
          },
          {
            name: 'Lt. Gen. Arvind Rao',
            title: 'National Security AI Taskforce'
          }
        ].map((speaker, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center">
            <div className="h-24 w-24 rounded-full bg-purple-200 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{speaker.name}</h3>
            <p className="text-sm text-gray-600">{speaker.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
