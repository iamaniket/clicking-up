import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { useTaskStore } from '../stores/taskStore';
import { mockTasks } from '../data/mockTasks';
import { TaskModal } from '../components/tasks/TaskModal';

const testTask = mockTasks[1]; // TASK-002

function renderModal(taskId = testTask.id) {
  return render(
    <MemoryRouter initialEntries={[`/tasks/${taskId}`]}>
      <Routes>
        <Route path="/tasks/:id" element={<TaskModal />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('TaskModal', () => {
  beforeEach(() => {
    useTaskStore.setState({ tasks: [...mockTasks] });
  });

  it('clicking task opens modal with correct data', () => {
    renderModal();
    expect(screen.getByTestId('task-modal')).toBeInTheDocument();
    expect(screen.getByText(testTask.title)).toBeInTheDocument();
  });

  it('modal shows assignee, due date, priority, status, tags', () => {
    renderModal();
    expect(screen.getByTestId('status-badge')).toBeInTheDocument();
    expect(screen.getByTestId('priority-badge')).toBeInTheDocument();
    expect(screen.getByTestId('modal-due-date')).toBeInTheDocument();
    expect(screen.getByTestId('modal-assignee')).toBeInTheDocument();
    testTask.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('checklist items render correctly', () => {
    renderModal();
    expect(screen.getByTestId('checklist-section')).toBeInTheDocument();
  });

  it('closing modal returns to previous view', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/tasks', `/tasks/${testTask.id}`]}>
        <Routes>
          <Route path="/tasks" element={<div data-testid="task-list">Task List</div>} />
          <Route path="/tasks/:id" element={<TaskModal />} />
        </Routes>
      </MemoryRouter>
    );

    const closeBtn = screen.getByTestId('modal-close-btn');
    await user.click(closeBtn);

    expect(screen.getByTestId('task-list')).toBeInTheDocument();
  });
});
