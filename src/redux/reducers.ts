import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';
import { FormCard, FormInitialState, FoundItem, Item, MainInitialState } from '../types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from '../constants/constants';

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

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getItems: build.query<Item[], string>({
      queryFn: async () => {
        try {
          const response = await fetch(`${URL}?page=1&limit=100`);
          return { data: (await response.json()).data };
        } catch (e) {
          return { error: { status: 404, data: 'Server Error' } };
        }
      },
    }),
    searchItems: build.query<FoundItem[], string>({
      queryFn: async (value: string) => {
        try {
          const response = await fetch(`${URL}/search?q=${value}&limit=100&page=1`);
          return { data: (await response.json()).data };
        } catch (e) {
          return { error: { status: 404, data: 'Server Error' } };
        }
      },
    }),
    getItemById: build.query<Item, number>({
      queryFn: async (id: number) => {
        try {
          const response = await fetch(`${URL}/${id}`);
          return { data: (await response.json()).data };
        } catch (e) {
          return { error: { status: 404, data: 'Server Error' } };
        }
      },
    }),
  }),
});
export const { useGetItemsQuery, useSearchItemsQuery, useGetItemByIdQuery } = api;

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

const rootReducer = combineReducers({
  main: mainReducer.reducer,
  api: api.reducer,
  form: formReducer.reducer,
});

export default rootReducer;
