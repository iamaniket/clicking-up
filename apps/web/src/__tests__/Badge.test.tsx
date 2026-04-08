import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from '../components/ui/Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies additional className', () => {
    const { container } = render(<Badge className="bg-red-500">Test</Badge>);
    expect(container.firstChild).toHaveClass('bg-red-500');
  });

  it('passes data-testid', () => {
    render(<Badge data-testid="my-badge">Test</Badge>);
    expect(screen.getByTestId('my-badge')).toBeInTheDocument();
  });

  it('passes data-status', () => {
    render(<Badge data-testid="badge" data-status="done">Done</Badge>);
    expect(screen.getByTestId('badge')).toHaveAttribute('data-status', 'done');
  });
});
