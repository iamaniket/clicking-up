import { ReactNode } from 'react';
import { BaseCard } from '../ui/BaseCard';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
  trendUp?: boolean;
  'data-testid'?: string;
  children?: ReactNode;
}

export function MetricCard({
  label,
  value,
  icon,
  trend,
  trendUp,
  children,
  ...rest
}: MetricCardProps) {
  return (
    <BaseCard className="flex items-start gap-4" {...rest}>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <span className="material-symbols-outlined text-xl text-primary">{icon}</span>
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          {label}
        </p>
        <p className="mt-0.5 text-2xl font-bold text-on-surface">{value}</p>
        {trend && (
          <p
            className={`mt-1 text-xs font-semibold ${
              trendUp ? 'text-success' : 'text-error'
            }`}
          >
            <span className="material-symbols-outlined text-xs align-middle">
              {trendUp ? 'trending_up' : 'trending_down'}
            </span>{' '}
            {trend}
          </p>
        )}
        {children}
      </div>
    </BaseCard>
  );
}
