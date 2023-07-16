
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
import { useRouter } from 'next/navigation'

const Navbar = () => {
 const router = useRouter();
  const [isNavbarOpen,setIsNavbarOpen]= useState<boolean>(false);
  const [cartItemNumber,setCartItemNumber] = useState(0); 
 const [searchQuery ,setSearchQuery] = useState("");


 function handleSearchCalledFunc(e:any){
  if(e.key === "Enter" && e.keyCode === 13)
router.push(`/search/${searchQuery}`)
 }
   return (
    <div className="sticky top-0 backdrop-blur-lg bg-opacityDownColor z-50">
    <div className="py-5 flex justify-between items-center space-x-12">
   <Link href="/"><div className='w-36 flex-shrink-0'>
    <Image width={500} height={500} src="/images/Logo.webp" alt="logo"/>
    </div></Link>
    <div className="hidden lg:flex justify-between items-center w-full">
  <ul className="flex space-x-4 font-medium text-lg text-purple-950">
    {NavbarArray.map((item: NavbarItemType, index: number) => (
                                <li key={index} className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                                    <Link href={item.href} >{item.label}</Link>
                                    {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                                  {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}>
            <DropDown item={item} />
                                    </div>}
                                </li>
                            ))}
                        </ul>
<div className="border flex items-center bg-white text-gray-600 pl-3 rounded-md" >
  <Link href={`/search/${searchQuery}`}><BiSearch /></Link>
    <input type="text"
    value={searchQuery} 
    onChange={(e)=>setSearchQuery(e.target.value)}
    onKeyDown={handleSearchCalledFunc}
    placeholder='What you looking for ?'
     className="focus:outline-none pl-1 pr-5 py-1 w-80 flex-grow"/>
    </div>
    <div className="flex-shrink-0 relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
   <div className="absolute w-4 flex h-4 top-1 right-2 text-xs 
   font-light bg-[#F02D34] justify-center items-center rounded-full">
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


const MobileNavbar = () => {
  return (
      <div className="w-full px-6 py-4 bg-gray-100">
          {
              NavbarArray.map((item: NavbarItemType, index: number) => {
                  return (
                      <Expand key={index} item={item} />
                  )
              })
          }
      </div>
  )
}