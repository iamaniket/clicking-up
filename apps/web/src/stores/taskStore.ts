import { create } from 'zustand';
import { Task, TaskStatus, TaskPriority } from '../types/task';
import { mockTasks } from '../data/mockTasks';

interface TaskState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  getTasksByStatus: (status: TaskStatus) => Task[];
}

let nextId = mockTasks.length + 1;

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [...mockTasks],
  addTask: (taskData) => {
    const now = new Date().toISOString();
    const task: Task = {
      ...taskData,
      id: `TASK-${String(nextId++).padStart(3, '0')}`,
      createdAt: now,
      updatedAt: now,
    };
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
  getTasksByStatus: (status) => get().tasks.filter((t) => t.status === status),
}));
