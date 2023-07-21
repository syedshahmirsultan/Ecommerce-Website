"use client"
import React, { FC, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { oneProductType } from '@/components/utils/ProductsDataArrayAndType'
import { client } from '../../../../../sanity/lib/client'




const CartComp  = async({allProductsOfStore } :{allProductsOfStore :Array<oneProductType>}) => {
   const [ allProductsForCart,setAllProductsForCart] = useState<any>();
   useEffect(() => {
    let stateStorage :any = localStorage.getItem("cart") as string;
   stateStorage= JSON.parse(stateStorage);
   if(stateStorage){
    let data = allProductsOfStore.filter((item:oneProductType)=>{
        for (let index = 0; index < stateStorage.length; index++) {
            const element = stateStorage[index];
            if(element.productId === item._id){
             return true
            }
            
        }
    })
    setAllProductsForCart(data);
   }
   }, [])
   
  return (
    <div className='py-10 px:4 md:px-10 '>
    {/* First  */}
    <div className='py-6'>
    <h1 className='text-xl font-semibold text-gray-900'>Shopping Cart</h1>
    </div>

{/* Second */}
<div className='flex flex-col lg:flex-row gap-6'>

  <div className='flex flex-col basis-[69%] gap-2'>
    {
        allProductsForCart.map((item:oneProductType,i:number)=>{
            return( 
    <div key={i}><div className=' flex flex-shrink-0 gap-6'>
                    <div className='w-[14rem]'>
                     {/* <Image className="rounded-xl" src={urlFor(item.image[0]).width(1000).height(1000).url()} alt={item.image[0].alt} width={1000} height={1000}/>  */}
                    </div>
                    <div className='space-y-1 md:space-y-3 w-full'>
                        <div className='flex justify-between'>
                            <h2 className=' md:text-2xl font-light text-gray-700'>{item.productName}</h2>
                            <RiDeleteBin6Line size={28} />
                        </div>
                        <p className='text-gray-800 font-medium'>{item.productTypes[1] ? item.productTypes[1] : "All"}</p>
                        <h3 className='text-sm md:text-base'>Delivery Estimation</h3>
                        <h4 className='text-orange-400 font-semibold md:text-xl'>5 Working Days</h4>
                        <div className='flex justify-between'>
                            <p className='font-semibold md:text-lg'>{"$"}{item.price}</p>
                            <div className='flex gap-2 items-center text-lg'>
                                <div className='select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full bg-gray-200'>-</div>
                                <p>5</p>
                                <div className='select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full border border-gray-800'>+</div>
                            </div>
                        </div>
                    </div>
                </div><div className='flex basis-1/4 space-y-6 px-6'>
                        <h6 className='font-semibold text-xl'>Order Summary</h6>
                        <div className='flex justify-between'>
                            <p className='text-lg font-light'>Quantity</p>
                            <p>3 Products</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-light'>Subtotal :</p>
                            <p>$550</p>
                        </div>
                        <button className='text-white bg-gray-900 border border-gray-600 px-4 py-2 w-full'>Proceed to Checkout</button>
                    </div></div> )})
    }
    
    </div> 

      </div>
    </div>
  )
}

export default CartComp
