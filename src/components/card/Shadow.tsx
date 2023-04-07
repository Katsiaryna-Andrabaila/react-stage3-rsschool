import React from 'react';

const Shadow = (props: { closePortal: () => void }) => {
  const handleClick = () => {
    props.closePortal();
  };

  return <div className="shadow" onClick={handleClick}></div>;
};

export default Shadow;
