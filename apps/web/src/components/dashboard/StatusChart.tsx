import { useTaskStore } from '../../stores/taskStore';
import { BaseCard } from '../ui/BaseCard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const PIE_COLORS = ['#6366f1', '#3b82f6', '#f59e0b', '#22c55e'];

export function StatusChart() {
  const tasks = useTaskStore((s) => s.tasks);

  const statusData = [
    { name: 'To Do', value: tasks.filter((t) => t.status === 'todo').length },
    { name: 'In Progress', value: tasks.filter((t) => t.status === 'in_progress').length },
    { name: 'Review', value: tasks.filter((t) => t.status === 'review').length },
    { name: 'Done', value: tasks.filter((t) => t.status === 'done').length },
  ];

  const velocityData = [
    { day: 'Mon', tasks: 3 },
    { day: 'Tue', tasks: 5 },
    { day: 'Wed', tasks: 2 },
    { day: 'Thu', tasks: 7 },
    { day: 'Fri', tasks: 4 },
  ];

  return (
    <div data-testid="dashboard-chart" className="grid gap-4 md:grid-cols-2">
      <BaseCard>
        <h2 className="mb-4 text-sm font-bold text-on-surface">Status Breakdown</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={4}
                dataKey="value"
              >
                {statusData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          {statusData.map((entry, i) => (
            <div key={entry.name} className="flex items-center gap-1">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: PIE_COLORS[i] }}
              />
              <span className="text-[10px] text-on-surface-variant">
                {entry.name} ({entry.value})
              </span>
            </div>
          ))}
        </div>
      </BaseCard>

      <BaseCard>
        <h2 className="mb-4 text-sm font-bold text-on-surface">Weekly Velocity</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="tasks" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </BaseCard>
    </div>
  );
}
