import { ReactNode } from 'react';

interface FormLabelProps {
  children: ReactNode;
  className?: string;
}

export function FormLabel({ children, className = '' }: FormLabelProps) {
  return (
    <label
      className={`mb-1 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ${className}`}
    >
      {children}
    </label>
  );
}
