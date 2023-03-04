// auth.js

// Action types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const SIGNOUT = 'SIGNOUT';

// Action creators
export const registerSuccess = (user: any) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error: any) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const signInSuccess = (user: any) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signInFail = (error: any) => ({
  type: SIGNIN_FAIL,
  payload: error,
});

export const signOut = () => ({
  type: SIGNOUT,
});

// Reducers
const initialState = {
  user: null,
  error: null,
};

const authReducer = (
  state = initialState,
  action: { type: any; payload: any },
) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        user: action.payload,
        error: null,
      };
    case REGISTER_FAIL:
    case SIGNIN_FAIL:
      return {
        user: null,
        error: action.payload,
      };
    case SIGNOUT:
      return {
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
