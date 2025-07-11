import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Camera, ArrowRight } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profilePhoto: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, profilePhoto: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation placeholder - teammates can enhance
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Dummy signup logic - save user data to localStorage
      const userData = {
        name: formData.name,
        email: formData.email,
        image: formData.profilePhoto || "/dummy.png"
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginMethod', 'email');
      
      setIsLoading(false);
      alert(`Welcome ${userData.name}! Your account has been created successfully.`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        profilePhoto: '',
        password: '',
        confirmPassword: ''
      });
      
      // Navigate to home page
      navigate('/home');
    }, 2000);
  };

  const handleGoogleSignup = async () => {
    setIsGoogleLoading(true);
    
    // Simulate Google OAuth flow
    setTimeout(() => {
      // Dummy Google signup logic
      const userData = {
        name: "Google User",
        email: "user@gmail.com",
        image: "https://lh3.googleusercontent.com/a/default-user=s96-c"
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginMethod', 'google');
      
      setIsGoogleLoading(false);
      alert(`Welcome ${userData.name}! Your account has been created successfully with Google.`);
      
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
                Join BEF
              </h1>
              <p className="text-neutral-gray text-sm">
                Create your Bharat Economic Forum account
              </p>
            </div>

            {/* Signup Form Card */}
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-gray-100">
              
              {/* Google Signup Button */}
              <button
                onClick={handleGoogleSignup}
                disabled={isGoogleLoading || isLoading}
                className="w-full mb-4 bg-white border-2 border-gray-300 text-dark-charcoal px-4 py-2.5 rounded-full font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isGoogleLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    Creating with Google...
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
                  <span className="px-3 bg-white text-neutral-gray">Or create account with email</span>
                </div>
              </div>

              {/* Email Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-dark-charcoal mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 rounded-full border border-neutral-gray focus:border-accent-cyan focus:outline-none bg-soft-white text-dark-charcoal placeholder:text-neutral-gray transition-colors duration-200 text-sm"
                      placeholder="Enter your full name"
                      disabled={isLoading || isGoogleLoading}
                      required
                    />
                  </div>
                </div>

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

                {/* Profile Photo Field */}
                <div>
                  <label htmlFor="profilePhoto" className="block text-xs font-medium text-dark-charcoal mb-1">
                    Profile Photo (Optional)
                  </label>
                  <div className="space-y-2">
                    {/* URL Input */}
                    <div className="relative">
                      <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
                      <input
                        type="url"
                        name="profilePhoto"
                        id="profilePhoto"
                        value={formData.profilePhoto}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-2.5 rounded-full border border-neutral-gray focus:border-accent-cyan focus:outline-none bg-soft-white text-dark-charcoal placeholder:text-neutral-gray transition-colors duration-200 text-sm"
                        placeholder="Photo URL or upload below"
                        disabled={isLoading || isGoogleLoading}
                      />
                    </div>
                    
                    {/* File Upload and Preview in same row */}
                    <div className="flex items-center justify-between">
                      <label className="inline-block cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          disabled={isLoading || isGoogleLoading}
                        />
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-neutral-gray rounded-full text-xs transition-colors duration-200">
                          <Camera className="w-3 h-3" />
                          Upload
                        </span>
                      </label>
                      
                      {/* Preview */}
                      {formData.profilePhoto && (
                        <img
                          src={formData.profilePhoto}
                          alt="Profile preview"
                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                        />
                      )}
                    </div>
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
                      placeholder="Create a password"
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

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs font-medium text-dark-charcoal mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-10 py-2.5 rounded-full border border-neutral-gray focus:border-accent-cyan focus:outline-none bg-soft-white text-dark-charcoal placeholder:text-neutral-gray transition-colors duration-200 text-sm"
                      placeholder="Confirm your password"
                      disabled={isLoading || isGoogleLoading}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray hover:text-accent-cyan transition-colors duration-200"
                      disabled={isLoading || isGoogleLoading}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions - Placeholder */}
                <div className="text-xs text-neutral-gray">
                  By creating an account, you agree to our{' '}
                  <button type="button" className="text-accent-cyan hover:text-primary-blue transition-colors duration-200">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button type="button" className="text-accent-cyan hover:text-primary-blue transition-colors duration-200">
                    Privacy Policy
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
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              
              {/* Toggle to Login */}
              <div className="mt-4 text-center">
                <p className="text-neutral-gray text-sm">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-accent-cyan hover:text-primary-blue font-medium transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                </p>
              </div>

              {/* Demo Note */}
              <div className="mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-neutral-gray text-center">
                  <strong>Demo:</strong> All fields work with dummy data. Profile photo supports URL or file upload.
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

export default Signup;