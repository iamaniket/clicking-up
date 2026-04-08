import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { useTaskStore } from '../stores/taskStore';
import { TaskForm } from '../components/tasks/TaskForm';

describe('TaskForm', () => {
  beforeEach(() => {
    useTaskStore.setState({ tasks: [] });
  });

  it('submitting form adds task to Zustand store and list', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<TaskForm onClose={onClose} />);

    await user.type(screen.getByTestId('task-title-input'), 'Brand new task');
    await user.click(screen.getByTestId('task-submit-btn'));

    const tasks = useTaskStore.getState().tasks;
    expect(tasks).toHaveLength(1);
    expect(tasks[0].title).toBe('Brand new task');
    expect(onClose).toHaveBeenCalled();
  });
});
