import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import Card from '../../components/card/Card';
import './Main.css';
import { BestMovie, FoundMovie, Movie } from '../../types/types';
import { MAX_ITEMS_PER_PAGE } from '../../constants/constants';
import Portal from 'components/card/Portal';
import { createPortal } from 'react-dom';

const Main = (props: { cards: BestMovie[] }) => {
  const [cards, setCards] = useState<FoundMovie[]>([]);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [movie, setMovie] = useState<Movie>({ id: '', title: '' });

  const searchCards = (cards: FoundMovie[]) => {
    setCards(cards);
  };

  const openPortal = (movie: Movie) => {
    setIsPortalOpen(true);
    setMovie(movie);
  };

  return (
    <main className="main">
      <SearchBar searchCards={searchCards} />
      <section className="cards">
        {!cards.length
          ? props.cards.map((item: BestMovie) => {
              return <Card key={item.id} card={item} openPortal={openPortal} />;
            })
          : cards.slice(0, MAX_ITEMS_PER_PAGE).map((item: FoundMovie) => {
              return <Card key={item.id} card={item} openPortal={openPortal} />;
            })}
      </section>
      {isPortalOpen && createPortal(<Portal {...movie} />, document.body)}
    </main>
  );
};

export default Main;
