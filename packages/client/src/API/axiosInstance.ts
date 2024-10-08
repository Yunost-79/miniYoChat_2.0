import axios from 'axios';

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  baseURL: 'http://localhost:7000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
