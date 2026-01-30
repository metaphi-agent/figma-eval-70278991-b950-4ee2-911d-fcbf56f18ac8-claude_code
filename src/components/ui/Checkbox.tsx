import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="w-4 h-4 rounded border-[var(--color-neutral-100)] text-[var(--color-primary-blue)] focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-0 cursor-pointer"
        {...props}
      />
      <label
        htmlFor={checkboxId}
        className="ml-2 text-[14px] text-[var(--color-neutral-900)] cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
}
