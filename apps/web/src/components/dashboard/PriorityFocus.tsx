import { useTaskStore } from '../../stores/taskStore';
import { mockUsers } from '../../data/mockUsers';
import { BaseCard } from '../ui/BaseCard';
import { PriorityBadge } from '../ui/PriorityBadge';
import { Avatar } from '../ui/Avatar';

function getUserById(id: string) {
  return mockUsers.find((u) => u.id === id);
}

export function PriorityFocus() {
  const tasks = useTaskStore((s) => s.tasks);
  const urgentTasks = tasks
    .filter((t) => (t.priority === 'urgent' || t.priority === 'high') && t.status !== 'done')
    .slice(0, 4);

  return (
    <BaseCard>
      <h2 className="mb-4 text-sm font-bold text-on-surface">Priority Focus</h2>
      <div data-testid="priority-focus" className="space-y-3">
        {urgentTasks.map((task) => {
          const assignee = getUserById(task.assigneeId);
          return (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-xl bg-surface-container p-3"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <PriorityBadge priority={task.priority} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-on-surface">
                    {task.title}
                  </p>
                  <p className="text-[10px] text-on-surface-variant">
                    Due {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
              {assignee && (
                <Avatar src={assignee.avatar} alt={assignee.name} size="xs" />
              )}
            </div>
          );
        })}
        {urgentTasks.length === 0 && (
          <p className="text-sm text-on-surface-variant">No urgent tasks</p>
        )}
      </div>
    </BaseCard>
  );
}
