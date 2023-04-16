import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { Item } from '../../types/types';
import './Card.css';
import { DEFAULT_IMG } from '../../constants/constants';
import { setIsPortalOpen } from '../../redux/reducers';
import { useAppDispatch } from '../../redux/hooks';

type Props = {
  card: Item;
  openPortal: (id: number) => void;
};

const Card = ({ card, openPortal }: Props) => {
  const { title, thumbnail, id } = card;
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    openPortal(id);
    dispatch(setIsPortalOpen({ isPortalOpen: true }));
  };

  return (
    <div className="card" data-testid="test-card" onClick={handleClick}>
      <img src={thumbnail?.lqip || DEFAULT_IMG} className="card-image" alt={thumbnail?.alt_text} />
      <h2 className="card-header">{title}</h2>
    </div>
  );
};

export default Card;
