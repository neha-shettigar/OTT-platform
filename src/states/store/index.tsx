import { legacy_createStore, combineReducers } from 'redux';
import authReducer from '../reducer/index';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = legacy_createStore(rootReducer);

export default store;
