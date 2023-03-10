// for signIn and signUp

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

// for bookmark

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const addBookmark = (movie: any) => {
  return {
    type: ADD_BOOKMARK,
    payload: movie,
  };
};

export const removeBookmark = (id: number) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: id,
  };
};
