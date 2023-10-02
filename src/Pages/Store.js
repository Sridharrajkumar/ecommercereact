


import React from 'react';

import Products from '../component/Products';
import Cart from '../component/Cart';




const Store = (props) => {
      
  return (
    <>
        {props.showCart && <Cart hide={props.hide} show={props.show} />}
        <Products setproduct={props.setproduct} />
      
    </>
      
  )
}

export default Store


