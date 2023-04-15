import React from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useAppSelector } from './redux/hooks';
import { useGetItemsQuery } from './redux/reducers';

const App = () => {
  const { search } = useAppSelector((state) => state.search);
  const { data: defaultCards } = useGetItemsQuery(search);

  return (
    <div className="App">
      <Header page="main" />
      <Main defaultCards={defaultCards} />
      <Footer />
    </div>
  );
};

export default App;
