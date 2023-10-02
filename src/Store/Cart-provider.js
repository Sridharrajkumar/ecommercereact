import React, {  useEffect, useReducer, useState } from 'react'
import Cartcontext from './Cart-context'

const initialstate = {
    products: [],
    totalAmount: 0,
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
            totalAmount: updateTotalPrice,
            userEmail:state.userEmail
        }
    }


    if (action.type === 'Remove')
    {
        const existingProductIndex = state.products.findIndex(product => product.title === action.productname);
        const existingCartItem = state.products[existingProductIndex]
        const updateTotalAmount = state.totalAmount - existingCartItem.price;
        let updateProduct;
        if (existingCartItem.quantity === 1)
        {
            updateProduct=state.products.filter(product => product.title !== action.productname)
        }
        else
        {
            const updatepro = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            };
            updateProduct = [...state.products];
            updateProduct[existingProductIndex]=updatepro
        }
        return{
            products: updateProduct,
            totalAmount: updateTotalAmount,
            userEmail:state.userEmail
        }
    }
    return initialstate;
}

const Cartprovider = (props) => {

    const [state, dispatch] = useReducer(Reducer, initialstate);
    const [apiMail, setApiMail] = useState();
    

    const apiurl = 'https://react-ecommerce-de2ee-default-rtdb.firebaseio.com/Cart';
    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            let mail = email.replace(/[@.]/g, '');
            setApiMail(mail);
        }
    }, [apiMail]);
    const api = `${apiurl}/${apiMail}.json`;
   
    
    const AddProductToCart = (product) => {
        dispatch({ type: 'Add', product: product })
       
    }

    const RemoveProductFromCart = (productname) => {
        dispatch({ type: 'Remove', productname: productname })
        
    }

    const fetchFun = async() => {
        const response = await fetch(api);
        const data = await response.json();
        let pro = [];
        for (let key in data)
        {
            pro.push({
                title: data[key].title,
                price: data[key].price,
                imageUrl: data[key].imageUrl,
                quantity: data[key].quantity
            });
            
        }
        pro.forEach((item) => {
            dispatch({ type: 'Add', product: item })
        })
    }
    
    useEffect(() => {
        fetchFun();
    },[apiMail])

    

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

