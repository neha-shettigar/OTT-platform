export const signInSuccess = (user: any) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: user,
});

export const signInFail = (error: any) => ({
  type: 'SIGN_IN_FAIL',
  payload: error,
});

export const registerSuccess = (user: any) => ({
  type: 'REGISTER_SUCCESS',
  payload: user,
});

export const registerFail = (error: any) => ({
  type: 'REGISTER_FAIL',
  payload: error,
});
