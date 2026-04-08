import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusBadge } from '../components/ui/StatusBadge';
import { TaskStatus } from '../types/task';

describe('StatusBadge', () => {
  const cases: { status: TaskStatus; label: string; expectedStatus: string }[] = [
    { status: 'todo', label: 'To Do', expectedStatus: 'todo' },
    { status: 'in_progress', label: 'In Progress', expectedStatus: 'in_progress' },
    { status: 'review', label: 'Review', expectedStatus: 'review' },
    { status: 'done', label: 'Done', expectedStatus: 'done' },
  ];

  it.each(cases)(
    'renders "$label" with correct data-status for $status',
    ({ status, label, expectedStatus }) => {
      render(<StatusBadge status={status} />);
      const badge = screen.getByTestId('status-badge');
      expect(badge).toHaveTextContent(label);
      expect(badge).toHaveAttribute('data-status', expectedStatus);
    }
  );

  it('status badge color matches status value', () => {
    const { rerender } = render(<StatusBadge status="done" />);
    const badge = screen.getByTestId('status-badge');
    expect(badge.className).toContain('success');

    rerender(<StatusBadge status="in_progress" />);
    const badge2 = screen.getByTestId('status-badge');
    expect(badge2.className).toContain('primary');

    rerender(<StatusBadge status="review" />);
    const badge3 = screen.getByTestId('status-badge');
    expect(badge3.className).toContain('warning');
  });
});
