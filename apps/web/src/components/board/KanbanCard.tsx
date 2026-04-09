import { Task } from '../../types/task';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PriorityBadge } from '../ui/PriorityBadge';
import { Avatar } from '../ui/Avatar';
import { mockUsers } from '../../data/mockUsers';

interface KanbanCardProps {
  task: Task;
}

function getUserById(id: string) {
  return mockUsers.find((u) => u.id === id);
}

export function KanbanCard({ task }: KanbanCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const assignee = getUserById(task.assigneeId);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      data-testid="kanban-card"
      className={`cursor-grab rounded-xl bg-surface-container-lowest p-3 shadow-sm transition active:cursor-grabbing ${
        isDragging ? 'opacity-50 shadow-lg' : 'hover:shadow-md'
      }`}
    >
      <h4 className="mb-1 text-sm font-semibold text-on-surface leading-snug">
        {task.title}
      </h4>
      {task.description && (
        <p className="mb-2 line-clamp-2 text-xs text-on-surface-variant">
          {task.description}
        </p>
      )}
      <div className="flex flex-wrap gap-1 mb-2">
        {task.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface-container-highest px-1.5 py-0.5 text-[10px] font-semibold text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <PriorityBadge priority={task.priority} />
        <div className="flex items-center gap-2">
          {task.dueDate && (
            <span className="flex items-center gap-0.5 text-[10px] text-on-surface-variant">
              <span className="material-symbols-outlined text-xs">calendar_today</span>
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          )}
          {assignee && (
            <Avatar src={assignee.avatar} alt={assignee.name} size="xs" />
          )}
        </div>
      </div>
    </div>
  );
}
