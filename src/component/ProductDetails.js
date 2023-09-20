


import React from 'react'

import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {

  const params = useParams();
  console.log(props.product);

  return (
    <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center' ,gap:20 }}>
      <img src={props.product.imageUrl} alt={params.producttitle} />
      <div>
        <h3>{params.producttitle}</h3>
        <h5>price: {props.product.price}</h5>
      </div>
    </div>
  )
}

export default ProductDetails







