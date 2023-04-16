import React from 'react';
import { DEFAULT_IMG, PORTAL_ERROR } from '../../constants/constants';
import { setIsPortalOpen, useGetItemByIdQuery } from '../../redux/reducers';
import Skeleton from 'react-loading-skeleton';
import { useAppDispatch } from '../../redux/hooks';

const Portal = (props: { id: number }) => {
  const { data: item, isFetching } = useGetItemByIdQuery(props.id);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setIsPortalOpen({ isPortalOpen: false }));
  };

  return isFetching ? (
    <Skeleton className="skeleton_portal" count={5} data-testid="test-skeleton_portal" />
  ) : item ? (
    <div className="portal">
      <div className="close-portal" onClick={handleClick}></div>
      <h2>{item.title}</h2>
      <img
        src={
          item.image_id
            ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
            : DEFAULT_IMG
        }
        className="portal-image"
        alt={item.thumbnail?.alt_text}
      />
      <p>Date of display: {item.date_display}</p>
      <p>End date: {item.date_end}</p>
      <p>Artist display: {item.artist_display}</p>
      <p>Credit line: {item.credit_line}</p>
      {item.copyright_notice && <p>Copyright notice: {item.copyright_notice}</p>}
      {item.gallery_title && <p>Gallery: {item.gallery_title}</p>}
      <p>Medium display: {item.medium_display}</p>
    </div>
  ) : (
    <div className="portal">{PORTAL_ERROR}</div>
  );
};

export default Portal;
