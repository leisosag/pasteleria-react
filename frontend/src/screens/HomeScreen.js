import React from 'react';
import Navbar from '../components/Navbar.js';
import Header from '../components/Header.js';
import ProductsList from '../components/ProductsList.js';
import ProductsBanner from '../components/ProductsBanner.js';

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <ProductsBanner product={'cakes'} title={'Tortas'} />
      <ProductsList show={'cakes'} />

      <ProductsBanner product={'cupcakes'} title={'Mix de Cupcakes'} />
      <ProductsList show={'cupcakes'} />

      <ProductsBanner product={'cookies'} title={'Cookies'} />
      <ProductsList show={'cookies'} />
    </div>
  );
};

export default HomeScreen;
