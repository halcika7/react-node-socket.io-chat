import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { store } from '../redux/index';
import { authSuccess, authReset } from '../redux/actions';

const url = process.env.REACT_APP_BACKEND_URL;

interface Config extends AxiosRequestConfig {
  _retry?: boolean | undefined;
}

const ax = Axios.create({
  withCredentials: true,
  validateStatus: () => true,
  baseURL: url,
});

const rejectPromise = (error: object | string) => Promise.reject(error);

ax.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const originalRequest = error.config as Config;
    if (error.response) {
      const errorStatus = error.response.status;
      const refreshUrl = `${url}/auth/refresh`;

      if (errorStatus === 401 && originalRequest.url === refreshUrl) {
        return rejectPromise(error);
      }

      if (errorStatus === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return axios.get('/auth/refresh').then(res => {
          if (res.data.accessToken) {
            const { accessToken } = res.data;

            store.dispatch(authSuccess(accessToken));

            return axios(originalRequest);
          }

          store.dispatch(authReset());

          return rejectPromise(error);
        });
      }

      return rejectPromise(error);
    }
  }
);

export const axios = ax;
