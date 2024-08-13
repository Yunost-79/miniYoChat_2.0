import Cookies from 'js-cookie';
import { create } from 'zustand';
import { SignUpResponse } from '../../types/globalTypes';
import { EZustand } from '../../types/Enum';

type DataStore = {
  userData: SignUpResponse | null;
  setUserData: (userData: SignUpResponse) => void;
  clearUserData: () => void;
};

export const useDataStore = create<DataStore>((set) => ({
  userData: null,

  setUserData: (userData) => {
    set({ userData });
  },

  clearUserData: () => {
    set({ userData: null });

    Cookies.remove(EZustand.jwt);
  },
}));
