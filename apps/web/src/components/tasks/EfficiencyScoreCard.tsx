import { BaseCard } from '../ui/BaseCard';

interface EfficiencyScoreCardProps {
  label: string;
  value: string | number;
  icon: string;
  trend?: string;
}

export function EfficiencyScoreCard({ label, value, icon, trend }: EfficiencyScoreCardProps) {
  return (
    <BaseCard data-testid="efficiency-card">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-container">
          <span className="material-symbols-outlined text-lg text-on-primary-container">
            {icon}
          </span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
          {label}
        </span>
      </div>
      <p className="text-2xl font-bold text-on-surface">{value}</p>
      {trend && (
        <p className="mt-1 text-xs text-success font-semibold">{trend}</p>
      )}
    </BaseCard>
  );
}
