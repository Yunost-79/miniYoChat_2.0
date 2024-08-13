import Cookies from 'js-cookie';
import { create } from 'zustand';
import { EZustand } from '../../types/Enum';

type UserData = {
  id: string;
  email: string;
  username: string;
  profileAvatar: string;
};

type DataStore = {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
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
