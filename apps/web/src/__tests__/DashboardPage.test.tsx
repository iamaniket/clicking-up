import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { useTaskStore } from '../stores/taskStore';
import { mockTasks } from '../data/mockTasks';
import { DashboardPage } from '../pages/DashboardPage';

function renderDashboard() {
  return render(
    <MemoryRouter>
      <DashboardPage />
    </MemoryRouter>
  );
}

describe('DashboardPage', () => {
  beforeEach(() => {
    useTaskStore.setState({ tasks: [...mockTasks] });
  });

  it('stat cards render (Overdue, Completed, Velocity)', () => {
    renderDashboard();
    expect(screen.getByText('Overdue')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Velocity')).toBeInTheDocument();
  });

  it('chart container renders', () => {
    renderDashboard();
    expect(screen.getByTestId('dashboard-chart')).toBeInTheDocument();
  });

  it('status counts match mock data', () => {
    renderDashboard();
    const doneCount = mockTasks.filter((t) => t.status === 'done').length;
    const todoCount = mockTasks.filter((t) => t.status === 'todo').length;

    // The completed metric card should show the done count
    expect(screen.getByTestId('metric-completed')).toHaveTextContent(String(doneCount));
  });

  it('activity feed renders', () => {
    renderDashboard();
    expect(screen.getByTestId('activity-feed')).toBeInTheDocument();
  });

  it('priority focus section renders', () => {
    renderDashboard();
    expect(screen.getByTestId('priority-focus')).toBeInTheDocument();
  });
});
