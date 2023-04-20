import React, { useEffect, useState } from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchItems } from './redux/reducers/api';

const App = (): JSX.Element | null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const { defaultItems } = useAppSelector((state) => state.main);

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => setIsRendered(true), []);

  return !isRendered ? null : (
    <div className="App">
      <Header page="main" />
      <Main defaultCards={defaultItems} />
      <Footer />
    </div>
  );
};

export default App;
