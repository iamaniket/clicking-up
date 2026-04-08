import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BaseCard } from '../components/ui/BaseCard';

describe('BaseCard', () => {
  it('renders children', () => {
    render(<BaseCard>Card content</BaseCard>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    const { container } = render(<BaseCard>Test</BaseCard>);
    expect(container.firstChild).toHaveClass('rounded-2xl');
  });

  it('applies featured variant classes', () => {
    const { container } = render(<BaseCard variant="featured">Test</BaseCard>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('from-primary/10');
  });

  it('merges custom className', () => {
    const { container } = render(<BaseCard className="my-custom">Test</BaseCard>);
    expect(container.firstChild).toHaveClass('my-custom');
  });

  it('passes data-testid', () => {
    render(<BaseCard data-testid="card-test">Test</BaseCard>);
    expect(screen.getByTestId('card-test')).toBeInTheDocument();
  });
});
