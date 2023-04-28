import { FormCard } from '../../types/types';
import { FormInitialState } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';
//import { createSlice } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

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
