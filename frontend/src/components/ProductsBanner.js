import React from 'react';

const ProductsBanner = ({ product, titulo }) => {
  return (
    <section className='my-3' id={`${product}-portada`}>
      <div className='banner-photo'>
        <picture>
          <source
            media='(min-width:401px)'
            srcSet={`/images/${product}-big.jpg`}
          />
          <img src={`/images/${product}-small.jpg`} />
        </picture>
        <div className='banner-texto text-center mt-5'>
          <h1 className='text-white titulo'>{titulo}</h1>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
