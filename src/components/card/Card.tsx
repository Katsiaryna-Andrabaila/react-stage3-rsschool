import React from 'react';
import { BestMovie, FoundMovie, Movie } from '../../types/types';
import './Card.css';
import { DEFAULT_IMG } from 'constants/constants';
import { getItemById } from 'api/getItemById';

const Card = (props: { card: FoundMovie | BestMovie; openPortal: (movie: Movie) => void }) => {
  const { title, image, id } = props.card;

  const handleClick = async () => {
    const movie = await getItemById(id);
    props.openPortal(movie);
  };

  return (
    <div className="card" data-testid="test-card" onClick={handleClick}>
      <img src={image || DEFAULT_IMG} className="card-image" alt="movie poster" />
      <h2 className="card-header">{title}</h2>
    </div>
  );
};

export default Card;
