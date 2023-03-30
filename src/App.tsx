import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header page="main" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
