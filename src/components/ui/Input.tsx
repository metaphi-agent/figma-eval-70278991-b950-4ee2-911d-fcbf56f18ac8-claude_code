import { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
}

export function Input({
  label,
  error,
  showPasswordToggle = false,
  type = 'text',
  className = '',
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  const baseStyles = 'w-full px-4 py-3.5 rounded-[var(--radius-sm)] bg-[var(--color-neutral-50)] border transition-colors duration-150 text-[15px] text-[var(--color-neutral-900)] placeholder:text-[var(--color-neutral-500)]';

  const stateStyles = error
    ? 'border-[var(--color-system-red)] focus:border-[var(--color-system-red)] focus:outline-none'
    : isFocused
    ? 'border-[var(--color-primary-blue)] outline-none'
    : 'border-[var(--color-neutral-100)] focus:border-[var(--color-primary-blue)] focus:outline-none';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[13px] text-[var(--color-neutral-600)] mb-2 font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          className={`${baseStyles} ${stateStyles} ${showPasswordToggle ? 'pr-12' : ''} ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-800)] transition-colors p-1"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.26 11.602C2.942 11.207 2.783 11.01 2.718 10.643C2.67 10.376 2.67 10.024 2.718 9.757C2.783 9.39 2.942 9.193 3.26 8.798C4.546 7.228 6.816 5 10 5C13.184 5 15.454 7.228 16.74 8.798C17.058 9.193 17.217 9.39 17.282 9.757C17.33 10.024 17.33 10.376 17.282 10.643C17.217 11.01 17.058 11.207 16.74 11.602C15.454 13.172 13.184 15.4 10 15.4C6.816 15.4 4.546 13.172 3.26 11.602Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.843 8.843C8.49123 9.19477 8.28943 9.66864 8.28943 10.1625C8.28943 10.6564 8.49123 11.1302 8.843 11.482C9.19477 11.8338 9.66864 12.0356 10.1625 12.0356C10.6564 12.0356 11.1302 11.8338 11.482 11.482" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.067 6.933C12.0294 6.14129 10.7775 5.71405 9.49171 5.71405C8.20589 5.71405 6.95398 6.14129 5.91641 6.933C4.48641 8.041 3.39141 9.706 2.71641 10.643C2.67041 10.707 2.64641 10.739 2.62808 10.7874C2.61408 10.8235 2.60741 10.8695 2.60741 10.9C2.60741 10.9305 2.61408 10.9765 2.62808 11.0126C2.64641 11.061 2.67041 11.093 2.71641 11.157C3.39141 12.094 4.48641 13.759 5.91641 14.867" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.2836 10.643C16.8086 11.307 16.1696 12.102 15.4136 12.817M7.5 15.9L9.5 17.5M12.5 17.5L14.5 15.9M2.5 2.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 text-[13px] text-[var(--color-system-red)]">{error}</p>
      )}
    </div>
  );
}
