import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Form.css';

export default class Form extends React.Component {
  render() {
    return (
      <div className="about">
        <Header page="form" />
        <h2 className="about-header">Form</h2>
        <Footer />
      </div>
    );
  }
}
