
import React, { FC } from 'react'
import { responseType, slugType } from './../../../components/utils/ProductsDataArrayAndType';
import ProductDetail from '@/components/views/ProductDetail';

async function fetchPreviewData(slug :string){
  let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-10/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D&perspective=published`)
  

}


const Catalog :FC<{params :{slug :string}}> = async({params}) => {
 let data : responseType = await fetchPreviewData(params.slug)
  return (
    <div><ProductDetail item={data.result[0]}/></div>
  )
}

export default Catalog