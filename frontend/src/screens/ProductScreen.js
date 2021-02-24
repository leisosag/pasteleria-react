import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products.js';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <div className='container mt-2'>
      <div className='row justify-content-center py-5'>
        <div className='col-xs-12 col-lg-2 d-flex flex-column'>
          <img src={product.imagen2} alt='' className='img-fluid mb-3' />
          <img src={product.imagen3} alt='' className='img-fluid mb-3' />
          <img src={product.imagen4} alt='' className='img-fluid mb-3' />
        </div>

        <div className='col-xs-12 col-lg-6 mt-2'>
          <img src={product.imagen} alt='' className='img-fluid' />
        </div>

        <div className='col-xs-12 col-lg-4 mt-2 d-flex flex-column justify-content-around'>
          <div className='row'>
            <div className='col-xs-12'>
              <h1 className='titulo-producto pb-3'>{product.titulo}</h1>
              <span className='span-precio'>{`$${product.precio}`}</span>
              <p className='descripcion-producto pt-3'>{product.descripcion}</p>

              {product.diametro ? (
                <div className='d-flex flex-column pt-3'>
                  <label className='details-label' for='size'>
                    Diámetro
                  </label>
                  <select
                    id='size'
                    className='form-select form-select-lg p-2'
                    aria-label='.form-select-lg example'
                  >
                    <option selected value={product.diametro[0]}>
                      {product.diametro[0]}
                    </option>
                    <option value={product.diametro[1]}>
                      {product.diametro[1]}
                    </option>
                    <option value={product.diametro[1]}>
                      {product.diametro[2]}
                    </option>
                  </select>
                </div>
              ) : null}

              <div className='row'>
                <div className='col-4'></div>
                <div className='col-8'>
                  <Link to={`/products/${product._id}`}>
                    <button className='btn btn-color btn-block mr-3 mt-3'>
                      Agregar al carrito
                    </button>
                  </Link>
                </div>
              </div>
              <div className='d-flex flex-column pt-3'>
                <div className='accordion' id='accordion'>
                  <div className='card card-accordion'>
                    <div
                      className='card-header d-flex align-items-center justify-content-between'
                      id='headingOne'
                    >
                      <h2 className='mb-0'>
                        <button
                          className='btn btn-link collapsed'
                          type='button'
                          data-toggle='collapse'
                          data-target='#collapseOne'
                          aria-expanded='false'
                          aria-controls='collapseOne'
                        >
                          Ingredientes
                        </button>
                      </h2>
                      <i class='fas fa-sort-down'></i>
                    </div>
                    <div
                      id='collapseOne'
                      className='collapse'
                      aria-labelledby='headingOne'
                      data-parent='#accordion'
                    >
                      <div className='card-body'>{product.ingredientes}</div>
                    </div>
                  </div>

                  {product.porciones ? (
                    <div className='card card-accordion'>
                      <div
                        className='card-header d-flex align-items-center justify-content-between'
                        id='headingTwo'
                      >
                        <h2 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            type='button'
                            data-toggle='collapse'
                            data-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            Porciones
                          </button>
                        </h2>
                        <i class='fas fa-sort-down'></i>
                      </div>
                      <div
                        id='collapseTwo'
                        className='collapse'
                        aria-labelledby='headingTwo'
                        data-parent='#accordion'
                      >
                        <div className='card-body'>
                          {product.porciones.map((porc) => (
                            <p>{porc}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

/*

<select className='form-select' aria-label='Default select example'>
            <option selected>Open this select menu</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>

          <Link to={`/products/${product._id}`}>
            <button className='btn btn-color mr-3 mt-3'>
              Agregar al carrito
            </button>
          </Link>

*/
