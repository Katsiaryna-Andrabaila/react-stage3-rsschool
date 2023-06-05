import { Item } from '../../types/types';
import { DEFAULT_IMG } from '../../constants/constants';
import { setIsPortalOpen } from '../../redux/reducers/mainReducer';
import { useAppDispatch } from '../../redux/hooks';

type Props = {
  card: Item;
  openPortal: (id: number) => void;
};

export const Card = ({ card, openPortal }: Props) => {
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
