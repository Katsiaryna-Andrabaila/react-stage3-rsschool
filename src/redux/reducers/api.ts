import { FoundItem, Item } from '../../types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from '../../constants/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk<Item[], string>(
  'fetchItems',
  async (value, { rejectWithValue }) => {
    const response = await fetch(`${URL}?page=1&limit=100`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data.data;
  }
);

export const fetchSearchItems = createAsyncThunk<FoundItem[], string>(
  'fetchSearchItems',
  async (value, { rejectWithValue }) => {
    const response = await fetch(`${URL}/search?q=${value}&limit=100&page=1`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data.data;
  }
);

export const fetchItemById = createAsyncThunk<Item, number>(
  'fetchItemById',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data.data;
  }
);

const api = createApi({
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

export default api;
