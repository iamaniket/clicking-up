import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TaskCard } from '../components/tasks/TaskCard';
import { Task } from '../types/task';
import { User } from '../types/user';

const mockTask: Task = {
  id: 'TASK-099',
  title: 'Test task title',
  description: 'A test description',
  status: 'in_progress',
  priority: 'high',
  dueDate: '2026-04-15',
  assigneeId: 'u1',
  tags: ['testing'],
  createdAt: '2026-04-01T00:00:00Z',
  updatedAt: '2026-04-01T00:00:00Z',
};

const mockUser: User = {
  id: 'u1',
  name: 'Alice Chen',
  email: 'alice@taskflow.io',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
};

describe('TaskCard', () => {
  it('shows title, status badge, priority, due date, assignee', () => {
    render(<TaskCard task={mockTask} assignee={mockUser} />);

    expect(screen.getByText('Test task title')).toBeInTheDocument();
    expect(screen.getByTestId('status-badge')).toHaveTextContent('In Progress');
    expect(screen.getByTestId('priority-badge')).toHaveTextContent('High');
    expect(screen.getByTestId('due-date')).toBeInTheDocument();
    expect(screen.getByTestId('assignee-avatar')).toBeInTheDocument();
    expect(screen.getByTestId('assignee-avatar')).toHaveAttribute('alt', 'Alice Chen');
  });
});
