import React from 'react'

const NewsLetter = () => {
  return (
    <div className="text-center space-y-4 h-[80vh] flex flex-col items-center">
    <h6 className='absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 '>NewsLetter</h6>
    <h6 className='text-3xl md:text-4xl font-bold text-gray-800'>Subscribe Our Newsletter</h6>
    <p className='max-w-[16rem] text-lg font-medium'>Get the latest information and promo offers directly</p>
   <div className="flex gap-x-4 flex-wrap items-center justify-center"> 
   <input type="text" placeholder='Input email address' className="border border-gray-600 px-2 md:px-4 py-1 flex flex-grow w-50 md:w-80"/></div>
    <button className='text-white bg-gray-900 border border-gray-600 px-4 py-2'>Get Started</button>
    </div>
  )
}

export default NewsLetter