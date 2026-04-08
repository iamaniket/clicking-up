import { InputHTMLAttributes } from 'react';

interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  icon?: string;
  onChange?: (value: string) => void;
}

export function BaseInput({
  icon,
  onChange,
  className = '',
  ...rest
}: BaseInputProps) {
  return (
    <div className="relative">
      {icon && (
        <span className="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 text-lg text-outline">
          {icon}
        </span>
      )}
      <input
        className={`w-full rounded-xl bg-surface-container-highest py-2.5 text-sm text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none ${
          icon ? 'pl-12 pr-4' : 'px-4'
        } ${className}`}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        {...rest}
      />
    </div>
  );
}
