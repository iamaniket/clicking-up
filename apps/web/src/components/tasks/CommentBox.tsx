import { useState } from 'react';

interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: string;
}

interface CommentBoxProps {
  taskId: string;
}

export function CommentBox({ taskId }: CommentBoxProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return;
    const comment: Comment = {
      id: `comment-${Date.now()}`,
      text: input.trim(),
      author: 'You',
      timestamp: new Date().toLocaleTimeString(),
    };
    setComments((prev) => [...prev, comment]);
    setInput('');
  };

  return (
    <div data-testid="comment-box">
      {/* Thread */}
      {comments.length > 0 && (
        <div className="mb-4 space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="rounded-xl bg-surface-container p-3">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-bold text-on-surface">{c.author}</span>
                <span className="text-[10px] text-on-surface-variant">{c.timestamp}</span>
              </div>
              <p className="text-sm text-on-surface-variant">{c.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2">
        <input
          data-testid="comment-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Write a comment..."
          className="flex-1 rounded-xl bg-surface-container-highest px-4 py-2.5 text-sm text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none"
        />
        <button
          data-testid="comment-submit-btn"
          onClick={handleSubmit}
          className="flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary/90"
        >
          <span className="material-symbols-outlined text-base">send</span>
        </button>
      </div>
    </div>
  );
}
