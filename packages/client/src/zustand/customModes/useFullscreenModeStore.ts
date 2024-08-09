import { create } from 'zustand';

type FullscreenMode = {
  isFullscreenMode: boolean;
  setFullscreenMode: (mode: boolean) => void;
};

export const useFullscreenModeStore = create<FullscreenMode>((set) => ({
  isFullscreenMode: false,
  setFullscreenMode: (mode: boolean) => set({ isFullscreenMode: mode }),
}));
