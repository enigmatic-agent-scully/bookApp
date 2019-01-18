import React from 'react';

const CardImg = props => {
  return (
    <div className='card-image'>
      <a href={props.infoLink}>
        <img src={props.image} alt={props.title} />
      </a>
    </div>
  );
};

export default CardImg;
