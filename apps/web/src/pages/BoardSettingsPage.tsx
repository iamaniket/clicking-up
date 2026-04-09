import { BaseCard } from '../components/ui/BaseCard';
import { BaseButton } from '../components/ui/BaseButton';
import { BaseInput } from '../components/ui/BaseInput';
import { mockUsers } from '../data/mockUsers';
import { Avatar } from '../components/ui/Avatar';

const WORKFLOW_STATUSES = ['To Do', 'In Progress', 'Review', 'Done'];

const INTEGRATIONS = [
  { name: 'Slack', icon: 'chat', connected: true },
  { name: 'GitHub', icon: 'code', connected: true },
  { name: 'Figma', icon: 'palette', connected: false },
  { name: 'Jira', icon: 'sync', connected: false },
];

export function BoardSettingsPage() {
  return (
    <div data-testid="board-settings-page" className="mx-auto max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-on-surface">
          Board Settings
        </h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          Manage your board configuration
        </p>
      </div>

      <div className="space-y-6">
        {/* General */}
        <BaseCard>
          <h2 className="mb-4 text-sm font-bold text-on-surface">General</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Board Name
              </label>
              <BaseInput value="Project Alpha" onChange={() => {}} />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Description
              </label>
              <BaseInput value="Main project board for sprint tracking" onChange={() => {}} />
            </div>
          </div>
        </BaseCard>

        {/* Workflow */}
        <BaseCard>
          <h2 className="mb-4 text-sm font-bold text-on-surface">Workflow</h2>
          <div className="space-y-2">
            {WORKFLOW_STATUSES.map((status, i) => (
              <div
                key={status}
                className="flex items-center gap-3 rounded-xl bg-surface-container p-3"
              >
                <span className="material-symbols-outlined text-base text-outline-variant">
                  drag_indicator
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-on-surface">{status}</span>
              </div>
            ))}
          </div>
        </BaseCard>

        {/* Members */}
        <BaseCard>
          <h2 className="mb-4 text-sm font-bold text-on-surface">Members</h2>
          <div className="space-y-3">
            {mockUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-xl bg-surface-container p-3"
              >
                <div className="flex items-center gap-3">
                  <Avatar src={user.avatar} alt={user.name} size="sm" />
                  <div>
                    <p className="text-sm font-medium text-on-surface">{user.name}</p>
                    <p className="text-[10px] text-on-surface-variant">{user.email}</p>
                  </div>
                </div>
                <span className="rounded-md bg-surface-container-highest px-2 py-0.5 text-[10px] font-bold text-on-surface-variant">
                  Member
                </span>
              </div>
            ))}
          </div>
        </BaseCard>

        {/* Integrations */}
        <BaseCard>
          <h2 className="mb-4 text-sm font-bold text-on-surface">Integrations</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INTEGRATIONS.map((intg) => (
              <div
                key={intg.name}
                className="flex items-center justify-between rounded-xl bg-surface-container p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-on-surface-variant">
                    {intg.icon}
                  </span>
                  <span className="text-sm font-medium text-on-surface">{intg.name}</span>
                </div>
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                    intg.connected
                      ? 'bg-success/15 text-success'
                      : 'bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {intg.connected ? 'Connected' : 'Connect'}
                </span>
              </div>
            ))}
          </div>
        </BaseCard>

        {/* Danger Zone */}
        <BaseCard>
          <h2 className="mb-4 text-sm font-bold text-error">Danger Zone</h2>
          <div className="flex items-center justify-between rounded-xl border border-error/20 p-4">
            <div>
              <p className="text-sm font-medium text-on-surface">Delete this board</p>
              <p className="text-xs text-on-surface-variant">
                Once deleted, it cannot be recovered.
              </p>
            </div>
            <BaseButton variant="danger" size="sm">
              Delete Board
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
  );
}
