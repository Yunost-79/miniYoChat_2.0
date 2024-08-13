import { create } from 'zustand';
import Cookies from 'js-cookie';

import { logout } from '../../API/axiosRequests';
import { EZustand } from '../../types/Enum';

type AuthState = {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  signOut: () => void;
};

const useAuthStore = create<AuthState>((set) => {
  const getTokenFromCookie = Cookies.get('jwt');
  const storedAuthState = localStorage.getItem(EZustand.isAuth);
  
  const isAuth = getTokenFromCookie ? true : storedAuthState ? JSON.parse(storedAuthState) : false;

  const signOut = () => {
    logout();
    set({ isAuth: false });
    localStorage.clear();
    Cookies.remove('jwt');
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
        localStorage.setItem(EZustand.isAuth, JSON.stringify(true));
      } else {
        console.warn('Cannot set isAuth to true without a valid token');
      }
    },
    signOut,
  };
});

export default useAuthStore;
