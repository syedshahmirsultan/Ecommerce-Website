import React from 'react'
import Image from "next/image"

const ProductType = () => {
  return (
    <div className="px-2 py-16 space-y-5">
      {/* Heading */}
      <div className='text-center space-y-3'>
        <p className="text-blue-800 text-sm">PROMOTIONS</p>
          <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
      </div>
{/*Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6'>
        {/*First Grid */}
        <div className="flex flex-col items-center justify-between cols-span-1 sm:flex-row w-full md:cols-span-2 bg-cat1 px-12">
          <div className="max-w-[13rem] py-8">
            <h4 className='text-3xl font-extrabold'>GET UP TO 60%</h4>
            <p className='text-xl'>For the summer season</p>
          </div>
          <div className="w-64">
            <Image src="/images/promotionpic.webp" alt="Summer season" width={1000} height={1000}/>
          </div>
        </div>
        {/*Second Grid */}
        <div className="w-full row-span-1 md:row-span-2 h-full flex flex-col items-center bg-cat4">
          {/*text */}
          <div className="p-4">
          <p>Flex Sweatshirt</p>
          <p className='text-lg'><del>$100.00</del>
          &nbsp;&nbsp;&nbsp;
          <b><ins>$75.00</ins>
          </b></p>
          </div>
          <div className="w-64">
          <Image src="/images/promotionpic1.webp" alt="Sweaters" width={1000} height={1000}/>
          </div>
        </div>
        {/*Third Grid */}
        <div className="w-full row-span-1 flex flex-col items-center md:row-span-2 h-full bg-cat3">
           {/*text */}
           <div className="p-4 text-lg">
          <p>Flex Push Button Bomber</p>
          <p><del>$225.00</del>
          &nbsp;&nbsp;&nbsp;
          <b><ins>$190.00</ins>
          </b></p>
          </div>
          <div className="w-64">
          <Image src="/images/promotionpic2.webp" alt="Sweaters" width={1000} height={1000}/>
          </div>
        </div>
        </div>
        {/*Fourth Grid */}
        <div className="py-9 w-full col-auto md:col-span-2  bg-cat2 flex flex-col justify-center items-center text-white space-y-3">
          <h3 className='font-extrabold text-4xl'>GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button aria-label='Redirect User to Dine Weekend Sale'
           className="py-1 px-8 bg-[#474747] rounded-lg tracking-widest text-lg font-medium">DINEWEEKENDSALE</button>
        </div>
      </div>  
  )
}

export default ProductType