import { instance } from './axiosInstance';

const api = async (path: string, options: object) => {
  const response = await instance({
    ...options,
    url: path,
  });

  return response.data;
};

export default api;
