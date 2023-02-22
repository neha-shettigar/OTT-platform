import { AuthAction, AuthActionTypes } from '../actions/index';

export interface AuthState {
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, token: action.payload, error: null };
    case AuthActionTypes.LOGIN_FAILURE:
      return { ...state, token: null, error: action.payload };
    case AuthActionTypes.LOGOUT:
      return { ...state, token: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
