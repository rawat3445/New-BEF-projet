import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            A Platform for Growth.
          </h1>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Viksit Bharat through Innovation.
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Join us in shaping the future of India's development through cross-sector collaboration and transformative initiatives.
          </p>
          <a
            href="/sales"
            className="inline-block px-6 py-3 border border-purple-500 text-purple-400 rounded hover:bg-purple-600 hover:text-white transition"
          >
            Explore Sales Page
          </a>
        </div>

        {/* Right: 3D Rotating Globe */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <div className="relative w-[300px] h-[300px]">
            {/* Placeholder for globe animation */}
            <iframe
              src="https://my.spline.design/globeexample"
              frameBorder="0"
              width="100%"
              height="100%"
              title="Rotating Globe"
              className="rounded-full"
            ></iframe>
            {/* Thought sentence overlay */}
            <div className="absolute bottom-2 w-full text-center text-sm text-blue-400 animate-pulse">
              "Collaborating for a Viksit Bharat"
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
