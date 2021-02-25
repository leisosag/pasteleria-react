import React from 'react';

const ProductsBanner = ({ product, title }) => {
  return (
    <section className='my-3' id={`${product}-portada`}>
      <div className='banner-photo'>
        <a href='/products'>
          <picture>
            <source
              media='(min-width:401px)'
              srcSet={`/images/${product}-big.jpg`}
              alt='banner'
            />
            <img src={`/images/${product}-small.jpg`} alt='banner' />
          </picture>
          <div className='banner-texto d-flex flex-column align-items-center justify-content-center mt-5'>
            <h1 className='text-white titulo mt-5'>{title}</h1>
            <p className='mt-2'>Ver más</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProductsBanner;
