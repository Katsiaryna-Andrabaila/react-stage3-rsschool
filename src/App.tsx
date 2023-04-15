import React, { useEffect, useState } from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Item } from './types/types';
import { getItems } from './api/getItems';
import { searchItems } from './api/searchItems';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './redux/hooks';
import { useGetItemsQuery } from './redux/reducers';

const App = () => {
  const { search } = useAppSelector((state) => state.search);
  const { data: defaultCards } = useGetItemsQuery(search);

  /* const [cards, setCards] = useState<Item[]>([]);

  useEffect(() => {
    const setDefaultCards = async () => {
      // const searchValue = localStorage.getItem('search-key987');
      const resultCards = search ? await searchItems(search) : await getItems();
      setCards(resultCards);
    };

    setDefaultCards();
  }, [search]); */

  return (
    <div className="App">
      <Header page="main" />
      <Main defaultCards={defaultCards} />
      <Footer />
    </div>
  );
};

export default App;
