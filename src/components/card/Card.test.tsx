/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import items from '../../data/items.json';
import Card from './Card';

describe('Card', () => {
  test('should contain test id and alt text for photo', () => {
    render(<Card {...items.products[0]} />);

    expect(screen.getByAltText<HTMLImageElement>(/dog photo/i)).toBeInTheDocument();

    expect(screen.getByTestId('test-card')).toBeInTheDocument();
  });
});
