import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-light navbar-expand-lg fixed-top'>
        <a className='navbar-brand' href='/'>
          <img
            src='/images/logo.svg'
            width='25'
            height='25'
            className='d-inline-block align-top ml-5 mr-2'
            alt='logo'
            loading='lazy'
          />
          Compartir Pastelería
        </a>
        <button
          className='navbar-toggler mr-5'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse pr-5' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <a className='nav-link' href='/'>
              Tortas
            </a>
            <a className='nav-link' href='/'>
              Cupcakes
            </a>
            <a className='nav-link' href='/'>
              Cookies
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
