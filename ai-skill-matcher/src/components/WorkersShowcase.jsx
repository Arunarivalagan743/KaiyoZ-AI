/**
 * Workers Showcase Section
 * Displays sample worker profiles
 */

import WorkerProfileCard from './WorkerProfileCard';

const WorkersShowcase = ({ onGenerateResume }) => {
  const workers = [
    {
      name: 'Rajesh Kumar',
      avatar: null,
      title: 'Skilled Carpenter',
      location: 'Mumbai, Maharashtra',
      experience: '5 years',
      skills: ['Carpentry', 'Furniture Making', 'Wood Finishing', 'Installation'],
      availability: 'Immediate',
      verified: true
    },
    {
      name: 'Anita Sharma',
      avatar: null,
      title: 'Professional Electrician',
      location: 'Delhi NCR',
      experience: '8 years',
      skills: ['Wiring', 'AC Installation', 'Repair Work', 'Industrial'],
      availability: '1 week',
      verified: true
    },
    {
      name: 'Mohan Singh',
      avatar: null,
      title: 'Expert Plumber',
      location: 'Bangalore, Karnataka',
      experience: '6 years',
      skills: ['Plumbing', 'Pipe Fitting', 'Bathroom Work', 'Maintenance'],
      availability: 'Immediate',
      verified: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F7F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-[#4CBBA0] font-semibold text-sm uppercase tracking-wider mb-3">
            Featured Workers
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C3D5A] mb-4">
            Skilled workers ready to hire
          </h2>
          <p className="text-[#5A6B7A] text-lg">
            Browse profiles of verified workers with proven skills and experience.
          </p>
        </div>

        {/* Workers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {workers.map((worker, index) => (
            <WorkerProfileCard 
              key={index} 
              worker={worker}
              onGenerateResume={() => onGenerateResume?.(worker)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkersShowcase;
