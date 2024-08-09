import { create } from 'zustand';

import { ECustomModes } from '../../types/Enum';

type FullscreenMode = {
  isFullscreenMode: boolean;
  setFullscreenMode: (mode: boolean) => void;
};

export const useFullscreenModeStore = create<FullscreenMode>((set) => {
  const storedMode = localStorage.getItem(ECustomModes.isFullscreenMode);
  const isFullscreenMode = storedMode ? JSON.parse(storedMode) : false;

  return {
    isFullscreenMode,
    setFullscreenMode: (mode: boolean) => {
      set({ isFullscreenMode: mode });
      localStorage.setItem(ECustomModes.isFullscreenMode, JSON.stringify(mode));
    },
  };
});
