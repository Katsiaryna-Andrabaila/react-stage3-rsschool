import React from 'react';
import './Form.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import FormMain from '../../components/form/FormMain';

export default class FormPage extends React.Component {
  render() {
    return (
      <div className="form">
        <Header page="form" />
        <FormMain />
        <Footer />
      </div>
    );
  }
}
