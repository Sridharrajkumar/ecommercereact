


import React from 'react';

import Products from '../component/Products';
import Cart from '../component/Cart';
import Cartprovider from '../Store/Cart-provider';




const Store = (props) => { 
      
  return (
    <>
      <Cartprovider>
        {props.showCart && <Cart hide={props.hide} show={props.show} />}
        <Products setproduct={props.setproduct} />
      </Cartprovider>
      
    </>
      
  )
}

export default Store


