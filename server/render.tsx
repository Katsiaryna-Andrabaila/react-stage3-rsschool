import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../src/App';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import setupStore from '../src/redux/store';
import api from '../src/redux/reducers/api';

export const render = async (path: string, options: object) => {
  const store = setupStore();

  await store.dispatch(api.endpoints.getItems.initiate(''));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

  const preloadedState = store.getState();

  return [
    renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      </Provider>,
      options
    ),
    preloadedState,
  ];
};
