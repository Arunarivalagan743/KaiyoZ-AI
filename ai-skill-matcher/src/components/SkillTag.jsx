/**
 * SkillTag Component
 * Displays skill badges with consistent styling
 */

import { HiX } from 'react-icons/hi';

const SkillTag = ({ 
  skill, 
  variant = 'default',
  removable = false,
  onRemove,
  className = '' 
}) => {
  const variants = {
    default: 'bg-neutral-dark text-primary',
    primary: 'bg-primary text-white',
    accent: 'bg-secondary text-white',
    outline: 'bg-transparent border border-primary text-primary'
  };

  return (
    <span 
      className={`
        inline-flex items-center gap-1.5
        px-3 py-1.5
        text-sm font-medium
        rounded-md
        transition-all duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {skill}
      {removable && (
        <button
          onClick={() => onRemove?.(skill)}
          className="ml-1 hover:opacity-70 focus:outline-none"
          aria-label={`Remove ${skill}`}
        >
          <HiX className="w-3.5 h-3.5" />
        </button>
      )}
    </span>
  );
};

export default SkillTag;
