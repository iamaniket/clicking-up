import { useTaskStore } from '../stores/taskStore';
import { MetricCard } from '../components/dashboard/MetricCard';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { PriorityFocus } from '../components/dashboard/PriorityFocus';
import { StatusChart } from '../components/dashboard/StatusChart';

export function DashboardPage() {
  const tasks = useTaskStore((s) => s.tasks);

  const doneCount = tasks.filter((t) => t.status === 'done').length;
  const overdueCount = tasks.filter(
    (t) => t.status !== 'done' && new Date(t.dueDate) < new Date()
  ).length;

  return (
    <div data-testid="dashboard-page">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-on-surface">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          Project overview and analytics
        </p>
      </div>

      {/* Metric Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          data-testid="metric-overdue"
          label="Overdue"
          value={overdueCount}
          icon="warning"
          trend={overdueCount > 0 ? `${overdueCount} need attention` : undefined}
          trendUp={false}
        />
        <MetricCard
          data-testid="metric-completed"
          label="Completed"
          value={doneCount}
          icon="check_circle"
          trend={`${Math.round((doneCount / tasks.length) * 100)}% of total`}
          trendUp={true}
        />
        <MetricCard
          data-testid="metric-velocity"
          label="Velocity"
          value={`${Math.round((doneCount / 5) * 10) / 10}/day`}
          icon="speed"
          trend="Last 7 days"
          trendUp={true}
        />
      </div>

      {/* Charts */}
      <div className="mb-6">
        <StatusChart />
      </div>

      {/* Activity + Priority */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ActivityFeed />
        <PriorityFocus />
      </div>
    </div>
  );
}
