import React from 'react';
import './search.css';

export default class SearchBar extends React.Component<Record<string, never>, { value: string }> {
  state = { value: localStorage.getItem('search-key987') || '' };

  componentDidMount() {
    const savedValue = localStorage.getItem('search-key987');
    savedValue && this.setState({ value: savedValue });
    window.addEventListener('beforeunload', () => this.saveValue(this.state.value));
  }

  componentWillUnmount() {
    this.saveValue(this.state.value);
  }

  saveValue(value: string) {
    localStorage.setItem('search-key987', value);
  }

  render() {
    return (
      <div className="search-wrapper">
        <input
          type="search"
          className="search-bar"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
            this.saveValue(event.target.value);
          }}
        />
      </div>
    );
  }
}
