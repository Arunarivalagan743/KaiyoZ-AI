/**
 * Card Component
 * Reusable card container with consistent styling
 */

const Card = ({ 
  children, 
  className = '',
  padding = 'md',
  hoverable = false,
  onClick
}) => {
  const paddingSizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-white
        rounded-lg
        border border-neutral-dark
        ${paddingSizes[padding]}
        ${hoverable ? 'cursor-pointer hover:border-primary hover:-translate-y-0.5 transition-all duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
