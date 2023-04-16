/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Item } from '../../types/types';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Portal from './Portal';

describe('Portal', () => {
  test('should close after clicking on close sign', () => {
    const card: Item = { id: 1, title: 'Winter' };

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(card) })
    ) as jest.Mock<() => Promise<Response>>;

    render(
      <Provider store={store}>
        <Portal id={card.id} />
      </Provider>
    );

    waitFor(() => {
      userEvent.click(screen.getByTestId('test-close-portal'));
      expect(screen.getByTestId('test-portal')).not.toBeInTheDocument();
    });
  });
});
