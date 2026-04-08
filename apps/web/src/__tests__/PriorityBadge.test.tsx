import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PriorityBadge } from '../components/ui/PriorityBadge';
import { TaskPriority } from '../types/task';

describe('PriorityBadge', () => {
  const cases: { priority: TaskPriority; label: string; colorHint: string }[] = [
    { priority: 'low', label: 'Low', colorHint: 'on-surface-variant' },
    { priority: 'medium', label: 'Medium', colorHint: 'primary' },
    { priority: 'high', label: 'High', colorHint: 'warning' },
    { priority: 'urgent', label: 'Urgent', colorHint: 'error' },
  ];

  it.each(cases)(
    'renders "$label" with correct color class for $priority',
    ({ priority, label, colorHint }) => {
      render(<PriorityBadge priority={priority} />);
      const badge = screen.getByTestId('priority-badge');
      expect(badge).toHaveTextContent(label);
      expect(badge.className).toContain(colorHint);
    }
  );

  it('renders an icon inside the badge', () => {
    render(<PriorityBadge priority="high" />);
    const badge = screen.getByTestId('priority-badge');
    expect(badge.querySelector('.material-symbols-outlined')).toBeInTheDocument();
  });
});
