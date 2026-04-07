import { ThemeToggle } from '../ui/ThemeToggle';

export function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between border-b border-outline-variant/15 bg-surface-container-lowest/80 px-4 backdrop-blur-md md:px-6 lg:left-64">
      <div className="flex items-center gap-3 lg:hidden">
        <span className="material-symbols-outlined text-primary text-2xl">
          layers
        </span>
        <span className="text-lg font-bold tracking-tight text-on-surface">
          TaskFlow
        </span>
      </div>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-2">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-on-surface-variant transition-colors hover:bg-surface-container-high"
          aria-label="Search"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
        <ThemeToggle />
        <div className="h-9 w-9 rounded-full bg-primary-container">
          <img
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Alex"
            alt="Avatar"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
