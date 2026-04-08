import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { TopBar } from '../components/layout/TopBar';

describe('TopBar', () => {
  it('renders the TaskFlow brand text', () => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    expect(screen.getByText('TaskFlow')).toBeInTheDocument();
  });

  it('renders the search button', () => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('renders the theme toggle', () => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/switch to .* theme/i)).toBeInTheDocument();
  });

  it('renders the user avatar', () => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Avatar')).toBeInTheDocument();
  });
});
