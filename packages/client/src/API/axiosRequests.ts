import Cookies from 'js-cookie';

import { instance } from './axiosInstance';

import { LoginResponse, LoginUserData, SignUpResponse, SignUpUserData } from '../types/globalTypes';

export const signUp = async (userData: SignUpUserData): Promise<SignUpResponse | undefined> => {
  try {
    const { data } = await instance.post<SignUpResponse>('/auth/signup', userData);

    if (data.error) {
      throw new Error(data.error);
    }

    localStorage.setItem('chat-user', JSON.stringify(data));
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error('Login error:', e.message);
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

    localStorage.setItem('chat-user', JSON.stringify(data));
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

    console.log('Logout successful:', data.message);

    localStorage.clear();
    Cookies.remove('jwt');

    return data;
  } catch (e) {
    const err = e as Error;
    console.error(err);
  }
};
