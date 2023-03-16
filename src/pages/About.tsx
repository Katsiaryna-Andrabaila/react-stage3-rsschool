import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>About Us</h2>
        <Footer />
      </div>
    );
  }
}
