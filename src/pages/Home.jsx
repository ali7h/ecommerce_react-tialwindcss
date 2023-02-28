import React, { useContext } from 'react'
import {createContext,useState,useEffect} from 'react'
import { ProductContext } from '../context/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero'

function Home() {
    const {products} = useContext(ProductContext)
    console.log(products)
    
    const filterproducts = products.filter((item) => {
        return (
        item.category === "men's clothing" || item.category === "women's clothing")})
        console.log(filterproducts)


    return (
    <>
    <Hero/>
        <section className='py-16'>
            <div className="container px-3 mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-auto md:mx-0 max-w-sm md:max-w-none'>
                    {filterproducts.map(prod =>{
                        return <Product product={prod} key={prod.id}/>
                    })}
                </div>
            </div>
        </section>
    </>
    )
}

export default Home