import React from 'react';

const Header = props => {
  return (
    <div className='card-panel'>
      <div className='container'>
        <h1>{props.header}</h1>
      </div>
    </div>
  );
};

export default Header;
