import { Dispatch } from 'redux';
import authService from '../serivces/index';

export enum AuthActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: string;
}

interface LoginFailureAction {
  type: AuthActionTypes.LOGIN_FAILURE;
  payload: string;
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginSuccessAction | LoginFailureAction | LogoutAction;

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      const token = await authService.login(email, password);
      dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: token });
    } catch (error: any) {
      dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: error.message });
    }
  };

export const logout = () => ({ type: AuthActionTypes.LOGOUT });
