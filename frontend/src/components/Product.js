import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='card border-0 card-overlay'>
      <Link to={`/products/${product._id}`}>
        <img
          src={product.imagen}
          alt={product.titulo}
          className='overlay-img'
        />
        <div className='overlay'>
          <div className='overlay-titulo'>
            <h5>{product.titulo}</h5>
          </div>
          <div className='overlay-precio'>
            <p>{`$${product.precio}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
