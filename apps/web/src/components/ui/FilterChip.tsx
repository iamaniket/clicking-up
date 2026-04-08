interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      data-testid="filter-chip"
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
        active
          ? 'bg-primary text-on-primary shadow-sm'
          : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
      }`}
    >
      {label}
    </button>
  );
}
