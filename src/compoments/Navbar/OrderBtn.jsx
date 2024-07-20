import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

function OrderBtn() {
  return (
    <>
        <button
            className="bg-gradient-to-r from-primary to-secondary text-white text-xl px-4 py-1 rounded-full hover:scale-105 duration-300 sm:hidden flex gap-2 items-center"
        >
            <span>Order</span>
            <FaCartShopping className="text-white drop-shadow-sm cursor-pointer"/>
        </button>
 
    </>
  )
}

export default OrderBtn
