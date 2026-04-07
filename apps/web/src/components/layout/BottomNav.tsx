import { NavLink } from 'react-router-dom';
import { MOBILE_NAV_ITEMS } from '../../constants/navigation';

export function BottomNav() {
  return (
    <nav
      data-testid="bottom-nav"
      className="fixed right-0 bottom-0 left-0 z-40 flex items-center justify-around border-t border-outline-variant/15 bg-surface-container-lowest/90 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      {MOBILE_NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
              isActive
                ? 'active text-primary'
                : 'text-on-surface-variant'
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
  );
}
