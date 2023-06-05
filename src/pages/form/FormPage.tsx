import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { FormMain } from '../../components/form/FormMain';

export const FormPage = () => {
  return (
    <div className="form">
      <Header page="form" />
      <FormMain />
      <Footer />
    </div>
  );
};
