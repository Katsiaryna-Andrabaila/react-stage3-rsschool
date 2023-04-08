import React, { useState } from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Item } from './types/types';
import { getItems } from './api/getItems';
import { searchItems } from 'api/searchItems';

const App = () => {
  const [cards, setCards] = useState<Item[]>([]);

  const setDefaultCards = async () => {
    const searchValue = localStorage.getItem('search-key987');
    searchValue ? setCards(await searchItems(searchValue)) : setCards(await getItems());
  };

  setDefaultCards();

  return (
    <div className="App">
      <Header page="main" />
      <Main defaultCards={cards} />
      <Footer />
    </div>
  );
};

export default App;
