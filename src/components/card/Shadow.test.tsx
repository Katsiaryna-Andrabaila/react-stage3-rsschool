/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Shadow from './Shadow';

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
