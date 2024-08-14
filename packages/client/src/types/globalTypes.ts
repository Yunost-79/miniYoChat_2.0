export type SignUpUserData = {
  email: string;
  username: string;
  password: string;
  rePassword: string;
};

export type SignUpResponse = {
  token: string;
  user: UserDataResponse;
  error?: string;
};

export type LoginUserData = {
  username: string;
  password: string;
};

export type UserDataResponse = {
  _id?: string;
  email?: string;
  username?: string;
  profileAvatar?: string;
};

export type LoginResponse = {
  token: string;
  user: UserDataResponse;
  error?: string;
};

export type SearchUserData = {
  _id: string;
  profileAvatar: string;
  username: string;
  __v: number;
};
