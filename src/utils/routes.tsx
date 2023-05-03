import React from 'react';
import App from '../App';
import { Navigate } from 'react-router-dom';
import About from '../pages/about/About';
import NotFound from '../pages/404/404';
import FormPage from '../pages/form/FormPage';

export const routes = [
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
    path: '/about',
    element: <About />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
];
