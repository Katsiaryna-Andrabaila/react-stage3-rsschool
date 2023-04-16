import React from 'react';
import { createPortal } from 'react-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Main.css';
import SearchBar from '../../components/searchBar/SearchBar';
import Card from '../../components/card/Card';
import { FoundItem, Item } from '../../types/types';
import Portal from '../../components/card/Portal';
import Shadow from '../../components/card/Shadow';
import { NO_DATA } from '../../constants/constants';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useSearchItemsQuery } from '../../redux/reducers';
import { setItemToOpen } from '../../redux/reducers';

const Main = (props: { defaultCards: Item[] | undefined }) => {
  const { search, isPortalOpen, itemId } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  const { data: searchCards, isFetching } = useSearchItemsQuery(search);

  const openPortal = (id: number) => {
    dispatch(setItemToOpen({ itemId: id }));
  };

  return (
    <main className="main">
      <SearchBar />

      <section className="cards">
        {isFetching ? (
          <Skeleton className="skeleton_cards" count={5} data-testid="test-skeleton_cards" />
        ) : !searchCards ? (
          props.defaultCards &&
          props.defaultCards.map((el: Item) => {
            return <Card key={el.id} card={el} openPortal={openPortal} data-testid="test-card" />;
          })
        ) : !searchCards?.length ? (
          <h4 className="no-data">{NO_DATA}</h4>
        ) : (
          searchCards.map((el: FoundItem) => {
            return <Card key={el.id} card={el} openPortal={openPortal} data-testid="test-card" />;
          })
        )}
      </section>

      {isPortalOpen &&
        createPortal(
          <>
            <Portal id={itemId} data-testid="test-portal" />
            <Shadow />
          </>,
          document.body
        )}
    </main>
  );
};

export default Main;
