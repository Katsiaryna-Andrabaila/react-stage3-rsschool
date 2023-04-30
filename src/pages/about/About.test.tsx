/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { About } from './About';

describe('About page', () => {
  test('should contain About title in header', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
