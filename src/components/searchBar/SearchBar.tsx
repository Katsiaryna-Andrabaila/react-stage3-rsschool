import React from 'react';
import '../../../src/components/searchBar/SearchBar.css';

export default class SearchBar extends React.Component<Record<string, never>, { value: string }> {
  state = { value: localStorage.getItem('search-key987') || '' };

  componentDidMount() {
    const savedValue = localStorage.getItem('search-key987');
    savedValue && this.setState({ value: savedValue });
    window.addEventListener('beforeunload', this.saveValue);
  }

  componentWillUnmount() {
    this.saveValue();
  }

  saveValue() {
    localStorage.setItem('search-key987', this.state.value);
    window.removeEventListener('beforeunload', this.saveValue);
  }

  render() {
    return (
      <div className="search-wrapper">
        <input
          type="search"
          className="search-bar"
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        />
      </div>
    );
  }
}
