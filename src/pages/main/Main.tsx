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
import { NO_DATA } from 'constants/constants';

const Main = (props: { defaultCards: Item[] }) => {
  const [cards, setCards] = useState<FoundItem[] | null>([]);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({ id: 0, title: '' });

  const searchCards = (cards: FoundItem[] | null) => {
    setCards(cards);
  };

  const openPortal = (item: Item) => {
    setItem(item);
    setIsPortalOpen(true);
  };

  const closePortal = () => {
    setIsPortalOpen(false);
  };

  return (
    <main className="main">
      <SearchBar searchCards={searchCards} />
      <React.Suspense fallback={<Skeleton count={5} width={40} height={40} />}>
        <section className="cards">
          {cards && !cards.length ? (
            props.defaultCards.map((el: Item) => {
              return <Card key={el.id} card={el} openPortal={openPortal} />;
            })
          ) : !cards ? (
            <h4 className="no-data">{NO_DATA}</h4>
          ) : (
            cards.map((el: FoundItem) => {
              return <Card key={el.id} card={el} openPortal={openPortal} />;
            })
          )}
        </section>
      </React.Suspense>
      {isPortalOpen &&
        createPortal(
          <>
            <Portal item={item} closePortal={closePortal} />
            <Shadow closePortal={closePortal} />
          </>,
          document.body
        )}
    </main>
  );
};

export default Main;
