import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Sidebar } from '../components/layout/Sidebar';

function renderSidebar(initialEntries = ['/dashboard']) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Sidebar />
    </MemoryRouter>
  );
}

describe('Sidebar', () => {
  it('renders all navigation items', () => {
    renderSidebar();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Tasks')).toBeInTheDocument();
    expect(screen.getByText('Board')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('highlights the active nav item for /dashboard', () => {
    renderSidebar(['/dashboard']);
    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).toHaveClass('active');
  });

  it('highlights the active nav item for /tasks', () => {
    renderSidebar(['/tasks']);
    const tasksLink = screen.getByText('Tasks').closest('a');
    expect(tasksLink).toHaveClass('active');
  });

  it('does not highlight inactive nav items', () => {
    renderSidebar(['/dashboard']);
    const tasksLink = screen.getByText('Tasks').closest('a');
    expect(tasksLink).not.toHaveClass('active');
  });
});
