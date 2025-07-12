import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields', { duration: 3000 });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const userData = {
        name: "Test User",
        email: formData.email,
        image: "/dummy.png"
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');

      toast.success('Login successful! Welcome back.', {
        duration: 4000
      });

      setFormData({ email: '', password: '' });
      setIsLoading(false);
      navigate('/home');
    }, 1500);
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    setTimeout(() => {
      const userData = {
        name: "User",
        email: "user@gmail.com",
        image: "https://lh3.googleusercontent.com/a/default-user=s96-c"
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginMethod', 'google');

      toast.success('Google login successful! Welcome back.', {
        duration: 4000
      });

      setIsGoogleLoading(false);
      navigate('/home');
    }, 2000);
  };

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '8px',
          },
          success: {
            style: {
              background: '#4facfe',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#ff4d4f',
              color: '#fff',
            },
          },
        }}
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#eef2f3] to-[#75a6cd] flex items-center justify-center py-10">
        <div className="w-full max-w-md px-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-md transition-all">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#4facfe] to-[#150258] text-transparent bg-clip-text">
                Welcome Back
              </h1>
              <p className="text-sm text-neutral-500">Sign in to your Bharat Economic Forum account</p>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={isGoogleLoading || isLoading}
              className="w-full mb-4 bg-white border-2 border-gray-300 text-dark-charcoal px-4 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              {isGoogleLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  Signing in with Google...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24">{/* Google Icon */}</svg>
                  Continue with Google
                </>
              )}
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs text-gray-400">
                <span className="bg-white px-3">or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
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
                    className={`w-full pl-10 pr-3 py-2.5 rounded-full border ${
                      submitted && !formData.email ? 'border-red-500' : 'border-neutral-gray'
                    } focus:ring-2 focus:ring-[#4facfe] outline-none bg-gray-50 text-sm`}
                    placeholder="Enter your email"
                    disabled={isLoading || isGoogleLoading}
                  />
                </div>
              </div>

              {/* Password */}
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
                    className={`w-full pl-10 pr-10 py-2.5 rounded-full border ${
                      submitted && !formData.password ? 'border-red-500' : 'border-neutral-gray'
                    } focus:ring-2 focus:ring-[#4facfe] outline-none bg-gray-50 text-sm`}
                    placeholder="Enter your password"
                    disabled={isLoading || isGoogleLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray hover:text-[#4facfe]"
                    disabled={isLoading || isGoogleLoading}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs text-[#4facfe] hover:text-[#150258] transition-colors"
                  disabled={isLoading || isGoogleLoading}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading || isGoogleLoading}
                className="w-full bg-gradient-to-r from-[#4facfe] to-[#150258] text-white px-4 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-neutral-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="bg-gradient-to-r from-[#4facfe] to-[#150258] bg-clip-text text-transparent font-medium hover:underline"
              >
                Sign Up
              </Link>
            </div>

            <div className="mt-4 p-2 bg-gray-100 rounded-md text-xs text-gray-500 text-center">
              <strong>Demo:</strong> Use any email/password or Google login to try it out.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
