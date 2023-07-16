import React from 'react'
import { FC } from 'react';
import { oneProductType, responseType } from '@/components/utils/ProductsDataArrayAndType';
import Card from '@/components/views/Card';


async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-10/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+productTypes%5B0%5D+%3D%3D+%22Female%22%5D&perspective=published`, {
    next: {
      revalidate: 60
    }
  });
if (!res.ok){
  throw new Error("Fetch failed")
}
return res.json();

}

const  Female = async ( { params } : { params:{ ftype : string } } ) => {
  let res :responseType = await fetchAllProductsData();
 
   if(params.ftype ==="Female"){
    let originalSortedDataOfParams = res.result.filter((items :oneProductType)=> items.productTypes[0] === params.ftype)
     res ={result :originalSortedDataOfParams };
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4">
      {res.result.map((items:oneProductType,i:number)=>(
        <Card key={i} singleProductData={items}/>
      )) }
    </div>
  )
}

export default Female