import React from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import items from '../../data/items.json';
import Card from '../../components/card/Card';
import './Main.css';

export default class Main extends React.Component {
  render() {
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
  }
}
