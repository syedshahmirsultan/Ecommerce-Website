"use client"
import React, { FC } from 'react'
import Image from 'next/image'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import  ImageUrlBuilder  from '@sanity/image-url'
import { client } from '../../../sanity/lib/client';
import Link from 'next/link';

const builder=ImageUrlBuilder(client);

function urlFor(source:any){
  return builder.image(source)
}
const Card :FC<{singleProductData :oneProductType}> = ({singleProductData}) => {
  return (
    <Link href={`/catalog/${singleProductData.slug.current}`}>
    <div className=" max-w-sm min-w-[24rem] space-y-3 hover:scale-110 duration-300">
        <div className="relative w-full">
          <div className="absolute inset-0 z-10"/>
      <Image src={ urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt} width={1000} height={1000} />    
       </div>
        <div className="space-y-1 text-gray-600 font-semibold text-lg select-none">
        <h6>{singleProductData.productName}</h6>
        <p>
        </p>
        <p>${singleProductData.price}</p>
        </div>
    </div></Link>
  )
}

export default Card