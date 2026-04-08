import { useState } from 'react';
import { TaskStatus, TaskPriority } from '../../types/task';
import { useTaskStore } from '../../stores/taskStore';
import { mockUsers } from '../../data/mockUsers';
import { BaseCard } from '../ui/BaseCard';
import { BaseButton } from '../ui/BaseButton';
import { FormLabel } from '../ui/FormLabel';
import { BaseInput } from '../ui/BaseInput';

interface TaskFormProps {
  onClose: () => void;
}

export function TaskForm({ onClose }: TaskFormProps) {
  const addTask = useTaskStore((s) => s.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatus>('todo');
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [assigneeId, setAssigneeId] = useState(mockUsers[0].id);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({
      title: title.trim(),
      description: description.trim(),
      status,
      priority,
      assigneeId,
      dueDate,
      tags: [],
    });
    onClose();
  };

  return (
    <BaseCard variant="elevated">
      <form data-testid="task-form" onSubmit={handleSubmit}>
        <h3 className="mb-4 text-sm font-bold text-on-surface">New Task</h3>

        <div className="mb-3">
          <FormLabel>Title</FormLabel>
          <BaseInput
            type="text"
            data-testid="task-title-input"
            value={title}
            onChange={setTitle}
            placeholder="Task title"
          />
        </div>

        <div className="mb-3">
          <FormLabel>Description</FormLabel>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the task…"
            rows={2}
            className="w-full rounded-xl bg-surface-container-highest py-2.5 px-4 text-sm text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container focus:outline-none resize-none"
          />
        </div>

        <div className="mb-3 grid grid-cols-2 gap-3">
          <div>
            <FormLabel>Status</FormLabel>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
              className="w-full rounded-xl bg-surface-container-highest py-2.5 px-3 text-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:outline-none"
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
            <FormLabel>Priority</FormLabel>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as TaskPriority)}
              className="w-full rounded-xl bg-surface-container-highest py-2.5 px-3 text-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:outline-none"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-3">
          <div>
            <FormLabel>Assignee</FormLabel>
            <select
              value={assigneeId}
              onChange={(e) => setAssigneeId(e.target.value)}
              className="w-full rounded-xl bg-surface-container-highest py-2.5 px-3 text-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:outline-none"
            >
              {mockUsers.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
          <div>
            <FormLabel>Due Date</FormLabel>
            <BaseInput
              type="date"
              value={dueDate}
              onChange={setDueDate}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2">
          <BaseButton type="button" variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </BaseButton>
          <BaseButton type="submit" size="sm" data-testid="task-submit-btn">
            Create Task
          </BaseButton>
        </div>
      </form>
    </BaseCard>
  );
}
