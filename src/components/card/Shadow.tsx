import React from 'react';
import { setIsPortalOpen } from '../../redux/reducers';
import { useAppDispatch } from '../../redux/hooks';

const Shadow = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setIsPortalOpen({ isPortalOpen: false }));
  };

  return <div className="shadow" onClick={handleClick} data-testid="test-shadow"></div>;
};

export default Shadow;
