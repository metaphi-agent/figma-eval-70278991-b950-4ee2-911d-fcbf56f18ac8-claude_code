import { InputHTMLAttributes } from 'react';

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Toggle({
  label,
  checked = false,
  onCheckedChange,
  className = '',
  ...props
}: ToggleProps) {
  const handleClick = () => {
    onCheckedChange?.(!checked);
  };

  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        {...props}
      />
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleClick}
        className={`
          relative w-10 h-5 rounded-full transition-colors duration-200
          ${checked ? 'bg-system-blue' : 'bg-black-100'}
        `}
      >
        <span
          className={`
            absolute top-0.5 left-0.5 w-4 h-4
            bg-white rounded-full shadow-md
            transition-transform duration-200
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
      {label && (
        <span className="text-xs text-black-900 tracking-[0.3px] leading-5">
          {label}
        </span>
      )}
    </label>
  );
}
