/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import items from '../../data/items.json';
import Main from './Main';

/* describe('Main', () => {
  test('should have the amount of card items to be equal to data items', async () => {
    render(<Main />);
    const userList = await waitFor(() => screen.findAllByTestId('test-card'));
    expect(userList).toHaveLength(items.products.length);
  });
}); */
