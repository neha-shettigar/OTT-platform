// index.js

import { legacy_createStore, combineReducers } from 'redux';
import authReducer from '../auth';

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers...
});

const store = legacy_createStore(rootReducer);

export default store;
