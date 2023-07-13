"use client"
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Link from "next/link"
import { HiOutlineChevronDown} from 'react-icons/hi'
import { FC, useState } from "react"
const Expand :FC<{item :NavbarItemType}> = ({item}) => {
    const [expanded,setExpanded] =useState<boolean>(false);
    const [isTimeout,setIsTimeout] =useState<boolean>(false);

function handleExpand(){
  setExpanded(!expanded);
  setTimeout(()=>{
    setIsTimeout(!isTimeout);
  } ,100);
}


  return (
    

<li className={`${expanded ? "h-56" :"h-12"} duration-300 list-none`}>
<div onClick={()=> {setExpanded(!expanded); setIsTimeout(true)}} className="flex items-center py-2 px-3 rounded-md duration-300 hover:bg-purple-600 justify-between">
  <Link href={item.href}>{item.label}</Link>
{item.isDropDown? <HiOutlineChevronDown size={15} className="mt-1 rotate-180 group-hover:rotate-0 duration-300"/> :""}
</div>
 <div className="flex flex-col mt-2 space-y-1">
     {isTimeout && item.dropDownData?.map((subItem:NavbarItemType ,i:number)=>(         
  <Link key={i} className=" px-5 py-1 rounded-md  hover:bg-gray-50 duration-300" href={subItem.href}>
                   {subItem.label}
 </Link>  ))}</div> </li>
                    
  )
}

export default Expand;