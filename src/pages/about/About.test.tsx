/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

describe('Given the header title for about-us page', () => {
  test('Then I expect this title to be in the header', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.getByTestId('about')).toBeInTheDocument();
  });
});
