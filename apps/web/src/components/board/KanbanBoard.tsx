import { useTaskStore } from '../../stores/taskStore';
import { TaskStatus } from '../../types/task';
import { KanbanColumn } from './KanbanColumn';
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core';

const COLUMNS: { status: TaskStatus; title: string }[] = [
  { status: 'todo', title: 'To Do' },
  { status: 'in_progress', title: 'In Progress' },
  { status: 'review', title: 'Review' },
  { status: 'done', title: 'Done' },
];

export function KanbanBoard() {
  const tasks = useTaskStore((s) => s.tasks);
  const updateTask = useTaskStore((s) => s.updateTask);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    // Only update if the drop target is a column (status)
    if (COLUMNS.some((c) => c.status === newStatus)) {
      const task = tasks.find((t) => t.id === taskId);
      if (task && task.status !== newStatus) {
        updateTask(taskId, { status: newStatus });
      }
    }
  }

  return (
    <div data-testid="kanban-board">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto pb-4">
          {COLUMNS.map((col) => (
            <KanbanColumn
              key={col.status}
              status={col.status}
              title={col.title}
              tasks={tasks.filter((t) => t.status === col.status)}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
