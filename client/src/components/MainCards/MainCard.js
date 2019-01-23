import React from 'react';

const MainCard = props => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-img'>
          <img
            className='responsive-img'
            src={props.imgLink}
            alt={props.title}
          />
          <span className='card-title'>{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
