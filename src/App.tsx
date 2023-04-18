import React, { useEffect } from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchItems } from './redux/reducers/api';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const { defaultItems } = useAppSelector((state) => state.main);

  return (
    <div className="App">
      <Header page="main" />
      <Main defaultCards={defaultItems} />
      <Footer />
    </div>
  );
};

export default App;
