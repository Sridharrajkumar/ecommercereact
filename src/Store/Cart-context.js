import  { createContext } from 'react'

const Cartcontext = createContext({
    products: [],
    TotalAmount: 0,
    addproduct: (product) => {},
    removeproduct: (productname) =>{}
})

export default Cartcontext