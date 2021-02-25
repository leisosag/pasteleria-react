import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='card border-0 card-overlay'>
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className='overlay-img' />
        <div className='overlay'>
          <div className='overlay-titulo'>
            <h5>{product.name}</h5>
          </div>
          <div className='overlay-precio'>
            <p>{`$${product.price}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
