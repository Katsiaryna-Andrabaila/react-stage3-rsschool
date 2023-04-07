import React from 'react';
import { BestMovie, FoundMovie } from '../../types/types';
import './Card.css';
import { DEFAULT_IMG } from 'constants/constants';

const Card = (props: FoundMovie | BestMovie) => {
  const { title, image } = props;

  const handleClick = async () => {
    console.log(0);
  };

  return (
    <div className="card" data-testid="test-card" onClick={handleClick}>
      <img src={image || DEFAULT_IMG} className="card-image" alt="movie poster" />
      <h2 className="card-header">{title}</h2>
    </div>
  );
};

export default Card;
