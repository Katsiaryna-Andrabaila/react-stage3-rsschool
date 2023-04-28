import { FoundItem, Item } from '../../types/types';
import { URL } from '../../constants/constants';
//import { createAsyncThunk } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
const { createAsyncThunk } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };

export const fetchItems = createAsyncThunk<Item[]>('fetchItems', async () => {
  const response = await fetch(`${URL}?page=1&limit=100`);
  const data = await response.json();
  return data.data;
});

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
