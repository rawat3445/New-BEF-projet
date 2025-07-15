//created new signup page
//Riddhi, Siva

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import toast, { Toaster } from 'react-hot-toast';

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

if (!formData.name.trim()) {
  toast.error('Please enter your full name');
  return;
}
if (!formData.email.trim()) {
  toast.error('Please enter your email address');
  return;
}
if (!formData.password.trim()) {
  toast.error('Please enter a password');
  return;
}
if (!formData.confirmPassword.trim()) {
  toast.error('Please confirm your password');
  return;
}
if (formData.password !== formData.confirmPassword) {
  toast.error('Passwords do not match');
  return;
}

setIsLoading(true);
setTimeout(() => {
  const userData = {
    name: formData.name,
    email: formData.email,
    image: formData.profilePhoto || "/dummy.png"
  };
  localStorage.setItem('user', JSON.stringify(userData));
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('loginMethod', 'email');
  toast.success(`Welcome ${userData.name}! Account created successfully.`);
  setIsLoading(false);
  setFormData({ name: '', email: '', profilePhoto: '', password: '', confirmPassword: '' });
  navigate('/home');
}, 2000);
};

const handleGoogleSignup = async () => {
setIsGoogleLoading(true);
setTimeout(() => {
const userData = {
name: "Google User",
email: "user@gmail.com",
image: "https://lh3.googleusercontent.com/a/default-user=s96-c"
};
localStorage.setItem('user', JSON.stringify(userData));
localStorage.setItem('isAuthenticated', 'true');
localStorage.setItem('loginMethod', 'google');
toast.success(`Welcome ${userData.name}! Signed up with Google.`);
setIsGoogleLoading(false);
navigate('/home');
}, 2000);
};

return (
<>
<Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
<Header />
<div className="min-h-screen bg-gradient-to-br from-[#eef2f3] to-[#8e9eab] flex items-center justify-center py-10">
<div className="w-full max-w-xl px-6">
<div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
<div className="text-center mb-6">
<h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#4facfe] to-[#150258] text-transparent bg-clip-text">
Join BEF
</h1>
<p className="text-sm text-neutral-500">Create your Bharat Economic Forum account</p>
</div>
<button
onClick={handleGoogleSignup}
disabled={isGoogleLoading || isLoading}
className="w-full mb-4 bg-white border-2 border-gray-300 text-dark-charcoal px-4 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
>
{isGoogleLoading ? (
<>
<div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
Creating with Google...
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
<span className="bg-white px-3">or create account with email</span>
</div>
</div>
<form onSubmit={handleSubmit} noValidate className="space-y-4">
<div className="relative">
<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
<input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2.5 rounded-full border border-neutral-gray focus:ring-2 focus:ring-[#4facfe] bg-gray-50 text-sm" placeholder="Full Name" />
</div>
<div className="relative">
<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
<input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2.5 rounded-full border border-neutral-gray focus:ring-2 focus:ring-[#4facfe] bg-gray-50 text-sm" placeholder="Email Address" />
</div>
<div className="relative">
<input type="url" name="profilePhoto" value={formData.profilePhoto} onChange={handleInputChange} className="w-full pl-3 pr-3 py-2.5 rounded-full border border-neutral-gray focus:ring-2 focus:ring-[#4facfe] bg-gray-50 text-sm" placeholder="Profile photo URL (optional)" />
</div>
<div className="relative">
<input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
</div>
<div className="relative">
<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
<input
type={showPassword ? 'text' : 'password'}
name="password"
value={formData.password}
onChange={handleInputChange}
className="w-full pl-10 pr-10 py-2.5 rounded-full border border-neutral-gray focus:ring-2 focus:ring-[#4facfe] bg-gray-50 text-sm"
placeholder="Password"
/>
<button
type="button"
onClick={() => setShowPassword(!showPassword)}
className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray"
>
{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
</button>
</div>
<div className="relative">
<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-gray" />
<input
type={showConfirmPassword ? 'text' : 'password'}
name="confirmPassword"
value={formData.confirmPassword}
onChange={handleInputChange}
className="w-full pl-10 pr-10 py-2.5 rounded-full border border-neutral-gray focus:ring-2 focus:ring-[#4facfe] bg-gray-50 text-sm"
placeholder="Confirm Password"
/>
<button
type="button"
onClick={() => setShowConfirmPassword(!showConfirmPassword)}
className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray"
>
{showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
</button>
</div>
<button
type="submit"
disabled={isLoading || isGoogleLoading}
className="w-full bg-gradient-to-r from-[#4facfe] to-[#150258] text-white px-4 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
>
{isLoading ? (
<>
<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
Creating Account...
</>
) : (
<>
Create Account <ArrowRight className="w-4 h-4" />
</>
)}
</button>
</form>
<div className="mt-4 text-center text-sm text-neutral-600">
Already have an account?{' '}
<Link to="/login" className="bg-gradient-to-r from-[#4facfe] to-[#150258] bg-clip-text text-transparent font-medium hover:underline">
Sign In
</Link>
</div>
</div>
</div>
</div>
<Footer />
</>
);
};

export default Signup;