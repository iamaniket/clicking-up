import { useNavigate, useParams } from 'react-router-dom';
import { useTaskStore } from '../../stores/taskStore';
import { mockUsers } from '../../data/mockUsers';
import { StatusBadge } from '../ui/StatusBadge';
import { PriorityBadge } from '../ui/PriorityBadge';
import { Avatar } from '../ui/Avatar';
import { BaseButton } from '../ui/BaseButton';
import { BaseCard } from '../ui/BaseCard';
import { CommentBox } from './CommentBox';
import { ActivityLog } from './ActivityLog';

function getUserById(id: string) {
  return mockUsers.find((u) => u.id === id);
}

const CHECKLIST_ITEMS = [
  { id: 'c1', label: 'Requirements gathered', done: true },
  { id: 'c2', label: 'Design approved', done: true },
  { id: 'c3', label: 'Implementation started', done: false },
  { id: 'c4', label: 'Tests written', done: false },
];

export function TaskModal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const task = useTaskStore((s) => s.tasks.find((t) => t.id === id));

  if (!task) {
    return (
      <div data-testid="task-modal" className="p-8 text-center">
        <p className="text-on-surface-variant">Task not found</p>
      </div>
    );
  }

  const assignee = getUserById(task.assigneeId);

  return (
    <div data-testid="task-modal" className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-bold text-on-surface-variant">{task.id}</span>
            <StatusBadge status={task.status} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-on-surface">
            {task.title}
          </h1>
        </div>
        <BaseButton
          data-testid="modal-close-btn"
          variant="ghost"
          size="sm"
          icon="close"
          onClick={() => navigate(-1)}
        >
          Close
        </BaseButton>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <BaseCard>
            <h2 className="mb-2 text-sm font-bold text-on-surface">Description</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {task.description}
            </p>
          </BaseCard>

          {/* Checklist */}
          <BaseCard>
            <div data-testid="checklist-section">
              <h2 className="mb-3 text-sm font-bold text-on-surface">Checklist</h2>
              <div className="mb-2 h-1.5 rounded-full bg-surface-container-highest">
                <div
                  className="h-1.5 rounded-full bg-primary transition-all"
                  style={{ width: `${(CHECKLIST_ITEMS.filter((i) => i.done).length / CHECKLIST_ITEMS.length) * 100}%` }}
                />
              </div>
              <ul className="space-y-2">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-base ${item.done ? 'text-success' : 'text-outline-variant'}`}>
                      {item.done ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                    <span className={`text-sm ${item.done ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BaseCard>

          {/* Comments */}
          <BaseCard>
            <h2 className="mb-3 text-sm font-bold text-on-surface">Discussion</h2>
            <CommentBox taskId={task.id} />
          </BaseCard>

          {/* Activity Log */}
          <BaseCard>
            <h2 className="mb-3 text-sm font-bold text-on-surface">Activity</h2>
            <ActivityLog taskId={task.id} />
          </BaseCard>
        </div>

        {/* Sidebar Details */}
        <div className="space-y-4">
          <BaseCard>
            <div className="space-y-4">
              <div>
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Priority
                </span>
                <PriorityBadge priority={task.priority} />
              </div>

              <div data-testid="modal-due-date">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Due Date
                </span>
                <div className="flex items-center gap-1 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                  {new Date(task.dueDate).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>

              <div data-testid="modal-assignee">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Assignee
                </span>
                {assignee && (
                  <div className="flex items-center gap-2">
                    <Avatar src={assignee.avatar} alt={assignee.name} size="sm" />
                    <span className="text-sm font-medium text-on-surface">{assignee.name}</span>
                  </div>
                )}
              </div>

              <div>
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-container-highest px-2 py-0.5 text-[10px] font-semibold text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  );
}
