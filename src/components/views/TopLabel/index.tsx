"use client"
import ContextWrapper from '@/global/Context'
import SubComp from './comp/SubComp'
import Image from 'next/image'

const TopLabel = () => {
  return (
    <ContextWrapper>
    <div className=' overflow-hidden border-b bg-gray-800 text-gray-100'>
        <div className='px-4 max-w-7xl mx-auto flex justify-between items-center'>
        <div>
        <p><Image src="https://readme-typing-svg.demolab.com?font=Maven_Pro&weight=200&size=19&pause=1000&vCenter=true&width=435&lines=SignUp+to+get+big+deals;SignUp+to+understand+our+policies;Nice+to+see+you+here;Here+to+provide+you+with+best+services;Find+variety+of+different+products" alt="Typing SVG" /></p> 
        </div>
       <SubComp/>
    </div></div></ContextWrapper>
  )
}

export default TopLabel