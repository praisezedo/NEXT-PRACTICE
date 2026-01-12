import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TaskStore {
  tasks: string[];
  addTask: (task: string) => void;
  deleteTask: (id: number) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task: string) => set((state) => ({ tasks: [...state.tasks, task]})),
      deleteTask: (id: number) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== id) })),
    }),
    {
      name: 'task-storage',
    }
  )
);




