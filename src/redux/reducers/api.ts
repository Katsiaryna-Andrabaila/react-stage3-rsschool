import { FoundItem, Item } from '../../types/types';
import { URL } from '../../constants/constants';
//import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
/* import * as toolkitRaw from '@reduxjs/toolkit';
const { createApi } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;
type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown }; */

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
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
