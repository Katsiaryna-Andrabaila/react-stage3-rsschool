/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import items from '../../data/items.json';
import Main from './Main';

describe('Given the data items', () => {
  test('Then I expect amount of these items to be in the list', async () => {
    render(<Main />);
    const userList = await waitFor(() => screen.findAllByTestId('test-card'));
    expect(userList).toHaveLength(items.products.length);
  });
});
