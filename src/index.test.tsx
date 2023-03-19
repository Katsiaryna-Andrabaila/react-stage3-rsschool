/**
 * @jest-environment jsdom
 */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import { routes } from './utils/routes';
import userEvent from '@testing-library/user-event';

describe('Rendered about-us page', () => {
  test('Then I expect the pathname to be /about', async () => {
    ((route = '/about') => {
      window.history.pushState({}, 'About page', route);
      return {
        user: userEvent.setup(),
        ...render(<RouterProvider router={createBrowserRouter(routes)} />),
      };
    })();
    expect(window.location.pathname).toEqual('/about');
  });
});
