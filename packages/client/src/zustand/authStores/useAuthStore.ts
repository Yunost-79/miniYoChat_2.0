import { create } from 'zustand';
import Cookies from 'js-cookie';

import { logout } from '../../API/axiosRequests';
import { EZustand } from '../../types/Enum';

type AuthState = {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>((set) => {
  const getTokenFromCookie = Cookies.get('jwt');

  const isAuth = !!getTokenFromCookie && !!Cookies.get(EZustand.isAuth);

  const signOut = () => {
    logout();
    set({ isAuth: false });
    Cookies.remove('jwt');
    Cookies.remove(EZustand.isAuth);
  };

  return {
    isAuth,
    setIsAuth: (auth: boolean) => {
      if (!auth) {
        signOut();
        return;
      }

      if (Cookies.get('jwt')) {
        set({ isAuth: true });

        Cookies.set(EZustand.isAuth, 'true');
      } else {
        console.warn('Cannot set isAuth to true without a valid token');
      }
    },
    signOut,
  };
});

