/**
 * Resume Preview Component
 * Shows a downloadable resume preview
 */

import { HiDownload, HiLocationMarker, HiPhone, HiX } from 'react-icons/hi';
import Card from './Card';
import Avatar from './Avatar';
import SkillTag from './SkillTag';

const ResumePreview = ({ 
  worker = {
    name: 'Rajesh Kumar',
    title: 'Skilled Carpenter',
    phone: '+91 98765 43210',
    email: 'rajesh.k@email.com',
    location: 'Mumbai, Maharashtra',
    summary: 'Experienced carpenter with 5+ years in furniture making, wood finishing, and installation. Strong attention to detail and commitment to quality craftsmanship.',
    skills: ['Carpentry', 'Furniture Making', 'Wood Finishing', 'Installation', 'Measurements', 'Power Tools'],
    experience: [
      {
        title: 'Senior Carpenter',
        company: 'Quality Woodworks',
        duration: '2020 - Present',
        description: 'Lead carpenter handling custom furniture projects and team supervision.'
      },
      {
        title: 'Carpenter',
        company: 'HomeBuild Solutions',
        duration: '2018 - 2020',
        description: 'Residential and commercial carpentry work including doors, windows, and cabinets.'
      }
    ]
  },
  onDownload,
  onClose 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-neutral rounded-lg border border-neutral-dark animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-md border border-neutral-dark flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
          aria-label="Close preview"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Resume Content */}
        <div className="p-6 lg:p-8">
          <h2 className="font-display text-xl font-bold text-primary mb-6 text-center">
            Resume Preview
          </h2>
          
          {/* Resume Card */}
          <Card className="bg-white" padding="lg">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pb-6 border-b border-neutral-dark mb-6">
              <Avatar name={worker.name} size="xl" />
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-display text-2xl font-bold text-primary mb-1">
                  {worker.name}
                </h3>
                <p className="text-lg text-secondary font-medium mb-2">
                  {worker.title}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <HiPhone className="w-4 h-4" />
                    {worker.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiLocationMarker className="w-4 h-4" />
                    {worker.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                Professional Summary
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {worker.summary}
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {worker.skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} variant="primary" />
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                Work Experience
              </h4>
              <div className="space-y-4">
                {worker.experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-4 border-l-2 border-secondary"
                  >
                    <h5 className="font-semibold text-primary">{exp.title}</h5>
                    <p className="text-sm text-secondary font-medium">{exp.company}</p>
                    <p className="text-xs text-text-light mb-1">{exp.duration}</p>
                    <p className="text-sm text-text-secondary">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button 
              onClick={onDownload}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-light active:scale-[0.98] transition-all duration-200"
            >
              <HiDownload className="w-5 h-5" />
              Download PDF
            </button>
            <button 
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-200"
            >
              Close
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-center text-xs text-text-light mt-4">
            Your data is secure. We never share your information without consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
