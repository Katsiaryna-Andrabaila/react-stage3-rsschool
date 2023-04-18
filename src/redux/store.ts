import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export default store;
