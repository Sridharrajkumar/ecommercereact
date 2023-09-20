import { Route,Routes } from 'react-router-dom';

import React,{useContext, useState} from 'react';


import About from './Pages/About';
import Store from './Pages/Store';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ENav from './component/ENav';
import ProductDetails from './component/ProductDetails';
import LogIn from './component/Login/LogIn';
import AuthContext from './Store/Auth-Context';






function App() {
  const [showCart, setShowCart] = useState(false);
  const [product, setproduct] = useState([]);

  const authcxt = useContext(AuthContext);
 
  const handleCart = () => {
    setShowCart(true)
  }
  const handleCartClose = () => {
    setShowCart(false)
  }

  return (
    <div>
        <ENav show={handleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         {authcxt.islogged && <Route path="/store" element={ <Store hide={handleCartClose} show={handleCart} showCart={showCart} setproduct={setproduct} />} />}
          <Route path="/contact" element={<Contact />} />
          {authcxt.islogged && <Route path="/store/:producttitle" element={<ProductDetails product={product} />} />}
          {!authcxt.islogged && <Route path="/login" element={<LogIn />} />}
          <Route path='*' element={<LogIn />} />
        </Routes>
    </div>
    
  );
}

export default App;
