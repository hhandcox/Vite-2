import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            TRVLFNK
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;