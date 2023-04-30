/**
 * @jest-environment jsdom
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import { routes } from './utils/routes';
import userEvent from '@testing-library/user-event';

describe('About page', () => {
  test('should have "/about" pathname', async () => {
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
