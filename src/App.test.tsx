/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

describe('App', () => {
  test('should render about us link', () => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );
    });

    const linkElement = screen.getByText(/about us/i);
    expect(linkElement).toBeInTheDocument();
  });
});
