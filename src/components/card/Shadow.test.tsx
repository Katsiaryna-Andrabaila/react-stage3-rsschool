/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Shadow } from './Shadow';
import setupStore from '../../redux/store';

const store = setupStore();

describe('Shadow', () => {
  test('should remove after clicking', () => {
    render(
      <Provider store={store}>
        <Shadow />
      </Provider>
    );

    const shadow = screen.getByTestId('test-shadow');
    userEvent.click(shadow);

    waitFor(() => expect(shadow).not.toBeInTheDocument());
  });
});
