import React from 'react';
import Product from './Product.js';
import products from '../products.js';

const ProductsList = ({ show }) => {
  let someProducts = [];

  if (show === 'cakes') {
    someProducts = products.slice(0, 12);
  }
  if (show === 'cupcakes') {
    someProducts = products.slice(12, 17);
  }
  if (show === 'cookies') {
    someProducts = products.slice(17, 18);
  }

  return (
    <div className='container pb-5' id='products-list'>
      <h2 className='text-center titulo'></h2>
      <div className='row pt-5'>
        {someProducts.map((product) => (
          <div
            className='col-xs-12 col-md-6 col-lg-4 col-xl-3 mb-3'
            key={product._id}
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
