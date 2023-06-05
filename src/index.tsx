import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './App';
import './App.css';
import './pages/main/Main.css';
import './pages/404/404.css';
import './pages/about/About.css';
import './pages/form/Form.css';
import { BrowserRouter } from 'react-router-dom';
import setupStore from './redux/store';

const store = setupStore();

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
