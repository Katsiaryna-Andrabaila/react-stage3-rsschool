import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component<Record<string, never>, { value: string }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    const savedValue = localStorage.getItem('search-key987');
    savedValue && this.setState({ value: savedValue });
  }

  componentWillUnmount() {
    this.saveValue();
  }

  saveValue() {
    localStorage.setItem('search-key987', this.state.value);
  }

  render() {
    return (
      <div className="search-wrapper">
        <input
          type="search"
          className="search-bar"
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        ></input>
      </div>
    );
  }
}
