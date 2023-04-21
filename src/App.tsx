import { useEffect, useState } from 'react';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from './pages/main/Main';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchItems } from './redux/reducers/api';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from 'pages/404/404';
import About from 'pages/about/About';
import FormPage from 'pages/form/FormPage';

const App = (): JSX.Element | null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const { defaultItems } = useAppSelector((state) => state.main);

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => setIsRendered(true), []);

  return !isRendered ? null : (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Main defaultCards={defaultItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={'/404'} replace />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
