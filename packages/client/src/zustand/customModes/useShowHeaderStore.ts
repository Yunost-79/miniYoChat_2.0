import { create } from 'zustand';

type ShowHeader = {
  isShowHeader: boolean;
  setShowHeader: (mode: boolean) => void;
};

export const useShowHeaderStore = create<ShowHeader>((set) => ({
  isShowHeader: false,
  setShowHeader: (mode: boolean) => set({ isShowHeader: mode }),
}));
