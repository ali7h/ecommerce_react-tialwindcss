import React from 'react'
import {createContext,useState,useEffect} from 'react'

export const CartContext = createContext();

const CartProvider=({children})=>{

  const [cart,setCart] = useState([])

  const [itemAmount ,setItemAmount] = useState(0);

  const addToCart = (product,id) => {
    const newItem= {...product,amount:1}
    const cartItem=cart.find(item=>{return item.id===id})

    if(cartItem){
        const newCart=[...cart].map(item=>{
            if(item.id===id){
                return {...item,amount:cartItem.amount+1}
            }
            else{
                return item;
            }
        })
        setCart(newCart)
    }
    else{
        setCart([...cart,newItem])
    }
}

const removeFromCart=(id)=>{
  const newCart=cart.filter(item=>{
    return item.id !==id;
  })
  setCart(newCart)
}

const clearCart=()=>{
  setCart([]);
}

const increaseAmount=(id)=>{
  const item=cart.find(item=>item.id===id)
  addToCart(item,id)
}

const decreaseAmount=(id)=>{
  const cartIem=cart.find(item=>{
    return item.id===id;
  })
  if(cartIem){
    const newCart=cart.map(item=>{
      if(item.id===id){
        return {...item,amount:cartIem.amount-1}
      }
      else{
        returnitem;
      }
    })
    setCart(newCart)
  }
    if(cartIem.amount < 2){
      removeFromCart(id);
    }
}

const [total,setTotal]=useState(0);
useEffect(()=>{
  const total=cart.reduce((acc,current)=>{
    return acc+current.price*current.amount;
  },0)
  setTotal(total)
})

useEffect(()=>{
  if(cart){
    const amount=cart.reduce((acc,current)=>{
      return acc+current.amount
    },0)
    setItemAmount(amount);
  }
},[cart])


  return(
  <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,total}}>
    {children}

  </CartContext.Provider>
  )
};
export default CartProvider;