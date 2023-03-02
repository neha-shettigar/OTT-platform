import { Dispatch } from 'redux';
import { AuthActionTypes, AuthAction } from './types';
import { auth } from './firebase';

export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.LOGIN_REQUEST });

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: user });
      })
      .catch((error: any) => {
        const errorMessage = error.message;
        dispatch({
          type: AuthActionTypes.LOGIN_FAILURE,
          payload: errorMessage,
        });
      });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: AuthActionTypes.LOGOUT });
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
};
