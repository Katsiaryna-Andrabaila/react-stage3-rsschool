/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import 'jest-location-mock';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('should contain the mock value in the search bar after page reload', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByRole('searchbox');
    const value = 'test';
    await act(() => userEvent.type(input, value));
    window.location.reload();
    expect(input).toHaveAttribute('value', value);
  });
});
