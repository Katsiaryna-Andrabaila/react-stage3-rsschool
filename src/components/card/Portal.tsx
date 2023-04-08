import React from 'react';
import { Item } from '../../types/types';
import { DEFAULT_IMG } from 'constants/constants';

const Portal = (props: { item: Item; closePortal: () => void }) => {
  const {
    title,
    thumbnail,
    image_id,
    date_display,
    date_end,
    artist_display,
    credit_line,
    copyright_notice,
    gallery_title,
    medium_display,
  } = props.item;

  const handleClick = () => {
    props.closePortal();
  };

  return (
    <div className="portal">
      <div className="close-portal" onClick={handleClick}></div>
      <h2>{title}</h2>
      <img
        src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg` || DEFAULT_IMG}
        className="portal-image"
        alt={thumbnail?.alt_text}
      />
      <p>Date of display: {date_display}</p>
      <p>End date: {date_end}</p>
      <p>Artist display: {artist_display}</p>
      <p>Credit line: {credit_line}</p>
      {copyright_notice && <p>Copyright notice: {copyright_notice}</p>}
      {gallery_title && <p>Gallery: {gallery_title}</p>}
      <p>Medium display: {medium_display}</p>
    </div>
  );
};

export default Portal;
