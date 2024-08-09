import { create } from 'zustand';

type LightMode = {
  isLightMode: boolean;
  setLightMode: (mode: boolean) => void;
};

export const useLightModeStore = create<LightMode>((set) => ({
  isLightMode: false,
  setLightMode: (mode: boolean) => set({ isLightMode: mode }),
}));
