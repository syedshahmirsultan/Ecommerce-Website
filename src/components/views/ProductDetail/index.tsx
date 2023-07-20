 "use client"
import Image from 'next/image';
import { imagesType, oneProductType } from '@/components/utils/ProductsDataArrayAndType'
import React, { FC, useContext, useState } from 'react'
import { client } from '../../../../sanity/lib/client';
import  ImageUrlBuilder  from '@sanity/image-url'
import { BsCart2 } from 'react-icons/bs';
import ContextWrapper, { cartContext } from '@/global/Context';
import PortableText from 'react-portable-text';
import toast, {Toaster} from 'react-hot-toast'

const builder :any = ImageUrlBuilder(client);

function urlFor(source:any){
  return builder.image(source)
}
const ProductDetail:FC <{item :oneProductType}>= ({item}) => {

 let [state,dispatch] = useContext(cartContext);
 const [imageForPreviewOfSelected ,setImageForPreviewOfSelected] = useState<string>(item.image[0]._key);
 const [quantity,setQuantity] = useState(1);

  
 function incrementTheQuantity(){
    setQuantity(quantity + 1)

  }

 function decrementTheQuantity(){
  if(quantity !== 0){
    setQuantity(quantity - 1); 
  }
   }
   const notification = (title:string) => toast(`${quantity} ${title} added to the Cart`,{
   icon:'👏',
   position:"top-right"
  });


function handleAddToCart(){
let dataToAddInCart ={
  productId:item._id,
  quantity:quantity
}
dispatch({
  payload:"addToCart",
  data:dataToAddInCart
}
  )
  notification(item.productName);
}




  return (
    <div>
      <Toaster/>
    <div className='flex flex-col lg:flex-row justify-center items-center py-7'>
       {/* Left Side */}
      <div className="gap-4 md:gap-8 flex"> 
        <div className="space-y-4">
        {
          item.image.map((item :imagesType,i:number)=>(
            <div key={i} className='w-16 md:w-24' onClick={()=>setImageForPreviewOfSelected(item._key)}>
              <Image src={urlFor(item).width(1000).height(1000).url()} alt={item.alt} width={1000} height={1000}/>

            </div>
          )

          )
        }
        </div>
        

      

      {/* Right Side */}
      <div className="w-[17rem] md:w-[33rem] flex flex-wrap-0">
        { item.image.map((subItem :imagesType,i:number)=>{
          if(subItem._key === imageForPreviewOfSelected){
          return (
      <Image key={i} src={urlFor(subItem).width(1000).height(1000).url()} alt={subItem.alt} width={1000} height={1000}/>
            )}})}
          
            
      </div>
    </div>

    <div className='p-6 space-y-7'>
    <div>
      <h1 className='text-3xl text-gray-700 '>{item.productName}</h1>
      <p className='text-pink-600 text-xl font-medium'>{item.productTypes[1]}</p>
    </div>
    <div className='space-y-2'>
      <p className='text-lg font-semibold text-gray-700'>Select Size</p>
      <div className='flex gap-2 text-pink-600'>
      { item.size.map((subItem:string,i:number)=>(
        <div key={i} className="hover:shallow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">
          {subItem}

       </div>
      ))

      }
      </div>
    </div>
    <div className='flex space-x-7'>
<p className='font-semibold text-xl text-gray-800'>Quantity :</p>
<div className='flex gap-2 items-center text-lg'>
  <div onClick={decrementTheQuantity}
  className=' select-none cursor-pointer flex justify-center items-center w-9 h-9 bg-gray-200 rounded-full'>-</div>
  <p>{quantity}</p>
  <div onClick={incrementTheQuantity}
  className='select-none cursor-pointer flex justify-center items-center w-9 h-9 bg-gray-200 rounded-full border border-gray-800'>
    +
  </div>
</div>

    </div>
    <div className='flex gap-x-8 items-center'>
    <button onClick={()=> handleAddToCart() }
     className='flex items-center space-x-2 text-white bg-gray-900 border border-gray-600 px-4 py-2'>
    <BsCart2/>
    &nbsp;
    &nbsp;
     Add to Cart      </button>
<p className='font-semibold text-2xl'>${item.price}{".00"}</p>
    </div>
      </div> 
</div>
<div>
<div className='relative py-14 px-2 border-b border-gray-400'>
<h2 className='top-0 absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50'>Overview</h2>
<p className='font-semibold text-xl'>Product Information</p>
</div>
<div className='text-gray-600'>
<div className='flex py-4 px-2'>
  <div className='w-80'>
  <h3 className='font-semibold'>PRODUCT DETAILS</h3>
  </div>
  <p>
  <PortableText content={item.description}/>
  </p>
</div>
<div className='flex py-8 px-2'>
  <div className='w-80'>
  <h3 className='font-semibold'>PRODUCT CARE</h3>
  </div>
  <ul className='pl-3 font-bold text-gray-900 list-disc'>
  <li>Hand wash using cold water.</li>
  <li>Do not using bleach.</li>
  <li>Hang it to dry.</li>
  <li>Iron on low temperature.</li>
  </ul>
</div>
</div>
</div>
<div className='h-16'/>
</div>

  )
}

export default ProductDetail


