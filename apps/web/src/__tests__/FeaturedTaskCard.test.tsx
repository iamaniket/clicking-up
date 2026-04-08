import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeaturedTaskCard } from '../components/tasks/FeaturedTaskCard';
import { Task } from '../types/task';
import { User } from '../types/user';

const task: Task = {
  id: 'TASK-100',
  title: 'Featured task',
  description: 'An important task',
  status: 'in_progress',
  priority: 'urgent',
  dueDate: '2026-04-15',
  assigneeId: 'u1',
  tags: ['feature'],
  createdAt: '2026-04-01T00:00:00Z',
  updatedAt: '2026-04-01T00:00:00Z',
};

const user: User = {
  id: 'u1',
  name: 'Alice',
  email: 'alice@test.com',
  avatar: 'alice.png',
};

describe('FeaturedTaskCard', () => {
  it('renders with featured label', () => {
    render(<FeaturedTaskCard task={task} assignee={user} />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('displays task title and description', () => {
    render(<FeaturedTaskCard task={task} assignee={user} />);
    expect(screen.getByText('Featured task')).toBeInTheDocument();
    expect(screen.getByText('An important task')).toBeInTheDocument();
  });

  it('shows status and priority badges', () => {
    render(<FeaturedTaskCard task={task} assignee={user} />);
    expect(screen.getByTestId('status-badge')).toHaveTextContent('In Progress');
    expect(screen.getByTestId('priority-badge')).toHaveTextContent('Urgent');
  });

  it('shows assignee avatar', () => {
    render(<FeaturedTaskCard task={task} assignee={user} />);
    expect(screen.getByAltText('Alice')).toBeInTheDocument();
  });

  it('has data-testid featured-task-card', () => {
    render(<FeaturedTaskCard task={task} />);
    expect(screen.getByTestId('featured-task-card')).toBeInTheDocument();
  });
});
