import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BaseButton } from '../components/ui/BaseButton';

describe('BaseButton', () => {
  it('renders children', () => {
    render(<BaseButton>Click me</BaseButton>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<BaseButton>Test</BaseButton>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-primary');
  });

  it('applies secondary variant', () => {
    render(<BaseButton variant="secondary">Test</BaseButton>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('bg-surface-container-highest');
  });

  it('applies ghost variant', () => {
    render(<BaseButton variant="ghost">Test</BaseButton>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('text-on-surface-variant');
  });

  it('renders icon when provided', () => {
    render(<BaseButton icon="add">Add</BaseButton>);
    expect(screen.getByText('add')).toBeInTheDocument();
  });

  it('fires onClick handler', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<BaseButton onClick={onClick}>Click</BaseButton>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('applies size classes', () => {
    render(<BaseButton size="sm">Small</BaseButton>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('text-xs');
  });
});
