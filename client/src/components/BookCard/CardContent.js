import React from 'react';

const CardContent = props => {
  return (
    <div className='card-content'>
      <h4 className='title'>{props.title}</h4>
      <p>
        Authors: {props.authors}
        <br />
        Synopsis: {props.synopsis}
      </p>
    </div>
  );
};

export default CardContent;
