import { TaskPriority } from '../../types/task';
import { Badge } from './Badge';

const priorityConfig: Record<TaskPriority, { label: string; icon: string; className: string }> = {
  low: {
    label: 'Low',
    icon: 'keyboard_arrow_down',
    className: 'text-on-surface-variant',
  },
  medium: {
    label: 'Medium',
    icon: 'remove',
    className: 'text-primary',
  },
  high: {
    label: 'High',
    icon: 'keyboard_arrow_up',
    className: 'text-warning',
  },
  urgent: {
    label: 'Urgent',
    icon: 'priority_high',
    className: 'text-error',
  },
};

interface PriorityBadgeProps {
  priority: TaskPriority;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const config = priorityConfig[priority];
  return (
    <Badge data-testid="priority-badge" className={`font-semibold ${config.className}`}>
      <span className="material-symbols-outlined text-base">{config.icon}</span>
      {config.label}
    </Badge>
  );
}
