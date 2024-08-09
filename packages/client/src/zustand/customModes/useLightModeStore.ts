import { create } from 'zustand';

import { ECustomModes } from '../../types/Enum';

type LightMode = {
  isLightMode: boolean;
  setLightMode: (mode: boolean) => void;
};

export const useLightModeStore = create<LightMode>((set) => {
  const storedMode = localStorage.getItem(ECustomModes.isLightMode);
  const isLightMode = storedMode ? JSON.parse(storedMode) : false;

  return {
    isLightMode,
    setLightMode: (mode: boolean) => {
      set({ isLightMode: mode });
      localStorage.setItem(ECustomModes.isLightMode, JSON.stringify(mode));
    },
  };
});
