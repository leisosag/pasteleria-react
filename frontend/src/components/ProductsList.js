import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product.js';
import { listProducts } from '../actions/productActions.js';
//import products from '../products.js';

const ProductsList = ({ show }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  let someProducts = [];

  if (show === 'cakes') {
    someProducts = products.slice(6, 10);
  }
  if (show === 'cupcakes') {
    someProducts = products.slice(12, 16);
  }
  if (show === 'cookies') {
    someProducts = products.slice(17, 18);
  }

  return (
    <div className='container pb-5' id='products-list'>
      <div className='row pt-5 d-flex-flex-columm justify-content-center align-items-center'>
        {loading ? (
          <img src='/images/spinner.svg' alt='spinner' />
        ) : error ? (
          <h2 className='text-center titulo'>{error}</h2>
        ) : (
          <div className='row container pt-5'>
            {someProducts.map((product) => (
              <div
                className='col-xs-12 col-md-6 col-lg-4 col-xl-3 mb-3'
                key={product._id}
              >
                <Product product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
