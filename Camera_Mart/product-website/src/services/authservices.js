import axios from 'axios';

export const registerUser = (userData) => {
  return axios.post('/api/auth/register', userData);
};

export const loginUser = (userData) => {
  return axios.post('/api/auth/login', userData);
};
