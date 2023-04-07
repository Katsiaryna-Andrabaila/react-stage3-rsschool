import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import Card from '../../components/card/Card';
import './Main.css';
import { BestMovie, FoundMovie } from '../../types/types';
import { MAX_ITEMS_PER_PAGE } from '../../constants/constants';

const Main = (props: { cards: BestMovie[] }) => {
  const [cards, setCards] = useState<FoundMovie[]>([]);

  const searchCards = (cards: FoundMovie[]) => {
    setCards(cards);
  };

  return (
    <main className="main">
      <SearchBar searchCards={searchCards} />
      <section className="cards">
        {!cards.length
          ? props.cards.map((item: BestMovie) => {
              return <Card key={item.id} {...item} />;
            })
          : cards.slice(0, MAX_ITEMS_PER_PAGE).map((item: FoundMovie) => {
              return <Card key={item.id} {...item} />;
            })}
      </section>
    </main>
  );
};

export default Main;
