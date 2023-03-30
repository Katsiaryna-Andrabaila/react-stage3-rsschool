import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import items from '../../data/items.json';
import Card from '../../components/card/Card';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <SearchBar />
      <section className="cards">
        {items.products.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export default Main;
