import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../src/App';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import Html from './Html';
import type { Response } from 'express';
import setupStore from '../src/redux/store';
import { URL } from '../src/constants/constants';
import { Item } from '../src/types/types';
import api, { useGetItemsQuery } from '../src/redux/reducers/api';
import { StrictMode } from 'react';

export const render = async (path: string, options: object) => {
  /* const data = await fetch(URL);
  const startItems: Item[] = (await data.json()).data; */

  const store = setupStore();

  await store.dispatch(api.endpoints.getItems.initiate(''));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

  const preloadedState = store.getState();

  return [
    renderToPipeableStream(
      //<Html preloadedState={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      </Provider>,
      //</Html>,
      options
    ),
    preloadedState,
  ];
};
