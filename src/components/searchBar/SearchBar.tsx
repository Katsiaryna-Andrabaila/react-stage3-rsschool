import React from 'react';
import './searchBar.css';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <input type="search" className="search-bar"></input>
      </div>
    );
  }
}
