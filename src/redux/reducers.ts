import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';
import {
  CardsInitialState,
  FormInitialState,
  FormPayloadAction,
  FoundItem,
  Item,
} from '../types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from '../constants/constants';

const cardsInitialState: CardsInitialState = {
  value: localStorage.getItem('search-key987') || '',
  cards: [],
  isPortalOpen: false,
  item: { id: 0, title: '' },
  isLoading: false,
};

const formInitialState: FormInitialState = {
  formCards: [],
  showMessage: false,
};

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
    getItemById: build.query<FoundItem, number>({
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

/* const cardsReducer = createSlice({
    name: 'apiCards',
    initialState: cardsInitialState,
    reducers: {
        
    }
}); */

const formReducer = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    addCard: (state, action: PayloadAction<FormPayloadAction>) => {
      const { card, showMessage } = action.payload;
      state.formCards.push(card);
      state.showMessage = showMessage;
    },
  },
});

const rootReducer = combineReducers({ api: api.reducer, form: formReducer.reducer });

export default rootReducer;
