import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { CommentBox } from '../components/tasks/CommentBox';

describe('CommentBox', () => {
  it('comment input present and submittable', () => {
    render(<CommentBox taskId="TASK-001" />);
    expect(screen.getByTestId('comment-input')).toBeInTheDocument();
    expect(screen.getByTestId('comment-submit-btn')).toBeInTheDocument();
  });

  it('submitted comment appears in thread', async () => {
    const user = userEvent.setup();
    render(<CommentBox taskId="TASK-001" />);

    const input = screen.getByTestId('comment-input');
    await user.type(input, 'This is a test comment');
    await user.click(screen.getByTestId('comment-submit-btn'));

    expect(screen.getByText('This is a test comment')).toBeInTheDocument();
  });
});
