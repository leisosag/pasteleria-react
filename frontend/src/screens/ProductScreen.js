import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar.js';
import { listProductDetails } from '../actions/productActions.js';
//import products from '../products.js';

const ProductScreen = ({ match }) => {
  //const product = products.find((p) => p._id === match.params.id);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <Navbar />
      <div className='container mt-4'>
        <div className='row pt-5 d-flex-flex-columm justify-content-center align-items-center'>
          {loading ? (
            <img src='/images/spinner.svg' alt='spinner' />
          ) : error ? (
            <h2 className='text-center titulo pt-5'>{error}</h2>
          ) : (
            <div className='row container justify-content-center py-5'>
              <div className='col-xs-12 col-lg-6'>
                <div className='row mb-3'>
                  {/* imagenes de costado */}
                  <div className='col-md-3 col-lg-3 d-flex flex-column'>
                    <img
                      src={product.image2}
                      alt=''
                      className='img-fluid mb-3'
                    />
                    <img
                      src={product.image3}
                      alt=''
                      className='img-fluid mb-3'
                    />
                    <img
                      src={product.image4}
                      alt=''
                      className='img-fluid mb-3'
                    />
                  </div>

                  {/* imagen principal */}
                  <div className='col-md-9 col-lg-9 mt-2'>
                    <img src={product.image} alt='' className='img-fluid' />
                  </div>
                </div>
              </div>

              <div className='col-xs-12 col-lg-6'>
                <div className='row'>
                  <div className='col-xs-12 mt-2 d-flex flex-column justify-content-around'>
                    {/* detalles del producto */}
                    <h1 className='titulo-producto pb-3'>{product.name}</h1>
                    <span className='span-precio'>{`$${product.price}`}</span>
                    <p className='descripcion-producto pt-3'>
                      {product.description}
                    </p>
                    {/* tamaños */}
                    {product.size ? (
                      <div className='d-flex flex-column pt-3'>
                        <label className='details-label' for='size'>
                          Diámetro
                        </label>
                        <select
                          id='size'
                          className='form-select form-select-lg p-2'
                          aria-label='.form-select-lg example'
                        >
                          <option selected value={product.size[0]}>
                            {product.size[0]}
                          </option>
                          <option value={product.size[1]}>
                            {product.size[1]}
                          </option>
                          <option value={product.size[1]}>
                            {product.size[2]}
                          </option>
                        </select>
                      </div>
                    ) : null}
                    {/* agregar al carrito  */}
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
                    {/* ingredientes */}
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
                            <div className='card-body'>
                              {product.ingredients}
                            </div>
                          </div>
                        </div>
                        {/* porciones */}
                        {product.portions ? (
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
                                {product.portions.map((porc) => (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
