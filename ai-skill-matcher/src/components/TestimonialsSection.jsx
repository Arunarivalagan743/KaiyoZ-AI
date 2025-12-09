/**
 * Testimonials Section Component
 * Shows success stories from workers
 */

import { HiStar } from 'react-icons/hi';
import Card from './Card';
import Avatar from './Avatar';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Suresh Patel',
      role: 'Electrician',
      location: 'Ahmedabad',
      avatar: null,
      rating: 5,
      quote: 'I never thought finding a job could be this easy. Just spoke about my experience, and within a week I had 3 interview calls!'
    },
    {
      name: 'Meena Devi',
      role: 'Tailor',
      location: 'Jaipur',
      avatar: null,
      rating: 5,
      quote: 'The voice feature is amazing. I cannot write English well, but I could speak in Hindi. Now I work at a good boutique.'
    },
    {
      name: 'Ramu Yadav',
      role: 'Plumber',
      location: 'Lucknow',
      avatar: null,
      rating: 5,
      quote: 'The resume they created for me was very professional. The employer was impressed. Thank you AI Skill Matcher!'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Success Stories
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
            Real workers, real opportunities
          </h2>
          <p className="text-text-secondary text-lg">
            Hear from workers who found their next job through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-slide-up"
              padding="lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-dark">
                <Avatar name={testimonial.name} size="md" />
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-light">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
