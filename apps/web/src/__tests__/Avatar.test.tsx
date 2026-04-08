import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from '../components/ui/Avatar';

describe('Avatar', () => {
  it('renders an image with src and alt', () => {
    render(<Avatar src="https://example.com/avatar.png" alt="Jane Doe" />);
    const img = screen.getByAltText('Jane Doe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.png');
  });

  it('applies xs size class', () => {
    render(<Avatar src="test.png" alt="Test" size="xs" />);
    const img = screen.getByAltText('Test');
    expect(img).toHaveClass('h-6', 'w-6');
  });

  it('applies md size class', () => {
    render(<Avatar src="test.png" alt="Test" size="md" />);
    const img = screen.getByAltText('Test');
    expect(img).toHaveClass('h-9', 'w-9');
  });

  it('adds border classes when border=true', () => {
    render(<Avatar src="test.png" alt="Test" border />);
    const img = screen.getByAltText('Test');
    expect(img.className).toContain('border-2');
  });

  it('does not add border by default', () => {
    render(<Avatar src="test.png" alt="Test" />);
    const img = screen.getByAltText('Test');
    expect(img.className).not.toContain('border-2');
  });

  it('sets title attribute from alt', () => {
    render(<Avatar src="test.png" alt="Jane Doe" />);
    expect(screen.getByAltText('Jane Doe')).toHaveAttribute('title', 'Jane Doe');
  });
});
