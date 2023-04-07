import React, { useState } from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BestMovie } from './types/types';
import { getItems } from './api/getItems';

const App = () => {
  const [cards, setCards] = useState<BestMovie[]>([]);

  const setDefaultCards = async () => {
    setCards((await getItems()).items);
  };

  setDefaultCards();

  return (
    <div className="App">
      <Header page="main" />
      <Main cards={cards} />
      <Footer />
    </div>
  );
};

export default App;
