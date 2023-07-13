"use client"
import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import { useState } from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link';
import {BiSearch} from 'react-icons/bi';
import {BsCart2} from 'react-icons/bs';
import DropDown from '../SubComponent/DropDown'
import {NavbarArray ,NavbarItemType} from '@/components/utils/NavbarArrayAndTypes'
import Expand from '../SubComponent/Expand'

const Navbar = () => {
  const [isNavbarOpen,setIsNavbarOpen]= useState<boolean>(false);
  const [cartItemNumber,setCartItemNumber] = useState();  return (
    <div className="sticky top-0 backdrop-blur-lg bg-opacityDownColor z-50">
    <div className="py-5 flex justify-between items-center space-x-12">
    <div className='w-36 flex-shrink-0'>
    <Image width={500} height={500} src="/images/Logo.webp" alt="logo"/>
    </div>
  <div className="hidden lg:flex justify-between items-center w-full">
    <ul className="flex font-medium text-lg space-x-4 text-purple-950">
        {NavbarArray.map((item:NavbarItemType,i:number)=>{
            return(
            <li key={i} className='flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group'>
            <Link href={item.href}>
            {item.label}
            </Link>
            {item.isDropDown? <HiOutlineChevronDown size={15} className="mt-1 rotate-180 group-hover:rotate-0 duration-300"/> :""}
            {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 bg-gray-100 px-6 py-2 font-light min-w-[7.8rem]`}>
</div>}
            <DropDown item={item}/>
            </li>
            )
        })}
    </ul>
    <div className="flex items-center border bg-white text-gray-600 px-1 rounded-md"><BiSearch/>
    <input type="text" placeholder='What you looking for' className="focus:outline-none pl-1 pr-5 py-1 w-80 "/>
    </div>
    <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
   <div className="absolute w-4 flex h-4 top-1 right-2 text-xs 
   font-light bg-red-400 justify-center items-center rounded-full">
    {cartItemNumber}
   </div>
    <BsCart2 size={24}/>
    </div>
    </div>
    <div onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
        {
        isNavbarOpen? 
    <div className='flex lg:hidden'>
      <IoMdClose size={29}/>
      </div> 
      :
      <div className='flex lg:hidden'>
    <GiHamburgerMenu size={25}/>
    
    </div>}
    </div>
    </div>
    {
      isNavbarOpen && <MobileNavbar/>
      }
    
    </div>
  )
}

export default Navbar


function MobileNavbar() {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
        {
            NavbarArray.map((item:NavbarItemType,i:number)=>(
                 <Expand key={i} item={item}/>
            ))
        }
        </div>
  )
}