import { ReactNode } from 'react';

interface BadgeProps {
  className?: string;
  children: ReactNode;
  'data-testid'?: string;
  'data-status'?: string;
}

export function Badge({ className = '', children, ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-lg px-2.5 py-1 text-xs font-bold ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
