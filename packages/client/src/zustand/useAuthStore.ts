import { create } from 'zustand';

import { EZustand } from '../types/Enum';

type AuthState = {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => {
  const storedAuthState = localStorage.getItem(EZustand.isAuth);
  const isAuth = storedAuthState ? JSON.parse(storedAuthState) : false;

  return {
    isAuth,
    setIsAuth: (auth: boolean) => {
      set({ isAuth: auth });
      localStorage.setItem(EZustand.isAuth, JSON.stringify(auth));
    },
  };
});

export default useAuthStore;
