import { AuthState, AuthActionTypes, AuthAction } from './types';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case AuthActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
