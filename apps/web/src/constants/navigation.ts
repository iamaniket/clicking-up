export const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { label: 'Tasks', path: '/tasks', icon: 'checklist' },
  { label: 'Board', path: '/board', icon: 'grid_view' },
  { label: 'Settings', path: '/board/settings', icon: 'settings' },
] as const;

export const MOBILE_NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { label: 'Tasks', path: '/tasks', icon: 'checklist' },
  { label: 'Board', path: '/board', icon: 'grid_view' },
  { label: 'Create', path: '#create', icon: 'add_circle' },
] as const;
