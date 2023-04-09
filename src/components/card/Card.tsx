import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FoundItem, Item } from '../../types/types';
import './Card.css';
import { getItemById } from '../../api/getItemById';
import { DEFAULT_IMG } from '../../constants/constants';

const Card = (props: { card: FoundItem | Item; openPortal: (item: Item) => void }) => {
  const { title, thumbnail, id } = props.card;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);

    const item = await getItemById(id);
    props.openPortal(item);

    setIsLoading(false);
  };

  return isLoading ? (
    <Skeleton className="skeleton_portal" count={5} />
  ) : (
    <div className="card" data-testid="test-card" onClick={handleClick}>
      <img src={thumbnail?.lqip || DEFAULT_IMG} className="card-image" alt={thumbnail?.alt_text} />

      <h2 className="card-header">{title}</h2>
    </div>
  );
};

export default Card;
