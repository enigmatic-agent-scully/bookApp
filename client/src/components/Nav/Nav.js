import React from 'react';

const Nav = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo'>
            React Books
          </a>
          <ul className='right'>
            <li>
              <a href='/search'>Search</a>
            </li>
            <li>
              <a href='/saved'>Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
