import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { useThemeStore } from '../stores/themeStore';
import { ThemeToggle } from '../components/ui/ThemeToggle';

function renderToggle() {
  return render(<ThemeToggle />);
}

describe('ThemeToggle', () => {
  beforeEach(() => {
    useThemeStore.setState({ theme: 'light' });
    document.documentElement.setAttribute('data-theme', 'light');
  });

  it('renders theme toggle button', () => {
    renderToggle();
    expect(
      screen.getByRole('button', { name: /switch to dark theme/i })
    ).toBeInTheDocument();
  });

  it('toggles data-theme attribute on click', async () => {
    renderToggle();
    const button = screen.getByRole('button', { name: /switch to/i });

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    await userEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    await userEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
