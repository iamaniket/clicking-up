import { User } from '../../types/user';
import { Avatar } from './Avatar';

interface AvatarStackProps {
  users: User[];
  max?: number;
}

export function AvatarStack({ users, max = 3 }: AvatarStackProps) {
  const visible = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className="flex items-center -space-x-2">
      {visible.map((user) => (
        <Avatar key={user.id} src={user.avatar} alt={user.name} size="sm" border />
      ))}
      {remaining > 0 && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface-container-lowest bg-surface-container-highest text-[10px] font-bold text-on-surface-variant">
          +{remaining}
        </span>
      )}
    </div>
  );
}
