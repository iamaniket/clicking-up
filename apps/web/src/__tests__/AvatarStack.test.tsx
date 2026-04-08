import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AvatarStack } from '../components/ui/AvatarStack';
import { User } from '../types/user';

const users: User[] = [
  { id: 'u1', name: 'Alice', email: 'a@test.com', avatar: 'alice.png' },
  { id: 'u2', name: 'Bob', email: 'b@test.com', avatar: 'bob.png' },
  { id: 'u3', name: 'Carol', email: 'c@test.com', avatar: 'carol.png' },
  { id: 'u4', name: 'David', email: 'd@test.com', avatar: 'david.png' },
  { id: 'u5', name: 'Eva', email: 'e@test.com', avatar: 'eva.png' },
];

describe('AvatarStack', () => {
  it('renders up to max avatars (default 3)', () => {
    render(<AvatarStack users={users} />);
    const imgs = screen.getAllByRole('img');
    expect(imgs).toHaveLength(3);
  });

  it('shows +N overflow badge when users exceed max', () => {
    render(<AvatarStack users={users} />);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('renders all users when count <= max', () => {
    render(<AvatarStack users={users.slice(0, 2)} />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it('respects custom max prop', () => {
    render(<AvatarStack users={users} max={4} />);
    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(screen.getByText('+1')).toBeInTheDocument();
  });
});
