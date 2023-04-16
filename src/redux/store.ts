import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import api from './reducers/api';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
