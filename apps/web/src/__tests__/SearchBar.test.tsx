import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { SearchBar } from '../components/ui/SearchBar';

describe('SearchBar', () => {
  it('renders an input with the placeholder', () => {
    render(<SearchBar value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Search tasks…')).toBeInTheDocument();
  });

  it('accepts a custom placeholder', () => {
    render(<SearchBar value="" onChange={() => {}} placeholder="Find items…" />);
    expect(screen.getByPlaceholderText('Find items…')).toBeInTheDocument();
  });

  it('displays the current value', () => {
    render(<SearchBar value="hello" onChange={() => {}} />);
    expect(screen.getByTestId('search-input')).toHaveValue('hello');
  });

  it('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);
    await user.type(screen.getByTestId('search-input'), 'abc');
    expect(onChange).toHaveBeenCalledWith('a');
    expect(onChange).toHaveBeenCalledWith('b');
    expect(onChange).toHaveBeenCalledWith('c');
  });

  it('renders the search icon', () => {
    render(<SearchBar value="" onChange={() => {}} />);
    expect(screen.getByText('search')).toBeInTheDocument();
  });
});
