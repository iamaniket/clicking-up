interface ActivityLogProps {
  taskId: string;
}

const MOCK_ACTIVITY = [
  { id: 'a1', action: 'created this task', user: 'Alice Chen', time: '3 days ago' },
  { id: 'a2', action: 'changed status to In Progress', user: 'Bob Martinez', time: '2 days ago' },
  { id: 'a3', action: 'updated the description', user: 'Alice Chen', time: '1 day ago' },
  { id: 'a4', action: 'added tag "backend"', user: 'Carol Nguyen', time: '5 hours ago' },
];

export function ActivityLog({ taskId }: ActivityLogProps) {
  return (
    <div data-testid="activity-log" className="space-y-3">
      {MOCK_ACTIVITY.map((entry) => (
        <div key={entry.id} data-testid="activity-entry" className="flex items-start gap-3">
          <span className="mt-0.5 material-symbols-outlined text-base text-outline-variant">
            history
          </span>
          <div>
            <p className="text-sm text-on-surface">
              <span className="font-semibold">{entry.user}</span>{' '}
              <span className="text-on-surface-variant">{entry.action}</span>
            </p>
            <span className="text-[10px] text-on-surface-variant">{entry.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
