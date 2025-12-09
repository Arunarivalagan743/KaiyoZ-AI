/**
 * Button Component
 * Primary and Secondary button variants following the design system
 */

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  ariaLabel,
  className = ''
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-[12px]
    transition-all duration-200 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: `
      bg-[#1C3D5A] text-white
      hover:bg-[#2A5A80] hover:shadow-lg hover:-translate-y-0.5
      focus-visible:ring-[#4CBBA0]
      active:translate-y-0
    `,
    secondary: `
      bg-transparent text-[#1C3D5A] border-2 border-[#1C3D5A]
      hover:bg-[#1C3D5A] hover:text-white hover:shadow-lg hover:-translate-y-0.5
      focus-visible:ring-[#1C3D5A]
      active:translate-y-0
    `,
    accent: `
      bg-[#4CBBA0] text-white
      hover:bg-[#3A9A83] hover:shadow-lg hover:-translate-y-0.5
      focus-visible:ring-[#1C3D5A]
      active:translate-y-0
    `,
    ghost: `
      bg-transparent text-[#1C3D5A]
      hover:bg-[#E8ECEF]
      focus-visible:ring-[#1C3D5A]
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};

export default Button;
