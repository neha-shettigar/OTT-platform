// for bookmark
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
const initialStateOfBookmark: any = [];

const bookmarkReducers = (state = initialStateOfBookmark, action: any) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      return state.filter((movie: any) => movie.id !== action.payload);
    default:
      return state;
  }
};

export default bookmarkReducers;
