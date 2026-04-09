import { BaseCard } from '../ui/BaseCard';

const FEED_ITEMS = [
  { id: 'f1', user: 'Alice Chen', action: 'completed', target: 'Design system token audit', time: '2 hours ago', icon: 'check_circle' },
  { id: 'f2', user: 'Bob Martinez', action: 'started', target: 'Implement authentication flow', time: '4 hours ago', icon: 'play_circle' },
  { id: 'f3', user: 'Carol Nguyen', action: 'commented on', target: 'Dashboard analytics charts', time: '6 hours ago', icon: 'chat' },
  { id: 'f4', user: 'David Kim', action: 'submitted for review', target: 'API error handling middleware', time: '8 hours ago', icon: 'rate_review' },
  { id: 'f5', user: 'Eva Lopez', action: 'completed', target: 'Mobile responsive navigation', time: '1 day ago', icon: 'check_circle' },
];

export function ActivityFeed() {
  return (
    <BaseCard>
      <h2 className="mb-4 text-sm font-bold text-on-surface">Recent Activity</h2>
      <div data-testid="activity-feed" className="space-y-4">
        {FEED_ITEMS.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <span className="mt-0.5 material-symbols-outlined text-base text-primary">
              {item.icon}
            </span>
            <div className="flex-1">
              <p className="text-sm text-on-surface">
                <span className="font-semibold">{item.user}</span>{' '}
                <span className="text-on-surface-variant">{item.action}</span>{' '}
                <span className="font-medium">{item.target}</span>
              </p>
              <span className="text-[10px] text-on-surface-variant">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  );
}
