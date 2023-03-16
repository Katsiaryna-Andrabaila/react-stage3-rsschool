import React from 'react';

export default class Title extends React.Component<{ page: string }> {
  render() {
    return (
      <h1 className="header-title">
        Current page:{' '}
        {this.props.page === `${'main'}`
          ? `${'Home'}`
          : this.props.page === `${'about'}`
          ? `${'About us'}`
          : `${'404'}`}
      </h1>
    );
  }
}
