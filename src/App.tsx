import { Main } from './pages/main/Main';
import { useAppSelector } from './redux/hooks';
import { useGetItemsQuery } from './redux/reducers/api';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/404/404';
import { About } from './pages/about/About';
import { FormPage } from './pages/form/FormPage';

export const App = (): JSX.Element | null => {
  const { search } = useAppSelector((state) => state.main);
  const { data: defaultCards } = useGetItemsQuery(search);

  return (
    <Routes>
      <Route path="/" element={<Main defaultCards={defaultCards} />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to={'/404'} replace />} />
    </Routes>
  );
};
