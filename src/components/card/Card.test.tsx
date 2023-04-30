/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Card } from './Card';
import { Item } from '../../types/types';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';
import { Provider } from 'react-redux';
import setupStore from '../../redux/store';

const store = setupStore();

describe('Card', () => {
  test('should open Portal and Shadow after clicking', () => {
    const card: Item = { id: 1, title: 'Winter' };

    const mockOpenPortal = (itemId: number) => {
      card.id = itemId;
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(card) })
    ) as jest.Mock<() => Promise<Response>>;

    render(
      <Provider store={store}>
        <Card card={card} openPortal={mockOpenPortal} />
      </Provider>
    );

    userEvent.click(screen.getByTestId('test-card'));

    waitFor(() => expect(screen.getByTestId('test-portal')).toBeInTheDocument());
  });
});
