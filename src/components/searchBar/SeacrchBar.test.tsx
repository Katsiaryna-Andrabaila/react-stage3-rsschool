/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import 'jest-location-mock';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import setupStore from '../../redux/store';

const store = setupStore();

describe('App', () => {
  test('should contain the mock value in the search bar after page reload', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByRole('searchbox');
    const value = 'test';
    await act(() => userEvent.type(input, value));
    window.location.reload();
    expect(input).toHaveAttribute('value', value);
  });
});
