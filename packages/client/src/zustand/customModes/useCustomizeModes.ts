import { create } from 'zustand';

type CustomizeModes = {
  isLightMode: boolean;
  setIsLightMode: (mode: boolean) => void;

  isChangeSizeScreen: boolean;
  setIsChangeSizeScreen: (mode: boolean) => void;

  isShowFooter: boolean;
  setIsShowFooter: (mode: boolean) => void;
};

export const useCustomizeModesStore = create<CustomizeModes>((set) => ({
  isLightMode: false,
  setIsLightMode: (mode: boolean) => set({ isLightMode: mode }),

  isChangeSizeScreen: false,
  setIsChangeSizeScreen: (mode: boolean) => set({ isChangeSizeScreen: mode }),

  isShowFooter: false,
  setIsShowFooter: (mode: boolean) => set({ isShowFooter: mode }),
}));
