import { Link } from "react-router-dom";
import Logo from "../assets/beflogo.jpeg";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-rose-800 shadow-md">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo and Branding */}
        <div className="flex items-center">
          <img src={Logo} alt="BEF Logo" className="w-12 h-auto mr-3" />
          <div>
            <h1 className="text-xl font-bold text-white">
              Bharat Economic Forum
            </h1>
            <p className="text-sm text-gray-300 -mt-1">Empowering Innovation</p>
          </div>
        </div>

        {/* Navigation Links with transparent box */}
        <nav className="flex gap-4 text-sm md:text-base">
          <Link
            to="/"
            className="text-white border border-white rounded-full px-4 py-1 bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/web_ai/salespage"
            className="text-white border border-white rounded-full px-4 py-1 bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            Sales
          </Link>
        </nav>
      </div>
    </header>
  );
}
