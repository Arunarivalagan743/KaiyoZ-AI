/**
 * Worker Profile Card Component
 * Displays worker information with skills and actions
 */

import { HiLocationMarker, HiClock, HiDownload, HiCheckCircle, HiEye } from 'react-icons/hi';
import Card from './Card';
import Avatar from './Avatar';
import SkillTag from './SkillTag';

const WorkerProfileCard = ({ 
  worker = {
    name: 'Rajesh Kumar',
    avatar: null,
    title: 'Skilled Carpenter',
    location: 'Mumbai, Maharashtra',
    experience: '5 years',
    skills: ['Carpentry', 'Furniture Making', 'Wood Finishing', 'Installation'],
    availability: 'Immediate',
    verified: true
  },
  onGenerateResume,
  onViewProfile
}) => {
  return (
    <Card className="animate-slide-up hover:border-primary transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <Avatar 
          src={worker.avatar}
          name={worker.name}
          size="lg"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-lg font-semibold text-primary truncate">
              {worker.name}
            </h3>
            {worker.verified && (
              <span 
                className="flex-shrink-0"
                title="Verified Worker"
              >
                <HiCheckCircle className="w-5 h-5 text-secondary" />
              </span>
            )}
          </div>
          <p className="text-text-secondary font-medium">{worker.title}</p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-text-secondary">
          <HiLocationMarker className="w-4 h-4 flex-shrink-0 text-primary" />
          <span className="text-sm">{worker.location}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <HiClock className="w-4 h-4 flex-shrink-0 text-primary" />
          <span className="text-sm">{worker.experience} experience</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-secondary rounded-full"></span>
          <span className="text-sm text-secondary font-medium">
            {worker.availability} availability
          </span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-primary mb-3">Skills</p>
        <div className="flex flex-wrap gap-2">
          {worker.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} variant="default" />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button 
          onClick={onGenerateResume}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-primary-light active:scale-[0.98] transition-all duration-200"
        >
          <HiDownload className="w-4 h-4" />
          Generate Resume
        </button>
        <button 
          onClick={onViewProfile}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-primary text-primary font-semibold text-sm rounded-md hover:bg-primary hover:text-white transition-all duration-200"
        >
          <HiEye className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
};

export default WorkerProfileCard;
