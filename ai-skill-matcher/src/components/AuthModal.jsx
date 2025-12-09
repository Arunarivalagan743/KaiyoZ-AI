/**
 * AuthModal Component
 * Aesthetic login/signup modal with Google authentication
 */
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiX } from 'react-icons/hi';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
  };

  const handleGoogleAuth = () => {
    console.log('Google authentication triggered');
    // Handle Google OAuth here
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-lg border border-neutral-dark overflow-hidden animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-secondary hover:text-primary hover:bg-neutral-dark rounded-md transition-all duration-200 z-10"
          aria-label="Close modal"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="bg-gradient-to-br from-primary to-primary-light px-8 pt-8 pb-8 text-white">
          <div className="flex items-center gap-2 mb-4">
            <img src="/Logo.png" alt="KaiyoZ AI" className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-lg">KaiyoZ AI</span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">
            {mode === 'login' ? 'Welcome Back' : 'Join Us Today'}
          </h2>
          <p className="text-white/80 text-sm">
            {mode === 'login' 
              ? 'Sign in to continue your journey' 
              : 'Create an account to get started'}
          </p>
        </div>

        {/* Form Section */}
        <div className="px-8 py-8">
          {/* Google Auth Button */}
          <button
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-neutral-darker rounded-md font-medium text-text-primary hover:bg-neutral hover:border-primary/30 transition-all duration-200 group"
          >
            <FcGoogle className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-neutral-darker" />
            <span className="text-sm text-text-light font-medium">or</span>
            <div className="flex-1 h-px bg-neutral-darker" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field - Only for Signup */}
            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-text-primary">Full Name</label>
                <div className="relative">
                  <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-neutral border border-neutral-darker rounded-lg text-text-primary placeholder:text-text-light focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">Email Address</label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 bg-neutral border border-neutral-darker rounded-lg text-text-primary placeholder:text-text-light focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-text-primary">Password</label>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-11 pr-12 py-3 bg-neutral border border-neutral-darker rounded-lg text-text-primary placeholder:text-text-light focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                  placeholder={mode === 'login' ? 'Enter your password' : 'Create a password'}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-light hover:text-primary transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password - Only for Login */}
            {mode === 'login' && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-secondary hover:text-secondary-dark font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-white font-semibold rounded-md hover:bg-primary-light active:scale-[0.98] transition-all duration-200 mt-2"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Mode */}
          <p className="text-center mt-6 text-sm text-text-secondary">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
            <button
              onClick={toggleMode}
              className="ml-1 font-semibold text-secondary hover:text-secondary-dark transition-colors"
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>

          {/* Privacy Text */}
          <p className="text-center mt-4 text-xs text-text-light leading-relaxed">
            By continuing, you agree to our{' '}
            <a href="#" className="text-secondary hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-secondary hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
