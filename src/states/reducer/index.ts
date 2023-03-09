const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        error: null,
      };
    case 'SIGN_IN_FAIL':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        error: null,
      };
    case 'REGISTER_FAIL':
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
