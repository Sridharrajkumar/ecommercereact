


import React, { useState } from 'react';
import './App.css';
import ENav from './component/ENav';
import Products from './component/Products';
import Cart from './component/Cart';


function App() {
  const [showCart, setShowCart] = useState(false);
 
  const handleCart = () => {
    setShowCart(true)
  }

  const handleCartClose = () => {
    setShowCart(false)
  }
  
  


  return (
    <div>
      {showCart && <Cart hide={handleCartClose} show={handleCart} />}
      <ENav show={handleCart} />
      <Products />
    </div>
  );
}

export default App;
