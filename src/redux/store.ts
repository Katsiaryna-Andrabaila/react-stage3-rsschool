//import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
//import { setupListeners } from '@reduxjs/toolkit/query/react';
import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

//setupListeners(store.dispatch);

export default store;
