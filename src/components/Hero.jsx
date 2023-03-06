import React, { useContext } from 'react'
import {ProductContext} from '../context/ProductContext'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
function Hero() {
    
    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    const product = products.find(item=>{
        return item.id === 4;
      })
      if(product!=undefined){

        return (
            <section  className='flex bg-gradient-to-r from-purple-700 to-violet-600
                            bg-no-repeat bg-cover bg-center pt-24 pb-16 text-white
                            min-h-screen
                            md:h-screen'>
        
                <div className="w-full mx-auto flex flex-col md:flex-row justify-between text-center items-center">
                    <div className='relative'>
                    <Link to={`/product/4`}>
                        <img src={`http://127.0.0.1:8000${product.image}`} alt="" className='md:hidden w-[220px] my-3' />
                        {/* <div className='absolute top-[15px] w-[70px] h-[70px] text-center bg-white text-primary rounded-full'><h1 className='mt-[22px] text-xl font-semibold'>$75.9</h1></div> */}
                    </Link>
                    </div>
                    <div className='md:w-[55%] md:ml-2 flex flex-col justify-center'>
                        <span className='text-[50px] font-black md:text-[70px] center'>NEW TREND</span> 
                    <h1 className='text-[20px] md:text-[30px] leading-[1.1] font-normal mx-4'>with a light and comfortable design, with high sound quality, noise cancellation for perfect isolation</h1>
                    <div className="btns flex justify-center space-x-7 mt-8">
                        <Link to={`/product/4`}>
                        <button className='text-[17px] p-4 font-semibold border-2 border-white'>READ MORE</button>
                        </Link>
                        <button onClick={()=>addToCart(product,product.id)} className='text-[17px] p-4 font-semibold border-2 border-white bg-white text-primary'>SHOP NOW</button>
                    </div>
                    </div>
        
        
                    <div className='hidden w-[45%] md:flex justify-center items-center' >
                    <Link to={`/product/4`}>
                        <img src={`http://127.0.0.1:8000${product.image}`} alt="" className='md:block w-[300px] lg:w-[440px] mt-[54px]' />
                    </Link>
                    </div>
                    </div>
            </section>
            )
      }




}

export default Hero