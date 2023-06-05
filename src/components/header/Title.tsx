import React from 'react';

export const Title = (props: { page: string }) => {
  const getTitle = (page: string) => {
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
  };

  return <h1 className="header-title">Current page: {getTitle(props.page)}</h1>;
};
