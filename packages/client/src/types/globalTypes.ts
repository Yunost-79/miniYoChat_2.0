export type SignUpUserData = {
  email: string;
  username: string;
  password: string;
  rePassword: string;
};

export type SignUpResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
  error?: string;
};

export type LoginUserData = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
  error?: string;
};
