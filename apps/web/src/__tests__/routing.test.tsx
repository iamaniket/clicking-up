import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../app/app';

describe('Routing', () => {
  it('redirects / to /dashboard', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
  });

  it('renders task list page at /tasks', () => {
    render(
      <MemoryRouter initialEntries={['/tasks']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('tasklist-page')).toBeInTheDocument();
  });

  it('renders board page at /board', () => {
    render(
      <MemoryRouter initialEntries={['/board']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('board-page')).toBeInTheDocument();
  });

  it('renders board settings page at /board/settings', () => {
    render(
      <MemoryRouter initialEntries={['/board/settings']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('board-settings-page')).toBeInTheDocument();
  });

  it('renders login page at /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });
});
