import React from 'react';
import { FormCard } from '../../types/types';

export default class FormCardComponent extends React.Component<FormCard> {
  render() {
    const { name, picture, gender, birth, hair, feed } = this.props;
    return (
      <div className="form-card">
        <h2 className="form-card-header">{name}</h2>
        <img src={URL.createObjectURL(picture)} className="form-card-image" alt="pet photo" />
        <h4>{gender}</h4>
        <h4>Date of birth: {birth}</h4>
        <h4>Hair: {hair}</h4>
        <h4>Feed: {feed.join(', ')}</h4>
      </div>
    );
  }
}
