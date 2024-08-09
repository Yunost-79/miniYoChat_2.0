import { create } from 'zustand';

type ShowFooter = {
  isShowFooter: boolean;
  setShowFooter: (mode: boolean) => void;
};

export const useShowFooterStore = create<ShowFooter>((set) => ({
  isShowFooter: false,
  setShowFooter: (mode: boolean) => set({ isShowFooter: mode }),
}));
