import React from 'react'
import Image from 'next/image'
import {RiDeleteBin6Line} from 'react-icons/ri'
import CartComp from '@/components/views/CartParent/cartChild'
import ContextWrapper from '@/global/Context'


async function FetchAllStoreProducts(){
  let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-10/data/query/production?query=*[_type == "product"]`,{
      next:{
          revalidate :60
      }
  })
return res.json()
}

const Cart = async () => {
  let allProductsOfStore = await FetchAllStoreProducts()
  return (
   <div>
    <CartComp allProductsOfStore ={allProductsOfStore.result}/>
    </div>
  )
}

export default Cart