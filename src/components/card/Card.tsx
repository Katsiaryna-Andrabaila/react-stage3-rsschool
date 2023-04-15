import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Item } from '../../types/types';
import './Card.css';
import { DEFAULT_IMG } from '../../constants/constants';
import { useGetItemByIdQuery } from 'redux/reducers';

const Card = (props: { card: Item; openPortal: (item: Item) => void }) => {
  const { title, thumbnail, id } = props.card;

  const { data: item, isFetching } = useGetItemByIdQuery(id);

  const handleClick = async () => {
    item && props.openPortal(item);
  };

  return isFetching ? (
    <Skeleton className="skeleton_portal" count={5} />
  ) : (
    <div className="card" data-testid="test-card" onClick={handleClick}>
      <img src={thumbnail?.lqip || DEFAULT_IMG} className="card-image" alt={thumbnail?.alt_text} />

      <h2 className="card-header">{title}</h2>
    </div>
  );
};

export default Card;
