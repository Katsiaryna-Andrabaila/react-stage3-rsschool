//import { configureStore } from '@reduxjs/toolkit';
import api from './reducers/api';
import rootReducer from './reducers/rootReducer';
//import { setupListeners } from '@reduxjs/toolkit/query';
/* import * as toolkitQuery from '@reduxjs/toolkit/query/react';
const { setupListeners } = ((toolkitQuery as TypeToolkitQuery).default ??
  toolkitRaw) as typeof toolkitQuery;
type TypeToolkitQuery = typeof toolkitQuery & { default?: unknown }; */

import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

const setupStore = (preloadedState?: Partial<ReturnType<typeof rootReducer>>) =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
    preloadedState,
  });

//setupListeners(setupStore().dispatch);

export default setupStore;
