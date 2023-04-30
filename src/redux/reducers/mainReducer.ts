import { MainInitialState } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';
//import { createSlice } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

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
