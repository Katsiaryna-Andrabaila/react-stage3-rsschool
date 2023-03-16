import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header page="about" />
        <h2 className="about-header">About Us</h2>
        <Footer />
      </div>
    );
  }
}
