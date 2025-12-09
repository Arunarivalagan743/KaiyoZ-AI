/**
 * Input Component
 * Form input with consistent styling and accessibility
 */

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  icon,
  className = '',
  id,
  name
}) => {
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-[#1C3D5A] mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9AAA]">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          className={`
            w-full
            ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3
            text-base text-[#1C3D5A]
            bg-white
            border-2 rounded-[12px]
            transition-all duration-200
            placeholder:text-[#8A9AAA]
            focus:outline-none focus:ring-2 focus:ring-[#4CBBA0] focus:border-transparent
            disabled:bg-[#E8ECEF] disabled:cursor-not-allowed
            ${error ? 'border-red-500' : 'border-[#D1D7DC] hover:border-[#1C3D5A]'}
          `}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-[#8A9AAA]">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
