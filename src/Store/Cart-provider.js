import React, { useReducer } from 'react'
import Cartcontext from './Cart-context'

const initialstate = {
    products: [],
    totalAmount:0
}

const Reducer = (state, action) => {

    
    
    if (action.type === 'Add')
    {
        
        const existingProductIndex = state.products.findIndex((product) =>
            product.title === action.product.title
        );

        const existingproduct = state.products[existingProductIndex];
        let UpdatedProducts;
        if (existingproduct)
        {
            const updateproduct = {
                ...existingproduct,
                quantity: existingproduct.quantity + action.product.quantity 
            };
            UpdatedProducts = [...state.products];
            UpdatedProducts[existingProductIndex] =updateproduct ;
        }
        else
        {
            UpdatedProducts = state.products.concat(action.product)
        }
         
        
        return {
            products: UpdatedProducts,
            totalAmount:0
        }
    }
    
    
}

const Cartprovider = (props) => {

    const [state, dispatch] = useReducer(Reducer, initialstate)
    
    const AddProductToCart = (product) => {
        dispatch({type:'Add', product:product})
    }

    const cartContext = {
        products: state.products,
        totalAmount: 0,
        addproduct: AddProductToCart,
  }

  return (
      <Cartcontext.Provider value={cartContext}>
          {props.children}
    </Cartcontext.Provider>
  )
}

export default Cartprovider