/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';
import React from 'react';
import Main from './Main';
import { Item } from '../../types/types';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { MemoryRouter } from 'react-router-dom';

describe('Main', () => {
  test('should display loader before loading data', async () => {
    const cards: Item[] = [
      { id: 1, title: 'Winter' },
      { id: 2, title: 'Summer' },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(cards) })
    ) as jest.Mock<() => Promise<Response>>;

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main defaultCards={cards} />
        </MemoryRouter>
      </Provider>
    );
    waitFor(() => expect(screen.getByTestId('test-skeleton_cards')).toBeInTheDocument());
  });
});
