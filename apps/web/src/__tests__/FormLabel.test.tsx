import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormLabel } from '../components/ui/FormLabel';

describe('FormLabel', () => {
  it('renders children text', () => {
    render(<FormLabel>Email Address</FormLabel>);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
  });

  it('applies uppercase tracking styles', () => {
    const { container } = render(<FormLabel>Test</FormLabel>);
    const label = container.querySelector('label')!;
    expect(label.className).toContain('uppercase');
    expect(label.className).toContain('tracking-widest');
  });

  it('merges custom className', () => {
    const { container } = render(<FormLabel className="mb-4">Test</FormLabel>);
    const label = container.querySelector('label')!;
    expect(label).toHaveClass('mb-4');
  });
});
