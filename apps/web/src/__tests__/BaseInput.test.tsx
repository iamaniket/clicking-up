import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BaseInput } from '../components/ui/BaseInput';

describe('BaseInput', () => {
  it('renders an input element', () => {
    render(<BaseInput placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('calls onChange with string value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<BaseInput onChange={onChange} placeholder="Type here" />);
    await user.type(screen.getByPlaceholderText('Type here'), 'hello');
    expect(onChange).toHaveBeenLastCalledWith('hello');
  });

  it('renders icon when provided', () => {
    render(<BaseInput icon="search" placeholder="Search" />);
    expect(screen.getByText('search')).toBeInTheDocument();
  });

  it('adds left padding when icon is present', () => {
    render(<BaseInput icon="search" placeholder="Search" />);
    const input = screen.getByPlaceholderText('Search');
    expect(input.className).toContain('pl-12');
  });

  it('uses standard padding without icon', () => {
    render(<BaseInput placeholder="No icon" />);
    const input = screen.getByPlaceholderText('No icon');
    expect(input.className).toContain('px-4');
  });
});
