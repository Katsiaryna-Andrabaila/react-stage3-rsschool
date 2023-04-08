import React from 'react';
import { FoundItem, Item } from '../../types/types';
import './Card.css';
import { getItemById } from '../../api/getItemById';
import { DEFAULT_IMG } from 'constants/constants';

const Card = (props: { card: FoundItem | Item; openPortal: (item: Item) => void }) => {
  const { title, thumbnail, id } = props.card;

  const handleClick = async () => {
    const item = await getItemById(id);
    props.openPortal(item);
  };

  return (
    <div className="card" data-testid="test-card" onClick={handleClick}>
      <img src={thumbnail?.lqip || DEFAULT_IMG} className="card-image" alt={thumbnail?.alt_text} />
      <h2 className="card-header">{title}</h2>
    </div>
  );
};

export default Card;
