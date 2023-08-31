


import React, { useState } from 'react';
import './App.css';
import ENav from './component/ENav';
import Products from './component/Products';
import Cart from './component/Cart';
import Cartprovider from './Store/Cart-provider';


function App() {
  const [showCart, setShowCart] = useState(false);
 
  const handleCart = () => {
    setShowCart(true)
  }

  const handleCartClose = () => {
    setShowCart(false)
  }
  
  


  return (
    <Cartprovider>
      {showCart && <Cart hide={handleCartClose} show={handleCart} />}
      <ENav show={handleCart} />
      <Products />
      </Cartprovider>
  );
}

export default App;
