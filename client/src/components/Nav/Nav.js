import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

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
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/saved'>Saved</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
