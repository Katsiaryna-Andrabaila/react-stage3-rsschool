/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('should render about us link', () => {
    act(() => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });

    const linkElement = screen.getByText(/about us/i);
    expect(linkElement).toBeInTheDocument();
  });
});
