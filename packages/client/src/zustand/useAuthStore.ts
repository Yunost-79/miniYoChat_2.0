import { create } from 'zustand';

type AuthState = {
  isAuth: boolean;
};

const useAuthStore = create<AuthState>(() => ({
  isAuth: true,
}));

export default useAuthStore;
