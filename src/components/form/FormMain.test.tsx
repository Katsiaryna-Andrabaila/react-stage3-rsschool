/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import FormMain from './FormMain';
import { MemoryRouter } from 'react-router-dom';

describe('Form main', () => {
  test('should contain the title on the page', () => {
    render(
      <MemoryRouter>
        <FormMain />
      </MemoryRouter>
    );

    expect(screen.getByText(/your pets/i)).toBeInTheDocument();
  });
});
