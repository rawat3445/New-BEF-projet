import { Link } from 'react-router-dom';

import Logo from "../assets/beflogo.jpeg"
export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f0c29] text-white px-6 py-3 shadow-md">
  <div className="flex justify-between items-center max-w-7xl mx-auto">
    {/* Logo */}
    <img
      className="h-12 w-auto"
      src={Logo}
      alt="BEF Logo"
    />

    {/* Links */}
    <div className="space-x-6 text-sm md:text-base">
      <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
      <Link to="/web_ai/salespage" className="hover:text-cyan-400 transition">Sales</Link>
    </div>
  </div>
</nav>

  );
}
