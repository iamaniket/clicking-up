import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { AppLayout } from '../components/layout/AppLayout';

describe('AppLayout', () => {
  it('renders the sidebar', () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );
    const dashboardLinks = screen.getAllByText('Dashboard');
    expect(dashboardLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the top bar', () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('renders the bottom navigation', () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  it('renders a main content area', () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
