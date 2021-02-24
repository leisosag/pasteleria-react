import React from 'react';

const Header = () => {
  return (
    <header className='pb-5'>
      <section className='header mb-5 ' id='header-portada'>
        <div className='header-photo'>
          <picture>
            <source
              media='(min-width:401px)'
              srcSet='/images/background-big.jpg'
            />
            <source
              media='(max-width:400px)'
              srcSet='/images/background-tall.jpg'
            />
            <img src='/images/background-small.jpg' />
          </picture>
          <div className='header-texto mt-5'>
            <h1 className='text-white'>Compartir Pastelería</h1>
            <p>Tortas y algo más...</p>
            <a href='/'>
              <button className='btn btn-cta btn-color mr-3 mt-3'>
                Ver productos
              </button>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
