import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { BottomNav } from '../components/layout/BottomNav';

function renderBottomNav(initialEntries = ['/dashboard']) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <BottomNav />
    </MemoryRouter>
  );
}

describe('BottomNav', () => {
  it('renders all 4 mobile navigation items', () => {
    renderBottomNav();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Tasks')).toBeInTheDocument();
    expect(screen.getByText('Board')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  it('highlights the active item', () => {
    renderBottomNav(['/tasks']);
    const tasksLink = screen.getByText('Tasks').closest('a');
    expect(tasksLink).toHaveClass('active');
  });
});
