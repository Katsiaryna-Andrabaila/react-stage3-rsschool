import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormCard, FormInitialState } from '../../types/types';

const formInitialState: FormInitialState = {
  formCards: [],
  isMessage: false,
};

const formReducer = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    addCard: (state, action: PayloadAction<{ card: FormCard }>) => {
      const { card } = action.payload;
      state.formCards.push(card);
    },
    showMessage: (state, action: PayloadAction<{ showMessage: boolean }>) => {
      const { showMessage } = action.payload;
      state.isMessage = showMessage;
    },
  },
});

export const { addCard, showMessage } = formReducer.actions;

export default formReducer;
