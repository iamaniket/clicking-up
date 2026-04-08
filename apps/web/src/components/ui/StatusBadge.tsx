import { TaskStatus } from '../../types/task';
import { Badge } from './Badge';

const statusConfig: Record<TaskStatus, { label: string; className: string }> = {
  todo: {
    label: 'To Do',
    className: 'bg-surface-container-highest text-on-surface-variant',
  },
  in_progress: {
    label: 'In Progress',
    className: 'bg-primary-container text-on-primary-container',
  },
  review: {
    label: 'Review',
    className: 'bg-warning/15 text-warning',
  },
  done: {
    label: 'Done',
    className: 'bg-success/15 text-success',
  },
};

interface StatusBadgeProps {
  status: TaskStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge
      data-testid="status-badge"
      data-status={status}
      className={config.className}
    >
      {config.label}
    </Badge>
  );
}
