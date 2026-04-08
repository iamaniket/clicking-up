import { ButtonHTMLAttributes, ReactNode } from 'react';

const variantClasses = {
  primary:
    'bg-primary text-on-primary shadow-sm hover:bg-primary-dim',
  secondary:
    'bg-surface-container-highest text-on-surface hover:bg-surface-container-high',
  ghost:
    'text-on-surface-variant hover:bg-surface-container-highest',
  danger:
    'bg-error text-on-error hover:bg-error/90',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
};

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  icon?: string;
  children: ReactNode;
}

export function BaseButton({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...rest
}: BaseButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold transition ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {icon && (
        <span className="material-symbols-outlined text-lg">{icon}</span>
      )}
      {children}
    </button>
  );
}
