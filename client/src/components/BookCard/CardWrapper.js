import React from 'react';

const CardWrapper = props => {
  return (
    <div className='col 12'>
      <div className='card horizontal'>{props.children}</div>
    </div>
  );
};

export default CardWrapper;
