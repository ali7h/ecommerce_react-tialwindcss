import React from 'react'
import woman from '../assets/woman_hero.png'
function Hero() {
  return (
    <section className='bg-pink-200 h-[665px] bg-hero bg-no-repeat bg-cover bg-center py-24'>

        <div className="container mx-auto flex justify-around h-full">

            <div className='flex flex-col justify-center'>
                <div className='font-semibold flex items-center uppercase'>
                <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
                NEW TREND
                </div>
            <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH <br /> <span className='font-semibold'>WOMENS</span></h1>
            </div>


            <div>
                <img src={woman} alt="" className='hidden md:block mt-[54px] lg:mt-0 lg:h-[118.5%]' />
            </div>
            </div>
    </section>
    )
}

export default Hero