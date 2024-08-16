import { create } from 'zustand';

import { EZustand } from '../../types/Enum';

type ShowHeader = {
  isShowHeader: boolean;
  setShowHeader: (show: boolean) => void;
};

export const useShowHeaderStore = create<ShowHeader>((set) => {
  const storedHeaderState = localStorage.getItem(EZustand.isShowHeader);
  const isShowHeader = storedHeaderState ? JSON.parse(storedHeaderState) : false;

  return {
    isShowHeader,
    setShowHeader: (show: boolean) => {
      set({ isShowHeader: show });
      localStorage.setItem(EZustand.isShowHeader, JSON.stringify(show));
    },
  };
});
