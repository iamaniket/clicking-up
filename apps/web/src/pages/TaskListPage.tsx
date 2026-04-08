import { useState, useMemo } from 'react';
import { useTaskStore } from '../stores/taskStore';
import { mockUsers } from '../data/mockUsers';
import { TaskStatus } from '../types/task';
import { SearchBar } from '../components/ui/SearchBar';
import { FilterChip } from '../components/ui/FilterChip';
import { BaseButton } from '../components/ui/BaseButton';
import { TaskCard } from '../components/tasks/TaskCard';
import { FeaturedTaskCard } from '../components/tasks/FeaturedTaskCard';
import { EfficiencyScoreCard } from '../components/tasks/EfficiencyScoreCard';
import { TaskForm } from '../components/tasks/TaskForm';

const STATUS_FILTERS: { label: string; value: TaskStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'To Do', value: 'todo' },
  { label: 'In Progress', value: 'in_progress' },
  { label: 'Review', value: 'review' },
  { label: 'Done', value: 'done' },
];

function getUserById(id: string) {
  return mockUsers.find((u) => u.id === id);
}

export function TaskListPage() {
  const tasks = useTaskStore((s) => s.tasks);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'all'>('all');
  const [showForm, setShowForm] = useState(false);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      if (statusFilter !== 'all' && t.status !== statusFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          t.title.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [tasks, search, statusFilter]);

  const featured = filteredTasks.find((t) => t.priority === 'urgent' && t.status !== 'done');
  const remaining = filteredTasks.filter((t) => t !== featured);

  const doneCount = tasks.filter((t) => t.status === 'done').length;
  const inProgressCount = tasks.filter((t) => t.status === 'in_progress').length;

  return (
    <div data-testid="tasklist-page">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-on-surface">
            Central Task Registry
          </h1>
          <p className="mt-1 text-sm text-on-surface-variant">
            {tasks.length} tasks · {doneCount} completed
          </p>
        </div>
        <BaseButton
          data-testid="add-task-btn"
          onClick={() => setShowForm(true)}
          icon="add"
        >
          Add Task
        </BaseButton>
      </div>

      {/* Search + Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="w-full sm:max-w-xs">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <div className="flex flex-wrap gap-2">
          {STATUS_FILTERS.map((f) => (
            <FilterChip
              key={f.value}
              label={f.label}
              active={statusFilter === f.value}
              onClick={() => setStatusFilter(f.value)}
            />
          ))}
        </div>
      </div>

      {/* Inline Task Form */}
      {showForm && (
        <div className="mb-6">
          <TaskForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {/* Metrics Row */}
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <EfficiencyScoreCard
          label="Completed"
          value={doneCount}
          icon="check_circle"
          trend={`${Math.round((doneCount / tasks.length) * 100)}% done`}
        />
        <EfficiencyScoreCard
          label="In Progress"
          value={inProgressCount}
          icon="pending"
        />
        <EfficiencyScoreCard
          label="Total Tasks"
          value={tasks.length}
          icon="assignment"
        />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured && (
          <FeaturedTaskCard
            task={featured}
            assignee={getUserById(featured.assigneeId)}
          />
        )}
        {remaining.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            assignee={getUserById(task.assigneeId)}
          />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="py-16 text-center">
          <span className="material-symbols-outlined mb-2 text-5xl text-outline-variant">search_off</span>
          <p className="text-sm text-on-surface-variant">No tasks match your filters.</p>
        </div>
      )}
    </div>
  );
}
