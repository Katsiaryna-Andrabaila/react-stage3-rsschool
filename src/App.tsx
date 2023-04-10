import React, { useEffect, useState } from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Item } from './types/types';
import { getItems } from './api/getItems';
import { searchItems } from './api/searchItems';

const App = () => {
  const [cards, setCards] = useState<Item[]>([]);

  useEffect(() => {
    const setDefaultCards = async () => {
      const searchValue = localStorage.getItem('search-key987');
      const resultCards = searchValue ? await searchItems(searchValue) : await getItems();
      setCards(resultCards);
    };

    setDefaultCards();
  }, []);

  return (
    <div className="App">
      <Header page="main" />
      <Main defaultCards={cards} />
      <Footer />
    </div>
  );
};

export default App;
