import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose,IoMdAdd,IoMdRemove} from "react-icons/io";
import { CartContext } from '../context/CartContext';


function CartItem({item}) {
  const { removeFromCart } = useContext(CartContext)
  const { increaseAmount } = useContext(CartContext)
  const { decreaseAmount } = useContext(CartContext)

  const {id,title,image,price,amount}=item
  return (
    <>
    <div className='flex gap-x-4py-2 lg:px-6 border-b border-gray-200 w-full text-gray-500 font-light'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={`http://127.0.0.1:8000${image}`} alt="" />
        </Link>
        <div className='flex flex-col w-full'>
            <div className='flex justify-between mb-2'>
              <Link className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' 
              to={`/product/${id}`}>{title}
              </Link>
              <div className='text-xl cursor-pointer'>
              <IoMdClose onClick={()=>removeFromCart(id)} className='text-gray-500 hover:text-red-500 transition'/>
            </div>
            </div>
            <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdRemove onClick={()=>decreaseAmount(id)}/>
              </div>
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>

              <div onClick={()=>increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdAdd/>
              </div>

              </div>
            <div className = 'flex-1 flex items-center justify-around'>${price}</div>
            <div className='flex-1 flex justify-center items-center text-primary font-medium'>{`$${parseFloat(price *amount).toFixed(2)}`}</div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartItem