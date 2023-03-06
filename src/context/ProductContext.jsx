import React from 'react'
import {createContext,useState,useEffect} from 'react'

export const ProductContext = createContext();

const ProductProvider=({children})=>{

  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts=async()=>{
      const response = await fetch('http://127.0.0.1:8000/Prodects/');
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  },[])

  return(
  <ProductContext.Provider value={{products}}>
    {children}

  </ProductContext.Provider>
  )
};
export default ProductProvider;