// index.js
import bookmarkReducers from '../bookmarkReducer';
import authReducer from '../auth';
import { legacy_createStore, combineReducers } from 'redux';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth: authReducer,
  bookmarks: bookmarkReducers,
});

const store = legacy_createStore(rootReducer);

export default store;
