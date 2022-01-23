import React from 'react';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/herosection/HeroSection';
import Navbar from '../components/navbar/Navbar'
import Products from '../components/productscarousel/Products';
import TwoDiv from '../components/towdiv/TwoDiv';
const Homepage = () => {
  return(
    <>
      <Navbar />
      <HeroSection />
      <Products />
      <TwoDiv />
      <Footer />
    </>
  )
};

export default Homepage;
