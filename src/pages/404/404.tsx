import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export const NotFound = () => {
  return (
    <div className="not-found">
      <Header page="not-found" />
      <h2 className="not-found-header">Page not found</h2>
      <Footer />
    </div>
  );
};
