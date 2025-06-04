import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-06-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
    const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-8 px-6 shadow-lg rounded-xl mx-auto my-8 max-w-4xl animate-pulse">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4">🚨 EARLY BIRD OFFER</h2>
      <p className="text-lg md:text-xl text-center font-semibold mb-2">
        💥 Register before <strong>June 20</strong> & Save ₹5,000 on Delegate Passes
      </p>
      <div className="flex justify-center items-center gap-6 text-2xl md:text-3xl font-mono">
        <div className="text-center">
          <div className="bg-white text-red-600 px-4 py-2 rounded shadow">{timeLeft.days}</div>
          <p className="text-sm text-white mt-1">Days</p>
        </div>
        <div className="text-center">
          <div className="bg-white text-red-600 px-4 py-2 rounded shadow">{timeLeft.hours}</div>
          <p className="text-sm text-white mt-1">Hours</p>
        </div>
        <div className="text-center">
          <div className="bg-white text-red-600 px-4 py-2 rounded shadow">{timeLeft.minutes}</div>
          <p className="text-sm text-white mt-1">Minutes</p>
        </div>
        <div className="text-center">
          <div className="bg-white text-red-600 px-4 py-2 rounded shadow">{timeLeft.seconds}</div>
          <p className="text-sm text-white mt-1">Seconds</p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
