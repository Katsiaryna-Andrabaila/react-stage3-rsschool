import mainReducer from './mainReducer';
import formReducer from './formReducer';
//import { combineReducers } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
import api from './api';
const { combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const rootReducer = combineReducers({
  main: mainReducer.reducer,
  api: api.reducer,
  form: formReducer.reducer,
});

export default rootReducer;
