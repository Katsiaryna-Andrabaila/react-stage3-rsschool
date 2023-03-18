import React from 'react';
import './Header.css';
import Nav from './Nav';
import Title from './Title';

export default class Header extends React.Component<{ page: string }> {
  render() {
    return (
      <header className="header" data-testid={this.props.page}>
        <Title page={this.props.page} />
        <Nav />
      </header>
    );
  }
}
