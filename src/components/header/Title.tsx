import React from 'react';

export default class Title extends React.Component<{ page: string }> {
  getTitle(page: string) {
    switch (page) {
      case 'main':
        return 'Home';
      case 'about':
        return 'About us';
      case 'form':
        return 'Form';
      default:
        return '404';
    }
  }

  render() {
    return <h1 className="header-title">Current page: {this.getTitle(this.props.page)}</h1>;
  }
}
