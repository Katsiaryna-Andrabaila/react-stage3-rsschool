import { combineReducers } from '@reduxjs/toolkit';
import mainReducer from './mainReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  main: mainReducer.reducer,
  form: formReducer.reducer,
});

export default rootReducer;
