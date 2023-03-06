import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

function ProductDetails() {

  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)

  const product = products.find(item=>{
    return item.id === parseInt(id);
  })

  if(!product){
    return 
    <section className='h-screen flex justify-center items-center'>

    </section>
  }

  const {title,price,description,image} = product


  return (
    <section className='h-screen md:h-[82vh] pt-[115px] pb-[20px] md:pt-[150px] md:pb-[80px]  flex items-center '>
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row items-center'>

          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img src={`http://127.0.0.1:8000${image}`} alt="" className='w-[177px] md:w-[250px]'/>
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] lg:text-[37px] font-medium mb-2 mx-auto'>{title}</h1>
            <div className='text-xl text-red-500 font-medium mb-6'>${price}</div>
            <p className='mb-8 text-sm lg:w-3/4 lg:text-lg'>{description}</p>
            <button onClick={()=>addToCart(product,product.id)} className='bg-primary py-4 px-8 text-white '>Add to cart</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductDetails