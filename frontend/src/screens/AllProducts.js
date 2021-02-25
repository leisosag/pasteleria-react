import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product.js';
import Navbar from '../components/Navbar.js';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container py-5' id='all-products-list'>
        <h2 className='text-center titulo pt-5'>Todos nuestros productos</h2>
        <div className='row pt-5'>
          {products.map((product) => (
            <div
              className='col-xs-12 col-md-6 col-lg-4 col-xl-3 mb-3'
              key={product._id}
            >
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

/* 

 




*/
