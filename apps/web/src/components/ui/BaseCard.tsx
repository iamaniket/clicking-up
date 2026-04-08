import { ReactNode } from 'react';

const variantClasses = {
  default:
    'rounded-2xl bg-surface-container-lowest p-4 shadow-sm shadow-outline-variant/10',
  elevated:
    'rounded-2xl bg-surface-container-lowest p-6 shadow-lg shadow-outline-variant/10',
  featured:
    'rounded-2xl bg-gradient-to-br from-primary/10 to-tertiary/10 p-5 shadow-sm shadow-outline-variant/10',
  flat: 'rounded-2xl bg-surface-container p-4',
};

interface BaseCardProps {
  variant?: keyof typeof variantClasses;
  className?: string;
  children: ReactNode;
  'data-testid'?: string;
}

export function BaseCard({
  variant = 'default',
  className = '',
  children,
  ...rest
}: BaseCardProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </div>
  );
}
