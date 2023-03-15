import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>About Us</h1>
        <Footer />
      </div>
    );
  }
}
