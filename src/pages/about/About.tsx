import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export const About = () => {
  return (
    <div className="about">
      <Header page="about" />
      <h2 className="about-header">About Us</h2>
      <Footer />
    </div>
  );
};
