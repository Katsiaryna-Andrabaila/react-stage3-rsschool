import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainInitialState } from '../types';
import { fetchItemById, fetchItems, fetchSearchItems } from './api';
import { FoundItem, Item } from '../../types/types';

const mainInitialState: MainInitialState = {
  search: '',
  isPortalOpen: false,
  itemId: 0,
  item: undefined,
  defaultItems: undefined,
  foundItems: undefined,
  error: '',
  isLoading: false,
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
      .addCase(fetchItems.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled.type, (state, action: PayloadAction<{ data: Item[] }>) => {
        const { data } = action.payload;

        state.isLoading = false;
        state.error = '';
        state.defaultItems = data;
      })
      .addCase(fetchItems.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchSearchItems.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchSearchItems.fulfilled.type,
        (state, action: PayloadAction<{ data: FoundItem[] }>) => {
          const { data } = action.payload;

          state.isLoading = false;
          state.error = '';
          state.foundItems = data;
        }
      )
      .addCase(fetchSearchItems.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchItemById.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItemById.fulfilled.type, (state, action: PayloadAction<{ data: Item }>) => {
        const { data } = action.payload;

        state.isLoading = false;
        state.error = '';
        state.itemId = data.id;
        state.item = data;
      })
      .addCase(fetchItemById.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setValue, setIsPortalOpen, setItemToOpen } = mainReducer.actions;

export default mainReducer;
