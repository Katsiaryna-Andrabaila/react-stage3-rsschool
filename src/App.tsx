import { useEffect, useState } from 'react';
import Main from './pages/main/Main';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchItems } from './redux/reducers/api';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404/404';
import About from './pages/about/About';
import FormPage from './pages/form/FormPage';

const App = (): JSX.Element | null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const { defaultItems } = useAppSelector((state) => state.main);

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => setIsRendered(true), []);

  return !isRendered ? null : (
    <Routes>
      <Route path="/" element={<Main defaultCards={defaultItems} />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to={'/404'} replace />} />
    </Routes>
  );
};

export default App;
