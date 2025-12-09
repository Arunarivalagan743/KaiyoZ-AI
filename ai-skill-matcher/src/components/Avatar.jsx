/**
 * Avatar Component
 * User avatar with fallback initials
 */

const Avatar = ({ 
  src, 
  alt = 'User avatar',
  name,
  size = 'md',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl'
  };

  const getInitials = (name) => {
    if (!name) return '?';
    const names = name.trim().split(' ');
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`
          ${sizes[size]}
          rounded-md
          object-cover
          border-2 border-neutral-dark
          ${className}
        `}
      />
    );
  }

  return (
    <div
      className={`
        ${sizes[size]}
        rounded-md
        bg-secondary
        text-white
        font-semibold
        flex items-center justify-center
        ${className}
      `}
      aria-label={alt}
    >
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
