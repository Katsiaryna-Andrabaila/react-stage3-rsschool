/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import 'jest-location-mock';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchBar from './SearchBar';

describe('App', () => {
  test('should contain the mock value in the search bar after page reload', async () => {
    const test: string[] = [];
    const mockSearchCards = (searchValue: string) => {
      test.push(searchValue);
    };

    render(<SearchBar searchCards={mockSearchCards} />);

    const input = screen.getByRole('searchbox');
    const value = 'test';
    await act(() => userEvent.type(input, value));
    window.location.reload();
    expect(input).toHaveAttribute('value', value);
  });
});
