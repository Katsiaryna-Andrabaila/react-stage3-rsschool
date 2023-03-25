import React from 'react';
import { FormCard } from '../../types/types';

export default class FormCardComponent extends React.Component<FormCard> {
  render() {
    return (
      <div className="form-card">
        <h2>{this.props.name}</h2>
        <img
          src={URL.createObjectURL(this.props.picture)}
          className="form-card-image"
          alt="pet photo"
        />
        <h4>{this.props.gender}</h4>
        <h4>Date of birth: {this.props.birth}</h4>
        <h4>Hair: {this.props.hair}</h4>
        <h4>Feed: {this.props.feed.join(',')}</h4>
      </div>
    );
  }
}
