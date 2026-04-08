import { Task } from '../../types/task';
import { User } from '../../types/user';
import { BaseCard } from '../ui/BaseCard';
import { Avatar } from '../ui/Avatar';
import { StatusBadge } from '../ui/StatusBadge';
import { PriorityBadge } from '../ui/PriorityBadge';

interface FeaturedTaskCardProps {
  task: Task;
  assignee?: User;
}

export function FeaturedTaskCard({ task, assignee }: FeaturedTaskCardProps) {
  return (
    <BaseCard
      variant="featured"
      data-testid="featured-task-card"
      className="col-span-full md:col-span-2"
    >
      <div className="mb-1 flex items-center gap-2">
        <span className="material-symbols-outlined text-lg text-primary">star</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
          Featured
        </span>
      </div>

      <h3 className="mb-2 text-base font-bold text-on-surface">{task.title}</h3>
      <p className="mb-4 text-sm text-on-surface-variant">{task.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <StatusBadge status={task.status} />
          <PriorityBadge priority={task.priority} />
        </div>
        <div className="flex items-center gap-2">
          {task.dueDate && (
            <span className="flex items-center gap-1 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          )}
          {assignee && (
            <Avatar src={assignee.avatar} alt={assignee.name} size="sm" border />
          )}
        </div>
      </div>
    </BaseCard>
  );
}
