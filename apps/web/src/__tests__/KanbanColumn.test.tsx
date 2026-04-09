import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { KanbanColumn } from '../components/board/KanbanColumn';
import { Task } from '../types/task';

const tasks: Task[] = [
  {
    id: 'TASK-100',
    title: 'Column task 1',
    description: 'desc',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-04-15',
    assigneeId: 'u1',
    tags: ['test'],
    createdAt: '2026-04-01T00:00:00Z',
    updatedAt: '2026-04-01T00:00:00Z',
  },
  {
    id: 'TASK-101',
    title: 'Column task 2',
    description: 'desc 2',
    status: 'todo',
    priority: 'high',
    dueDate: '2026-04-16',
    assigneeId: 'u2',
    tags: ['test'],
    createdAt: '2026-04-01T00:00:00Z',
    updatedAt: '2026-04-01T00:00:00Z',
  },
];

describe('KanbanColumn', () => {
  it('tasks render inside correct column', () => {
    render(
      <KanbanColumn status="todo" title="To Do" tasks={tasks} />
    );
    expect(screen.getByText('Column task 1')).toBeInTheDocument();
    expect(screen.getByText('Column task 2')).toBeInTheDocument();
  });

  it('empty column renders placeholder', () => {
    render(
      <KanbanColumn status="todo" title="To Do" tasks={[]} />
    );
    expect(screen.getByTestId('column-empty')).toBeInTheDocument();
  });
});
