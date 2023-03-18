/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import 'jest-location-mock';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchBar from './SearchBar';

describe('Given the search bar and mock value', () => {
  test('Then after page reload I expect this mock value to be in the search bar', () => {
    act(() => render(<SearchBar />));

    const input = screen.getByRole('searchbox');
    const value = 'test';
    act(() => userEvent.type(input, value));
    window.location.reload();
    expect(input).toHaveAttribute('value', value);
  });
});
