export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
        Welcome to Bharath Economic Forum
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-xl">
        Empowering India's Future with Web3, AI & DeepTech
      </p>
      <button to="/web_ai/salespage" className="px-6 py-2 border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white transition rounded">
        Learn More
      </button>
    </section>
  );
}
