import { KanbanBoard } from '../components/board/KanbanBoard';

export function BoardPage() {
  return (
    <div data-testid="board-page">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-on-surface">
            Project Board
          </h1>
          <p className="mt-1 text-sm text-on-surface-variant">
            Drag tasks between columns to update their status
          </p>
        </div>
      </div>
      <KanbanBoard />
    </div>
  );
}
