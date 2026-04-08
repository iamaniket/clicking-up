import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { FilterChip } from '../components/ui/FilterChip';

describe('FilterChip', () => {
  it('renders the label', () => {
    render(<FilterChip label="To Do" active={false} onClick={() => {}} />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
  });

  it('applies active styles when active=true', () => {
    render(<FilterChip label="Active" active={true} onClick={() => {}} />);
    const chip = screen.getByTestId('filter-chip');
    expect(chip.className).toContain('bg-primary');
  });

  it('applies inactive styles when active=false', () => {
    render(<FilterChip label="Inactive" active={false} onClick={() => {}} />);
    const chip = screen.getByTestId('filter-chip');
    expect(chip.className).toContain('bg-surface-container-highest');
  });

  it('fires onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<FilterChip label="Click" active={false} onClick={onClick} />);
    await user.click(screen.getByTestId('filter-chip'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
