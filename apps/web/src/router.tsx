import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { TaskListPage } from './pages/TaskListPage';
import { BoardPage } from './pages/BoardPage';
import { BoardSettingsPage } from './pages/BoardSettingsPage';
import { LoginPage } from './pages/LoginPage';

export function AppRouter() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="tasks" element={<TaskListPage />} />
        <Route path="tasks/:id" element={<TaskListPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="board/settings" element={<BoardSettingsPage />} />
      </Route>
    </Routes>
  );
}
