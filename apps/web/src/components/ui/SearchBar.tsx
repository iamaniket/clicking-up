interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search tasks…' }: SearchBarProps) {
  return (
    <div className="relative">
      <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-lg text-outline">
        search
      </span>
      <input
        type="text"
        data-testid="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-surface-container-highest py-2.5 pr-4 pl-10 text-sm text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none"
      />
    </div>
  );
}
