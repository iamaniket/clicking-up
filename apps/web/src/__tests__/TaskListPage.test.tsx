import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { useTaskStore } from '../stores/taskStore';
import { mockTasks } from '../data/mockTasks';
import { TaskListPage } from '../pages/TaskListPage';

function renderPage() {
  return render(
    <MemoryRouter>
      <TaskListPage />
    </MemoryRouter>
  );
}

describe('TaskListPage', () => {
  beforeEach(() => {
    useTaskStore.setState({ tasks: [...mockTasks] });
  });

  it('renders correct number of task cards from mock data', () => {
    renderPage();
    // Featured card + regular cards = total tasks
    const taskCards = screen.getAllByTestId('task-card');
    const featuredCards = screen.queryAllByTestId('featured-task-card');
    expect(taskCards.length + featuredCards.length).toBe(mockTasks.length);
  });

  it('clicking "Add Task" opens inline form', async () => {
    const user = userEvent.setup();
    renderPage();

    expect(screen.queryByTestId('task-form')).not.toBeInTheDocument();

    await user.click(screen.getByTestId('add-task-btn'));

    expect(screen.getByTestId('task-form')).toBeInTheDocument();
  });

  it('filter buttons filter the rendered list', async () => {
    const user = userEvent.setup();
    renderPage();

    const todoCount = mockTasks.filter((t) => t.status === 'todo').length;

    const chips = screen.getAllByTestId('filter-chip');
    const todoChip = chips.find((c) => c.textContent === 'To Do')!;
    await user.click(todoChip);

    const taskCards = screen.getAllByTestId('task-card');
    const featuredCards = screen.queryAllByTestId('featured-task-card');
    expect(taskCards.length + featuredCards.length).toBe(todoCount);
  });

  it('search input filters tasks by name/ID', async () => {
    const user = userEvent.setup();
    renderPage();

    const searchInput = screen.getByTestId('search-input');
    await user.type(searchInput, 'authentication');

    const taskCards = screen.queryAllByTestId('task-card');
    const featuredCards = screen.queryAllByTestId('featured-task-card');
    const total = taskCards.length + featuredCards.length;
    expect(total).toBe(1);
    expect(
      screen.getByText('Implement authentication flow')
    ).toBeInTheDocument();
  });
});
