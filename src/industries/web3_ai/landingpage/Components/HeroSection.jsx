import { useNavigate } from 'react-router-dom';
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
        Welcome to Bharath Economic Forum
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-xl">
        Empowering India's Future with Web3, AI & DeepTech
      </p>
      <button
        onClick={() => navigate('/about')}
        className="group bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center shadow-2xl"
      > Explore More
      </button>
    </section>
  );
}
