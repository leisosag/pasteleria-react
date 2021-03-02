import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product.js';
import Navbar from '../components/Navbar.js';
import { listProducts } from '../actions/productActions.js';

const AllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  return (
    <div>
      <Navbar />
      <div className='container py-5' id='all-products-list'>
        <h2 className='text-center titulo pt-5'>Todos nuestros productos</h2>
        <div className='row pt-5 d-flex-flex-columm justify-content-center align-items-center'>
          {loading ? (
            <img src='/images/spinner.svg' alt='spinner' />
          ) : error ? (
            <h2 className='text-center titulo pt-5'>{error}</h2>
          ) : (
            <div className='row container'>
              {products.map((product) => (
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
    </div>
  );
};

export default AllProducts;
