import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/navigation';

export function Sidebar() {
  return (
    <aside
      data-testid="sidebar"
      className="fixed top-0 left-0 z-40 hidden h-dvh w-64 flex-col border-r border-outline-variant/15 bg-surface-container-lowest lg:flex"
    >
      <div className="flex h-16 items-center gap-3 px-6">
        <span className="material-symbols-outlined text-primary text-2xl">
          layers
        </span>
        <span className="text-lg font-bold tracking-tight text-on-surface">
          TaskFlow
        </span>
      </div>

      <nav className="mt-4 flex flex-1 flex-col gap-1 px-3">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                isActive
                  ? 'active bg-primary-container/40 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`
            }
          >
            <span className="material-symbols-outlined text-xl">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4">
        <div className="flex items-center gap-3 rounded-xl bg-surface-container p-4">
          <span className="material-symbols-outlined text-primary">
            auto_awesome
          </span>
          <span className="text-xs font-medium text-on-surface-variant">
            Sync with Cloud
          </span>
        </div>
      </div>
    </aside>
  );
}
