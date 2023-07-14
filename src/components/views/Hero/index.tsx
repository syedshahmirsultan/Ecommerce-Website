import React from 'react'
import Image from 'next/image'
import {BsCart2} from 'react-icons/bs';


const Hero = () => {
  return (
    <div className="py-5 flex justify-between items-center px-2">
      {/* Right Side */}
    <div className='space-y-5 max-w-xs'>
    <button aria-label="Redirect user to sales page"
    className="rounded-md bg-primaryWhite text-blue-700 py-2 px-4 font-medium">Sale 70%</button>
    <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">An Industrial Take on Streetwear</h1>
    <p className="">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
    
    <button aria-label="Redirect user to sales page"
     className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 text-white py-3 px-5 font-semibold">
    <BsCart2/>
    
     <p className=' whitespace-pre leading-4'>
            Start <br/> Shopping</p></button>
        <div className='flex gap-4'>
            <div className="w-14 md:w-28">
            <Image width={100} height={100} src="/images/bazaar.webp" alt="Bazaar"/>
            </div>
            <div className="w-14 md:w-28"><Image width={100} height={100} src="/images/bustle.webp" alt="Bustle"/>
            </div>
            <div className="w-14 md:w-28"> <Image width={100} height={100} src="/images/versace.webp" alt="Versace"/>
            </div>
            <div className="w-14 md:w-28"><Image width={100} height={100} src="/images/inStyle.webp" alt="InStyle"/>
            </div>
    </div></div>
    {/* Left Side */}
    <div className="hidden md:flex bg-primaryWhite rounded-full">
    <Image src="/images/hero-poster.webp" alt="image" width={650} height={650}/>
    </div>
    </div>
  )
}

export default Hero