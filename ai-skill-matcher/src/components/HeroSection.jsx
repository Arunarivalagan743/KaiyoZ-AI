/**
 * Hero Section Component
 * Main landing section with voice CTA
 */

import { HiMicrophone, HiArrowRight, HiCheckCircle, HiUserGroup, HiShieldCheck } from 'react-icons/hi';
import { FiPlay } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative bg-neutral overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-dark px-4 py-2 rounded-md text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Powered by AI • Simple & Fast
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
              Find jobs with your skills.{' '}
              <span className="text-secondary">No resume needed.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Just speak, we create your profile. Connect with employers who need your skills. 
              It's that simple.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-light active:scale-[0.98] transition-all duration-200">
                <HiMicrophone className="w-5 h-5" />
                Start with Voice
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-200">
                <FiPlay className="w-5 h-5" />
                How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-text-secondary">
                <HiCheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">100% Free for Workers</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <HiShieldCheck className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Your data stays private</span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white rounded-lg p-8 lg:p-12 border border-neutral-dark">
              {/* Phone Illustration */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-[420px] bg-primary rounded-xl p-3 border-2 border-primary-dark">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col">
                      {/* Phone Header */}
                      <div className="bg-primary px-4 py-3 flex items-center justify-center gap-2">
                        <img src="/Logo.png" alt="KaiyoZ AI" className="w-6 h-6 object-contain" />
                        <span className="text-white text-sm font-semibold">KaiyoZ AI</span>
                      </div>
                      
                      {/* Phone Content */}
                      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-neutral">
                        {/* Animated Voice Circle */}
                        <div className="relative mb-6">
                          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                            <HiMicrophone className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute inset-0 w-24 h-24 bg-secondary/30 rounded-full animate-ping"></div>
                        </div>
                        
                        <p className="text-primary font-medium text-center text-sm mb-2">
                          "I'm a carpenter with 5 years experience..."
                        </p>
                        <p className="text-text-light text-xs text-center">
                          Tap to speak
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -right-4 top-20 bg-white rounded-md p-3 border border-neutral-dark">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-secondary/10 rounded-md flex items-center justify-center">
                        <HiCheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-xs font-semibold text-primary">Profile Created!</span>
                    </div>
                  </div>
                  
                  <div className="absolute -left-4 bottom-32 bg-white rounded-md p-3 border border-neutral-dark">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                        <HiUserGroup className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-primary">3 job matches</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
