import { create } from 'zustand';

interface ProjectIdState {
  id: string;
  setProjectId: (value: string) => void;
}

export const useProjectStore = create<ProjectIdState>((set) => ({
  id: '',
  setProjectId: (value: string) => set({ id: value }),
}));
