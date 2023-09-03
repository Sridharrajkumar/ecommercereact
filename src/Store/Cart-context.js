import  { createContext } from 'react'

const Cartcontext = createContext({
    products: [],
    TotalAmount: 0,
    addproduct: (product) =>{}
})

export default Cartcontext