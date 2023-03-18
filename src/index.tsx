import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import About from 'pages/about/About';
import NotFound from 'pages/404/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Navigate to="/404" replace />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
