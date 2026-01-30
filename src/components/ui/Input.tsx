import { InputHTMLAttributes, useState } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'tel';
  error?: string;
  showPasswordToggle?: boolean;
}

export function Input({
  label,
  type = 'text',
  error,
  showPasswordToggle = false,
  className = '',
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[11px] text-black-800 tracking-[0.3px] leading-3 mb-2 pl-4">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          className={`
            w-full h-12 px-4 py-2
            bg-black-50 border border-black-100 rounded-md
            text-[15px] text-black-900 placeholder:text-black-500
            transition-all duration-150
            hover:border-black-500
            focus:border-system-blue focus:ring-0
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-system-red' : ''}
            ${className}
          `}
          {...props}
        />
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <img
              src="./assets/icons/eye-icon.svg"
              alt=""
              className={`w-4 h-4 ${showPassword ? 'opacity-100' : 'opacity-60'}`}
            />
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 pl-4 text-[11px] text-system-red tracking-[0.3px]">
          {error}
        </p>
      )}
    </div>
  );
}
