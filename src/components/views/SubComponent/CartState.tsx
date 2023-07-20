import { cartContext } from '@/global/Context'
import { data } from 'autoprefixer'
import React, { useContext, useEffect, useState } from 'react'
import { BsCart2 } from 'react-icons/bs'

const CartState = () => {
const [quantity,setQuantity] = useState(0)
    const isBrowser = () => typeof window !== undefined;
useEffect(() => {
let data = localStorage.getItem('cart') as string;
setQuantity(JSON.parse(data).lenght)
  },[]
)
if(isBrowser()){
  return( 
    <div>
    <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
   <div className="absolute w-4 flex h-4 top-1 right-2 text-xs 
   font-light bg-[#F02D34] justify-center items-center rounded-full">
    {quantity}
   </div>
    <BsCart2 size={24}/></div></div>)
  
}}

export default CartState; 