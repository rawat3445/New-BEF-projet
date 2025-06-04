import React from 'react';

const RegisterNow = () => (
  <section className="relative py-16 px-4 overflow-hidden bg-white" id="register">
    <div className="absolute inset-0 pointer-events-none" />
    <div className="relative max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-slate-600/10 via-blue-600/10 to-purple-600/10 blur-2xl rounded-full"></div>
            <div className="relative p-3 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/70 shadow-xl">
              <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Register Now
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed font-light">
          Secure your spot at the Bharat Economic Forum Industry Conclave 2025.
        </p>
        <div className="flex justify-center mt-8">
          <div className="relative">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <div
              className="absolute inset-0 w-32 h-0.5 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-500 opacity-60"
              style={{
                animation: 'shimmerLine 4s ease-in-out infinite',
                background: 'linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.8), transparent)',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-center mb-8">
        <p className="text-base md:text-lg text-slate-700 font-medium">🔗 Website: <span className="font-semibold text-blue-700">bharateconomicforum.org</span></p>
        <p className="text-base md:text-lg text-slate-700 font-medium">📧 Email: <span className="font-semibold text-blue-700">connect@bharateconomicforum.org</span></p>
        <p className="text-base md:text-lg text-slate-700 font-medium">💬 Live Chat Support | 📞 <span className="font-semibold text-blue-700">+91-XXXX-XXXX</span></p>
      </div>
      <div className="flex justify-center">
        <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
          <span className="relative z-10 tracking-wide">Join the Movement</span>
        </button>
      </div>
    </div>
  </section>
);

export default RegisterNow;