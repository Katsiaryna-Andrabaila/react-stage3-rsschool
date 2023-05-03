import { combineReducers } from '@reduxjs/toolkit';
import api from './api';
import mainReducer from './mainReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  main: mainReducer.reducer,
  api: api.reducer,
  form: formReducer.reducer,
});

export default rootReducer;
