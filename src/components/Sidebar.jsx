import React, { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";

function Sidebar() {
  const { isOpen, handelClose } = useContext(SidebarContext);
  // console.log(useContext(CartContext));
  const { cart, clearCart, total,itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]
      transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-5 border-b">
        <div className="uppercasetext-sm font-semibold">SHOPPING BAG({itemAmount})</div>
        <div
          onClick={handelClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[370px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-3 mt-2">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 text-white w-12 h-12 flex justify-center items-center text-xl bg-red-500"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'} className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">View cart</Link>
        <Link to={'/'} className="text-white bg-primary flex p-4 justify-center items-center w-full font-medium">Checkout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
