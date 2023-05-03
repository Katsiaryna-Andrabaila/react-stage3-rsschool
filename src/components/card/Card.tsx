import { CARD_INFO, SPACE, SPACE_REPEATING } from '../../constants/constants';
import React from 'react';
import { TCard } from '../../types/types';
import './Card.css';

export default class Card extends React.Component<TCard> {
  render() {
    const { title, thumbnail, description, weigth, height, life, country, breedingTime } =
      this.props;
    return (
      <div className="card" data-testid="test-card">
        <h2 className="card-header">{title}</h2>
        <img src={thumbnail} className="card-image" alt="dog photo" />
        <h4>{description}</h4>
        <p>
          {CARD_INFO.weight}
          {weigth}
          {SPACE.repeat(SPACE_REPEATING)}
          {CARD_INFO.height}
          {height}
        </p>
        <p>
          {CARD_INFO.life}
          {life}
        </p>
        <p>
          {CARD_INFO.country}
          {country}
        </p>
        <p>
          {CARD_INFO.time}
          {breedingTime}
        </p>
      </div>
    );
  }
}
