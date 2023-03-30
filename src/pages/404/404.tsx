import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './404.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <Header page="not-found" />
      <h2 className="not-found-header">Page not found</h2>
      <Footer />
    </div>
  );
};

export default NotFound;
