import { instance } from './axiosInstance';

import { useDataStore } from '../zustand/dataStore/useDataStore';

import { LoginResponse, LoginUserData, SignUpResponse, SignUpUserData } from '../types/globalTypes';

const { setUserData, clearUserData } = useDataStore.getState();

export const signUp = async (userData: SignUpUserData): Promise<SignUpResponse | undefined> => {
  try {
    const { data } = await instance.post<SignUpResponse>('/auth/signup', userData);

    if (data.error) {
      throw new Error(data.error);
    }

    setUserData(data);

    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error('Signup error:', e.message);
      throw e;
    } else {
      console.error('Unexpected error:', e);
      throw new Error('An unexpected error occurred');
    }
  }
};

export const login = async (userData: LoginUserData): Promise<LoginResponse | undefined> => {
  try {
    const { data } = await instance.post<LoginResponse>('/auth/login', userData);

    if (data.error) {
      throw new Error(data.error);
    }

    setUserData(data);

    return data;
  } catch (e) {
    const err = e as Error;
    console.error('Sign up error:', err.message);
    throw err;
  }
};

export const logout = async (): Promise<void> => {
  try {
    const { data } = await instance.post('/auth/logout');

    clearUserData();

    return data;
  } catch (e) {
    const err = e as Error;
    console.error(err);
  }
};

export const updateUser = async (): Promise<void> => {
  try {
    const { data } = await instance.get('/users/update-user');
    setUserData(data);
  } catch (e) {
    const err = e as Error;
    console.error(err);
  }
};
