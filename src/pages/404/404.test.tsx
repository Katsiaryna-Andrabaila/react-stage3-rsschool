/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from './404';
import { MemoryRouter } from 'react-router-dom';

describe('Given the header title for 404 page', () => {
  test('Then I expect this title to be in the header', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
