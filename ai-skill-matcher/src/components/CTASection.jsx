/**
 * CTA Section Component
 * Call to action for both workers and employers
 */

import { HiMicrophone, HiBriefcase, HiArrowRight, HiCheck } from 'react-icons/hi';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Workers CTA */}
          <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-xl p-8 lg:p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary rounded-lg mb-6">
                <HiMicrophone className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                Looking for Work?
              </h3>
              
              <p className="text-text-light mb-8 max-w-sm">
                Create your profile in minutes using just your voice. Get matched with jobs that value your skills.
              </p>
              
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-light active:scale-[0.98] transition-all duration-200">
                Start Free Profile
                <HiArrowRight className="w-5 h-5" />
              </button>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-light">
                <span className="flex items-center gap-1"><HiCheck className="w-4 h-4 text-secondary" /> 100% Free</span>
                <span className="flex items-center gap-1"><HiCheck className="w-4 h-4 text-secondary" /> No resume needed</span>
                <span className="flex items-center gap-1"><HiCheck className="w-4 h-4 text-secondary" /> Takes 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Employers CTA */}
          <div className="relative bg-gradient-to-br from-secondary to-secondary-dark rounded-xl p-8 lg:p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-lg mb-6">
                <HiBriefcase className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                Hiring Workers?
              </h3>
              
              <p className="text-white/80 mb-8 max-w-sm">
                Find verified, skilled workers in your area. Our AI matches you with the right candidates fast.
              </p>
              
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-light active:scale-[0.98] transition-all duration-200">
                Post a Job Free
                <HiArrowRight className="w-5 h-5" />
              </button>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1"><HiCheck className="w-4 h-4" /> Verified workers</span>
                <span className="flex items-center gap-1"><HiCheck className="w-4 h-4" /> AI matching</span>
                <span className="flex items-center gap-1"><HiCheck className="w-4 h-4" /> Direct contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
