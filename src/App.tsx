import React, { useEffect, useState } from 'react';
import './App.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Item } from './types/types';
import { getItems } from './api/getItems';
import { searchItems } from './api/searchItems';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<Item[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const setDefaultCards = async () => {
      const searchValue = localStorage.getItem('search-key987');
      searchValue ? setCards(await searchItems(searchValue)) : setCards(await getItems());
    };

    setDefaultCards();
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <Header page="main" />
      {isLoading ? <Skeleton count={5} width={1000} height={100} /> : <Main defaultCards={cards} />}
      <Footer />
    </div>
  );
};

export default App;
