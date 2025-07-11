export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 px-4 mt-12 text-center sticky bottom-0 z-20">
      <div className="max-w-4xl mx-auto">
        {/* Newsletter */}
        <div className="md:col-span-2 mb-8">
          <h4 className="text-xl font-semibold mb-4 text-white">Stay Connected</h4>
          <p className="text-gray-300 mb-4">
            Get monthly updates on rural transformation initiatives across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-auto flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none focus:border-green-400 text-white"
            />
            <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-500 px-4 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:from-green-600 hover:to-teal-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links and Rights */}
        <div>
          © 2025 Bharath Economic Forum | All Rights Reserved
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Social Media</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
