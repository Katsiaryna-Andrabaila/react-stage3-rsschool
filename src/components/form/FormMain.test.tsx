/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import FormMain from './FormMain';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Form main', () => {
  test('should contain the title on the page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormMain />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/your pets/i)).toBeInTheDocument();
  });
});
