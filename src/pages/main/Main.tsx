import React, { useState } from 'react';
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
import { useAppSelector } from '../../redux/hooks';
import { useSearchItemsQuery } from '../../redux/reducers';

const Main = (props: { defaultCards: Item[] | undefined }) => {
  const { search } = useAppSelector((state) => state.search);

  const { data: searchCards, isFetching } = useSearchItemsQuery(search);

  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({ id: 0, title: '' });

  const openPortal = (item: Item) => {
    setItem(item);
    setIsPortalOpen(true);
  };

  const closePortal = () => {
    setIsPortalOpen(false);
  };

  return (
    <main className="main">
      <SearchBar />

      {!searchCards?.length ? (
        <h4 className="no-data">{NO_DATA}</h4>
      ) : (
        <section className="cards">
          {isFetching ? (
            <Skeleton className="skeleton_cards" count={5} data-testid="test-skeleton_cards" />
          ) : !searchCards ? (
            props.defaultCards &&
            props.defaultCards.map((el: Item) => {
              return <Card key={el.id} card={el} openPortal={openPortal} data-testid="test-card" />;
            })
          ) : (
            searchCards.map((el: FoundItem) => {
              return <Card key={el.id} card={el} openPortal={openPortal} data-testid="test-card" />;
            })
          )}
        </section>
      )}

      {isPortalOpen &&
        createPortal(
          <>
            <Portal item={item} closePortal={closePortal} data-testid="test-portal" />
            <Shadow closePortal={closePortal} />
          </>,
          document.body
        )}
    </main>
  );
};

export default Main;
