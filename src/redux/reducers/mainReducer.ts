import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainInitialState } from '../../types/types';

const mainInitialState: MainInitialState = {
  search: '',
  isPortalOpen: false,
  itemId: 0,
};

const mainReducer = createSlice({
  name: 'main',
  initialState: mainInitialState,
  reducers: {
    setValue: (state, action: PayloadAction<{ search: string }>) => {
      const { search } = action.payload;
      state.search = search;
    },
    setIsPortalOpen: (state, action: PayloadAction<{ isPortalOpen: boolean }>) => {
      const { isPortalOpen } = action.payload;
      state.isPortalOpen = isPortalOpen;
    },
    setItemToOpen: (state, action: PayloadAction<{ itemId: number }>) => {
      const { itemId } = action.payload;
      state.itemId = itemId;
    },
  },
});

export const { setValue, setIsPortalOpen, setItemToOpen } = mainReducer.actions;

export default mainReducer;
