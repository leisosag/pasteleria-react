import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        className='navbar navbar-dark navbar-expand-lg fixed-top'
        style={{ backgroundColor: '#0b0b0b' }}
      >
        <div className='container'>
          <div className='mx-auto'>
            <Link
              className='navbar-brand titulo'
              to={`/`}
              style={{ color: '#fafafa' }}
            >
              <img
                src='/images/logo-white.svg'
                width='25'
                height='25'
                className='d-inline-block align-top mx-2'
                alt='logo'
                loading='lazy'
              />
              Compartir Pastelería
            </Link>
          </div>
          <button
            className='navbar-toggler mr-5'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
            style={{ color: '#fafafa' }}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse pr-5'
            id='navbarNavAltMarkup'
          >
            <div className='navbar-nav ml-auto'>
              <Link className='nav-link mr-2' to={`/products`}>
                <i className='fas fa-birthday-cake mr-1'></i>Productos
              </Link>
              <Link className='nav-link mr-2' to={`/cart`}>
                <i className='fas fa-shopping-cart mr-1'></i>Carrito
              </Link>
              <Link className='nav-link mr-2' to={`/signin`}>
                <i className='fas fa-user mr-1'></i>Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
