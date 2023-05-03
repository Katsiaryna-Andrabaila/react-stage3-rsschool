import React, { useEffect, useState } from 'react';
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
import { searchItems } from '../../api/searchItems';

const Main = (props: { defaultCards: Item[] }) => {
  const [value, setValue] = useState<string>('');
  const [cards, setCards] = useState<FoundItem[] | null>([]);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [item, setItem] = useState<Item>({ id: 0, title: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchCards = async (searchValue: string) => {
    setValue(searchValue);
  };

  useEffect(() => {
    const setData = async () => {
      setIsLoading(true);

      if (value) {
        const searchCards = await searchItems(value);
        searchCards && searchCards.length ? setCards(await searchCards) : setCards(null);
      }

      setIsLoading(false);
    };
    setData();
  }, [value]);

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

      {!cards ? (
        <h4 className="no-data">{NO_DATA}</h4>
      ) : (
        <section className="cards">
          {isLoading ? (
            <Skeleton className="skeleton_cards" count={5} data-testid="test-skeleton_cards" />
          ) : !cards.length ? (
            props.defaultCards.map((el: Item) => {
              return <Card key={el.id} card={el} openPortal={openPortal} data-testid="test-card" />;
            })
          ) : (
            cards.map((el: FoundItem) => {
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
