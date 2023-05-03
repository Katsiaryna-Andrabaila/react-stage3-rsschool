import { CARD_INFO, SPACE, SPACE_REPEATING } from '../../constants/constants';
import React from 'react';
import { TCard } from 'types/types';
import './Card.css';

export default class Card extends React.Component<TCard> {
  render() {
    return (
      <div className="card" data-testid="test-card">
        <h2>{this.props.title}</h2>
        <img src={this.props.thumbnail} className="card-image" alt="dog photo" />
        <h4>{this.props.description}</h4>
        <p>
          {CARD_INFO.weight}
          {this.props.weigth}
          {SPACE.repeat(SPACE_REPEATING)}
          {CARD_INFO.height}
          {this.props.height}
        </p>
        <p>
          {CARD_INFO.life}
          {this.props.life}
        </p>
        <p>
          {CARD_INFO.country}
          {this.props.country}
        </p>
        <p>
          {CARD_INFO.time}
          {this.props.breedingTime}
        </p>
      </div>
    );
  }
}
