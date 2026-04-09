import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ActivityLog } from '../components/tasks/ActivityLog';

describe('ActivityLog', () => {
  it('activity log shows entries', () => {
    render(<ActivityLog taskId="TASK-001" />);
    const entries = screen.getAllByTestId('activity-entry');
    expect(entries.length).toBeGreaterThan(0);
  });
});
