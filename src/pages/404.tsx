import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './404.css';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <Header page="" />
        <h2 className="not-found-header">Page not found</h2>
        <Footer />
      </div>
    );
  }
}
