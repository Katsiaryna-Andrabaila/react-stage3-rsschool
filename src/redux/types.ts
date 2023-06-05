import { FormCard, FoundItem, Item } from 'types/types';
import setupStore from './store';

const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type RequestState = 'pending' | 'fulfilled' | 'rejected';

export type CardsInitialState = {
  value: string;
  cards: FoundItem[] | Item[] | null;
  isPortalOpen: boolean;
  item: Item;
  isLoading: boolean;
};

export type FormInitialState = {
  formCards: FormCard[];
  isMessage: boolean;
};

export type MainInitialState = {
  search: string;
  isPortalOpen: boolean;
  itemId: number;
};
