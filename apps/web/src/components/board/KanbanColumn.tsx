import { Task } from '../../types/task';
import { KanbanCard } from './KanbanCard';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { TaskStatus } from '../../types/task';

interface KanbanColumnProps {
  status: TaskStatus;
  title: string;
  tasks: Task[];
}

const columnColors: Record<TaskStatus, string> = {
  todo: 'bg-surface-container-highest',
  in_progress: 'bg-primary-container',
  review: 'bg-warning/15',
  done: 'bg-success/15',
};

const dotColors: Record<TaskStatus, string> = {
  todo: 'bg-on-surface-variant',
  in_progress: 'bg-primary',
  review: 'bg-warning',
  done: 'bg-success',
};

export function KanbanColumn({ status, title, tasks }: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div
      data-testid="kanban-column"
      ref={setNodeRef}
      className={`flex min-h-[300px] w-72 flex-shrink-0 flex-col rounded-2xl bg-surface-container p-3 transition ${
        isOver ? 'ring-2 ring-primary/40' : ''
      }`}
    >
      {/* Column Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotColors[status]}`} />
          <h3 className="text-sm font-bold text-on-surface">{title}</h3>
          <span
            data-testid="column-count"
            className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${columnColors[status]}`}
          >
            {tasks.length}
          </span>
        </div>
        <button
          data-testid="column-add-btn"
          className="flex h-6 w-6 items-center justify-center rounded-lg text-on-surface-variant transition hover:bg-surface-container-highest"
        >
          <span className="material-symbols-outlined text-base">add</span>
        </button>
      </div>

      {/* Cards */}
      <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-1 flex-col gap-2">
          {tasks.map((task) => (
            <KanbanCard key={task.id} task={task} />
          ))}
          {tasks.length === 0 && (
            <div
              data-testid="column-empty"
              className="flex flex-1 items-center justify-center rounded-xl border-2 border-dashed border-outline-variant/30 p-4"
            >
              <p className="text-xs text-on-surface-variant">No tasks</p>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}
