import mainReducer from './mainReducer';
import formReducer from './formReducer';
import * as pkg from '@reduxjs/toolkit';
const { combineReducers } = pkg;

const rootReducer = combineReducers({
  main: mainReducer.reducer,
  form: formReducer.reducer,
});

export default rootReducer;
