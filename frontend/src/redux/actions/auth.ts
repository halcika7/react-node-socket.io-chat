import { axios } from '../../lib/axios';
import { AuthToken } from '../../lib/decode';

// types
import { AppThunkDispatch } from '../AppThunkDispatch';
import { AuthActions, AuthActionTypes } from '../types/auth';
import { RouteComponentProps } from "react-router"

export const authSuccess = (token: string): AuthActionTypes => ({
  type: AuthActions.AUTH_SUCCESS,
  payload: { ...AuthToken.getTokenData(token), token },
});

export const authReset = (): AuthActionTypes => ({
  type: AuthActions.AUTH_RESET,
  payload: {},
});

export const logoutUser = (history: RouteComponentProps['history']) => async (
  dispatch: AppThunkDispatch
) => {
  await axios.post<{ message?: string }>('/auth/logout');
  dispatch(authReset());
  history.replace('/')
};

export const refreshToken = async (dispatch: AppThunkDispatch) => {
  dispatch({ type: AuthActions.AUTH_SET_LOADING, payload: { loading: true } });
  const { data } = await axios.get<{
    message: string;
    accessToken: string;
  }>('/auth/refresh');

  if (data.accessToken) {
    return dispatch(authSuccess(data.accessToken));
  }

  return dispatch(authReset());
};
