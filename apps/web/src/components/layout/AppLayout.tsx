import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';

export function AppLayout() {
  return (
    <div className="flex min-h-dvh bg-surface">
      <Sidebar />
      <div className="flex flex-1 flex-col lg:ml-64">
        <TopBar />
        <main className="flex-1 px-4 py-6 pt-20 pb-24 md:px-8 lg:px-12 lg:pb-6">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
