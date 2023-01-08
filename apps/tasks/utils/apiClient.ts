import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.response.use(
  res => res.data,
  err => {
    if (err.response) {
      return Promise.reject(err.response);
    }

    if (err.request) {
      return Promise.reject(err.request);
    }

    return Promise.reject(err.message);
  },
);

const apiClient = <T>(cfg: AxiosRequestConfig) => instance.request<any, T>(cfg);

export default apiClient;
