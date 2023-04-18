import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainInitialState } from '../types';
import { fetchItemById, fetchItems, fetchSearchItems } from './api';

const mainInitialState: MainInitialState = {
  search: '',
  isPortalOpen: false,
  itemId: 0,
  item: undefined,
  defaultItems: undefined,
  foundItems: undefined,
  isLoading: false,
  isLoadingPortal: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.defaultItems = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchSearchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foundItems = action.payload;
      })
      .addCase(fetchSearchItems.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(fetchItemById.pending, (state) => {
        state.isLoadingPortal = true;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.isLoadingPortal = false;
        state.itemId = action.payload.id;
        state.item = action.payload;
      })
      .addCase(fetchItemById.rejected, (state) => {
        state.isLoadingPortal = false;
      });
  },
});

export const { setValue, setIsPortalOpen, setItemToOpen } = mainReducer.actions;

export default mainReducer;
