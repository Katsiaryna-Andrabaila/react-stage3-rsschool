import React from 'react';
import { Movie } from '../../types/types';

const Portal = (props: { movie: Movie; closePortal: () => void }) => {
  const {
    title,
    year,
    image,
    actorList,
    companies,
    genres,
    imDbRating,
    languages,
    plot,
    releaseDate,
    wikipedia,
  } = props.movie;

  const handleClick = () => {
    props.closePortal();
  };

  return (
    <div className="portal">
      <img
        src="../../assets/close.svg"
        className="close-portal"
        alt="Close card"
        onClick={handleClick}
      />
      <h2>{title}</h2>
      <img src={image} />
      <p>Year: {year}</p>
      <p>The plot: {plot}</p>
      <p>Company: {companies}</p>
      {actorList && <p>Actors: {actorList.join(',')}</p>}
      <p>Genres: {genres}</p>
      <p>Language: {languages}</p>
      <p>Date of release: {releaseDate}</p>
      <p>IMDB rating: {imDbRating}</p>
      {wikipedia && <a href={wikipedia}>Wiki: {wikipedia}</a>}
    </div>
  );
};

export default Portal;
