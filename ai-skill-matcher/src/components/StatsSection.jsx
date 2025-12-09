/**
 * Stats Section Component
 * Shows key platform statistics
 */

const StatsSection = () => {
  const stats = [
    {
      value: '50K+',
      label: 'Workers Registered',
      description: 'Skilled workers trust our platform'
    },
    {
      value: '10K+',
      label: 'Jobs Posted',
      description: 'Opportunities across industries'
    },
    {
      value: '8K+',
      label: 'Successful Matches',
      description: 'Workers found employment'
    },
    {
      value: '500+',
      label: 'Employers',
      description: 'Companies actively hiring'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-display font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-text-light text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
