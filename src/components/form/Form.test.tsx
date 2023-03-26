/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Form from './Form';
import { MemoryRouter } from 'react-router-dom';
import { FormCard } from '../../types/types';

describe('Form', () => {
  describe('when typing name in wrong format', () => {
    test('should show error under the name input', async () => {
      render(
        <MemoryRouter>
          <Form
            addFormCard={(card: FormCard, showMessage: boolean) => ({
              formCards: [card],
              showMessage,
            })}
          />
        </MemoryRouter>
      );

      const name = '123';
      const nameInput = screen.getByTestId('name-input');
      const addBtn = screen.getByRole('textbox');

      await act(() => userEvent.type(nameInput, name));

      await act(() => userEvent.click(addBtn)).then(() => {
        expect(screen.getByText(/name required/i)).toBeInTheDocument();
      });
    });
  });
});