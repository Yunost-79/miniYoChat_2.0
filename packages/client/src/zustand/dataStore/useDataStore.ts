import Cookies from 'js-cookie';
import { create } from 'zustand';
import { EZustand } from '../../types/Enum';

export type ConversationItem = {
  _id: string;
  username: string;
  profileAvatar: string;
  lastMessage: string;
};

export type UserData = {
  _id?: string;
  email?: string;
  username?: string;
  profileAvatar?: string;
  conversationList?: [ConversationItem];
};

export type SearchUserData = {
  _id: string;
  profileAvatar: string;
  username: string;
  __v: number;
};

export type DataStore = {
  userData: UserData | null;
  searchUserData: SearchUserData[] | null;
  setUserData: (userData: UserData) => void;
  setSearchUserData: (searchUserData: SearchUserData[]) => void;
  clearUserData: () => void;
  clearSearchUserData: () => void;
};

export const useDataStore = create<DataStore>((set) => ({
  userData: null,
  searchUserData: null,

  setUserData: (userData) => {
    set({ userData });
  },

  setSearchUserData: (searchUserData) => {
    set({ searchUserData });
  },

  clearUserData: () => {
    set({ userData: null });
    Cookies.remove(EZustand.jwt);
  },
  clearSearchUserData: () => {
    set({ searchUserData: null });
  },
}));
