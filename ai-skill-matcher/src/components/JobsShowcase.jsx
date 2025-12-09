/**
 * Jobs Showcase Section
 * Displays sample job postings
 */

import JobPostCard from './JobPostCard';

const JobsShowcase = () => {
  const jobs = [
    {
      id: 1,
      title: 'Experienced Carpenter Needed',
      company: 'BuildRight Construction',
      location: 'Delhi NCR',
      salary: '₹25,000 - ₹35,000/month',
      type: 'Full-time',
      skills: ['Carpentry', 'Furniture', 'Installation'],
      postedDate: '2 days ago',
      applicants: 12,
      urgent: true
    },
    {
      id: 2,
      title: 'Electrician for Commercial Project',
      company: 'Sharma Electricals',
      location: 'Mumbai',
      salary: '₹30,000 - ₹40,000/month',
      type: 'Contract',
      skills: ['Wiring', 'Industrial', 'Safety'],
      postedDate: '3 days ago',
      applicants: 8,
      urgent: false
    },
    {
      id: 3,
      title: 'Plumber Required',
      company: 'HomeFix Services',
      location: 'Bangalore',
      salary: '₹22,000 - ₹28,000/month',
      type: 'Full-time',
      skills: ['Plumbing', 'Fitting', 'Repair'],
      postedDate: '1 day ago',
      applicants: 15,
      urgent: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-[#4CBBA0] font-semibold text-sm uppercase tracking-wider mb-3">
            Latest Opportunities
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1C3D5A] mb-4">
            Jobs matching your skills
          </h2>
          <p className="text-[#5A6B7A] text-lg">
            New opportunities posted daily. Find work that values your expertise.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {jobs.map((job) => (
            <JobPostCard 
              key={job.id} 
              job={job}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsShowcase;
