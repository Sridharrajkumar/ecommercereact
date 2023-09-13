import { Route,Routes } from 'react-router-dom';

import React,{useState} from 'react';


import About from './Pages/About';
import Store from './Pages/Store';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ENav from './component/ENav';
import Cartprovider from './Store/Cart-provider';
import ProductDetails from './component/ProductDetails';






function App() {
  const [showCart, setShowCart] = useState(false);
  const [product, setproduct] = useState([]);
 
  const handleCart = () => {
    setShowCart(true)
  }
  const handleCartClose = () => {
    setShowCart(false)
  }

  return (
    <div>
      <Cartprovider>
        <ENav show={handleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store hide={handleCartClose} show={handleCart} showCart={showCart} setproduct={setproduct} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store/:producttitle" element={<ProductDetails product={product} />}/>
          
        </Routes>
      </Cartprovider>
    </div>
    
  );
}

export default App;
