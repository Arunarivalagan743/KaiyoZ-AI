/**
 * Features Section Component
 * Highlights key features of the platform
 */

import { HiMicrophone, HiDocument, HiBriefcase, HiUser } from 'react-icons/hi';
import Card from './Card';

const FeaturesSection = () => {
  const features = [
    {
      icon: <HiMicrophone className="w-7 h-7" />,
      title: 'Voice-First Profile',
      description: 'Just speak about your skills and experience. Our AI creates your profile automatically.',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: <HiDocument className="w-7 h-7" />,
      title: 'Instant Resume',
      description: 'Get a professional resume generated in seconds. Download and share with employers.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: <HiBriefcase className="w-7 h-7" />,
      title: 'Smart Job Matching',
      description: 'AI matches you with jobs that fit your skills. No endless scrolling required.',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: <HiUser className="w-7 h-7" />,
      title: 'Direct Connection',
      description: 'Connect directly with employers. No middlemen, no confusion.',
      color: 'bg-primary/10 text-primary'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
            Simple steps to your next opportunity
          </h2>
          <p className="text-text-secondary text-lg">
            We've made job hunting as easy as having a conversation. No complex forms, no confusing steps.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center animate-slide-up border border-neutral-dark hover:border-secondary/30"
              hoverable
              padding="lg"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-5 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
