/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import items from '../../data/items.json';
import Card from './Card';

describe('Given the data item', () => {
  test('Then I expect this item to be in the card', () => {
    render(<Card {...items.products[0]} />);

    expect(screen.getByAltText<HTMLImageElement>(/dog photo/i)).toBeInTheDocument();

    expect(screen.getByTestId('test-card')).toBeInTheDocument();
  });
});
