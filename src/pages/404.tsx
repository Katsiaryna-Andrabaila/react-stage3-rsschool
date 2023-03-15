import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Page not found</h1>
        <Footer />
      </div>
    );
  }
}
