import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'google';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
  leftIcon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  leftIcon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-bold text-[15px] tracking-[0.3px] leading-5
    rounded-md transition-all duration-150
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: `
      bg-system-blue text-white
      hover:bg-[#0066DD] active:bg-[#0055CC]
    `,
    secondary: `
      bg-transparent text-system-blue border border-system-blue
      hover:bg-system-blue/10 active:bg-system-blue/20
    `,
    google: `
      bg-black-800 text-white
      hover:bg-black-700 active:bg-black-900
    `,
  };

  const sizeStyles = {
    sm: 'h-8 px-4 text-[13px]',
    md: 'h-10 px-6',
    lg: 'h-12 px-8 text-[16px]',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
