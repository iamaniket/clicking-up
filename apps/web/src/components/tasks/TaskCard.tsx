import { Task } from '../../types/task';
import { User } from '../../types/user';
import { BaseCard } from '../ui/BaseCard';
import { Avatar } from '../ui/Avatar';
import { StatusBadge } from '../ui/StatusBadge';
import { PriorityBadge } from '../ui/PriorityBadge';

interface TaskCardProps {
  task: Task;
  assignee?: User;
}

export function TaskCard({ task, assignee }: TaskCardProps) {
  return (
    <BaseCard data-testid="task-card" className="transition hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-sm font-bold text-on-surface leading-snug">
          {task.title}
        </h3>
        <PriorityBadge priority={task.priority} />
      </div>

      <p className="mb-3 line-clamp-2 text-xs text-on-surface-variant">
        {task.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {task.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface-container-highest px-2 py-0.5 text-[10px] font-semibold text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <StatusBadge status={task.status} />
        <div className="flex items-center gap-2">
          {task.dueDate && (
            <span data-testid="due-date" className="flex items-center gap-1 text-[11px] text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          )}
          {assignee && (
            <Avatar
              src={assignee.avatar}
              alt={assignee.name}
              size="xs"
              border
              data-testid="assignee-avatar"
            />
          )}
        </div>
      </div>
    </BaseCard>
  );
}
