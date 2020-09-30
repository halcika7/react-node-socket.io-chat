import { AuthActions, AuthActionTypes } from '../types/auth';

export interface AuthState {
  token: string | null;
  id: string | null;
  role: string | null;
  isAuthenticated: boolean;
  authLoading: boolean;
}

export const INITIAL_STATE: AuthState = {
  token: null,
  id: null,
  role: null,
  isAuthenticated: false,
  authLoading: false,
};

export function AuthReducer(
  prevState = INITIAL_STATE,
  action: AuthActionTypes
) {
  switch (action.type) {
    case AuthActions.AUTH_RESET:
      return { ...INITIAL_STATE };
    case AuthActions.AUTH_SUCCESS:
      return { ...INITIAL_STATE, ...action.payload, authLoading: false, isAuthenticated: true };
    case AuthActions.AUTH_SET_LOADING:
      return { ...prevState, authLoading: action.payload.loading };
    default:
      return prevState;
  }
}
