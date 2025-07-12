export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-800 text-gray-200 text-sm py-10 px-4 mt-12 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Newsletter */}
        <div className="md:col-span-2 mb-10">
          <h4 className="text-2xl font-semibold mb-3 text-white">
            Stay Connected
          </h4>
          <p className="mb-5 text-gray-300">
            Get monthly updates on rural transformation initiatives across
            India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-auto flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-gray-300"
            />
            <button className="w-full sm:w-auto bg-white text-indigo-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom Text and Links */}
        <div className="text-sm text-gray-300">
          © 2025 Bharath Economic Forum | All Rights Reserved
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Social Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
