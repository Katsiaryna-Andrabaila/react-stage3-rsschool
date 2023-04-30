/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NotFound } from './404';
import { MemoryRouter } from 'react-router-dom';

describe('404 page', () => {
  test('should contain the title in the header', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
