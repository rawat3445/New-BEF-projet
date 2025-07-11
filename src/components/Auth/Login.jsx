import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation placeholder - teammates can enhance
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Dummy login logic - save user data to localStorage
      const userData = {
        name: "Test User",
        email: formData.email,
        image: "/dummy.png"
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      
      setIsLoading(false);
      alert('Login successful! Welcome back.');
      
      // Reset form
      setFormData({ email: '', password: '' });
      
      // Navigate to home page
      navigate('/home');
    }, 1500);
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    
    // Simulate Google OAuth flow
    setTimeout(() => {
      // Dummy Google login logic
      const userData = {
        name: "Google User",
        email: "user@gmail.com",
        image: "https://lh3.googleusercontent.com/a/default-user=s96-c"
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginMethod', 'google');
      
      setIsGoogleLoading(false);
      alert('Google login successful! Welcome back.');
      
      // Navigate to home page
      navigate('/home');
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-soft-white">
        <div className="pt-16 pb-8">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-dark-charcoal mb-2">
                Welcome Back
              </h1>
              <p className="text-neutral-gray text-sm">
                Sign in to your Bharat Economic Forum account
              </p>
            </div>

            {/* Login Form Card */}
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-gray-100">
              
              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading || isLoading}
                className="w-full mb-4 bg-white border-2 border-gray-300 text-dark-charcoal px-4 py-2.5 rounded-full font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isGoogleLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    Signing in with Google...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-white text-neutral-gray">Or continue with email</span>
                </div>
              </div>

              {/* Email Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-dark-charcoal mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-full border border-neutral-gray focus:border-accent-cyan focus:outline-none bg-soft-white text-dark-charcoal placeholder:text-neutral-gray transition-colors duration-200 text-sm"
                      placeholder="Enter your email"
                      disabled={isLoading || isGoogleLoading}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-xs font-medium text-dark-charcoal mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-10 py-2.5 rounded-full border border-neutral-gray focus:border-accent-cyan focus:outline-none bg-soft-white text-dark-charcoal placeholder:text-neutral-gray transition-colors duration-200 text-sm"
                      placeholder="Enter your password"
                      disabled={isLoading || isGoogleLoading}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray hover:text-accent-cyan transition-colors duration-200"
                      disabled={isLoading || isGoogleLoading}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <button
                    type="button"
                    className="text-xs text-accent-cyan hover:text-primary-blue transition-colors duration-200"
                    disabled={isLoading || isGoogleLoading}
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || isGoogleLoading}
                  className="w-full bg-[linear-gradient(to_right,var(--primary-blue),var(--accent-cyan))] text-soft-white px-4 py-2.5 rounded-full font-medium hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              
              {/* Toggle to Signup */}
              <div className="mt-4 text-center">
                <p className="text-neutral-gray text-sm">
                  Don't have an account?{' '}
                  <Link
                    to="/signup"
                    className="text-accent-cyan hover:text-primary-blue font-medium transition-colors duration-200"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              {/* Demo Note */}
              <div className="mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-neutral-gray text-center">
                  <strong>Demo:</strong> Use any email and password to test login, or try Google login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;