
import { useNavigate,useLocation } from 'react-router-dom';
import { Navigate, Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom';
import { ChevronDown, Menu, X, User, LogOut } from 'lucide-react';
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/beflogo.jpeg";


export default function Navbar() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  const checkAuthStatus = () => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');
    
    if (authStatus === 'true' && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  checkAuthStatus();

  window.addEventListener('storage', checkAuthStatus);
  
  return () => {
    window.removeEventListener('storage', checkAuthStatus);
  };
}, []);

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('user');
  localStorage.removeItem('loginMethod');
  setIsAuthenticated(false);
  setUser(null);
  setShowUserDropdown(false);
  alert('You have logged out successfully.');
};


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
    <div className="space-x-6 flex flex-row text-sm md:text-base">
      <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
      <Link to="/web_ai/salespage" className="hover:text-cyan-400 transition">Sales</Link>
        {isAuthenticated && user ? (
  <div className="relative">
    <button 
      onClick={() => setShowUserDropdown(!showUserDropdown)}
      className="flex items-center gap-2 bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-soft-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105"
    >
      {user.image ? (
        <img 
          src={user.image} 
          alt={user.name}
          className="w-6 h-6 rounded-full object-cover border-2 border-white"
        />
      ) : (
        <User className="w-4 h-4" />
      )}
      <span className="max-w-[120px] truncate">{user.name}</span>
      <ChevronDown className="w-4 h-4" />
    </button>
    
    {/* User Dropdown */}
    {showUserDropdown && (
      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {user.image ? (
              <img 
                src={user.image} 
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-500" />
              </div>
            )}
            <div>
              <p className="font-semibold text-dark-charcoal">{user.name}</p>
              <p className="text-sm text-neutral-gray">{user.email}</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors duration-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <button 
    onClick={() => navigate('/login')}
    className="flex items-center gap-2 bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-soft-white px-6 py-2 rounded-full font-semibold hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105"
  >
    <User className="w-4 h-4" />
    Login
  </button>
)}
    </div>
  </div>



</nav>

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
