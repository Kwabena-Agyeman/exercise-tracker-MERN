import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-5'>
      <div className='container'>
        <Link className='navbar-brand text-muted' to='/'>
          <h1 className='display-6'>Exercise Trax.</h1>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link style={{ fontSize: '20px' }} className='nav-link text-white' aria-current='page' to='/'>
                Exercises
              </Link>
            </li>
            <li className='nav-item'>
              <Link style={{ fontSize: '20px' }} className='nav-link text-white' to='/create-exercise'>
                Create Exercise Log
              </Link>
            </li>
            <li className='nav-item'>
              <Link style={{ fontSize: '20px' }} className='nav-link text-white' href='#'>
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
