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

      <ProductsBanner product={'cakes'} titulo={'Tortas'} />
      <ProductsList show={'cakes'} />

      <ProductsBanner product={'cupcakes'} titulo={'Mix de Cupcakes'} />
      <ProductsList show={'cupcakes'} />

      <ProductsBanner product={'cookies'} titulo={'Cookies'} />
      <ProductsList show={'cookies'} />
    </div>
  );
};

export default HomeScreen;
