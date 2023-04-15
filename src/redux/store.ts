import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  /* middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([getmoviesdetails.middleware, authService.middleware]), */
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
