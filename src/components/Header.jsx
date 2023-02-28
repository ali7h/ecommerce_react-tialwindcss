import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext';
import {BsBag} from "react-icons/bs"
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

function Header() {

  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext)


    
  const [isActive,setIsActive]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >60 ? setIsActive(true) : setIsActive(false)
    })
  })


  return (
    <>
    <header className={`${isActive? 'bg-white py-4 shadow-md':'bg-none py-6'} z-10 w-full transition-all py-2 fixed`}>
    <div className='flex container mx-auto justify-between h-full items-center lg:px-10'>
    <Link to={'/'}>
      <div>
        <img className='w-[40px]' src={logo} alt="" />
      </div>
    </Link>
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
</div>
    </div>
    </header>

    </>
  )
}

export default Header