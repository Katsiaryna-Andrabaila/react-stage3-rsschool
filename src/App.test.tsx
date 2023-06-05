/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import setupStore from './redux/store';

const store = setupStore();

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
