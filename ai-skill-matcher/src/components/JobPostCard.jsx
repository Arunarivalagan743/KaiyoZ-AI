/**
 * Job Post Card Component
 * Displays job listing for employer view
 */

import { HiLocationMarker, HiCurrencyRupee, HiClock, HiUserGroup, HiLightningBolt } from 'react-icons/hi';
import Card from './Card';
import SkillTag from './SkillTag';

const JobPostCard = ({ 
  job = {
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
  onFindWorkers,
  onViewDetails
}) => {
  return (
    <Card className="animate-slide-up hover:border-primary transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-lg font-semibold text-primary">
              {job.title}
            </h3>
            {job.urgent && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-md">
                <HiLightningBolt className="w-3 h-3" />
                Urgent
              </span>
            )}
          </div>
          <p className="text-text-secondary font-medium">{job.company}</p>
        </div>
        <div className="flex-shrink-0 w-11 h-11 bg-primary/5 rounded-md flex items-center justify-center">
          <span className="text-primary font-bold text-lg">
            {job.company.charAt(0)}
          </span>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="flex items-center gap-2 text-text-secondary">
          <HiLocationMarker className="w-4 h-4 flex-shrink-0 text-secondary" />
          <span className="text-sm truncate">{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <HiCurrencyRupee className="w-4 h-4 flex-shrink-0 text-secondary" />
          <span className="text-sm truncate">{job.salary}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <HiClock className="w-4 h-4 flex-shrink-0 text-secondary" />
          <span className="text-sm">{job.type}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <HiUserGroup className="w-4 h-4 flex-shrink-0 text-secondary" />
          <span className="text-sm">{job.applicants} applicants</span>
        </div>
      </div>

      {/* Required Skills */}
      <div className="mb-5">
        <p className="text-sm font-semibold text-primary mb-2">Required Skills</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} variant="accent" />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-dark">
        <span className="text-sm text-text-light">
          Posted {job.postedDate}
        </span>
        <div className="flex gap-2">
          <button 
            onClick={onViewDetails}
            className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-primary hover:bg-neutral-dark rounded-md transition-all duration-200"
          >
            Details
          </button>
          <button 
            onClick={onFindWorkers}
            className="px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-light hover:shadow-md active:scale-[0.98] transition-all duration-200"
          >
            Find Workers
          </button>
        </div>
      </div>
    </Card>
  );
};

export default JobPostCard;
