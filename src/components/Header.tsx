import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </header>
    );
  }
}
