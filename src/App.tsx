import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header page="main" />
        <Main />
        <Footer />
      </div>
    );
  }
}
