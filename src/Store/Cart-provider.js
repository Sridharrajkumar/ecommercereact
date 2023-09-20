import React, { useReducer } from 'react'
import Cartcontext from './Cart-context'

const initialstate = {
    products: [],
    totalAmount:0
}

const Reducer = (state, action) => {
    if (action.type === 'Add')
    {

        const updateTotalPrice = state.totalAmount + action.product.price * action.product.quantity;
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
            UpdatedProducts[existingProductIndex] =updateproduct;
        }
        else
        {
            UpdatedProducts = state.products.concat(action.product)
        }
         
        return {
            products: UpdatedProducts,
            totalAmount:updateTotalPrice
        }
    }
    if (action.type === 'Remove')
    {
        console.log(state.products);
    }
}

const Cartprovider = (props) => {

    const [state, dispatch] = useReducer(Reducer, initialstate)
    
    const AddProductToCart = (product) => {
        dispatch({type:'Add', product:product})
    }

    const RemoveProductFromCart = (productname) => {
        dispatch({type:'Remove',productname:productname})
    }

    const cartContext = {
        products: state.products,
        totalAmount: state.totalAmount,
        addproduct: AddProductToCart,
        removeproduct: RemoveProductFromCart
  }

  return (
      <Cartcontext.Provider value={cartContext}>
          {props.children}
    </Cartcontext.Provider>
  )
}

export default Cartprovider